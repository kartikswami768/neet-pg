# Clearline

A custom, Apple-inspired Obsidian theme designed around quiet surfaces, crisp system typography, generous spacing, and clean study notes. It includes light and dark palettes, and styles the editor, reading view, navigation, tables, callouts, media, embedded PDFs, settings, and common interface elements.

## Install

1. Download and extract `Clearline.zip`.
2. Copy the `Clearline` folder into your vault's `.obsidian/themes/` directory.
3. In Obsidian, open **Settings → Appearance → Themes** and choose **Clearline**.
4. Switch **Base color scheme** between Light and Dark to choose your mode.

The theme contains only `theme.css` and `manifest.json` (plus this README). It does not install plugins, change vault content, fetch remote fonts, or require an internet connection.

## Version 1.1.0 — adaptive image gallery

- Fixed the single-image regression: gallery mode starts only when a paragraph contains at least two native Obsidian image embeds.
- Two-image galleries use two columns. Three-or-more galleries use three columns on wider screens and two columns on tablets and phones.
- Replaced square tiles with 4:3 frames. Images use `object-fit: contain`, keeping the complete clinical image visible without cropping.
- Preserved normal styling for standalone images. Gallery mode remains opt-in through the `gallery-images` note CSS class.
- Gallery styling is intended for Reading View. Live Preview retains Obsidian's native editor layout; its embed DOM has not been validated in a running Obsidian instance, so no unverified editor-specific gallery selectors are included.

### Using the gallery

Add this to a note's frontmatter:

    ---
    cssclasses:
      - gallery-images
    ---

In Reading View, place two or more image embeds in the same paragraph, separated by spaces:

    ![[Image1.png]] ![[Image2.png]] ![[Image3.png]]

    ![[Image4.png]] ![[Image5.png]]

Each paragraph of two or more image-only embeds becomes a responsive gallery row. A paragraph containing only one image remains a normal full-width image.

## Version 1.0.9 — responsive native-image gallery

- Reworked the opt-in `gallery-images` layout into a true CSS Grid for paragraphs containing only native Obsidian image embeds.
- Added three desktop columns and two tablet/mobile columns with consistent square thumbnails.
- Gallery images use `object-fit: contain`, preserving complete clinical images rather than cropping anatomy or labels.
- Added subtle Clearline borders, secondary-surface tiles and responsive spacing. Ordinary images remain unchanged unless the note enables `gallery-images`.

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
