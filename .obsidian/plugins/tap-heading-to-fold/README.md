# Tap Heading to Fold

A small Obsidian community plugin for touchscreens. In **Live Preview**, tap the text of a Markdown heading to fold or unfold its section rather than targeting the small arrow.

## Install / update

1. Sync or pull the latest `main` branch from this vault repository.
2. In Obsidian, open **Settings → Community plugins** and reload plugins if needed.
3. Enable **Tap Heading to Fold**. Disable Restricted Mode if necessary.
4. Make sure **Settings → Editor → Fold heading** is enabled.
5. Open a Markdown note in **Live Preview** and tap the text of a heading that has content beneath it.

## Expected behavior

- Tapping a heading's text toggles the native Obsidian fold state for that heading.
- The plugin uses Obsidian's `Editor.exec("toggleFold")` command instead of trying to click a particular internal arrow element. This avoids relying on a theme- or version-specific DOM structure.
- Links, interactive controls, Markdown heading markers, and the native fold arrow are left alone.
- Reading view and Source mode are not targeted.
- The plugin does not change note contents or need a CSS snippet.

## If tapping still does nothing

1. Verify **Fold heading** is enabled in **Settings → Editor**.
2. In **Settings → Community plugins**, toggle this plugin off and on, or restart Obsidian after syncing.
3. Confirm the note is actually in **Live Preview**, not Source mode or Reading view.

The plugin is deliberately device-compatible and contains no desktop-only APIs. Obsidian's internal editor implementation can still change between versions; test after major Obsidian updates.
