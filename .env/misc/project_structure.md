# University QOL — Website Structure (plan)

> The foundation for a **hub site** that links every standalone study app under one homepage.
> The hub front-end itself will be **designed with Claude Design** — see `claude-design-prompt.md`.
> This file is the *source of truth* for paths, content data, and conventions.
> (Earlier draft kept as `project_structure.backup.md`.)

---

## 1. Principles

- **The hub is a launcher, not a frame.** Each study app is a self-contained page with its own
  sidebar and theme. The hub links to them; it never embeds them in an `<iframe>`.
- **One homepage** (`.src/index.html`) → subjects → resources. Resources **open in a new tab** so
  the apps' own chrome is untouched and the hub stays open.
- **Data-driven where possible.** Subjects + resources should come from one list (a manifest),
  so adding a module = editing data, not markup.

---

## 2. Deploy boundary — what ships vs what doesn't

| Tree | Role | Served? |
|------|------|---------|
| `.src/` | the website (pages + assets) | ✅ yes — web root; `index.html` lives here |
| `.env/` | raw sources, coursework, tooling, `node_modules`, `CLAUDE.md` | ❌ never |

- **PSBF** lives in `.env/PSBF/` — kept as source/archive, **excluded** from the website.
- ⚠️ **Source folders still inside `.src`** (`Lecture_Contents/`, `Sources/`, `Extracted_*`,
  `FIM_Study_Summary.md`) are *not* linked by the hub. Move the pure sources to `.env/<code>/`
  when convenient. **Keep** assets a page loads — e.g. `ebf/Extracted_Images/` is used by
  `ebf/review.html`.
- ⚠️ **Dot-folder caveat:** `.src`, `.main`, `.sub` start with a dot. Fine on `file://` and most
  hosts, but some static servers block paths beginning with `.` — verify (or drop the dots)
  before deploying.

---

## 3. Naming conventions (URL-safe) — ✅ applied in `.src`

Everything in a URL is **lowercase, hyphen-separated, no spaces, no `%`, no diacritics**. Within
a subject folder, files are generic (`review.html`) since the folder scopes the subject.

---

## 4. Directory layout

```
.src/                                  # WEB ROOT (served)
├── index.html                         # ◻ TO BUILD with Claude Design — the hub landing
├── _shared/                           # ◻ optional — shared hub css/js + the manifest
│   └── subjects.(js|json)             #   the subject/resource data (see §5)
│
├── .main/                             # one folder per subject
│   ├── afdm/
│   │   ├── review.html                # ✅ Knowledge Summary — "The Blueprint"
│   │   ├── mock-tests/                # ✅ mock-test-3..6 + mock-test-3-answers
│   │   ├── formulas/                  # ✅ formula-summary.html · investment-evaluation.html (+css/js)
│   │   └── Lecture_Contents/          # source (md + pptx) — not served
│   ├── fim/
│   │   ├── review.html                # ✅ Knowledge Summary — "The Ledger"
│   │   └── (Sources/, Extracted_*, FIM_Study_Summary.md — sources, not served)
│   └── ebf/
│       ├── review.html                # ✅ Knowledge Summary — "Marginal Notes"
│       ├── Extracted_Images/          # ✅ figures loaded by review.html (served)
│       └── (Lecture_Contents/, Extracted_Lecture_Contents/ — sources, not served)
└── .sub/                              # reserved (empty)

.env/PSBF/                             # excluded from the website
```

Legend: ✅ exists · ◻ to be built.

---

## 5. Subjects & resources (the data the hub links to)

This is the content the hub must surface. Paths are relative to `.src/`.

### AFDM — Accounting and Finance for Decision Making · accent **navy `#143A5C`**
*Tagline:* Time value of money to M&A — valuation, risk, and capital structure.
- **Knowledge Summary** — "The Blueprint" → `.main/afdm/review.html`
- **Mock Tests** (group):
  - Mock Test 3 → `.main/afdm/mock-tests/mock-test-3.html`
  - Mock Test 3 — Answers → `.main/afdm/mock-tests/mock-test-3-answers.html`
  - Mock Test 4 → `.main/afdm/mock-tests/mock-test-4.html`
  - Mock Test 5 → `.main/afdm/mock-tests/mock-test-5.html`
  - Mock Test 6 → `.main/afdm/mock-tests/mock-test-6.html`
- **Formulas & Evaluation** (group):
  - Formula Summary → `.main/afdm/formulas/formula-summary.html`
  - Investment Evaluation → `.main/afdm/formulas/investment-evaluation.html`

### FIM — Financial Institutions and Markets · accent **treasury green `#134E3A`**
*Tagline:* How money moves — institutions, markets, and the system that links them.
- **Knowledge Summary** — "The Ledger" → `.main/fim/review.html`

### EBF — Economics for Banking and Finance · accent **ochre `#9A6B1F`**
*Tagline:* A full year of economics — from scarcity to monetary policy.
- **Knowledge Summary** — "Marginal Notes" → `.main/ebf/review.html`

### PSBF — *excluded* (archived in `.env/PSBF/`).

> **Manifest shape** (recommended): an array of
> `{ code, name, short, accent, tagline, resources[] }`, where a resource is
> `{ type, desc, href }` (single) or `{ type, desc, links:[{label, href}] }` (group).
> Add a future module by appending one entry.

---

## 6. What the hub homepage must do (requirements)

The visual design is briefed in `claude-design-prompt.md`; functionally the page must:

1. Show a **global navbar** with the subjects (AFDM · FIM · EBF), each carrying its accent.
2. A **hero** stating the site's purpose.
3. One **panel per subject** (in its accent) with its name, tagline, and **resource cards** —
   single links and grouped links (Mock Tests, Formulas).
4. **Open every resource in a new tab.**
5. Be **responsive** (mobile-friendly nav + single-column cards) and accessible
   (keyboard focus, reduced-motion), in **light mode**.
6. Use **EB Garamond** (project-wide font rule) and a **neutral hub identity** distinct from each
   subject app's own skin.

---

## 7. Conventions recap

- Web root = `.src/`; never serve `.env/`.
- One manifest drives all navigation.
- Hub launches full apps in a new tab; never iframes.
- URL-safe names everywhere; lowercase subject folders.
- Hub keeps a neutral identity; each subject panel uses its `accent`; each app keeps its own skin.
