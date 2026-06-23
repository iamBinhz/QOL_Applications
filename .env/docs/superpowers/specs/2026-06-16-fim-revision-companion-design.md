# FIM Revision Companion — Design Spec

*Date: 2026-06-16 · Status: Approved, building*

## Purpose
A single self-contained HTML study app to revise & recall the **Financial Institutions and Markets (FIM)** module (UWE/ISNEU), covering all 22 lectures across Semester 1 and Semester 2. Built from the extracted markdown in `Contents/FIM/Extracted_Lectures_Contents/`.

## Decisions (from brainstorming)
- **Language:** English (lectures and exam are in English).
- **Mode:** Rich explanatory summaries — thorough explanations + easy examples. *No* flashcards/quiz engine.
- **Engagement (all four):** Real stories/case studies · "Did you know?" facts · Everyday analogies · Mnemonics.
- **Structure:** Week-by-week (approach A) with light cross-links between related weeks.
- **Output:** Single self-contained `index.html` (CSS in `<style>`, JS in `<script>`), Google Fonts (EB Garamond) the only external dep.

## Aesthetic — "The Ledger" (engraved securities / bank certificate)
Avoids the three finance clichés (FT salmon broadsheet, Bloomberg black+green terminal, corporate-blue bank). Grounded in the physical artifacts of finance: banknotes, certificates, ledgers, balance sheets.

- **Palette:** `--paper #ECEADE`, `--treasury #134E3A`, `--ink #20251F`, `--brass #9C7C3A`, `--seal #7A2E25`, `--engrave #CFCBB8`.
- **Type:** EB Garamond throughout (per user global font rule). Hierarchy via weight (400–800), small-caps eyebrows, old-style/tabular figures.
- **Signature:** SVG **guilloché** (spirograph/hypotrochoid rosette) — draws in on load in the hero; faint static watermark behind each week number; hairline divider variant.
- **Structural device:** recurring **Assets │ Liabilities** two-column motif for worked examples (used heavily in W1/W3/W4S2).

## Layout
- Fixed top **progress bar** (brass fill).
- **Sidebar** (sticky): masthead, Semester 1 / Semester 2 accordions, 22 week links, active-state scroll-spy. Mobile → slide-in drawer + hamburger.
- **Hero:** guilloché ornament + title "The Ledger / Financial Institutions and Markets" + flow-of-funds thesis line (Lender-Savers → Financial System → Borrower-Spenders).
- **Main:** max ~760px reading column. Each week = a `<section>`:
  eyebrow (Week N · Semester X) → title → **The big idea** (1-line thesis) → concept blocks → explanations + easy examples → inline formulas where relevant → 2–3 enrichment callouts.

## Enrichment callout types
- `🏛 Real Story` (seal red) — case studies
- `💡 Did You Know?` (brass) — shock-stat facts
- `🌍 In Plain Life` (treasury green) — everyday analogy
- `🔑 Lock It In` (ink) — mnemonic / memory aid

## Week content map (IDs)
**S1** — s1w1 Financial System · s1w2 Why FIs Exist (asymmetric info, lemons, principal-agent) · s1w3 Commercial Banks & Money Creation (M0–M4, multiplier) · s1w4 UK Banking Sector (building societies, HHI, challengers, open banking) · s1w5 Banking Systems USA & China (universal vs market, Glass-Steagall, FDIC) · s1w6 Investment Banks (underwriting, M&A, Barings/Leeson) · s1w7 Islamic Banking (riba/gharar/maisir, murabaha/ijara/musharaka/sukuk) · s1w8 Financial Crises I: Securitization (MBS/CDO/CDS, 2008) · s1w9 Financial Crises II (3 stages, Great Depression) · s1w10 Pension Funds (DB vs DC, PAYG, Carillion) · s1w11 Insurance (pooling, adverse selection, AIG/CDS) · s1w12 Investment Funds (active/passive, open/closed, ETFs).

**S2** — s2w1 Alternative Funds (hedge/PE/VC/LBO, 2/20, leverage) · s2w2 Interest Rates (PV, Fisher, loanable funds, yield curve) · s2w3 Central Banks (BoE/Fed/ECB, MPC, independence) · s2w4 Risk Management (5 risks, gap analysis, capital cushion) · s2w5 Money Markets (T-bills, CP, repos, CDs, LIBOR) · s2w6 Bond Market (gilts, coupon/YTM, price-yield inverse) · s2w7 Forex I (PPP, arbitrage, float vs fixed) · s2w8 Forex II (Bretton Woods, hedging, Tobin tax, crypto) · s2w9 Equity Markets I (bubbles, Newton, Minsky, EMH) · s2w10 Equity Markets II (NYSE/NASDAQ/LSE, index weighting).

## Quality floor
Responsive to mobile · visible keyboard focus · `prefers-reduced-motion` respected · print stylesheet (clean revision printouts) · no inline styles (per css-quality rule) · vendor prefixes where needed.

*(No git repo in this workspace — spec not committed.)*
