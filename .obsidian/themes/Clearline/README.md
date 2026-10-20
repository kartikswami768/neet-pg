# Clearline

A custom, Apple-inspired Obsidian theme designed around quiet surfaces, crisp system typography, generous spacing, and clean study notes. It includes light and dark palettes, and styles the editor, reading view, navigation, tables, callouts, media, embedded PDFs, settings, and common interface elements.

## Install

1. Download and extract `Clearline.zip`.
2. Copy the `Clearline` folder into your vault's `.obsidian/themes/` directory.
3. In Obsidian, open **Settings → Appearance → Themes** and choose **Clearline**.
4. Switch **Base color scheme** between Light and Dark to choose your mode.

The theme contains only `theme.css` and `manifest.json` (plus this README). It does not install plugins, change vault content, fetch remote fonts, or require an internet connection.

## Version 1.0.8 — lower-specificity native-layout cleanup

- Further reduced heading CSS specificity by removing the 36 `!important` flags from heading text and editor-padding declarations. The editor selectors remain scoped to CodeMirror's heading lines and spans, without unnecessarily forcing precedence over other styles.
- Version 1.0.7 changes remain: native Obsidian font sizes, UI line heights, icon sizing, header height, menu/settings spacing, folder indentation and mobile touch targets are no longer overridden by Clearline.
- Note body and list line height are controlled by Clearline's own `--clearline-body-line-height`; Obsidian's app-wide typography variables remain untouched.
- Preserved intentional content styling for headings, reading width, margins, tables, callouts, images and PDF embeds.
- No theme-level scroll, animation, transition or smooth-scroll rules were reintroduced.

The stylesheet has passed structural checks, but the reduced heading specificity and restored native UI dimensions should be visually checked on the iPad after sync.

## Design intent

- Near-white light mode and soft-charcoal dark mode.
- Native system font stack, so iPad/macOS can use system typography without downloading fonts.
- Wide, responsive content area for diagrams and clinical images.
- Comfortable text rhythm and a bold, clear heading hierarchy.
- Low-contrast interface chrome so notes remain the visual focus.
- Tables and embedded PDFs remain usable on narrow screens.

## Notes

This is a first implementation created from the supplied reference screenshots. Obsidian and community plugins can change their UI markup over time, and the theme has not been installed in a live Obsidian instance in this environment. If a specific plugin pane or mobile control looks off, its CSS can be refined from a screenshot.
