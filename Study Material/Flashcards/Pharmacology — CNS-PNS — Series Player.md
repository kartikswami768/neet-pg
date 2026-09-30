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
    if (value?.values) return value.values.map(v => String(v).trim());
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

    const notePath = dv.current().file.path;
    const playerFile = app.vault.getAbstractFileByPath(notePath);

    async function selectPearl(pearl) {
        if (!pearl) return;

        if (playerFile) {
            await app.fileManager.processFrontMatter(playerFile, fm => {
                fm.CURRENT_PEARL = String(pearl.pearl_id);
            });
        }

        // Open the complete Pearl as a separate tab so the Series Player
        // remains available for the next/previous navigation.
        const leaf = app.workspace.getLeaf(true);
        await leaf.openFile(pearl.file);
    }

    function addButton(parent, label, pearl, disabled) {
        const button = parent.createEl("button", { text: label });
        button.disabled = disabled;
        if (!disabled) button.onclick = () => selectPearl(pearl);
        return button;
    }

    addButton(nav, previous ? `← ${previous.pearl_id}` : "← Start", previous, !previous);

    const openButton = nav.createEl("button", { text: `Open ${current.pearl_id}` });
    openButton.onclick = () => selectPearl(current);

    addButton(nav, next ? `${next.pearl_id} →` : "End →", next, !next);

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
2. Tap **Open** on the current Pearl, or use **← / →** to move through the series.
3. Each navigation action opens the **entire original Pearl file**; the Pearl itself is not modified.
4. The Player remembers the last Pearl selected in `CURRENT_PEARL`.
