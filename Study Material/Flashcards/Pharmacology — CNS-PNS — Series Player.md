---
SERIES_SUBJECT: Pharmacology
SERIES_TOPIC: Central and Peripheral Nervous System
CURRENT_PEARL:
type: Series Player
---

# Pharmacology — Central and Peripheral Nervous System

This player follows the complete Marrow Pearl files belonging to the selected **Subject + Topic** combination.

**Controller:** [[Pharmacology — Central and Peripheral Nervous System]]

```dataviewjs
const SOURCE = '"Study Material/Flashcards/Marrow Pearls"';
const SUBJECT = String(dv.current().SERIES_SUBJECT ?? "").trim();
const TOPIC = String(dv.current().SERIES_TOPIC ?? "").trim();
const CURRENT = String(dv.current().CURRENT_PEARL ?? "").trim();

function toStrings(value) {
    if (value == null) return [];

    if (Array.isArray(value)) {
        return value.map(v => String(v).trim());
    }

    if (value.values) {
        const values = Array.isArray(value.values)
            ? value.values
            : Array.from(value.values);
        return values.map(v => String(v).trim());
    }

    return [String(value).trim()];
}

function hasValue(value, target) {
    return toStrings(value).includes(target);
}

function pearlNumber(id) {
    const match = String(id ?? "").match(/(\d+)/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

const pages = dv.pages(SOURCE)
    .where(p => hasValue(p.Subject, SUBJECT) && hasValue(p.Topic, TOPIC))
    .sort((a, b) => pearlNumber(a.pearl_id) - pearlNumber(b.pearl_id))
    .array();

if (!pages.length) {
    dv.paragraph(`No Marrow Pearls found for Subject = "${SUBJECT}" and Topic = "${TOPIC}".`);
} else {
    let index = pages.findIndex(p => String(p.pearl_id).trim() === CURRENT);
    if (index < 0) index = 0;

    const current = pages[index];
    const previous = index > 0 ? pages[index - 1] : null;
    const next = index < pages.length - 1 ? pages[index + 1] : null;

    dv.header(3, `${pages.length} Marrow Pearls`);
    dv.paragraph(`**Current:** ${current.pearl_id} · ${index + 1}/${pages.length}`);

    const nav = dv.container.createDiv();
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.gap = "0.75em";
    nav.style.margin = "1em 0";

    const playerFile = app.vault.getAbstractFileByPath(dv.current().file.path);

    async function selectPearl(pearl) {
        if (!pearl) return;

        if (playerFile) {
            await app.fileManager.processFrontMatter(playerFile, fm => {
                fm.CURRENT_PEARL = String(pearl.pearl_id);
            });
        }

        // Resolve the real Obsidian TFile from the path.
        const targetFile = app.vault.getAbstractFileByPath(pearl.file.path);
        if (!targetFile) return;

        // Open through Obsidian's workspace API, not as a web/OS link.
        await app.workspace.openLinkText(
            pearl.file.path,
            dv.current().file.path,
            false
        );
    }

    function addNavButton(parent, label, pearl, disabled) {
        const button = parent.createEl("button", { text: label });
        button.disabled = disabled;

        if (!disabled) {
            button.onclick = () => selectPearl(pearl);
        }

        return button;
    }

    addNavButton(
        nav,
        previous ? `← ${previous.pearl_id}` : "← Start",
        previous,
        !previous
    );

    const openButton = nav.createEl("button", {
        text: `Open ${current.pearl_id}`
    });

    openButton.onclick = () => selectPearl(current);

    addNavButton(
        nav,
        next ? `${next.pearl_id} →` : "End →",
        next,
        !next
    );

    dv.paragraph(`**${current.file.name.replace(/\\.md$/, "")}**`);

    dv.header(4, "Series order");

    dv.table(
        ["#", "Pearl ID", "Pearl"],
        pages.map((p, i) => [
            i + 1,
            i === index ? `**${p.pearl_id}**` : p.pearl_id,
            p.file.link
        ])
    );
}
```

### How to use

1. Open this Player.
2. Tap **Open** or **← / →** to move through the series.
3. Navigation now uses Obsidian's internal workspace link handler rather than an external/OS link.
4. The selected Pearl is remembered in `CURRENT_PEARL`.
