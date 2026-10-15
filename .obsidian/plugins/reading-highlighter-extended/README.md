# Reading Highlighter Extended

A companion for the **Reading Highlighter** community plugin by keithwithAI. It replaces that plugin's single floating highlight button with a compact toolbar containing:

- Yellow highlight (the original Markdown-style ==highlight== behavior)
- Green, blue, and pink highlights using inline HTML mark styling
- Bold, italic, and underline
- Undo of the most recent formatting action

## Safety and compatibility

The companion reuses Reading Highlighter's own selection snapshot, Markdown source-position mapping, and match-confidence logic. If the selected text cannot be located confidently, it leaves the file unchanged and shows a notice. It also refuses to format selections that cross table syntax or occur inside fenced code blocks.

The custom color and text-format actions are applied through vault.process(), and their exact replacement text is recorded in the base plugin's existing one-step undo record. The original plugin remains installed and its yellow-highlighting implementation is used unchanged.

This companion depends on the community plugin ID reading-highlighter and is not a standalone highlighter. If the base plugin changes its internal helper methods in a future update, the companion may need an update as well.

## Install

1. Sync this folder to the vault's .obsidian/plugins/reading-highlighter-extended/ directory.
2. Reload Obsidian or reload community plugins.
3. Enable Reading Highlighter Extended in Community Plugins.
4. Keep Reading Highlighter enabled as well.

Use the toolbar in Reading View after selecting text.