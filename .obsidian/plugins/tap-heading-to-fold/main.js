const { Plugin, Notice } = require('obsidian');

module.exports = class TapHeadingToFoldPlugin extends Plugin {
  onload() {
    this.registerDomEvent(document, 'click', (event) => {
      // Touch taps on iOS/Android are delivered as click events with button 0.
      if (event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      // Do not interfere with links, controls, Markdown markers, or the native fold arrow.
      if (target.closest(
        'a, button, input, textarea, select, [role="button"], ' +
        '.cm-fold-indicator, .cm-formatting-header, .cm-widgetBuffer'
      )) return;

      // Do not require the is-live-preview class here: mobile/version/theme DOM
      // class placement can vary. A HyperMD header inside the CM6 source editor
      // is enough to identify the editing heading and excludes Reading view.
      const headingLine = target.closest('.cm-line.HyperMD-header');
      if (!headingLine) return;

      const sourceView = headingLine.closest('.markdown-source-view.mod-cm6');
      if (!sourceView) return;

      // Match the exact Markdown leaf containing the tapped line.
      const leaf = this.app.workspace.getLeavesOfType('markdown').find((candidate) => {
        const view = candidate.view;
        return !!(view && view.containerEl && view.containerEl.contains(headingLine));
      });

      if (!leaf) {
        new Notice('Tap Heading to Fold: could not identify the editor for this heading.');
        return;
      }

      const editor = leaf.view.editor;
      const cm = editor && editor.cm;
      if (!editor || !cm || !cm.state || !cm.state.doc) {
        new Notice('Tap Heading to Fold: editor API unavailable. Try reloading the plugin.');
        return;
      }

      // Resolve the tapped position, with a DOM-based fallback for mobile.
      let position = null;
      if (typeof cm.posAtCoords === 'function') {
        try {
          position = cm.posAtCoords({ x: event.clientX, y: event.clientY });
        } catch (_) {
          // Use the heading DOM below if coordinate mapping fails.
        }
      }

      if (position == null && typeof cm.posAtDOM === 'function') {
        try {
          position = cm.posAtDOM(headingLine);
        } catch (_) {
          position = null;
        }
      }

      if (position == null) {
        new Notice('Tap Heading to Fold: could not map the tap to editor text.');
        return;
      }

      const line = cm.state.doc.lineAt(position);

      // The actual source line must be a Markdown heading.
      if (!/^ {0,3}#{1,6}(?:\\s|$)/.test(line.text)) {
        new Notice('Tap Heading to Fold: tap the heading text itself, not the # marker.');
        return;
      }

      // Move the cursor to the start of that heading and call Obsidian's
      // documented EditorCommandName "toggleFold".
      editor.setCursor({ line: line.number - 1, ch: 0 });
      event.preventDefault();
      event.stopPropagation();
      editor.exec('toggleFold');
    }, true);
  }
};
