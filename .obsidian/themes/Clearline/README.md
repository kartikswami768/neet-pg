# Clearline

A custom, Apple-inspired Obsidian theme designed around quiet surfaces, crisp system typography, generous spacing, and clean study notes. It includes light and dark palettes, and styles the editor, reading view, navigation, tables, callouts, media, embedded PDFs, settings, and common interface elements.

## Install

1. Download and extract `Clearline.zip`.
2. Copy the `Clearline` folder into your vault's `.obsidian/themes/` directory.
3. In Obsidian, open **Settings → Appearance → Themes** and choose **Clearline**.
4. Switch **Base color scheme** between Light and Dark to choose your mode.

The theme contains only `theme.css` and `manifest.json` (plus this README). It does not install plugins, change vault content, fetch remote fonts, or require an internet connection.

## Version 1.0.4 — editor/reading parity and performance

- Live Preview heading text now targets the actual CodeMirror `.cm-header-1` through `.cm-header-6` spans as well as their containing heading lines. This corrects the earlier mismatch where styling only the parent line did not override the text span's own font size.
- Heading sizes, weight, line-height, letter spacing, and section spacing reuse Clearline's shared variables across both modes.
- The note's inline title receives a consistent typography treatment in editor and reading views.
- List-line spacing is defined once for Live Preview.
- Removed superseded duplicate editor-heading CSS rules to keep the stylesheet easier to maintain.
- Retains the version 1.0.3 performance changes: no backdrop blur, theme-added transitions, positive box shadows, custom scrollbar painting, or dynamic `color-mix()` rules.

The editor and reading view will still differ in native editing affordances (for example, fold markers and properties editing). This update aligns typography and spacing; visual verification on the user's iPad is still required.

## Design intent

- Near-white light mode and soft-charcoal dark mode.
- Native system font stack, so iPad/macOS can use system typography without downloading fonts.
- Wide, responsive content area for diagrams and clinical images.
- Comfortable text rhythm and a bold, clear heading hierarchy.
- Low-contrast interface chrome so notes remain the visual focus.
- Tables and embedded PDFs remain usable on narrow screens.

## Notes

This is a first implementation created from the supplied reference screenshots. Obsidian and community plugins can change their UI markup over time, and the theme has not been installed in a live Obsidian instance in this environment. If a specific plugin pane or mobile control looks off, its CSS can be refined from a screenshot.
