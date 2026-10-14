# Tap Heading to Fold

A small Obsidian community plugin for touchscreens. In **Live Preview**, tap a heading's text to fold or unfold its section instead of needing to hit the arrow.

## Enable on Android and iPad

1. Sync/pull the repository so the plugin folder is present in your vault.
2. In Obsidian, open **Settings → Community plugins** and reload plugins if needed.
3. Enable **Tap Heading to Fold**. If Restricted Mode is on, disable it first.
4. Open a note in **Live Preview** and tap the text of a heading with a foldable section.

## Notes

- The plugin code and manifest are intentionally tracked by the vault repository so Git sync can deliver them to devices.
- The enabled-plugin list remains device-specific and is not synced by this repository's ignore rules; enable the plugin once on each device.
- No note text is changed, and no CSS snippet is required.
- Links and interactive controls within headings are not intercepted.
- The plugin uses Obsidian's existing folding control. Obsidian's internal editor DOM can change between versions; this build has not been device-tested on this vault.
