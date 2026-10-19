# Clearline

A custom, Apple-inspired Obsidian theme designed around quiet surfaces, crisp system typography, generous spacing, and clean study notes. It includes light and dark palettes, and styles the editor, reading view, navigation, tables, callouts, media, embedded PDFs, settings, and common interface elements.

## Install

1. Download and extract `Clearline.zip`.
2. Copy the `Clearline` folder into your vault's `.obsidian/themes/` directory.
3. In Obsidian, open **Settings → Appearance → Themes** and choose **Clearline**.
4. Switch **Base color scheme** between Light and Dark to choose your mode.

The theme contains only `theme.css` and `manifest.json` (plus this README). It does not install plugins, change vault content, fetch remote fonts, or require an internet connection.

## Version 1.0.5 — unified typography

- Replaced overlapping heading declarations with a single H1–H6 scale, using Obsidian-style `--h1-size`, `--h1-weight`, and `--h1-font` variables shared across Reading View and Live Preview.
- Applied each level's shared font family, size, weight, line height, and letter spacing to both the rendered heading and the CodeMirror heading span.
- Removed superseded fixed-size editor rules and the duplicate appendix of CSS overrides.
- Removed the large editor padding stack around headings. Blank Markdown source lines already contribute vertical space; H2 adds only the calculated difference needed to approach Reading View's section spacing.
- Moved tablet heading-size adjustments to the shared variables so both views respond together.
- Retained the lightweight rendering changes from 1.0.3: no backdrop blur, theme-added transitions, dynamic `color-mix()`, or custom scrollbar painting.

This revision is intended to align typography and reduce exaggerated spacing differences. Final visual confirmation still needs to be performed in Obsidian on the target iPad.

## Design intent

- Near-white light mode and soft-charcoal dark mode.
- Native system font stack, so iPad/macOS can use system typography without downloading fonts.
- Wide, responsive content area for diagrams and clinical images.
- Comfortable text rhythm and a bold, clear heading hierarchy.
- Low-contrast interface chrome so notes remain the visual focus.
- Tables and embedded PDFs remain usable on narrow screens.

## Notes

This is a first implementation created from the supplied reference screenshots. Obsidian and community plugins can change their UI markup over time, and the theme has not been installed in a live Obsidian instance in this environment. If a specific plugin pane or mobile control looks off, its CSS can be refined from a screenshot.
