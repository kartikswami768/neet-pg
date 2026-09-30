---
type: Series Player
---

# Trial Series Player

Select a **Subject** and then a **Topic**. The matching Marrow Pearls will be generated automatically and can be reviewed as a smooth, whole-Pearl series.

```dataviewjs
const SOURCE = '"Study Material/Flashcards/Marrow Pearls"';

function toStrings(value) {
    if (value == null) return [];
    if (Array.isArray(value)) return value.map(v => String(v).trim()).filter(Boolean);
    if (value?.values) {
        const values = Array.isArray(value.values) ? value.values : Array.from(value.values);
        return values.map(v => String(v).trim()).filter(Boolean);
    }
    return [String(value).trim()].filter(Boolean);
}

function pearlNumber(id) {
    const match = String(id ?? "").match(/(\d+)/);
    return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function sortPearls(a, b) {
    return pearlNumber(a.pearl_id) - pearlNumber(b.pearl_id);
}

const allPages = dv.pages(SOURCE).array();

// Build Subject -> Topics from the actual Pearl metadata.
const subjectMap = new Map();

for (const page of allPages) {
    const subjects = toStrings(page.Subject);
    const topics = toStrings(page.Topic);

    for (const subject of subjects) {
        if (!subjectMap.has(subject)) subjectMap.set(subject, new Set());
        const topicSet = subjectMap.get(subject);
        for (const topic of topics) topicSet.add(topic);
    }
}

const root = dv.container.createDiv({ cls: "trial-series-player" });

// -----------------------------
// Controls
// -----------------------------
const controls = root.createDiv({ cls: "trial-series-controls" });
controls.style.display = "grid";
controls.style.gridTemplateColumns = "1fr 1fr";
controls.style.gap = "0.75em";
controls.style.margin = "1em 0";

function makeSelect(parent, labelText) {
    const box = parent.createDiv();
    const label = box.createEl("label", { text: labelText });
    label.style.display = "block";
    label.style.fontWeight = "600";
    label.style.marginBottom = "0.35em";

    const select = box.createEl("select");
    select.style.width = "100%";
    return select;
}

const subjectSelect = makeSelect(controls, "Subject");
const topicSelect = makeSelect(controls, "Topic");

function addOption(select, value, label = value) {
    select.createEl("option", { text: label, value });
}

addOption(subjectSelect, "", "Select Subject");

const subjects = [...subjectMap.keys()].sort((a, b) => a.localeCompare(b));
for (const subject of subjects) addOption(subjectSelect, subject);

addOption(topicSelect, "", "Select Topic");

const status = root.createDiv({ cls: "trial-series-status" });
status.style.margin = "0.75em 0";
status.style.fontWeight = "600";

const nav = root.createDiv({ cls: "trial-series-nav" });
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.gap = "0.75em";
nav.style.margin = "1em 0";

const pearlContainer = root.createDiv({ cls: "trial-series-pearl-embed" });
pearlContainer.style.marginTop = "1.25em";

const orderContainer = root.createDiv({ cls: "trial-series-order" });

let pages = [];
let index = 0;

const previousButton = nav.createEl("button", { text: "← Previous" });
const center = nav.createEl("span", { text: "No series selected" });
center.style.fontWeight = "600";
const nextButton = nav.createEl("button", { text: "Next →" });

previousButton.disabled = true;
nextButton.disabled = true;

function clearElement(el) {
    el.replaceChildren();
}

function currentPearl() {
    return pages[index] ?? null;
}

function updateNavigation() {
    const current = currentPearl();
    const previous = index > 0 ? pages[index - 1] : null;
    const next = index < pages.length - 1 ? pages[index + 1] : null;

    previousButton.textContent = previous ? `← ${previous.pearl_id}` : "← Start";
    nextButton.textContent = next ? `${next.pearl_id} →` : "End →";
    previousButton.disabled = !previous;
    nextButton.disabled = !next;
    center.textContent = current ? `${current.pearl_id} · ${index + 1}/${pages.length}` : "No series selected";
}

async function renderCurrentPearl() {
    clearElement(pearlContainer);

    const current = currentPearl();
    if (!current) return;

    await dv.api.renderValue(
        dv.fileLink(current.file.path, true),
        pearlContainer,
        dv.component,
        dv.currentFilePath
    );
}

function renderOrder() {
    clearElement(orderContainer);

    if (!pages.length) return;

    const heading = orderContainer.createEl("h4", { text: "Series order" });

    const table = orderContainer.createEl("table");
    const thead = table.createEl("thead");
    const headerRow = thead.createEl("tr");
    for (const text of ["#", "Pearl ID", "Pearl"]) {
        headerRow.createEl("th", { text });
    }

    const tbody = table.createEl("tbody");

    pages.forEach((page, i) => {
        const row = tbody.createEl("tr");
        row.createEl("td", { text: String(i + 1) });

        const idCell = row.createEl("td");
        idCell.createEl("a", { text: page.pearl_id });
        idCell.querySelector("a").onclick = (event) => {
            event.preventDefault();
            index = i;
            updateNavigation();
            renderCurrentPearl();
        };

        const titleCell = row.createEl("td");
        titleCell.createEl("span", { text: page.file.name.replace(/\.md$/, "") });

        if (i === index) {
            row.style.fontWeight = "700";
        }
    });
}

async function generateSeries() {
    const subject = subjectSelect.value;
    const topic = topicSelect.value;

    pages = [];
    index = 0;
    clearElement(pearlContainer);
    clearElement(orderContainer);

    if (!subject || !topic) {
        status.textContent = "Select a Subject and Topic.";
        updateNavigation();
        return;
    }

    pages = allPages
        .filter(page => toStrings(page.Subject).includes(subject) && toStrings(page.Topic).includes(topic))
        .sort(sortPearls);

    if (!pages.length) {
        status.textContent = `No Marrow Pearls found for ${subject} + ${topic}.`;
        updateNavigation();
        return;
    }

    status.textContent = `${pages.length} Marrow Pearls · ${subject} + ${topic}`;
    updateNavigation();
    renderOrder();
    await renderCurrentPearl();
}

function updateTopicsForSubject(subject) {
    clearElement(topicSelect);
    addOption(topicSelect, "", subject ? "Select Topic" : "Select Subject first");

    const topics = subjectMap.get(subject) ?? new Set();
    for (const topic of [...topics].sort((a, b) => a.localeCompare(b))) {
        addOption(topicSelect, topic);
    }

    pages = [];
    index = 0;
    status.textContent = subject ? "Now select a Topic." : "Select a Subject and Topic.";
    clearElement(pearlContainer);
    clearElement(orderContainer);
    updateNavigation();
}

subjectSelect.onchange = () => updateTopicsForSubject(subjectSelect.value);
topicSelect.onchange = () => generateSeries();

previousButton.onclick = async () => {
    if (index <= 0) return;
    index -= 1;
    updateNavigation();
    renderOrder();
    await renderCurrentPearl();
};

nextButton.onclick = async () => {
    if (index >= pages.length - 1) return;
    index += 1;
    updateNavigation();
    renderOrder();
    await renderCurrentPearl();
};

status.textContent = "Select a Subject and Topic.";
```

### How it works

- Choose a **Subject**.
- The **Topic** menu is automatically limited to Topics that occur under that Subject.
- Choose a **Topic**.
- The matching Pearls are generated and sorted by `pearl_id`.
- Use **Previous / Next** to read each complete Pearl without leaving this Player.

No Pearl frontmatter is modified by this Trial Player.