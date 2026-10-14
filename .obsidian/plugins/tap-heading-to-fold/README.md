# Tap Heading to Fold

A small Obsidian community plugin for touchscreens. In **Live Preview**, tap the text of a Markdown heading to fold or unfold its section instead of targeting the small arrow.

## Install / update

1. Sync or pull the latest `main` branch from this vault repository.
2. In Obsidian, open **Settings → Community plugins**.
3. Toggle **Tap Heading to Fold** off and on again, or restart Obsidian. Confirm the plugin version is **1.0.2** if shown.
4. Make sure **Settings → Editor → Fold heading** is enabled.
5. Open a Markdown note in **Live Preview** and tap the text of a heading that has content beneath it.

## Version 1.0.2

- Loosened the Live Preview selector so detection no longer depends on the placement of the `is-live-preview` class.
- Matches the tapped heading to its Markdown leaf by DOM containment.
- Uses coordinate mapping with a DOM-position fallback.
- Displays a diagnostic notice if the tap is detected but the editor/position cannot be resolved.

## Notes

- The plugin calls Obsidian's `Editor.exec('toggleFold')` command at the tapped heading.
- Links, interactive controls, Markdown heading markers, and the native fold arrow are left alone.
- It does not modify note contents or require a CSS snippet.
- Repository-tracked plugin files sync with the vault; the enabled-plugin list remains device-specific, so enable the plugin separately on each device.
- Obsidian's internal editor implementation can change between versions. This build has not been device-tested.

## If tapping still does nothing

1. Pull/sync the latest repository changes.
2. Toggle the plugin off and on, or restart Obsidian.
3. Verify the plugin is enabled and **Fold heading** is enabled.
4. Tap the heading text, not the Markdown `#` marker or a link inside the heading.

If the code loads but the tap is recognized and cannot be mapped, the plugin will now show a diagnostic notice so we can identify which step is failing.
