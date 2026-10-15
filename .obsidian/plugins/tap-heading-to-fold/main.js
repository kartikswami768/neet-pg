const { Plugin, Notice } = require('obsidian');

const MAX_TAP_DURATION_MS = 400;
const MOVE_TOLERANCE_PX = 12;
const FOLD_DELAY_MS = 350;
const DOUBLE_TAP_RADIUS_PX = 30;
const CLICK_AFTER_POINTERUP_MS = 1000;

module.exports = class TapHeadingToFoldPlugin extends Plugin {
  onload() {
    this.pointerStart = null;
    this.lastPointerGesture = null;
    this.pendingFoldActions = [];
    this.suppressNextTap = false;

    this.register(() => {
      for (const action of this.pendingFoldActions) window.clearTimeout(action.timer);
      this.pendingFoldActions = [];
    });

    // Record touch/mouse/stylus gestures so selection clicks are not mistaken for taps.
    this.registerDomEvent(document, 'pointerdown', (event) => {
      if (event.button !== 0 || event.isPrimary === false) return;

      const now = Date.now();
      const doubleTapIndex = this.pendingFoldActions.findIndex((action) => {
        const age = now - action.scheduledAt;
        const dx = event.clientX - action.x;
        const dy = event.clientY - action.y;
        return age >= 0 && age <= FOLD_DELAY_MS &&
          dx * dx + dy * dy <= DOUBLE_TAP_RADIUS_PX * DOUBLE_TAP_RADIUS_PX;
      });

      // Delay folding slightly. A second nearby tap is likely a double-tap selection gesture.
      if (doubleTapIndex !== -1) {
        const [pending] = this.pendingFoldActions.splice(doubleTapIndex, 1);
        window.clearTimeout(pending.timer);
        this.suppressNextTap = true;
      }

      this.pointerStart = {
        pointerId: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        startedAt: now,
        moved: false
      };
      this.lastPointerGesture = null;
    }, true);

    this.registerDomEvent(document, 'pointermove', (event) => {
      const start = this.pointerStart;
      if (!start || event.pointerId !== start.pointerId) return;

      const dx = event.clientX - start.x;
      const dy = event.clientY - start.y;
      if (dx * dx + dy * dy > MOVE_TOLERANCE_PX * MOVE_TOLERANCE_PX) {
        start.moved = true;
      }
    }, true);

    this.registerDomEvent(document, 'pointerup', (event) => {
      const start = this.pointerStart;
      if (!start || event.pointerId !== start.pointerId) return;

      const endedAt = Date.now();
      const duration = endedAt - start.startedAt;
      const validTap = !start.moved && duration <= MAX_TAP_DURATION_MS && !this.suppressNextTap;

      this.lastPointerGesture = {
        valid: validTap,
        endedAt,
        x: event.clientX,
        y: event.clientY
      };
      this.pointerStart = null;
      this.suppressNextTap = false;
    }, true);

    this.registerDomEvent(document, 'pointercancel', (event) => {
      const start = this.pointerStart;
      if (start && event.pointerId === start.pointerId) {
        this.pointerStart = null;
        this.lastPointerGesture = { valid: false, endedAt: Date.now() };
        this.suppressNextTap = false;
      }
    }, true);

    this.registerDomEvent(document, 'click', (event) => {
      if (event.defaultPrevented || event.button !== 0) return;

      // Only handle a brief pointer tap. Ignore long presses, drags, and programmatic clicks.
      const gesture = this.lastPointerGesture;
      this.lastPointerGesture = null;
      if (!gesture || !gesture.valid || Date.now() - gesture.endedAt > CLICK_AFTER_POINTERUP_MS) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      // Preserve links, controls, formatting markers, and native fold arrows.
      if (target.closest(
        'a, button, input, textarea, select, [role="button"], ' +
        '.cm-fold-indicator, .heading-collapse-indicator, .cm-formatting-header, .cm-widgetBuffer'
      )) return;

      if (this.hasBrowserTextSelection()) return;

      // READING VIEW: use Obsidian's native rendered-heading collapse control.
      const previewHeading = target.closest(
        '.markdown-preview-view :is(h1, h2, h3, h4, h5, h6)'
      );
      if (previewHeading) {
        const indicator = this.findReadingViewIndicator(previewHeading);
        if (!(indicator instanceof HTMLElement)) return;

        this.queueFoldAction(event, () => {
          if (!previewHeading.isConnected || this.hasBrowserTextSelection()) return;
          const freshIndicator = this.findReadingViewIndicator(previewHeading);
          if (freshIndicator instanceof HTMLElement) freshIndicator.click();
        });
        return;
      }

      // LIVE PREVIEW: map the tapped editor line to the underlying Markdown text.
      const editorLine = target.closest('.cm-line');
      if (!editorLine) return;

      const sourceView = editorLine.closest('.markdown-source-view.mod-cm6');
      if (!sourceView) return;

      const leaf = this.app.workspace.getLeavesOfType('markdown').find((candidate) => {
        const view = candidate.view;
        return !!(view && view.containerEl && view.containerEl.contains(editorLine));
      });

      if (!leaf) {
        new Notice('Tap Heading to Fold: could not identify this editor pane.');
        return;
      }

      const editor = leaf.view.editor;
      const cm = editor && editor.cm;
      if (!editor || !cm || !cm.state || !cm.state.doc) {
        new Notice('Tap Heading to Fold: editor API unavailable. Reload the plugin.');
        return;
      }

      // CodeMirror keeps its own selection model in Live Preview.
      if (this.hasCodeMirrorTextSelection(cm)) return;

      let position = null;
      if (typeof cm.posAtCoords === 'function') {
        try {
          position = cm.posAtCoords({ x: event.clientX, y: event.clientY });
        } catch (_) {}
      }
      if (position == null && typeof cm.posAtDOM === 'function') {
        for (const node of [target, editorLine]) {
          try {
            position = cm.posAtDOM(node);
          } catch (_) {
            position = null;
          }
          if (position != null) break;
        }
      }
      if (position == null) {
        new Notice('Tap Heading to Fold: could not map tap to editor text.');
        return;
      }

      const line = cm.state.doc.lineAt(position);
      if (!/^ {0,3}#{1,6}(?:\\s|$)/.test(line.text)) return;
      const headingLineNumber = line.number - 1;

      this.queueFoldAction(event, () => {
        if (!editorLine.isConnected || !sourceView.isConnected || this.hasBrowserTextSelection()) return;
        const currentCm = editor.cm;
        if (!currentCm || !currentCm.state || !currentCm.state.doc ||
            this.hasCodeMirrorTextSelection(currentCm)) return;
        if (headingLineNumber < 0 || headingLineNumber >= currentCm.state.doc.lines) return;

        const currentLine = currentCm.state.doc.line(headingLineNumber + 1);
        if (!/^ {0,3}#{1,6}(?:\\s|$)/.test(currentLine.text)) return;

        editor.setCursor({ line: headingLineNumber, ch: 0 });
        editor.exec('toggleFold');
      });
    }, true);
  }

  hasBrowserTextSelection() {
    const selection = window.getSelection();
    return !!(selection && !selection.isCollapsed && selection.toString().length > 0);
  }

  hasCodeMirrorTextSelection(cm) {
    const selection = cm && cm.state && cm.state.selection;
    return !!(selection && selection.ranges && selection.ranges.some((range) => !range.empty));
  }

  findReadingViewIndicator(heading) {
    return heading.querySelector('.heading-collapse-indicator') ||
      heading.querySelector('.collapse-indicator') ||
      heading.parentElement?.querySelector(':scope > .heading-collapse-indicator') ||
      null;
  }

  queueFoldAction(event, run) {
    const action = {
      scheduledAt: Date.now(),
      x: event.clientX,
      y: event.clientY,
      timer: null
    };
    action.timer = window.setTimeout(() => {
      const index = this.pendingFoldActions.indexOf(action);
      if (index !== -1) this.pendingFoldActions.splice(index, 1);
      run();
    }, FOLD_DELAY_MS);
    this.pendingFoldActions.push(action);
  }
};
