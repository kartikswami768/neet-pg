const { Plugin } = require('obsidian');

module.exports = class TapHeadingToFoldPlugin extends Plugin {
  onload() {
    this.registerDomEvent(document, 'click', (event) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      // Let links, controls, formatting markers, and the native fold arrow behave normally.
      if (target.closest(
        'a, button, input, textarea, select, [role="button"], ' +
        '.cm-fold-indicator, .cm-formatting-header, .cm-widgetBuffer'
      )) return;

      // A heading in the CM6 Live Preview editor only.
      const headingLine = target.closest(
        '.markdown-source-view.mod-cm6.is-live-preview .cm-line.HyperMD-header'
      );
      if (!headingLine) return;

      const sourceView = headingLine.closest(
        '.markdown-source-view.mod-cm6.is-live-preview'
      );
      if (!sourceView) return;

      // Match the clicked DOM editor to its Obsidian MarkdownView.
      // Do not assume the fold-arrow widget exists as a child of the heading row:
      // on mobile and across themes/versions, that DOM assumption is brittle.
      const leaf = this.app.workspace.getLeavesOfType('markdown').find((candidate) => {
        const view = candidate.view;
        const cm = view && view.editor && view.editor.cm;
        return !!(cm && cm.dom && sourceView.contains(cm.dom));
      });
      if (!leaf) return;

      const editor = leaf.view.editor;
      const cm = editor.cm;
      let position = null;

      // Use the actual tap coordinates first; fall back to the target DOM node.
      try {
        position = cm.posAtCoords({ x: event.clientX, y: event.clientY });
      } catch (_) {
        // Some older Obsidian/CodeMirror builds may not expose posAtCoords as expected.
      }
      if (position == null) {
        try {
          position = cm.posAtDOM(target);
        } catch (_) {
          return;
        }
      }
      if (position == null) return;

      const line = cm.state.doc.lineAt(position);

      // Ensure the position resolves to a Markdown heading before consuming the tap.
      if (!/^ {0,3}#{1,6}(?:\s|$)/.test(line.text)) return;

      // Obsidian's public Editor API supports toggleFold on mobile and desktop.
      // Place the cursor on the heading so the command folds the intended section.
      editor.setCursor({ line: line.number - 1, ch: 0 });
      event.preventDefault();
      event.stopPropagation();
      editor.exec('toggleFold');
    }, true);
  }
};
