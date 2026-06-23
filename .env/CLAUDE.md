# University QOL Applications

Study assistance project for exam generation, module summaries, and lecture content extraction.

---

## Project Structure

> **Reorganised 2026-06-20.** The project now splits into two top-level trees:
> `.env/` = raw sources, coursework, build tooling, and this file (the *workshop*, not shipped);
> `.src/` = the shipped study web app, organised by subject under `.src/.main/<SUBJECT>/`.
> Each subject's all-in-one revision page is `<subject>_review.html` ("Knowledge Summary").
> A root navbar `index.html` that ties the subjects together is planned but **not built yet**
> (blueprint in `project_structure.md`).

```
University_QOL_Applications/
├── project_structure.md            # Target navbar-app blueprint (aspirational — not the live state)
│
├── .env/                           # WORKSHOP: raw sources, coursework, tooling (not shipped)
│   ├── CLAUDE.md                   # ← this file
│   ├── package.json / package-lock.json   # node deps (mammoth, pdfjs-dist); run node scripts from here
│   ├── tools/                      # Shared extraction scripts (run with node from .env/)
│   │   ├── extract_docx.js         # .docx → .md (uses mammoth)
│   │   ├── extract_pptx.js         # all .pptx in a folder → one .md (no npm)
│   │   ├── extract_pptx_full.js    # per-deck .md + embedded images + slide map (no npm)
│   │   ├── extract_pdf.js          # .pdf → .md (zlib, no npm)
│   │   ├── extract_pdf_pdfjs.js    # .pdf → .md high-fidelity (needs pdfjs-dist)
│   │   ├── read_xlsx.js            # .xlsx → console/.md (no npm)
│   │   └── extract_all.js          # batch driver
│   ├── docs/
│   │   ├── revision-app-template/BUILD_GUIDE.md   # recipe for a *_review.html companion
│   │   └── superpowers/specs/                     # design specs
│   ├── AFDM/                       # raw AFDM coursework (60% set exercise, tutorials, mock-test solutions)
│   ├── FIM/                        # raw FIM coursework (40% assignment, tutorials, mock tests)
│   ├── PSBF/Odyssey Plan/          # Odyssey-plan career web app (html/css/js)
│   └── Tutor/                      # SEPARATE grade-5 tutoring project (Toán/Tiếng Anh, Vietnamese)
│       └── Giao_Trinh_Toan/        # 76 lesson .md (Buoi_01..76) + De_Thi/
│
└── .src/                           # SHIPPED: the study web app, organised by subject
    ├── .main/                      # main subject pages
    │   ├── AFDM/                   # Accounting and Finance for Decision Making
    │   │   ├── afdm_review.html             # Knowledge Summary (all-in-one)
    │   │   ├── AFDM_Mock_Tests/Mock_Test/   # Mock_Test_3..6 (+ _Answers)
    │   │   └── Lecture_Contents/
    │   │       ├── AFDM_Formulas_Summary/           # Formula + Investment Evaluation pages
    │   │       ├── Extracted_Lecture_Contents_AFDM/ # Lecture 02–13 *.md
    │   │       └── Sources/                         # *.pptx decks
    │   ├── EBF/                    # Economics for Banking and Finance
    │   │   ├── ebf_review.html              # Knowledge Summary ("Marginal Notes", 21 lectures)
    │   │   ├── Extracted_Lecture_Contents/  # EBF-W1..W21 *.md + 00_INDEX.md
    │   │   ├── Extracted_Images/W1..W21/    # ~1,430 figures (+ _INDEX.md per week)
    │   │   └── Lecture_Contents/            # EBF-W*.pptx source decks
    │   ├── FIM/                    # Financial Institutions and Markets
    │   │   ├── fim_review.html              # Knowledge Summary ("The Ledger")
    │   │   ├── FIM_Semester2_Study_Guide.html · FIM_Study_Summary.md
    │   │   ├── Extracted_Lectures_Contents/{Semester-1,Semester-2}/  # *_extracted.md
    │   │   └── Sources/{Semester-1,Semester-2}/                      # *.pdf / *.pptx
    │   └── PSBF/                   # Professional Skills for Banking and Finance (review page not built yet)
    │       ├── 34%/                         # Odyssey/skills coursework + student-guides/
    │       └── Statistics_Assignment/       # data, figures/tables (svg+png), extracted md, Lecture_Contents/
    └── .sub/                       # sub-pages (placeholder — empty)
```

### Path note (post-restructure)

The command examples further down still say `tools/…` and `Contents/<SUBJECT>/…` (pre-2026-06-20 paths). Translate them:

| Old path | Now |
|---|---|
| `tools/<script>.js` | `.env/tools/<script>.js` (run `node` from `.env/`) |
| `Contents/<SUBJECT>/` raw decks | `.env/<SUBJECT>/` (coursework) **and** `.src/.main/<SUBJECT>/Lecture_Contents/` or `Sources/` (decks) |
| `Contents/<SUBJECT>/Extracted_*` | `.src/.main/<SUBJECT>/Extracted_*` |
| generated `<MODULE>_*.html` | `.src/.main/<SUBJECT>/` (the `<subject>_review.html` is the all-in-one summary) |

`node_modules`/`package.json` live in `.env/`, so resolve mammoth/pdfjs-dist from there.

---

## File Extraction Pipeline

Claude cannot read binary files directly (docx, pptx, xlsx, pdf). Extract content to plaintext/markdown first.

### Quick Reference

| File Type | Extraction Method | Output Format |
|-----------|------------------|---------------|
| `.docx` | `node tools/extract_docx.js` (uses existing mammoth) | `.md` |
| `.pptx` | `node tools/extract_pptx.js` (no npm needed) | `.md` |
| `.xlsx` | `node tools/read_xlsx.js` (no npm needed) | `.md` or console |
| `.pdf` | `node tools/extract_pdf.js` (no npm needed) | `.md` |

### DOCX Extraction

Uses mammoth already installed at `Contents/AFDM/Lecture_Contents/node_modules/` — no new install needed.

```bash
# Run from project root
node tools/extract_docx.js <folder-or-file.docx> [output.md]

# Examples:
node tools/extract_docx.js "Contents/FIM/MCQ-Topic-Week-1-Questions.docx"
node tools/extract_docx.js "Contents/FIM" "Contents/FIM/FIM_docs_extracted.md"
```

**Notes:**
- Accepts a single `.docx` file or a folder (extracts all `.docx` in it)
- Resolves mammoth from existing project installs — no `npm install` required
- Single file output: `<file>_extracted.md` next to source
- Folder output: `<folder>/../<FolderName>_extracted.md`

### PPTX Extraction (Automated — Preferred)

PPTX files are ZIP archives containing XML. Use the script below — no npm install required.

**extract_pptx.js:**
```javascript
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

// See tools/extract_pptx.js — accepts target folder and output path as CLI args
const lectureDir = path.resolve(process.argv[2] || '.');
const outputFile = path.resolve(process.argv[3] || path.join(lectureDir, '..', path.basename(lectureDir) + '_extracted.md'));

function extractPptx(filePath) {
    const tmpDir = path.join(os.tmpdir(), 'pptx_extract_' + Date.now());
    fs.mkdirSync(tmpDir, { recursive: true });

    // PowerShell Expand-Archive only accepts .zip — copy first
    const zipPath = filePath + '.zip';
    fs.copyFileSync(filePath, zipPath);
    execSync(
        `powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${tmpDir}' -Force"`,
        { stdio: 'pipe' }
    );
    fs.unlinkSync(zipPath);

    const slidesDir = path.join(tmpDir, 'ppt', 'slides');
    if (!fs.existsSync(slidesDir)) return '';

    const slideFiles = fs.readdirSync(slidesDir)
        .filter(f => f.match(/^slide\d+\.xml$/))
        .sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));

    let content = '';
    for (const slideFile of slideFiles) {
        const xml = fs.readFileSync(path.join(slidesDir, slideFile), 'utf8');
        const texts = [];
        const regex = /<a:t[^>]*>([^<]*)<\/a:t>/g;
        let m;
        while ((m = regex.exec(xml)) !== null) {
            const t = m[1].trim();
            if (t) texts.push(t);
        }
        if (texts.length > 0) content += texts.join(' ') + '\n\n---\n\n';
    }

    fs.rmSync(tmpDir, { recursive: true, force: true });
    return content;
}

const pptxFiles = fs.readdirSync(lectureDir)
    .filter(f => f.endsWith('.pptx'))
    .sort();

let markdown = '# <MODULE> Lectures — Extracted Content\n\n';
markdown += `*Extracted: ${new Date().toISOString().slice(0, 10)}*\n\n---\n\n`;

for (const file of pptxFiles) {
    console.log(`Extracting: ${file}`);
    markdown += `## ${file.replace('.pptx', '')}\n\n`;
    markdown += extractPptx(path.join(lectureDir, file)) || '*No text content extracted.*\n\n';
}

fs.writeFileSync(outputFile, markdown, 'utf8');
console.log(`\nDone. Output: ${outputFile}`);
```

```bash
# Run from project root — works on any folder of PPTX files
node tools/extract_pptx.js <folder-with-pptx> [output.md]

# Examples:
node tools/extract_pptx.js "Contents/PSBF/Statistics_Assignment/Lecture_Contents"
node tools/extract_pptx.js "Contents/AFDM/Lecture_Contents" "Contents/AFDM/AFDM_extracted.md"
```

**Notes:**
- No npm dependencies — uses only Node.js built-ins + PowerShell
- Each slide separated by `---` dividers
- Default output: `<folder>/../<FolderName>_extracted.md`
- Custom output path is optional second argument

Manual fallback (if automated fails):
1. Open PowerPoint → View → Outline View → Ctrl+A → Copy → Paste to `.md`

### PPTX Full Extraction — Per-Deck Text + Embedded Images (media + slide mapping)

`tools/extract_pptx.js` produces ONE combined text file. When you also need the
**embedded graphs/figures/diagrams** and a **separate file per deck**, use
[tools/extract_pptx_full.js](tools/extract_pptx_full.js). PPTX charts/figures are almost
never native `ppt/charts/` objects — they are embedded raster images in `ppt/media/`
(PNG/GIF/JPEG, plus a few vector WMF/EMF/TIF). This script extracts them and maps each
to its slide.

```bash
# Run from project root
node tools/extract_pptx_full.js <pptx-folder> <text-out-folder> <image-out-folder>

# Example (EBF lectures):
node tools/extract_pptx_full.js "Contents/EBF/Lecture_Contents" "Contents/EBF/Extracted_Lecture_Contents" "Contents/EBF/Extracted_Images"
```

**What it does (single expand pass per deck):**
- **Text** → `<text-out>/<base>.md`, one `## Slide N` block per slide + per-slide image count,
  plus `00_INDEX.md` (slides / slides-with-text / image counts per deck).
- **Images** → `<image-out>/W<week>/`, every slide-referenced media file copied and named
  `W<week>_P<firstSlide>_<name>.<ext>`. `<name>` is the picture's alt-text/`descr`
  (often a real figure ref like `Figure 1.1`), falling back to the slide title; generic
  PowerPoint names (`Picture 3`, `Content Placeholder`) are rejected. Each `W<week>/`
  gets an `_INDEX.md` table (slide → file → alt-text), plus a global `00_INDEX.md`.

**Notes:**
- Week tag comes from the filename `W<token>` (e.g. `EBF-W14_1.pptx` → `W14_1`).
- Images referenced only by slide masters/layouts (logos, template chrome) are skipped —
  only media actually placed on a slide is extracted.
- Native tables (`<a:tbl>`) are NOT images; their cell text is captured in the text `.md`.
- Vector media (WMF/EMF/TIF) are copied as-is — they won't preview in browsers/markdown;
  convert with PowerPoint/LibreOffice if a raster is needed.
- Verified on `Contents/EBF/Lecture_Contents`: 21 decks → 21 `.md` files + 1,502 images.

### XLSX Extraction (Automated — Preferred)

XLSX files are ZIP archives containing XML, same as PPTX. Use the same `.zip` copy trick — no npm required.

**read_xlsx.js** (place in the same folder as the `.xlsx` file):
```javascript
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const os = require('os');

function extractXlsx(xlsxPath) {
    const tmpDir = path.join(os.tmpdir(), 'xlsx_extract_' + Date.now());
    fs.mkdirSync(tmpDir, { recursive: true });

    const zipPath = xlsxPath + '.zip';
    fs.copyFileSync(xlsxPath, zipPath);
    execSync(`powershell -Command "Expand-Archive -Path '${zipPath}' -DestinationPath '${tmpDir}' -Force"`, { stdio: 'pipe' });
    fs.unlinkSync(zipPath);

    // Parse shared strings
    let sharedStrings = [];
    const ssPath = path.join(tmpDir, 'xl', 'sharedStrings.xml');
    if (fs.existsSync(ssPath)) {
        const ssXml = fs.readFileSync(ssPath, 'utf8');
        const siRegex = /<si>([\s\S]*?)<\/si>/g;
        let m;
        while ((m = siRegex.exec(ssXml)) !== null) {
            sharedStrings.push([...m[1].matchAll(/<t[^>]*>([^<]*)<\/t>/g)].map(x => x[1]).join(''));
        }
    }

    // Get sheet names
    const wbXml = fs.readFileSync(path.join(tmpDir, 'xl', 'workbook.xml'), 'utf8');
    const sheetNames = {};
    const relsXml = fs.readFileSync(path.join(tmpDir, 'xl', '_rels', 'workbook.xml.rels'), 'utf8');
    const rIdToFile = {};
    let rm;
    const relRegex = /<Relationship[^>]+Id="([^"]+)"[^>]+Target="([^"]+)"/g;
    while ((rm = relRegex.exec(relsXml)) !== null) rIdToFile[rm[1]] = rm[2];
    const sheetRegex = /<sheet[^>]+name="([^"]+)"[^>]+r:id="([^"]+)"/g;
    while ((rm = sheetRegex.exec(wbXml)) !== null) sheetNames[rm[2]] = rm[1];

    const sheetsDir = path.join(tmpDir, 'xl', 'worksheets');
    const results = {};
    for (const sf of fs.readdirSync(sheetsDir).filter(f => f.match(/^sheet\d+\.xml$/)).sort()) {
        const rId = Object.keys(rIdToFile).find(k => rIdToFile[k].includes(sf));
        const name = (rId && sheetNames[rId]) ? sheetNames[rId] : sf;
        const xml = fs.readFileSync(path.join(sheetsDir, sf), 'utf8');
        const rows = {};
        const rowRegex = /<row[^>]+r="(\d+)"[^>]*>([\s\S]*?)<\/row>/g;
        let r;
        while ((r = rowRegex.exec(xml)) !== null) {
            const cells = {};
            const cellRegex = /<c r="([A-Z]+)\d+"([^>]*)>([\s\S]*?)<\/c>/g;
            let c;
            while ((c = cellRegex.exec(r[2])) !== null) {
                const vM = c[3].match(/<v>([^<]*)<\/v>/);
                if (!vM) continue;
                cells[c[1]] = c[2].includes('t="s"') ? (sharedStrings[parseInt(vM[1])] || '') : vM[1];
            }
            rows[parseInt(r[1])] = cells;
        }
        results[name] = rows;
    }
    fs.rmSync(tmpDir, { recursive: true, force: true });
    return results;
}
```

```bash
# Run from project root
node tools/read_xlsx.js <file.xlsx> [output.md]

# Examples:
node tools/read_xlsx.js "Contents/PSBF/Statistics_Assignment/25062677_NguyenThanhBinh_PSBF_A1.xlsx"
node tools/read_xlsx.js "Contents/AFDM/25062677_10240511_NguyenThanhBinh.xlsx" "Contents/AFDM/workbook_extracted.md"
```

**Notes:**
- No npm dependencies
- Resolves shared string references correctly
- Without output path: prints to console (tab-separated)
- With output path: writes formatted markdown with sheet headers

Manual fallback:
1. Open Excel → Select range → Copy → Paste into markdown table format
2. OR: Save As → CSV

### PDF Reading

**NOTE: PDF reading via Claude's Read tool is NOT available on this system (pdftoppm not installed).**

Alternative extraction methods:
1. **User manual extraction**: Open PDF → Select All → Copy → Paste to `.txt`
2. **Online tools**: Use smallpdf.com or ilovepdf.com to convert PDF to text
3. **Adobe Acrobat**: Export as Word/Text

### PDF Extraction

No external tools needed — uses Node.js built-in `zlib` to decompress PDF content streams.

```bash
# Run from project root
node tools/extract_pdf.js <file.pdf> [output.md]

# Examples:
node tools/extract_pdf.js "Contents/PSBF/Statistics_Assignment/Lecture_Contents/Mauro03.pdf"
node tools/extract_pdf.js "Contents/FIM/Slides FIM Intro.pdf" "Contents/FIM/FIM_Intro_extracted.md"
```

**Notes:**
- No npm dependencies — uses only Node.js built-ins (zlib for stream decompression)
- Works on standard text PDFs; may miss text in heavily embedded-font or encrypted PDFs
- Output defaults to `<file>_extracted.md` next to the source file
- If extraction yields 0 blocks, fall back to manual copy-paste from the PDF

### PDF Extraction — High-Fidelity (pdfjs, fallback when zlib fails)

The zlib `extract_pdf.js` above produces **binary noise** on slide PDFs that store
text as subset/CID fonts (no Unicode in the raw stream) — common for lecture
slides. When that happens (output is garbage like `Ã¥Ã£Ã”` or "No text could be
extracted"), use [tools/extract_pdf_pdfjs.js](tools/extract_pdf_pdfjs.js), which
runs Mozilla's `pdfjs-dist` to map glyphs → Unicode via embedded font data.

**Requires a one-time npm install (NOT installed by default — clean it up after):**

```bash
# From project root. Pin to v3 — v4/v5 need DOM globals (DOMMatrix) absent in headless Node.
# --use-system-ca: fixes UNABLE_TO_VERIFY_LEAF_SIGNATURE (AV/proxy SSL interception on this machine)
# --omit=optional: skips the heavy @napi-rs/canvas native dep (not needed for text)
NODE_OPTIONS="--use-system-ca" npm install pdfjs-dist@3.11.174 --omit=optional --no-audit --no-fund

node tools/extract_pdf_pdfjs.js <file.pdf> [output.md]

# Clean up when done:
#   rm -rf node_modules package.json package-lock.json   (project root has none by default)
```

**Notes:**
- Output: per-page markdown (`## Page N`) — far cleaner than the zlib tool
- The `Cannot polyfill DOMMatrix / Cannot find module 'canvas'` warnings are harmless —
  they only affect image rendering, not text extraction
- Output files are UTF-8 (em-dash, bullets render correctly in editors; PowerShell
  console may show mojibake like `â€"` — that's a console display artifact, not the file)
- Truly scanned/image-only PDFs (no text layer) still yield nothing — OCR would be needed

### SVG → PNG Rendering (Headless Edge)

No SVG renderer is installed on this system (no Inkscape, ImageMagick, rsvg-convert, sharp, or puppeteer). Use **Microsoft Edge headless** — already present at `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`. No npm install required.

**Sizing rule:** set `--window-size` to **2× the SVG viewBox width × viewBox height** (the height value, not 2× height). Combined with `--force-device-scale-factor=2`, this produces a sharp 2x-DPI PNG.

```powershell
# Single SVG (PowerShell)
$out = "F:\path\to\Figure.png"
if (Test-Path $out) { Remove-Item $out -Force }
$svg = (Resolve-Path "relative\path\to\Figure.svg").Path
$url = "file:///" + ($svg -replace '\\','/')
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
    --headless=new --disable-gpu --hide-scrollbars `
    --window-size=2000,580 --force-device-scale-factor=2 `
    "--screenshot=$out" $url 2>$null
Start-Sleep -Seconds 3
if (Test-Path $out) { Write-Output ((Get-Item $out).Length) }
```

```powershell
# Batch render multiple SVGs in one folder
$base = "F:\HTML-CSS-JS\University_QOL_Applications\Contents\PSBF\Statistics_Assignment"
$tables = @(
    @{svg="Table4-Regression_United_Kingdom.svg"; h=580},   # viewBox 1000x290 → window 2000x580
    @{svg="Table5-Robustness_China.svg";          h=632},   # viewBox 1000x316 → window 2000x632
    @{svg="Table6-Robustness_United_Kingdom.svg"; h=632}
)
foreach ($t in $tables) {
    $svgPath = Join-Path $base $t.svg
    $pngPath = $svgPath -replace '\.svg$','.png'
    if (Test-Path $pngPath) { Remove-Item $pngPath -Force }
    $url = "file:///" + ($svgPath -replace '\\','/')
    & "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
        --headless=new --disable-gpu --hide-scrollbars `
        "--window-size=2000,$($t.h)" --force-device-scale-factor=2 `
        "--screenshot=$pngPath" $url 2>$null
    Start-Sleep -Seconds 3
}
```

**Notes:**
- `--window-size=W,H` where `W = 2 × viewBoxWidth`, `H = 2 × viewBoxHeight`
- `--force-device-scale-factor=2` gives crisp 2x-DPI output (final PNG is `2W × 2H`)
- `Start-Sleep -Seconds 3` lets Edge finish rendering before we inspect the file
- `2>$null` suppresses Edge's harmless stderr chatter
- Output PNG lands next to the SVG with the same basename
- Verified working on Tables 1–6 and Figures 1–8 in `Statistics_Assignment/`

### Python Constraint

**Python is NOT available on this system.** Use Node.js for all scripting tasks.

### Auto-Update Extraction Methods

When a new extraction technique is successfully used for a file type not already documented in this CLAUDE.md, **automatically update this file** with the new method before completing the task. Include:
- The script or command used
- Any workarounds discovered (e.g. the `.pptx → .zip` rename trick)
- Output format and destination convention

---

## Study Tasks

### Exam Generation

**Input required:**
- Extracted lecture content (`.md` or `.txt`)
- Tutorial questions and solutions
- Topic coverage list
- Exam format (MCQ, calculation, essay)

**Output format:** HTML file following `<MODULE>_Mock_Test_*.html` template in relevant folders

**Structure:**
1. Header with module name, time, marks
2. Exam instructions
3. Questions grouped by section
4. Calculation workspace areas
5. Separate answer key file

### Module Summary

**Input required:**
- All lecture slides (extracted)
- Learning objectives
- Assessment criteria

**Output format:** JavaScript data object (see `formulas.js` pattern) or structured HTML

**Must include:**
- Key concepts with definitions
- Formulas with full variable names (no abbreviations)
- Worked examples
- Cross-references between topics

---

## Token-Saving Rules

### Before Reading Files

1. **Never Read just to Edit** — Use Grep to find the exact location, then Edit directly
2. **Batch parallel operations** — Multiple independent Grep/Read calls in one message
3. **Limit Read ranges** — Use `offset` and `limit` for large files
4. **Don't re-read** — Files already in context window stay there

### Response Format

1. **No preamble** — Skip "Let me...", "I'll...", "Sure, I can..."
2. **No recap** — Tool output is visible; don't restate it
3. **Completion format:** `[task] done. [count] items. Next: [next-task].`
4. **Single-line answers** for simple questions

### File Operations

1. **Grep before Read** — Find exact line numbers first
2. **Edit over Write** — Smaller diffs save tokens
3. **One Edit per change** — Don't accumulate multiple edits
4. **No unnecessary creates** — Modify existing files when possible

### Context Efficiency

1. **Parallel tool calls** — Independent operations in one message
2. **Head limits on Grep** — Use `head_limit` for large result sets
3. **Skip node_modules** — Always exclude from searches

---

## Conventions

### File Naming

- Extracted content: `<source_name>_extracted.md`
- Mock tests: `<MODULE>_Mock_Test_<N>.html`
- Answer keys: `<MODULE>_Mock_Test_<N>_Answers.html`
- Formula summaries: `<MODULE>_Formula_Summary.html`
- Study Guide: `<MODULE>_Study_Guide.html`

### Formula Data Format

```javascript
const formulaData = {
    "Topic Name": {
        icon: "📊",
        formulas: [
            { 
                name: "Full Formula Name",
                formula: "Variable = Expression (no abbreviations)",
                description: "When/how to use"
            }
        ]
    }
};
```

### HTML Exam Template

- Font: `'EB Garamond', 'Times New Roman', serif`
- Max width: 900px centered
- Question boxes: white background, 1px border, 5px radius
- Section headers: dark background (#333), white text

---

## Common Workflows

### "Generate exam from lectures"

1. Extract lecture content to markdown
2. Identify key topics and formulas
3. Create questions with varying difficulty
4. Generate HTML using Mock_Test template
5. Create separate answer key

### "Summarize module"

1. Extract all lecture slides
2. Group by topic/week
3. List formulas with full explanations
4. Create JavaScript data object or structured HTML
5. Add navigation/search if HTML

### "Extract tutorial solutions"

```bash
# Run mammoth extraction
node extract_docx.js > tutorials_extracted.txt
```

Then parse into structured format.

---

## Dependencies

### Node.js (for docx extraction)

```json
{
  "devDependencies": {
    "mammoth": "^1.12.0"
  }
}
```

### Browser (for generated apps)

- Modern browser with ES6 support
- No external dependencies (self-contained HTML)
