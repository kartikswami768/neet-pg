---
type: Series Player
---

# Trial Series Player

Choose how you want to slice the Marrow Pearls. The selected Pearls are then shown as a smooth whole-Pearl series.

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

// The Marrow Pearl metadata currently has Subject + Topic, but no separate
// ORGAN_SYSTEM property. Organ-system mode therefore matches a curated set
// of system labels/synonyms against the existing Topic property.
const ORGAN_SYSTEMS = {
    "Cardiovascular": ["Cardiovascular System", "CVS"],
    "Respiratory": ["Respiratory System"],
    "Renal / Urinary": ["Renal System"],
    "Gastrointestinal": ["Gastrointestinal System"],
    "Endocrine": ["Endocrine System"],
    "Nervous System": [
        "Central and Peripheral Nervous System",
        "Central Nervous System",
        "Nervous System",
        "CNS"
    ],
    "Hematology / Blood": ["Hematology", "Blood Disorders"],
    "Reproductive": ["Reproductive System", "Reproductive Medicine", "Obstetrics & Gynaecology"],
    "Musculoskeletal": ["Musculoskeletal System"],
    "Integumentary / Skin": ["Integumentary System", "Skin"]
};

const allSubjects = [...new Set(allPages.flatMap(p => toStrings(p.Subject)))].sort((a, b) => a.localeCompare(b));
const allTopics = [...new Set(allPages.flatMap(p => toStrings(p.Topic)))].sort((a, b) => a.localeCompare(b));

function topicsForSubject(subject) {
    if (!subject || subject === "__ALL__") return allTopics;
    return [...new Set(
        allPages
            .filter(p => toStrings(p.Subject).includes(subject))
            .flatMap(p => toStrings(p.Topic))
    )].sort((a, b) => a.localeCompare(b));
}

const root = dv.container.createDiv({ cls: "trial-series-player" });

// =============================
// Filter controls
// =============================
const controls = root.createDiv({ cls: "trial-series-controls" });
controls.style.display = "grid";
controls.style.gridTemplateColumns = "1fr 1fr";
controls.style.gap = "0.75em";
controls.style.margin = "1em 0";

function makeField(parent, labelText) {
    const box = parent.createDiv();
    const label = box.createEl("label", { text: labelText });
    label.style.display = "block";
    label.style.fontWeight = "600";
    label.style.marginBottom = "0.35em";
    const select = box.createEl("select");
    select.style.width = "100%";
    return { box, select };
}

const modeField = makeField(controls, "Browse by");
const modeSelect = modeField.select;

function addOption(select, value, label = value) {
    select.createEl("option", { text: label, value });
}

addOption(modeSelect, "all", "All Pearls");
addOption(modeSelect, "subject", "Subject → optional Topic(s)");
addOption(modeSelect, "system", "Organ System");
addOption(modeSelect, "topics", "Topic(s) across all Subjects");

const subjectField = makeField(controls, "Subject");
const subjectSelect = subjectField.select;
addOption(subjectSelect, "__ALL__", "All Subjects");
for (const subject of allSubjects) addOption(subjectSelect, subject);

const systemField = makeField(controls, "Organ System");
const systemSelect = systemField.select;
addOption(systemSelect, "", "Select Organ System");
for (const system of Object.keys(ORGAN_SYSTEMS)) addOption(systemSelect, system);

const matchField = makeField(controls, "Topic matching");
const matchSelect = matchField.select;
addOption(matchSelect, "any", "Any selected topic");
addOption(matchSelect, "all", "All selected topics");

const topicPanel = root.createDiv({ cls: "trial-series-topic-panel" });
topicPanel.style.margin = "0.75em 0 1em";

const topicHeader = topicPanel.createDiv();
topicHeader.style.display = "flex";
topicHeader.style.justifyContent = "space-between";
topicHeader.style.alignItems = "center";
topicHeader.style.gap = "0.5em";

topicHeader.createEl("strong", { text: "Topics" });

const topicActions = topicHeader.createDiv();
const allTopicsButton = topicActions.createEl("button", { text: "All Topics" });
const clearTopicsButton = topicActions.createEl("button", { text: "Clear Filter" });

const topicList = topicPanel.createDiv();
topicList.style.display = "grid";
topicList.style.gridTemplateColumns = "repeat(auto-fit, minmax(220px, 1fr))";
topicList.style.gap = "0.25em 0.75em";
topicList.style.maxHeight = "260px";
topicList.style.overflowY = "auto";
topicList.style.padding = "0.5em";
topicList.style.border = "1px solid var(--background-modifier-border)";
topicList.style.borderRadius = "8px";

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

const previousButton = nav.createEl("button", { text: "← Previous" });
const center = nav.createEl("span", { text: "No series selected" });
center.style.fontWeight = "600";
const nextButton = nav.createEl("button", { text: "Next →" });

let pages = [];
let index = 0;

function clearElement(el) {
    el.replaceChildren();
}

function selectedTopics() {
    return [...topicList.querySelectorAll("input[type=checkbox][data-topic]:checked")].map(input => input.dataset.topic);
}

function setSelectVisibility(field, visible) {
    field.box.style.display = visible ? "" : "none";
}

function updateNavigation() {
    const current = pages[index] ?? null;
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

    const current = pages[index];
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

    orderContainer.createEl("h4", { text: "Series order" });

    const table = orderContainer.createEl("table");
    const thead = table.createEl("thead");
    const headerRow = thead.createEl("tr");
    for (const text of ["#", "Pearl ID", "Pearl"]) headerRow.createEl("th", { text });

    const tbody = table.createEl("tbody");
    pages.forEach((page, i) => {
        const row = tbody.createEl("tr");
        row.createEl("td", { text: String(i + 1) });

        const idCell = row.createEl("td");
        const link = idCell.createEl("a", { text: page.pearl_id });
        link.href = "#";
        link.onclick = async (event) => {
            event.preventDefault();
            index = i;
            updateNavigation();
            await renderCurrentPearl();
        };

        row.createEl("td", { text: page.file.name.replace(/\.md$/, "") });
        if (i === index) row.style.fontWeight = "700";
    });
}

function renderTopicChoices(topics, checkedTopics = []) {
    clearElement(topicList);

    if (!topics.length) {
        topicList.createEl("span", { text: "No topics available." });
        return;
    }

    for (const topic of topics) {
        const label = topicList.createEl("label");
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.style.gap = "0.45em";

        const checkbox = label.createEl("input", { type: "checkbox" });
        checkbox.dataset.topic = topic;
        checkbox.checked = checkedTopics.includes(topic);

        const text = label.createEl("span", { text: topic });
        checkbox.addEventListener("change", generateSeries);
    }
}

function updateControlLayout() {
    const mode = modeSelect.value;

    setSelectVisibility(subjectField, mode === "subject");
    setSelectVisibility(systemField, mode === "system");
    setSelectVisibility(matchField, mode === "subject" || mode === "topics");
    topicPanel.style.display = (mode === "subject" || mode === "topics") ? "" : "none";

    if (mode === "subject") {
        renderTopicChoices(topicsForSubject(subjectSelect.value));
    } else if (mode === "topics") {
        renderTopicChoices(allTopics);
    } else {
        clearElement(topicList);
    }
}

function pageMatchesTopics(page, topics, matchMode) {
    if (!topics.length) return true;
    const pageTopics = new Set(toStrings(page.Topic));
    if (matchMode === "all") return topics.every(topic => pageTopics.has(topic));
    return topics.some(topic => pageTopics.has(topic));
}

function generateSeries() {
    const mode = modeSelect.value;
    const subject = subjectSelect.value;
    const system = systemSelect.value;
    const topics = selectedTopics();
    const matchMode = matchSelect.value;

    let result = allPages.slice();

    if (mode === "subject") {
        if (subject !== "__ALL__") {
            result = result.filter(page => toStrings(page.Subject).includes(subject));
        }
        result = result.filter(page => pageMatchesTopics(page, topics, matchMode));
    } else if (mode === "system") {
        const labels = ORGAN_SYSTEMS[system] ?? [];
        result = result.filter(page => {
            const pageTopics = toStrings(page.Topic);
            return labels.some(label => pageTopics.includes(label));
        });
    } else if (mode === "topics") {
        result = result.filter(page => pageMatchesTopics(page, topics, matchMode));
    }

    pages = result.sort(sortPearls);
    index = 0;

    clearElement(pearlContainer);
    clearElement(orderContainer);

    if (mode === "all") {
        status.textContent = `${pages.length} Marrow Pearls · All Pearls`;
    } else if (mode === "subject") {
        const subjectName = subject === "__ALL__" ? "All Subjects" : subject;
        const topicText = topics.length ? ` · ${topics.length} topic${topics.length === 1 ? "" : "s"} (${matchMode})` : " · All topics";
        status.textContent = `${pages.length} Marrow Pearls · ${subjectName}${topicText}`;
    } else if (mode === "system") {
        status.textContent = `${pages.length} Marrow Pearls · Organ System: ${system || "None selected"}`;
    } else {
        status.textContent = `${pages.length} Marrow Pearls · ${topics.length} selected topic${topics.length === 1 ? "" : "s"} (${matchMode})`;
    }

    updateNavigation();
    renderOrder();
    renderCurrentPearl();
}

function updateTopicsForSubject() {
    renderTopicChoices(topicsForSubject(subjectSelect.value));
    generateSeries();
}

modeSelect.onchange = () => {
    updateControlLayout();
    generateSeries();
};

subjectSelect.onchange = updateTopicsForSubject;
systemSelect.onchange = generateSeries;
matchSelect.onchange = generateSeries;

allTopicsButton.onclick = () => {
    // Empty topic selection means "all topics"; this avoids the
    // "All selected topics" matcher accidentally requiring every topic.
    topicList.querySelectorAll("input[type=checkbox][data-topic]").forEach(input => input.checked = false);
    generateSeries();
};

clearTopicsButton.onclick = () => {
    topicList.querySelectorAll("input[type=checkbox][data-topic]").forEach(input => input.checked = false);
    generateSeries();
};

previousButton.onclick = async () => {
    if (index <= 0) return;
    index -= 1;
    updateNavigation();
    await renderCurrentPearl();
};

nextButton.onclick = async () => {
    if (index >= pages.length - 1) return;
    index += 1;
    updateNavigation();
    await renderCurrentPearl();
};

// Initial state
setSelectVisibility(subjectField, true);
updateControlLayout();
generateSeries();
```

## Available study modes

**All Pearls** — browse the complete Marrow Pearl collection.

**Subject → optional Topic(s)** — choose one Subject, then:
- leave Topics empty to study the entire Subject;
- use **All Topics** to remove the Topic restriction;
- select one Topic;
- select multiple Topics and choose **Any** or **All** matching.

**Organ System** — choose an organ-system view independently of Subject. This is derived from your existing `Topic` metadata; the Pearls do not currently need an additional `ORGAN_SYSTEM` property.

**Topic(s) across all Subjects** — useful when you want, for example, every Pearl tagged with a particular topic regardless of which Subject it belongs to.

The original Pearl files and their YAML frontmatter are not modified by this Player.