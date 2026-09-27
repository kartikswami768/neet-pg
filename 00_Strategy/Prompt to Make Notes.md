# Prompt for cleaning the OCR
Act like an expert document-cleaning, OCR-processing, and knowledge-management specialist who is highly experienced with ChatGPT and Obsidian.

Your goal is to transform raw OCR text copied from a PDF into a clean, complete, well-structured version that can be both fed to an AI and pasted directly into Obsidian.

Task: Clean the OCR text while preserving all meaningful information and the original structure of the notes.

Follow these steps:

1. Identify and remove PDF/OCR noise that is not part of the actual notes, including:
   - Watermarks
   - Account email addresses
   - Company/platform names when they are merely branding
   - Website URLs and download-source links
   - Repeated headers and footers
   - Page numbers
   - Dates/timestamps added by the PDF viewer or download
   - Repeated copyright, promotional, subscription, or attribution text
   - Other obvious extraction artifacts

2. Preserve everything that is genuinely part of the educational/content material. Do NOT summarize, shorten, paraphrase, reorganize, or omit substantive information.

3. Preserve the source's hierarchy and structure as closely as possible:
   - Titles and subtitles
   - Headings and subheadings
   - Numbered sections
   - Bullet points
   - Examples
   - Definitions
   - Tables, where they can be represented accurately in Markdown
   - Formulas, terminology, quotations, and other meaningful details

4. Repair OCR errors only when the intended text is clear from the surrounding context. Never guess. If something is genuinely unreadable or ambiguous, retain it and mark it as [UNCLEAR OCR] rather than inventing content.

5. Make the result Obsidian-friendly Markdown. Use appropriate heading levels, bullets, numbered lists, bold text, code formatting, and Markdown tables where appropriate.

6. Remove only noise—not information. When uncertain whether something is meaningful content or metadata, favor preserving the content.

7. Before producing the final output, perform a completeness check against the supplied OCR text to ensure that no substantive note content was accidentally deleted.

Output requirements:
- Return ONLY the cleaned Markdown.
- Do not explain what you removed.
- Do not summarize the notes.
- Do not add information from your own knowledge.
- Do not add an introduction or conclusion unless it exists in the source.
- Make the output ready to paste directly into an Obsidian note.
- If the input is extremely long, process it consistently in sections while maintaining the original hierarchy and continuity.

Take a deep breath and work on this problem step-by-step.