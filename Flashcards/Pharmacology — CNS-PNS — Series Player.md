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
const START = String(dv.current().CURRENT_PEARL ?? "").trim();

function toStrings(value) {
    if (value == null) return [];
    if (Array.isArray(value)) return value.map(v => String(v).trim());
    if (value?.values) {
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
    let index = pages.findIndex(p => String(p.pearl_id).trim() === START);
    if (index < 0) index = 0;

    dv.header(3, `${pages.length} Marrow Pearls`);

    const status = dv.paragraph("");
    const nav = dv.container.createDiv({ cls: "marrow-series-nav" });
    nav.style.display = "flex";
    nav.style.justifyContent = "space-between";
    nav.style.alignItems = "center";
    nav.style.gap = "0.75em";
    nav.style.margin = "1em 0";

    const pearlContainer = dv.container.createDiv({ cls: "marrow-series-pearl-embed" });
    pearlContainer.style.marginTop = "1.25em";

    const center = nav.createEl("span");
    center.style.fontWeight = "600";

    const previousButton = nav.createEl("button");
    const nextButton = nav.createEl("button");

    // Render only the changed Pearl. We do NOT write to frontmatter and do NOT rerun the whole DataviewJS block.
    async function renderPearl(pearl) {
        if (!pearl) return;

        pearlContainer.replaceChildren();

        await dv.api.renderValue(
            dv.fileLink(pearl.file.path, true),
            pearlContainer,
            dv.component,
            dv.currentFilePath
        );
    }

    function updateNavigation() {
        const current = pages[index];
        const previous = index > 0 ? pages[index - 1] : null;
        const next = index < pages.length - 1 ? pages[index + 1] : null;

        status.innerHTML = `<strong>Current:</strong> ${current.pearl_id} · ${index + 1}/${pages.length}`;
        previousButton.textContent = previous ? `← ${previous.pearl_id}` : "← Start";
        previousButton.disabled = !previous;
        nextButton.textContent = next ? `${next.pearl_id} →` : "End →";
        nextButton.disabled = !next;
        center.textContent = current.pearl_id;
    }

    previousButton.onclick = async () => {
        if (index <= 0) return;
        index -= 1;
        updateNavigation();
        await renderPearl(pages[index]);
    };

    nextButton.onclick = async () => {
        if (index >= pages.length - 1) return;
        index += 1;
        updateNavigation();
        await renderPearl(pages[index]);
    };

    dv.header(4, "Series order");
    dv.table(
        ["#", "Pearl ID", "Pearl"],
        pages.map((p, i) => [
            i + 1,
            i === index ? `**${p.pearl_id}**` : p.pearl_id,
            p.file.link
        ])
    );

    updateNavigation();
    await renderPearl(pages[index]);
}
```

### How to use

Use **← / →** to move through the series. The Player stays in place and replaces only the embedded Pearl, so navigation does not rewrite the Player file or rerender the entire Dataview block.