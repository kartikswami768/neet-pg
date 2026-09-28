import re
import html
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parents[1]
NOTE = ROOT / "Study Material/Notes/Forensic/forensic_medicine_test_27_sep_2026/forensic_medicine_test_27_sep_2026.md"
OUT_DIR = ROOT / "_pdf_build"
ASSET_DIR = OUT_DIR / "assets"
HTML_OUT = OUT_DIR / "forensic_medicine_test_27_sep_2026.html"
PDF_OUT = OUT_DIR / "forensic_medicine_test_27_sep_2026.pdf"

OUT_DIR.mkdir(exist_ok=True)
ASSET_DIR.mkdir(exist_ok=True)

text = NOTE.read_text(encoding="utf-8")

if text.startswith("---"):
    parts = text.split("---", 2)
    body = parts[2].lstrip()
else:
    body = text

title = "Forensic Medicine Test - 27 September 2026"

def wiki_link(match):
    inner = match.group(1)
    inner = inner.split("|", 1)[-1]
    inner = inner.split("#", 1)[-1] if "#" in inner else inner
    return inner.replace("_", " ")

body = re.sub(r"!?\\[\\[([^\\]]+)\\]\\]", wiki_link, body)

def img_path(match):
    alt = match.group(1)
    path = match.group(2)
    name = Path(path).name
    return f"![{alt}](assets/{html.escape(name)})"

body = re.sub(r"!\\[([^\\]]*)\\]\\((assets/[^)]+)\\)", img_path, body)

refs = sorted(set(re.findall(r"\\]\\((assets/[^)]+)\\)", body)))
source_asset_root = NOTE.parent / "assets"
for ref in refs:
    src = source_asset_root / Path(ref).name
    if src.exists():
        (ASSET_DIR / src.name).write_bytes(src.read_bytes())

extensions = ["tables", "fenced_code", "sane_lists", "nl2br"]
html_body = markdown.markdown(body, extensions=extensions)

css = r"""
@page {
  size: A4;
  margin: 18mm 15mm 18mm 15mm;
}

:root {
  --paper: #d9dce7;
  --ink: #171923;
  --muted: #555b6c;
  --purple: #8852e8;
  --purple-dark: #6c37c9;
  --line: #aeb2c0;
  --panel: rgba(255,255,255,.42);
  --panel-strong: rgba(255,255,255,.56);
}

* { box-sizing: border-box; }

html, body {
  padding: 0;
  margin: 0;
  background: var(--paper);
  color: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11.5pt;
  line-height: 1.48;
}

body {
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

main {
  max-width: 100%;
  margin: 0 auto;
}

h1 {
  font-size: 25pt;
  line-height: 1.12;
  margin: 0 0 18px;
  font-weight: 800;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 17pt;
  line-height: 1.18;
  margin: 25px 0 12px;
  font-weight: 800;
  break-after: avoid;
}

h3 {
  font-size: 14pt;
  line-height: 1.25;
  margin: 20px 0 8px;
  font-weight: 800;
  break-after: avoid;
}

p { margin: 8px 0; }
strong { font-weight: 800; }

ul, ol {
  margin: 8px 0 11px 25px;
  padding-left: 10px;
}

li { margin: 4px 0; }
li::marker { color: var(--purple); font-weight: 700; }

blockquote {
  margin: 10px 0;
  padding: 8px 14px;
  border-left: 4px solid var(--purple);
  background: var(--panel);
  border-radius: 0 10px 10px 0;
}

hr {
  border: 0;
  border-top: 1px solid var(--line);
  margin: 20px 0;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin: 13px 0 15px;
  background: var(--panel-strong);
  border: 1px solid #9da2b1;
  border-radius: 13px;
  overflow: hidden;
  break-inside: avoid;
}

thead th {
  background: linear-gradient(180deg, #9557ed, #8248df);
  color: #171123;
  font-weight: 800;
  text-align: left;
  padding: 7px 9px;
  border-right: 1px solid rgba(63,44,97,.24);
  border-bottom: 1px solid #7b45cb;
}

tbody td {
  padding: 6px 9px;
  border-right: 1px solid #aeb2bf;
  border-bottom: 1px solid #aeb2bf;
  vertical-align: top;
}

tbody tr:last-child td { border-bottom: 0; }
tbody td:last-child, thead th:last-child { border-right: 0; }

img {
  display: block;
  max-width: 92%;
  height: auto;
  margin: 12px auto 15px;
  border-radius: 12px;
  border: 1px solid #afb3c0;
  background: rgba(255,255,255,.32);
  padding: 5px;
  break-inside: avoid;
}

code {
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: .92em;
  background: rgba(255,255,255,.45);
  padding: 1px 4px;
  border-radius: 4px;
}

pre {
  padding: 11px 13px;
  border-radius: 10px;
  background: rgba(20,22,30,.08);
  overflow-wrap: anywhere;
  break-inside: avoid;
}

a {
  color: var(--purple-dark);
  text-decoration: none;
}

.title-card {
  background: rgba(255,255,255,.32);
  border: 1px solid #b8bbc8;
  border-radius: 16px;
  padding: 18px 20px;
  margin-bottom: 16px;
  box-shadow: 0 3px 12px rgba(61,54,87,.07);
}

.title-card .meta {
  margin-top: 5px;
  color: var(--muted);
  font-size: 10pt;
}

h2, h3, table, blockquote, img {
  orphans: 3;
  widows: 3;
}
"""

html_doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>{html.escape(title)}</title>
<style>{css}</style>
</head>
<body>
<main>
  <section class="title-card">
    <h1>{html.escape(title)}</h1>
    <div class="meta">Forensic Medicine &amp; Toxicology · 80-question review · Obsidian Minimal-inspired lavender palette</div>
  </section>
  {html_body}
</main>
</body>
</html>
"""

HTML_OUT.write_text(html_doc, encoding="utf-8")
print(PDF_OUT)
