const { Plugin, MarkdownView, Notice, setIcon } = require("obsidian");

const BASE_PLUGIN_ID = "reading-highlighter";

const COLOR_ACTIONS = {
  yellow: { label: "Yellow highlight", mode: "markdown", color: "#ffe347" },
  green: { label: "Green highlight", mode: "html", background: "#c8f2d2", foreground: "#173b22" },
  blue: { label: "Blue highlight", mode: "html", background: "#c6e3ff", foreground: "#173653" },
  pink: { label: "Pink highlight", mode: "html", background: "#ffd1e4", foreground: "#5c203d" }
};

module.exports = class ReadingHighlighterExtendedPlugin extends Plugin {
  onload() {
    this.base = null;
    this.originalHandler = null;
    this.patchedHandler = null;
    this.toolbarEl = null;
    this.buttons = new Map();
    this.selectionReady = false;
    this.pendingAction = false;
    this.attachAttempts = 0;
    this.createToolbar();

    this.registerEvent(this.app.workspace.on("layout-ready", () => this.tryAttach()));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => {
      this.tryAttach();
      this.refreshToolbar();
    }));

    // Plugin load order can vary; retry briefly if the base plugin has not loaded yet.
    this.retryTimer = window.setInterval(() => {
      this.attachAttempts += 1;
      if (this.tryAttach() || this.attachAttempts >= 40) {
        window.clearInterval(this.retryTimer);
        this.retryTimer = null;
        if (!this.base) {
          new Notice("Reading Highlighter Extended could not find Reading Highlighter. Enable it first, then reload this plugin.");
        }
      }
    }, 250);
    this.register(() => {
      if (this.retryTimer) window.clearInterval(this.retryTimer);
    });
    this.tryAttach();
  }

  onunload() {
    if (this.retryTimer) {
      window.clearInterval(this.retryTimer);
      this.retryTimer = null;
    }
    this.detachBase();
    this.toolbarEl?.remove();
    this.toolbarEl = null;
    this.buttons.clear();
  }

  tryAttach() {
    const candidate = this.app.plugins?.plugins?.[BASE_PLUGIN_ID];
    if (!candidate ||
        typeof candidate.handleSelectionChange !== "function" ||
        typeof candidate.findMatchWithLinks !== "function" ||
        typeof candidate.sourcePosRangeForNode !== "function" ||
        typeof candidate.addHighlightsByParagraph !== "function") {
      return false;
    }

    if (this.base === candidate && this.patchedHandler) return true;
    this.detachBase();
    this.base = candidate;
    this.originalHandler = candidate.handleSelectionChange;

    const extension = this;
    const base = candidate;
    this.patchedHandler = function (...args) {
      const result = extension.originalHandler.apply(base, args);
      base.hideFloatingButton?.();
      base.hideUndoButton?.();
      extension.updateSelectionReady();
      extension.refreshToolbar();
      return result;
    };
    candidate.handleSelectionChange = this.patchedHandler;
    base.hideFloatingButton?.();
    base.hideUndoButton?.();
    this.refreshToolbar();
    return true;
  }

  detachBase() {
    if (this.base && this.patchedHandler &&
        this.base.handleSelectionChange === this.patchedHandler) {
      this.base.handleSelectionChange = this.originalHandler;
      this.base.hideFloatingButton?.();
      const view = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (view && this.base.lastHighlight?.filePath === view.file?.path) {
        this.base.showUndoButton?.();
      } else {
        this.base.hideUndoButton?.();
      }
      try {
        this.base.handleSelectionChange?.();
      } catch (_) {
        // The base plugin might already be unloading.
      }
    }
    this.base = null;
    this.originalHandler = null;
    this.patchedHandler = null;
  }

  createToolbar() {
    if (this.toolbarEl) return;

    const toolbar = document.createElement("div");
    toolbar.className = "rhx-toolbar";
    toolbar.setAttribute("role", "toolbar");
    toolbar.setAttribute("aria-label", "Reading selection actions");

    const specs = [
      { id: "yellow", label: "Yellow highlight", type: "swatch", color: "#ffe347" },
      { id: "green", label: "Green highlight", type: "swatch", color: "#c8f2d2" },
      { id: "blue", label: "Blue highlight", type: "swatch", color: "#c6e3ff" },
      { id: "pink", label: "Pink highlight", type: "swatch", color: "#ffd1e4" },
      { id: "bold", label: "Bold", type: "text", text: "B" },
      { id: "italic", label: "Italic", type: "text", text: "I" },
      { id: "underline", label: "Underline", type: "text", text: "U" },
      { id: "undo", label: "Undo last formatting action", type: "icon" }
    ];

    for (const spec of specs) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "rhx-action";
      button.setAttribute("aria-label", spec.label);
      button.title = spec.label;
      button.dataset.action = spec.id;

      if (spec.type === "swatch") {
        const swatch = document.createElement("span");
        swatch.className = "rhx-swatch";
        swatch.style.backgroundColor = spec.color;
        button.appendChild(swatch);
      } else if (spec.type === "icon") {
        setIcon(button, "undo-2");
      } else {
        button.textContent = spec.text;
        if (spec.id === "bold") button.style.fontWeight = "800";
        if (spec.id === "italic") button.style.fontStyle = "italic";
        if (spec.id === "underline") button.style.textDecoration = "underline";
      }

      button.addEventListener("mousedown", (event) => {
        event.preventDefault();
        this.pendingAction = true;
      });
      button.addEventListener("touchstart", () => {
        this.pendingAction = true;
      }, { passive: true });
      button.addEventListener("click", (event) => {
        event.preventDefault();
        if (button.dataset.action === "undo") {
          void this.undoLastAction();
        } else {
          void this.applyAction(button.dataset.action);
        }
      });

      toolbar.appendChild(button);
      this.buttons.set(spec.id, button);
    }

    document.body.appendChild(toolbar);
    this.toolbarEl = toolbar;
  }

  updateSelectionReady() {
    const base = this.base;
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!base || !view || view.getMode() !== "preview") {
      if (!this.pendingAction) this.selectionReady = false;
      return;
    }

    const snapshot = base.selectionSnapshot;
    const selection = document.getSelection();
    const selectedText = selection?.toString() ?? "";
    const preview = this.getPreviewEl(view);
    const liveSelection = !!(
      selectedText.trim() &&
      selection &&
      !selection.isCollapsed &&
      preview &&
      selection.anchorNode &&
      preview.contains(selection.anchorNode) &&
      selection.focusNode &&
      preview.contains(selection.focusNode)
    );

    if (liveSelection && snapshot && snapshot.viewPath === (view.file?.path ?? null)) {
      this.selectionReady = true;
    } else if (!this.pendingAction) {
      this.selectionReady = false;
    }
  }

  refreshToolbar() {
    const base = this.base;
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    base?.hideFloatingButton?.();
    base?.hideUndoButton?.();

    if (!this.toolbarEl || !base || !view || view.getMode() !== "preview" || !view.file) {
      this.toolbarEl?.removeClass("is-visible");
      for (const button of this.buttons.values()) button.disabled = true;
      return;
    }

    const path = view.file.path;
    const snapshot = base.selectionSnapshot;
    const snapshotMatches = !!(
      snapshot &&
      snapshot.viewPath === path &&
      typeof snapshot.text === "string" &&
      snapshot.text.trim()
    );
    const canFormat = this.selectionReady && snapshotMatches;
    const canUndo = !!(base.lastHighlight && base.lastHighlight.filePath === path);

    for (const [id, button] of this.buttons) {
      button.disabled = id === "undo" ? !canUndo : !canFormat;
      button.style.display = id === "undo" || canFormat ? "" : "none";
    }
    if (canFormat || canUndo) this.toolbarEl.addClass("is-visible");
    else this.toolbarEl.removeClass("is-visible");
  }

  getPreviewEl(view) {
    return view.containerEl.querySelector(".markdown-reading-view") ||
      view.containerEl.querySelector(".markdown-preview-view");
  }

  async applyAction(action) {
    const base = this.base;
    const view = this.app.workspace.getActiveViewOfType(MarkdownView);
    if (!base || !view || view.getMode() !== "preview" || !view.file) {
      this.pendingAction = false;
      this.refreshToolbar();
      new Notice("Open a note in Reading View and select text first.");
      return;
    }

    const spec = COLOR_ACTIONS[action];
    const opening = action === "yellow" ? "==" :
      action === "green" || action === "blue" || action === "pink"
        ? '<mark style="background-color: ' + spec.background + '; color: ' + spec.foreground + ';">'
        : action === "bold" ? "<strong>"
        : action === "italic" ? "<em>"
        : action === "underline" ? "<u>"
        : null;
    const closing = action === "yellow" ? "==" :
      action === "green" || action === "blue" || action === "pink"
        ? "</mark>"
        : action === "bold" ? "</strong>"
        : action === "italic" ? "</em>"
        : action === "underline" ? "</u>"
        : null;

    if (!opening || !closing) {
      this.pendingAction = false;
      this.refreshToolbar();
      new Notice("Unknown formatting action. No changes were made.");
      return;
    }

    const file = view.file;
    const selection = document.getSelection();
    const liveSnippet = selection?.toString() ?? "";
    const preview = this.getPreviewEl(view);
    const liveValid = !!(
      liveSnippet.trim() &&
      selection &&
      !selection.isCollapsed &&
      preview &&
      selection.anchorNode &&
      preview.contains(selection.anchorNode) &&
      selection.focusNode &&
      preview.contains(selection.focusNode)
    );

    let snippet;
    let paragraphStart = null;
    let paragraphEnd = null;

    if (liveValid && selection) {
      snippet = liveSnippet;
      const anchorRange = base.sourcePosRangeForNode(selection.anchorNode);
      const focusRange = base.sourcePosRangeForNode(selection.focusNode);
      if (anchorRange && focusRange) {
        paragraphStart = Math.min(anchorRange.start, focusRange.start);
        paragraphEnd = Math.max(anchorRange.end, focusRange.end);
      }
    } else if (base.selectionSnapshot && base.selectionSnapshot.viewPath === file.path) {
      snippet = base.selectionSnapshot.text;
      paragraphStart = base.selectionSnapshot.paragraphStart;
      paragraphEnd = base.selectionSnapshot.paragraphEnd;
    } else {
      this.failAction("Select text first — nothing selected. No changes were made.");
      return;
    }

    if (!snippet || !snippet.trim()) {
      this.failAction("Select text first — nothing selected. No changes were made.");
      return;
    }

    const scrollBefore = base.getScroll(view);
    let found = true;
    let blockedReason = null;
    let noChange = false;
    let recordedPosition = null;
    let recordedOriginal = null;
    let recordedFormatted = null;

    try {
      await this.app.vault.process(file, (raw) => {
        let start = null;
        let end = null;

        if (paragraphStart != null && paragraphEnd != null &&
            paragraphStart >= 0 && paragraphEnd <= raw.length &&
            paragraphStart < paragraphEnd) {
          const windowText = raw.slice(paragraphStart, paragraphEnd);
          const localMatch = base.findMatchWithLinks(windowText, snippet);
          if (localMatch[0] != null && localMatch[1] != null) {
            start = paragraphStart + localMatch[0];
            end = paragraphStart + localMatch[1];
          }
        }

        if (start == null || end == null) {
          const fallbackMatch = base.findMatchWithLinks(raw, snippet);
          if (fallbackMatch[0] == null || fallbackMatch[1] == null) {
            found = false;
            return raw;
          }
          start = fallbackMatch[0];
          end = fallbackMatch[1];
        }

        if (start < 0 || end > raw.length || start >= end) {
          found = false;
          return raw;
        }

        let currentStart = start;
        let currentEnd = end;
        const delimiters = ["***", "___", "**", "__", "~~", "*", "_", String.fromCharCode(96)];
        for (const delimiter of delimiters) {
          if (raw.slice(0, currentStart).endsWith(delimiter) &&
              raw.slice(currentEnd).startsWith(delimiter)) {
            currentStart -= delimiter.length;
            currentEnd += delimiter.length;
            break;
          }
        }

        if (this.isInsideFencedCode(raw, currentStart)) {
          blockedReason = "fenced code";
          return raw;
        }

        const selectedSource = raw.slice(currentStart, currentEnd);
        if (selectedSource.split("\n").some((line) => line.includes("|"))) {
          blockedReason = "table syntax";
          return raw;
        }

        if (["yellow", "green", "blue", "pink"].includes(action) &&
            this.isAlreadyHighlighted(selectedSource)) {
          blockedReason = "existing highlight";
          return raw;
        }

        const updatedSource = action === "yellow"
          ? base.addHighlightsByParagraph(selectedSource)
          : this.wrapByLine(selectedSource, opening, closing, action);
        if (updatedSource === selectedSource) {
          noChange = true;
          return raw;
        }

        recordedPosition = currentStart;
        recordedOriginal = selectedSource;
        recordedFormatted = updatedSource;
        return raw.slice(0, currentStart) + updatedSource + raw.slice(currentEnd);
      });
    } catch (error) {
      console.error("Reading Highlighter Extended: formatting failed safely.", error);
      this.failAction("Formatting failed. The plugin did not intentionally change the selection.");
      return;
    }

    if (!found || blockedReason || noChange) {
      if (!found) {
        this.failAction("Unable to locate that exact selection. No changes were made.");
      } else if (blockedReason === "fenced code") {
        this.failAction("Formatting inside a fenced code block is disabled to protect the source.");
      } else if (blockedReason === "table syntax") {
        this.failAction("That selection crosses table syntax. No changes were made.");
      } else if (blockedReason === "existing highlight") {
        this.failAction("That text already has highlight markers. Remove them before applying a different highlight color.");
      } else {
        this.failAction("That text already has this formatting. No changes were made.");
      }
      return;
    }

    if (recordedPosition == null || recordedOriginal == null || recordedFormatted == null) {
      this.failAction("Could not verify the edit. No changes were made.");
      return;
    }

    const restoreScroll = () => base.applyScroll(view, scrollBefore);
    window.requestAnimationFrame(() => {
      restoreScroll();
      window.setTimeout(restoreScroll, 50);
    });

    base.lastHighlight = {
      filePath: file.path,
      position: recordedPosition,
      originalText: recordedOriginal,
      highlightedText: recordedFormatted
    };
    base.showUndoButton?.();
    base.hideUndoButton?.();

    selection?.removeAllRanges();
    base.selectionSnapshot = null;
    base.hideFloatingButton?.();
    this.pendingAction = false;
    this.selectionReady = false;
    this.refreshToolbar();
  }

  failAction(message) {
    this.pendingAction = false;
    this.selectionReady = false;
    this.refreshToolbar();
    new Notice(message);
  }

  wrapByLine(text, opening, closing, action) {
    return text.split("\n").map((line) => {
      if (!line.trim()) return line;

      const leadingMatch = line.match(/^(\s*)/);
      const leading = leadingMatch ? leadingMatch[1] : "";
      const trailingMatch = line.match(/(\s*)$/);
      const trailing = trailingMatch ? trailingMatch[1] : "";
      let core = line.slice(leading.length, line.length - trailing.length);
      if (!core.trim()) return line;

      const prefixes = [
        /^(#{1,6}\s+)(.*)$/,
        /^(>\s+)(.*)$/,
        /^([-*+]\s+)(.*)$/,
        /^(\d+\.\s+)(.*)$/
      ];
      let prefix = "";
      for (const pattern of prefixes) {
        const match = core.match(pattern);
        if (match) {
          prefix = match[1];
          core = match[2];
          break;
        }
      }
      if (!core.trim()) return line;

      if (action === "bold" &&
          (/^<strong>[\s\S]*<\/strong>$/i.test(core) ||
           /^\*\*[\s\S]*\*\*$/.test(core) ||
           /^__[\s\S]*__$/.test(core))) return line;

      if (action === "italic" &&
          (/^<em>[\s\S]*<\/em>$/i.test(core) ||
           (/^\*[\s\S]*\*$/.test(core) && !core.startsWith("**") && !core.endsWith("**")) ||
           (/^_[\s\S]*_$/.test(core) && !core.startsWith("__") && !core.endsWith("__")))) return line;

      if (action === "underline" && /^<(u|ins)>[\s\S]*<\/\1>$/i.test(core)) return line;

      return leading + prefix + opening + core + closing + trailing;
    }).join("\n");
  }

  isAlreadyHighlighted(text) {
    return text.includes("==") || /<\/?mark\b/i.test(text);
  }

  isInsideFencedCode(raw, position) {
    const before = raw.slice(0, position).split("\n");
    let activeFence = null;
    let fenceLength = 0;
    const fencePattern = new RegExp("^\\s{0,3}(" + String.fromCharCode(96) + "{3,}|~{3,})");
    for (const line of before) {
      const match = line.match(fencePattern);
      if (!match) continue;
      const marker = match[1][0];
      if (!activeFence) {
        activeFence = marker;
        fenceLength = match[1].length;
      } else if (marker === activeFence && match[1].length >= fenceLength) {
        activeFence = null;
        fenceLength = 0;
      }
    }
    return activeFence !== null;
  }

  async undoLastAction() {
    const base = this.base;
    if (!base || !base.lastHighlight) {
      this.pendingAction = false;
      this.refreshToolbar();
      new Notice("Nothing to undo.");
      return;
    }
    try {
      await base.undoLastHighlight();
    } finally {
      this.pendingAction = false;
      this.selectionReady = false;
      base.hideUndoButton?.();
      this.refreshToolbar();
    }
  }
};