const { Plugin } = require('obsidian');

module.exports = class TapHeadingToFoldPlugin extends Plugin {
  onload() {
    // Delegate from document so it also works when Obsidian recreates editor DOM.
    this.registerDomEvent(document, 'click', (event) => {
      if (event.defaultPrevented || event.button !== 0) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      // Do not intercept links, controls, the Markdown '#' marker, or the fold arrow itself.
      if (target.closest(
        'a, button, input, textarea, select, [role="button"], ' +
        '.cm-fold-indicator, .cm-formatting-header, .cm-widgetBuffer'
      )) return;

      // Only handle Live Preview editor heading rows. Source mode and Reading view are untouched.
      const headingLine = target.closest(
        '.markdown-source-view.mod-cm6 .cm-line.HyperMD-header'
      );
      if (!headingLine || !headingLine.closest('.is-live-preview')) return;

      // Use Obsidian's own folding control, preserving its native fold state and behavior.
      const foldButton = headingLine.querySelector(
        '.cm-fold-indicator .collapse-indicator'
      );
      if (!(foldButton instanceof HTMLElement)) return;

      foldButton.click();
    }, true);
  }
};
