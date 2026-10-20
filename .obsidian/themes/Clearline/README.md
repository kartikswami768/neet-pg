# Clearline

A custom, Apple-inspired Obsidian theme designed around quiet surfaces, crisp system typography, generous spacing, and clean study notes. It includes light and dark palettes, and styles the editor, reading view, navigation, tables, callouts, media, embedded PDFs, settings, and common interface elements.

## Install

1. Download and extract `Clearline.zip`.
2. Copy the `Clearline` folder into your vault's `.obsidian/themes/` directory.
3. In Obsidian, open **Settings → Appearance → Themes** and choose **Clearline**.
4. Switch **Base color scheme** between Light and Dark to choose your mode.

The theme contains only `theme.css` and `manifest.json` (plus this README). It does not install plugins, change vault content, fetch remote fonts, or require an internet connection.

## Version 1.0.7 — conservative CSS cleanup

- Removed theme overrides for Obsidian's app-level text size, UI font sizes, normal/tight UI line heights, global icon dimensions, titlebar/header height, and mobile touch-target geometry. Obsidian's Appearance settings and native control sizing are authoritative again.
- Removed custom file/folder tree indentation and unnecessary padding/gaps on navigation, tabs, menus, prompts, settings rows, outline rows, and status bar.
- Removed global transparent shadow-variable overrides, unused custom spacing tokens, an unused radius token, a duplicate light-mode table row token, a redundant table display declaration, an inert image cursor hint, and an empty selector block.
- Replaced the app-level body line-height setting with Clearline's own `--clearline-body-line-height`, used only in note text and lists.
- Removed the theme's body-text-size slider because it overrode Obsidian's global text-size preference; use **Settings → Appearance → Font size** instead.
- Preserved the light/dark palette, note reading width and margins, heading hierarchy, image and PDF support, table/callout styling, and the no-scroll/animation-override behaviour from 1.0.6.

This is intended to make Clearline less invasive while keeping the approved note appearance. The stylesheet has been checked structurally, but final verification should be done in the running iPad app.

## Design intent

- Near-white light mode and soft-charcoal dark mode.
- Native system font stack, so iPad/macOS can use system typography without downloading fonts.
- Wide, responsive content area for diagrams and clinical images.
- Comfortable text rhythm and a bold, clear heading hierarchy.
- Low-contrast interface chrome so notes remain the visual focus.
- Tables and embedded PDFs remain usable on narrow screens.

## Notes

This is a first implementation created from the supplied reference screenshots. Obsidian and community plugins can change their UI markup over time, and the theme has not been installed in a live Obsidian instance in this environment. If a specific plugin pane or mobile control looks off, its CSS can be refined from a screenshot.
