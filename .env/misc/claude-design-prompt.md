# Claude Design brief — "Study Hub" homepage

Paste the block below into Claude Design (claude.ai/design). It's self-contained; the data it
needs is included. Iterate from there. (Want this in Vietnamese? Ask and I'll translate.)

---

## PROMPT — copy from here ↓

Design a **single landing page** called **"Study Hub"** — the homepage a university Banking &
Finance student opens to reach all of their revision materials in one place.

It is a **launcher**, not a dashboard and not a content page: its only job is to help the student
find and open the right study app fast. Each study app is a separate, self-contained webpage with
its own look; this hub links out to them (links **open in a new tab**). Build it as a **single
responsive page, light mode**, with the data below driving everything so new subjects are easy to
add.

### Audience & tone
A stressed student revising for exams. Copy should be calm, plain, and confidence-building — short
labels, no marketing fluff. Sentence case. The page should feel like a tidy study desk, not a SaaS
product.

### Content (this is the data — render it; keep it as one editable array)
Three subjects, each with an accent colour, a tagline, and a list of resources. A resource is
either a single link or a small group of links.

```
SUBJECTS = [
  {
    code: "afdm", short: "AFDM", accent: "#143A5C",   // navy
    name: "Accounting and Finance for Decision Making",
    tagline: "Time value of money to M&A — valuation, risk, and capital structure.",
    resources: [
      { type: "Knowledge Summary", desc: "“The Blueprint” — the all-in-one revision companion.",
        href: ".main/afdm/review.html" },
      { type: "Mock Tests", desc: "Practice papers with worked answer keys.", links: [
        { label: "Mock Test 3",           href: ".main/afdm/mock-tests/mock-test-3.html" },
        { label: "Mock Test 3 — Answers", href: ".main/afdm/mock-tests/mock-test-3-answers.html" },
        { label: "Mock Test 4",           href: ".main/afdm/mock-tests/mock-test-4.html" },
        { label: "Mock Test 5",           href: ".main/afdm/mock-tests/mock-test-5.html" },
        { label: "Mock Test 6",           href: ".main/afdm/mock-tests/mock-test-6.html" },
      ]},
      { type: "Formulas & Evaluation", desc: "Formula sheet + investment-appraisal methods.", links: [
        { label: "Formula Summary",       href: ".main/afdm/formulas/formula-summary.html" },
        { label: "Investment Evaluation", href: ".main/afdm/formulas/investment-evaluation.html" },
      ]},
    ],
  },
  {
    code: "fim", short: "FIM", accent: "#134E3A",     // treasury green
    name: "Financial Institutions and Markets",
    tagline: "How money moves — institutions, markets, and the system that links them.",
    resources: [
      { type: "Knowledge Summary", desc: "“The Ledger” — Semesters 1 & 2 with an exam quick-reference.",
        href: ".main/fim/review.html" },
    ],
  },
  {
    code: "ebf", short: "EBF", accent: "#9A6B1F",     // ochre
    name: "Economics for Banking and Finance",
    tagline: "A full year of economics — from scarcity to monetary policy.",
    resources: [
      { type: "Knowledge Summary", desc: "“Marginal Notes” — 21 lectures, micro & macro, with interactive Reckoners.",
        href: ".main/ebf/review.html" },
    ],
  },
]
```

Leave room for a fourth, "coming soon" subject to be added later by appending one entry.

### Page structure
1. **Sticky top navbar** — a wordmark on the left ("Study Hub" / "Banking & Finance"); on the
   right, one pill per subject, each prefixed by a small dot in that subject's accent. Clicking a
   pill smooth-scrolls to that subject's panel; the active panel's pill is highlighted as you
   scroll (scroll-spy).
2. **Hero** — a confident one-line headline about having everything in one place, a short
   subline, and a small stat line (e.g. "3 subjects · N study resources" computed from the data).
3. **One panel per subject** — visually led by the subject's `accent` (e.g. an accent edge/header).
   Each panel shows: the short code as an eyebrow, the full name, the tagline, then a
   **grid of resource cards**:
   - a **single-link** resource is itself a clickable card (title + description + a subtle arrow);
   - a **grouped** resource (Mock Tests, Formulas) is a card showing the title + description and a
     row of small pill links, one per item.
4. **Footer** — one quiet line (e.g. "Built from your own lecture notes. Each resource opens in a
   new tab.").

### Visual direction (take a real point of view — don't ship a generic template)
- **Identity:** a calm, scholarly "study desk" — neutral and uncluttered, so the three subject
  accents provide the only real colour. The hub must NOT copy any subject app's skin.
- **Type:** use **EB Garamond** (load from Google Fonts) for everything — it's the project-wide
  font. Get the type scale and rhythm right; let the serif carry the personality.
- **Palette:** a cool, paper-neutral base (soft off-white/slate, dark ink text, hairline borders),
  with each subject's accent used only inside its own panel and its navbar dot.
- **Signature:** one quiet, memorable touch that says "study" without clutter — your call (e.g. a
  subtle ruled-paper or index-card motif, a fine accent rule, a restrained card hover). Spend the
  boldness in one place; keep everything else disciplined.
- **Avoid the AI-default looks:** no cream `#F4F1EA` + serif + terracotta; no dark "terminal"
  theme; no dense broadsheet hairline columns. Make deliberate, specific choices.

### Interactions & behaviour
- Resource links **open in a new tab** (`target="_blank"`, `rel="noopener"`).
- Navbar smooth-scrolls to panels; scroll-spy marks the active subject.
- Tasteful hover/focus states on cards and links.
- Respect `prefers-reduced-motion` (no animation when set).

### Responsive & accessibility
- Mobile: the navbar pills become horizontally scrollable (or a compact menu); resource grids
  collapse to a single column; comfortable tap targets.
- Visible keyboard focus; sufficient colour contrast; semantic landmarks (`<nav> <header> <main>
  <footer>`), real headings, and `aria-label`s where useful.

### Technical notes
- One page. Keep the `SUBJECTS` data as a single array and **generate** the navbar, panels, and
  cards from it (so adding a subject is a one-line edit).
- Use the relative `href`s exactly as given — they point at real pages that already exist.
- No backend; static front-end only.

## PROMPT — end ↑

---

### After Claude Design produces it
- Save its output as `.src/index.html` (+ any CSS/JS it emits under `.src/_shared/`).
- Open `.src/index.html` and click through — every resource should open the right app in a new tab.
- The `href`s above are relative to `.src/`, so the page must sit at `.src/index.html`.
