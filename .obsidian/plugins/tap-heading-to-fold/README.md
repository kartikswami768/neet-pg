# Tap Heading to Fold

Tap a heading's text to fold or unfold its section in **Live Preview** and **Reading view**. This version adds gesture filtering to avoid folding when selecting text.

## Install / update

1. Sync or pull the latest `main` branch from this vault repository.
2. In Obsidian, open **Settings → Community plugins**.
3. Toggle **Tap Heading to Fold** off and on again, or restart Obsidian. Current version: **1.2.0**.
4. Make sure **Settings → Editor → Fold heading** is enabled.
5. Test in Live Preview and Reading view.

## Version 1.2.0

- Detects pointer gestures before acting: long presses, drags, and cancelled gestures do not trigger folding.
- Checks browser text selection and CodeMirror's selection state before folding.
- Delays the fold by 350 ms so a nearby second tap can be treated as a possible double-tap-to-select gesture.
- Keeps both Reading view and Live Preview support.
- Does not change note contents or require CSS.

## Expected behavior

| Interaction | Result |
| --- | --- |
| Brief tap on heading text | Fold/unfold after a short delay |
| Long press to select text | Select text; do not fold |
| Drag to select text | Select text; do not fold |
| Double tap on the same heading area | Cancel pending fold to allow word selection |
| Tap a link or native fold arrow | Normal Obsidian behavior |

## Troubleshooting

- Sync/pull the repository, then toggle the plugin off and on or restart Obsidian.
- Verify the plugin is enabled and **Fold heading** is enabled in Editor settings.
- Plugin files are tracked by the vault repository, but the enabled-plugin list is device-specific; enable the plugin separately on each device.
- Obsidian's internal editor DOM can change between versions. Test after major Obsidian updates.

This build has passed a JavaScript syntax check, but should still be tested on the actual iPad and Android devices.
