# Tap Heading to Fold

A small Obsidian community plugin for touchscreens. Tap a heading's text to fold or unfold its section in **Live Preview** and **Reading view**.

## Install / update

1. Sync or pull the latest `main` branch from this vault repository.
2. In Obsidian, open **Settings → Community plugins**.
3. Toggle **Tap Heading to Fold** off and on again, or restart Obsidian. Current version: **1.1.0**.
4. Make sure **Settings → Editor → Fold heading** is enabled.
5. Test in Live Preview, then switch the same note to Reading view and tap a heading that has content beneath it.

## Version 1.1.0

- Adds Reading view support by locating Obsidian's native `.heading-collapse-indicator` in the rendered heading and invoking it.
- Keeps the Live Preview handler, which identifies the editor line, maps the tap to Markdown text, and calls Obsidian's `toggleFold` command.
- Leaves links, controls, Markdown markers, and native fold indicators alone.
- No note contents are changed and no CSS snippet is required.

## Troubleshooting

- If the plugin is not updating, sync/pull the repository, then toggle it off and on or restart Obsidian.
- Verify the plugin is enabled and **Fold heading** is enabled in Obsidian's Editor settings.
- In Reading view, tapping a heading requires Obsidian to render its native heading-collapse indicator. If a theme or Obsidian version does not provide that indicator, the plugin will not have a native control to trigger.
- Plugin files are tracked by this vault repository, but the enabled-plugin list is device-specific; enable the plugin separately on each device.

Obsidian's internal DOM can change between versions. This build has not been device-tested on this vault.
