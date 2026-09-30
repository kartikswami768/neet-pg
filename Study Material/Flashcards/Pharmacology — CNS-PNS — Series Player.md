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
    if (Array.isArray(value)) return value.map(v => String(v).trim());
    if (value.values) {
        const values = Array.isArray(value.values) ? value.values : Array.from(value.values);
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

    const nav = dv.container.createDiv({ cls: "marrow-series-nav" });
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.gap = "0.75em";
    nav.style.margin = "1em 0";

    const playerFile = app.vault.getAbstractFileByPath(dv.current().file.path);

    async function selectPearl(pearl) {
        if (!pearl || !playerFile) return;

        await app.fileManager.processFrontMatter(playerFile, fm => {
            fm.CURRENT_PEARL = String(pearl.pearl_id);
        });

        const view = app.workspace.getActiveViewOfType(MarkdownView);
        if (view?.previewMode) view.previewMode.rerender(true);
    }

    function addNavButton(parent, label, pearl, disabled) {
        const button = parent.createEl("button", { text: label });
        button.disabled = disabled;
        if (!disabled) button.onclick = () => selectPearl(pearl);
        return button;
    }

    addNavButton(nav, previous ? `← ${previous.pearl_id}` : "← Start", previous, !previous);
    const center = nav.createEl("span", { text: current.pearl_id });
    center.style.fontWeight = "600";
    addNavButton(nav, next ? `${next.pearl_id} →` : "End →", next, !next);

    // Render the complete Pearl inline using Dataview's native note-embed link.
    const pearlEmbed = dv.el("div", dv.fileLink(current.file.path, true), { cls: "marrow-series-pearl-embed" });
    pearlEmbed.style.marginTop = "1.25em";

    dv.header(4, "Series order");
    dv.table(
        ["#", "Pearl ID", "Pearl"],
        pages.map((p, i) => [i + 1, i === index ? `**${p.pearl_id}**` : p.pearl_id, p.file.link])
    );
}
```

### How to use

Use **← / →** to move through the series. Each step keeps you on this page and embeds the **entire original Pearl** here. The original Pearl file is not opened or modified.