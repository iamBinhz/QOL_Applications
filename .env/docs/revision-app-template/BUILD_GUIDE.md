# How to Build a Revision-Companion HTML

A repeatable recipe for turning a module's extracted lectures into a single self-contained study webpage — like **The Ledger** (FIM). Reference implementation: [`FIM_Revision_Companion/index.html`](../../FIM_Revision_Companion/index.html).

> **Golden rule:** reuse the **structure, components, and process** below — but **re-skin the aesthetic for every new subject**. If all your revision apps look identical, they read as templated. The hard parts (layout, nav, scroll-spy, reveal, print, responsive) are reusable; the *look* should be chosen fresh each time.

---

## The 6-step process

1. **Extract** the lectures to markdown (see project `CLAUDE.md` → File Extraction Pipeline). Read every file before designing.
2. **Choose a distinctive aesthetic for THIS subject** (see §1). One sentence: palette + type + one signature element.
3. **Scaffold** — copy `FIM_Revision_Companion/index.html`, then reskin the design tokens (§2) and swap the signature SVG.
4. **Author** the content week-by-week using the content pattern (§3) and the component cookbook (§4).
5. **Verify** with Edge headless screenshots (§5) — desktop + mobile + a full-page pass.
6. **Polish** to the quality floor (§6), then delete preview PNGs.

---

## 1 · Choosing an aesthetic (do this per subject)

Ground the look in the subject's real-world artifacts, vernacular, and materials. Decide four things:

- **Palette** — 4–6 named hex values.
- **Type** — display + body roles. *(This project's global rule pins EB Garamond; distinctiveness then comes from colour, layout, and the signature, not the typeface.)*
- **Layout concept** — usually a sticky sidebar + reading column works well for revision.
- **Signature** — the one memorable element that embodies the subject.

**Avoid the three AI-default looks:** (a) cream `#F4F1EA` + serif + terracotta; (b) near-black + acid-green terminal; (c) broadsheet hairline columns. Subject-specific examples to spark ideas:

| Subject | Palette idea | Signature idea |
|---|---|---|
| Finance (FIM) | treasury green + brass on ledger paper | guilloché (banknote engraving) |
| Law | oxblood + parchment + black | wax-seal / statute numbering |
| Biology | specimen-jar teal + bone white | botanical line-plate illustration |
| Astronomy | deep indigo + starlight gold | orbital / constellation diagram |
| Chemistry | cobalt + copper on graph paper | molecular-bond lattice |

The FIM signature (a JS-generated **guilloché rosette**, a spirograph/hypotrochoid that draws in on load) lives in `index.html`'s `rosette()` function — swap it for a subject-appropriate SVG.

---

## 2 · Reskin surface (the only CSS you must change)

Everything else in the stylesheet is built on these tokens — change them and the whole app re-themes. Edit the `:root` block:

```css
:root{
  --paper:#ECEADE;        /* page background */
  --paper-card:#F4F2EA;   /* cards / callouts / formulas */
  --paper-sink:#E3E0D1;
  --treasury:#134E3A;     /* primary: headers, sidebar, accents */
  --treasury-deep:#0E3B2C;
  --ink:#20251F;          /* body text */
  --ink-soft:#54584D;     /* muted text */
  --brass:#9C7C3A;        /* metallic accent: rules, eyebrows, progress */
  --brass-bright:#B8924A;
  --seal:#7A2E25;         /* alert / "real story" accent */
  --engrave:#CFCBB8;      /* hairlines / borders */
  --engrave-soft:#DBD8C8;
  /* layout + font tokens below rarely change */
}
```

Then: (1) swap the **signature SVG** (the `rosette()` JS or a static SVG), (2) rewrite the **hero** title/thesis, (3) reconsider the **callout icons** if a different metaphor suits the subject.

---

## 3 · Content pattern (per week/topic)

Keep the reader oriented and the page un-boring. For each section:

1. **Eyebrow** — `Week N · Semester X` (or unit label).
2. **Title** — the topic.
3. **The big idea** — one sentence that holds the whole lecture together.
4. **Concept blocks** — the lecture's own sub-topics as `<h3>`/`<h4>` with plain-English explanations.
5. **Easy examples** — reuse the lecturer's own analogies where they exist.
6. **Inline formulas** where they belong (don't hide them in a separate reference).
7. **2–3 enrichment callouts**, chosen from the four types — aim to spread all four across the module, ~at least one per section. Don't force all four into every week.

**The four callout types** (each a coloured left-border card):

| Type | Class | Use for |
|---|---|---|
| 🏛 Real Story | `note--story` (seal) | a real case from the field |
| 💡 Did You Know? | `note--fact` (brass) | a number/fact that sticks |
| 🌍 In Plain Life | `note--life` (treasury) | everyday-life analogy |
| 🔑 Lock It In | `note--key` (ink) | a mnemonic / memory aid |

Cross-link related sections with the `.xref` chip so the app feels connected, not siloed.

---

## 4 · Component cookbook (copy-paste markup)

**Section shell**
```html
<section class="week reveal" id="s1w1">
  <div class="week-head">
    <div class="week-num" data-n="1"><span class="lbl">01</span></div>
    <div class="eyebrow">Week 01 · Semester 1</div>
    <h2 class="week-title">Topic Title</h2>
  </div>
  <div class="big-idea"><b>The big idea</b> One-sentence thesis.</div>
  <p class="lead">Opening hook…</p>
  <h3>Sub-topic</h3>
  <p>…</p>
</section>
```

**Formula block**
```html
<div class="formula">
  <div class="eq">PV = CF &divide; (1 + <i>i</i>)<sup>n</sup></div>
  <small>What each symbol means / when to use it.</small>
</div>
```

**Balance-sheet / two-column motif** (great for any "X vs Y" comparison)
```html
<div class="ledger">
  <div class="ledger-cap">Caption</div>
  <div class="ledger-grid">
    <div class="ledger-col"><h5>Left</h5>
      <div class="row"><span>Label</span><span>Value</span></div>
      <div class="row tot"><span>Total</span><span>100%</span></div>
    </div>
    <div class="ledger-col"><h5>Right</h5>
      <div class="row"><span>Label</span><span>Value</span></div>
    </div>
  </div>
</div>
```

**Callout** (swap the modifier + icon + label)
```html
<div class="note note--story">
  <div class="note-k">🏛 Real Story</div>
  <p>…</p>
</div>
<!-- variants: note--fact 💡 Did You Know? · note--life 🌍 In Plain Life · note--key 🔑 Lock It In -->
```

**Cross-link chip**
```html
<a class="xref" href="#s1w2">asymmetric information</a>
```

**Sidebar link** (mirror every section id)
```html
<li><a href="#s1w1"><span class="wk">01</span> Topic Title</a></li>
```

### Interactive "Reckoner" (turn a worked example into a slider toy)

Any numeric example becomes far more memorable when the reader can *drag the inputs and watch the answer move*. The FIM build added 13 of these. They all share one cohesive instrument styled to the theme (`.lab`), driven by a tiny generic engine.

**Markup** — sliders carry `data-f` (field name) + optional `data-pre`/`data-suf`/`data-dec` for the live readout; results land in `[data-out]`. Toggle buttons use `data-set`.
```html
<div class="lab" data-lab="arb">
  <div class="lab-k"><span class="lab-mark">⊞</span> The Reckoner · Arbitrage Profit</div>
  <div class="lab-body">
    <div class="lab-controls">
      <label class="lab-ctl"><span class="lab-lbl">London rate (€/£) <output data-for="lon">2.00</output></span>
        <input type="range" data-f="lon" data-dec="2" min="1.50" max="2.50" step="0.01" value="2.00"></label>
      <!-- more sliders … -->
    </div>
    <div class="lab-out" data-out aria-live="polite"></div>
  </div>
</div>
```

**Add a new calculator** — drop one function into the `LAB` map; the engine auto-wires every `[data-f]` slider and `[data-set]` button, syncs the readouts, and calls it on load + on input:
```js
LAB.arb = function(lab, r){            // r('name') reads a slider's number
  var lon=r('lon'), sgp=r('sgp'), amt=r('amt');
  var profit = amt*lon/sgp - amt, pct = (lon/sgp-1)*100;
  lab.out.innerHTML = '<span class="big '+cls(profit)+'">Profit '+money(profit,2)+' ('+gb(pct,2)+'%)</span>';
};
```
Helpers already in the engine: `gb(n,dec)` (grouped number), `money(v,dec)` (signed £), `cls(v)` (pos/neg/muted class). For toggle widgets (e.g. yield-curve shapes), read `lab.dataset.choice`. For data bars, set segment widths inline from JS — that's the **allowed exception** to the no-inline-styles rule (runtime dynamic values).

**Free with the pattern:** keyboard-operable sliders/buttons, `aria-live` output, reduced-motion safety, and `display:none` in print. Good candidates: any formula or "X vs Y" comparison — present value, leverage, bond price↔yield, index weighting, gap analysis, HHI, deductible/coinsurance, PPP, a tax-compounding bite, a reserve multiplier.

> ⚠ Don't name a `LAB` key `yield` — it's a reserved word in strict mode. (FIM uses `yieldc`.)

---

## 5 · The reusable JS engine

Copy the `<script>` block from `index.html` verbatim. It provides, with no dependencies:

- `rosette()` / `svg()` — generates the guilloché signature (replace per subject).
- **Reading-progress** bar on scroll.
- **Scroll-spy** sidebar (IntersectionObserver highlights the active link).
- **Reveal-on-scroll** — sections fade up; **deep links, reduced-motion, and no-JS all reveal everything immediately** (no hidden content).
- **Sidebar accordions** + **mobile drawer** (hamburger + backdrop).
- **Reckoners** — `initLabs()` + the `LAB` map wire the interactive calculators (see §4).

### Verify with Edge headless (no installs needed)
```powershell
$out="…\_preview.png"; if(Test-Path $out){Remove-Item $out -Force}
$html=(Resolve-Path "…\index.html").Path
$url="file:///"+($html -replace '\\','/')
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" `
  --headless=new --disable-gpu --hide-scrollbars `
  --window-size=1500,3000 --force-device-scale-factor=1 "--screenshot=$out" $url 2>$null
Start-Sleep -Seconds 5
```
Notes learned: `--screenshot` always captures from the **top** (scroll 0), ignoring `#hash`. To see lower sections, use a **tall `--window-size` height** so they sit inside the initial viewport and reveal at load. Also screenshot a mobile width (e.g. `402,1500`). Delete the preview PNGs when done.

---

## 6 · Quality floor (every build)

- [ ] Responsive to mobile (sidebar → off-canvas drawer).
- [ ] Visible keyboard focus (`:focus-visible`).
- [ ] `prefers-reduced-motion` respected (no animation, content visible).
- [ ] Print stylesheet — clean black-on-white revision printout, no sidebar/ornament.
- [ ] No inline `style="…"` (project CSS rule); vendor-prefix `backdrop-filter`/`user-select` if used.
- [ ] Single self-contained file; only external dep is the Google Fonts link.
- [ ] Sidebar links match every section `id`.

---

## Fastest path to a new revision app
1. `Copy-Item FIM_Revision_Companion/index.html <NewModule>_Revision/index.html`
2. Reskin the `:root` tokens (§2) + swap the signature SVG.
3. Replace the hero title/thesis, the sidebar list, and the 22 sections with your subject's.
4. Verify (§5), tick the checklist (§6), ship.
