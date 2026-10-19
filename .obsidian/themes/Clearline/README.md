# Clearline

A custom, Apple-inspired Obsidian theme designed around quiet surfaces, crisp system typography, generous spacing, and clean study notes. It includes light and dark palettes, and styles the editor, reading view, navigation, tables, callouts, media, embedded PDFs, settings, and common interface elements.

## Install

1. Download and extract `Clearline.zip`.
2. Copy the `Clearline` folder into your vault's `.obsidian/themes/` directory.
3. In Obsidian, open **Settings → Appearance → Themes** and choose **Clearline**.
4. Switch **Base color scheme** between Light and Dark to choose your mode.

The theme contains only `theme.css` and `manifest.json` (plus this README). It does not install plugins, change vault content, fetch remote fonts, or require an internet connection.

## Version 1.0.3 — performance pass

- Removed backdrop blur, theme-added shadows, hover transitions, and custom WebKit scrollbar painting.
- Returned text rendering to the platform's native defaults.
- Replaced dynamic `color-mix()` values with fixed light/dark tokens.
- Simplified standard image-embed wrappers from flex layout to block layout, while retaining image sizing and centering.
- Restricted the `70vh` minimum height to PDF embeds rather than applying it to every iframe/video embed.
- Removed an advanced heading-wrap rule and fixed the mobile section-gap override.
- Kept the reduced-motion accessibility override.
- The stylesheet is now approximately 32 KB. CSS file size itself was not the main performance issue; the changes above mainly remove paint/compositing effects and unnecessary layout work.

The scroll-flash issue cannot be confirmed as fixed from CSS inspection alone. If it persists, compare the same note while using Obsidian's Default theme with CSS snippets disabled; that isolates theme styling from Obsidian/iPad rendering behaviour.

## Design intent

- Near-white light mode and soft-charcoal dark mode.
- Native system font stack, so iPad/macOS can use system typography without downloading fonts.
- Wide, responsive content area for diagrams and clinical images.
- Comfortable text rhythm and a bold, clear heading hierarchy.
- Low-contrast interface chrome so notes remain the visual focus.
- Tables and embedded PDFs remain usable on narrow screens.

## Notes

This is a first implementation created from the supplied reference screenshots. Obsidian and community plugins can change their UI markup over time, and the theme has not been installed in a live Obsidian instance in this environment. If a specific plugin pane or mobile control looks off, its CSS can be refined from a screenshot.
