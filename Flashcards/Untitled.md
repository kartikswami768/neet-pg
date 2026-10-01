---
SERIES_SUBJECT: Pharmacology
SERIES_TOPIC: Central and Peripheral Nervous System
CURRENT_PEARL: PM0123
---

# Pharmacology — Central and Peripheral Nervous System

```dataviewjs
// Whole-Pearl Series Player
// Uses the actual Marrow Pearl properties:
//   pearl_id
//   Subject
//   Topic
// Source folder:
//   Study Material/Pharmacology/Marrow Pearls

const SOURCE = '"Study Material/Pharmacology/Marrow Pearls"';
const SUBJECT = dv.current().SERIES_SUBJECT;
const TOPIC = dv.current().SERIES_TOPIC;
const CURRENT = String(dv.current().CURRENT_PEARL ?? '').trim();

function asArray(value) {
  if (Array.isArray(value)) return value;
  if (value == null) return [];
  return [value];
}

function pearlNumber(id) {
  const match = String(id ?? '').match(/(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

const pages = dv.pages(SOURCE)
  .where(p => {
    const subjects = asArray(p.Subject).map(String);
    const topics = asArray(p.Topic).map(String);
    return subjects.includes(SUBJECT) && topics.includes(TOPIC);
  })
  .sort((a, b) => pearlNumber(a.pearl_id) - pearlNumber(b.pearl_id))
  .array();

const index = pages.findIndex(p => String(p.pearl_id) === CURRENT);
const current = index >= 0 ? pages[index] : pages[0];
const previous = index > 0 ? pages[index - 1] : null;
const next = index >= 0 && index < pages.length - 1 ? pages[index + 1] : null;

const wrap = dv.container.createDiv({ cls: 'marrow-series-player' });

// Header
const meta = wrap.createDiv();
meta.style.textAlign = 'center';
meta.style.marginBottom = '0.75em';
meta.createSpan({ text: `${pages.length} Pearls` });
if (current) {
  meta.createSpan({ text: `  •  ${current.pearl_id}  •  ${index >= 0 ? index + 1 : 1}/${pages.length}` });
}

// Navigation bar
const nav = wrap.createDiv();
nav.style.display = 'flex';
nav.style.justifyContent = 'space-between';
nav.style.alignItems = 'center';
nav.style.gap = '0.75em';
nav.style.margin = '0.5em 0 1em';

const controllerFile = app.vault.getAbstractFileByPath(dv.current().file.path);

async function goTo(pearl) {
  if (!pearl || !controllerFile) return;
  await app.fileManager.processFrontMatter(controllerFile, fm => {
    fm.CURRENT_PEARL = String(pearl.pearl_id);
  });
  const view = app.workspace.getActiveViewOfType(MarkdownView);
  if (view?.previewMode) view.previewMode.rerender(true);
}

function addNavButton(parent, label, pearl, disabled = false) {
  const button = parent.createEl('button', { text: label });
  button.disabled = disabled;
  if (!disabled) button.onclick = () => goTo(pearl);
  return button;
}

addNavButton(nav, previous ? `← ${previous.pearl_id}` : '← Start', previous, !previous);

const center = nav.createSpan();
center.style.fontWeight = '600';
center.setText(current ? current.pearl_id : 'No Pearl found');

addNavButton(nav, next ? `${next.pearl_id} →` : 'End →', next, !next);

// Current Pearl contents
const content = wrap.createDiv();
content.style.borderTop = '1px solid var(--background-modifier-border)';
content.style.paddingTop = '1em';

if (!current) {
  content.createEl('p', {
    text: `No Marrow Pearls match Subject = "${SUBJECT}" and Topic = "${TOPIC}".`
  });
} else {
  const file = app.vault.getAbstractFileByPath(current.file.path);
  if (!file) {
    content.createEl('p', { text: `Could not find ${current.pearl_id}.` });
  } else {
    let markdown = await app.vault.cachedRead(file);
    // Remove YAML frontmatter so the Pearl displays as study content.
    markdown = markdown.replace(/^---\s*[\r\n]+[\s\S]*?[\r\n]+---\s*[\r\n]*/, '');
    await MarkdownRenderer.renderMarkdown(markdown, content, file.path, this);
  }
}

// Bottom navigation
const bottomNav = wrap.createDiv();
bottomNav.style.display = 'flex';
bottomNav.style.justifyContent = 'space-between';
bottomNav.style.alignItems = 'center';
bottomNav.style.gap = '0.75em';
bottomNav.style.margin = '1em 0 0.5em';

addNavButton(bottomNav, previous ? `← ${previous.pearl_id}` : '← Start', previous, !previous);
addNavButton(bottomNav, next ? `${next.pearl_id} →` : 'End →', next, !next);
```

> **How to use:** Change `CURRENT_PEARL` only when you want to start the series at a different Pearl. Then use the **Previous / Next** buttons to move through the series. Each step displays the **entire Pearl**, while the underlying Pearl files remain unchanged.
