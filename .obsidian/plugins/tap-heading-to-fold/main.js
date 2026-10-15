const { Plugin, Notice } = require('obsidian');

module.exports = class TapHeadingToFoldPlugin extends Plugin {
  onload() {
    this.registerDomEvent(document, 'click', (event) => {
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      // Preserve normal behavior for links, controls, markers, and native fold arrows.
      if (target.closest(
        'a, button, input, textarea, select, [role="button"], ' +
        '.cm-fold-indicator, .heading-collapse-indicator, .cm-formatting-header, .cm-widgetBuffer'
      )) return;

      // READING VIEW: when the tap is on a rendered heading, invoke Obsidian's
      // own heading-collapse indicator. The indicator is part of Obsidian's
      // rendered Markdown DOM and performs the native section-fold operation.
      const previewHeading = target.closest(
        '.markdown-preview-view :is(h1, h2, h3, h4, h5, h6)'
      );
      if (previewHeading) {
        const previewRoot = previewHeading.closest('.markdown-preview-view');
        if (!previewRoot) return;

        const indicator =
          previewHeading.querySelector('.heading-collapse-indicator') ||
          previewHeading.querySelector('.collapse-indicator') ||
          previewHeading.parentElement?.querySelector(':scope > .heading-collapse-indicator');

        if (indicator instanceof HTMLElement) {
          event.preventDefault();
          event.stopPropagation();
          indicator.click();
        }
        return;
      }

      // LIVE PREVIEW: work from the editor line, not a heading-specific class
      // that can vary with Obsidian versions, mobile layouts, or themes.
      const editorLine = target.closest('.cm-line');
      if (!editorLine) return;

      const sourceView = editorLine.closest('.markdown-source-view.mod-cm6');
      if (!sourceView) return; // Ignore Reading view.

      const leaf = this.app.workspace.getLeavesOfType('markdown').find((candidate) => {
        const view = candidate.view;
        return !!(view && view.containerEl && view.containerEl.contains(editorLine));
      });

      if (!leaf) {
        // Diagnostic: this only appears when tapping inside the editor.
        new Notice('Tap Heading to Fold: could not identify this editor pane.');
        return;
      }

      const editor = leaf.view.editor;
      const cm = editor && editor.cm;
      if (!editor || !cm || !cm.state || !cm.state.doc) {
        new Notice('Tap Heading to Fold: editor API unavailable. Reload the plugin.');
        return;
      }

      // Map the tap to the document using coordinates; fall back to the clicked
      // element, then the containing line. This is more resilient on touch devices.
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

      // Toggle native folding for the heading that was tapped.
      editor.setCursor({ line: line.number - 1, ch: 0 });
      event.preventDefault();
      event.stopPropagation();
      editor.exec('toggleFold');
    }, true);
  }
};
