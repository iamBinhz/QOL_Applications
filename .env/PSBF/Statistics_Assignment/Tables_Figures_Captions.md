# Table Titles & Figure Captions — Word Document Insertion Guide

**Convention used:** academic standard — **table titles go ABOVE the table image**, **figure captions go BELOW the figure image**.

Copy-paste each block into Word at the position indicated. Use **bold** for "Table N." / "Figure N." and regular weight for the descriptive text. The italic source line goes underneath the title/caption in a smaller font (10–11 pt) if you want to flag the data source.

> **Numbering note (post-redesign):** the four individual histograms (`Figure1-…China`, `Figure2-…China`, `Figure3-…UK`, `Figure4-…UK`) have been combined into a single 2×2 panel `Figure1-Combined_Histograms.png`. The old individual histogram PNGs/SVGs are still kept in the folder as backup, but this guide and `Stat_Report_A1.md` only reference the combined panel. Figures are therefore renumbered 1–5 (combined panel + 2 box plots + 2 scatter plots).

---

# 🟢 SIMPLE VERSION (RECOMMENDED — image already has the full title)

Use this if your rendered images already contain the descriptive title (which they do). The document just needs a one-line locator for in-text references like "as shown in Table 3" and so the marker can quickly find the right object. Keep one *Source:* line for academic correctness — it is the only piece that does not appear inside the image.

## TABLES (one line ABOVE the image)

| Above | Image |
|---|---|
| **Table 1.** Descriptive statistics. *Source: Bloomberg, FRED.* | `Table1-Descriptive_Statistics.png` |
| **Table 2.** Correlation coefficients. *Source: Author's calculations.* | `Table2-Correlation.png` |
| **Table 3.** China — main regression. *Source: Author's calculations.* | `Table3-Regression_China.png` |
| **Table 4.** UK — main regression. *Source: Author's calculations.* | `Table4-Regression_United_Kingdom.png` |
| **Table 5.** China — robustness regression. *Source: Author's calculations.* | `Table5-Robustness_China.png` |
| **Table 6.** UK — robustness regression. *Source: Author's calculations.* | `Table6-Robustness_United_Kingdom.png` |

## FIGURES (one line BELOW the image)

| Image | Below |
|---|---|
| `Figure1-Combined_Histograms.png` | **Figure 1.** Histograms of real stock returns and GDP growth, China and the UK (2×2 panel). *Source: Bloomberg, FRED.* |
| `Figure5-Combined_Distribution_of_Real_Stock_Returns-China_and_United_Kingdom_professional.png` | **Figure 2.** Box plot of real stock returns, China vs UK. *Source: Author's calculations.* |
| `Figure6-Combined_Distribution_of_GDP_Growth-China_and_United_Kingdom_professional.png` | **Figure 3.** Box plot of GDP growth, China vs UK. *Source: Author's calculations.* |
| `Figure7-Scatter_Plot_of_GDP_Growth_vs_Lagged_Stock_Returns-China_professional.png` | **Figure 4.** Scatter plot of GDP growth vs lagged stock returns, China. *Source: Author's calculations.* |
| `Figure8-Scatter_Plot_of_GDP_Growth_vs_Lagged_Stock_Returns-United_Kingdom_professional.png` | **Figure 5.** Scatter plot of GDP growth vs lagged stock returns, UK. *Source: Author's calculations.* |

**Word-count impact (simple version):** ≈ 70 words across all 11 captions.

---

# 🔵 FULL VERSION (only if you remove the embedded titles from the images)

Use this if you decide to re-render the SVGs without the in-image title block. Otherwise the descriptive lines below will duplicate text already shown inside the image.

## TABLES (title ABOVE the image)

### Table 1 — *Above* `Table1-Descriptive_Statistics.png`

> **Table 1.** Summary of Descriptive Statistics — China & United Kingdom
> *Real stock returns (r) and GDP per-capita growth (Dy); annual data, 1991–2024 (China) / 1984–2024 (UK).*
> *Source: Author's calculations using Bloomberg (stock indices), FRED (CPI inflation, real GDP per capita).*

### Table 2 — *Above* `Table2-Correlation.png`

> **Table 2.** Correlation between Lagged Stock Returns and GDP Growth
> *Pearson correlation coefficient between r_{t−1} and Dy_t, paired observations.*
> *Source: Author's calculations.*

### Table 3 — *Above* `Table3-Regression_China.png`

> **Table 3.** Regression of GDP Growth on Lagged Stock Returns — China
> *Dependent variable: Dy_t. OLS estimates of Dy_t = α + β·r_{t−1} + ε_t.*
> *Source: Author's calculations using Excel Data Analysis Toolpak.*

### Table 4 — *Above* `Table4-Regression_United_Kingdom.png`

> **Table 4.** Regression of GDP Growth on Lagged Stock Returns — United Kingdom
> *Dependent variable: Dy_t. OLS estimates of Dy_t = α + β·r_{t−1} + ε_t.*
> *Source: Author's calculations using Excel Data Analysis Toolpak.*

### Table 5 — *Above* `Table5-Robustness_China.png`

> **Table 5.** Robustness Analysis — Regression with Lagged GDP Growth Included (China)
> *Dependent variable: Dy_t. OLS estimates of Dy_t = α + β₁·r_{t−1} + β₂·Dy_{t−1} + ε_t.*
> *Source: Author's calculations using Excel Data Analysis Toolpak.*

### Table 6 — *Above* `Table6-Robustness_United_Kingdom.png`

> **Table 6.** Robustness Analysis — Regression with Lagged GDP Growth Included (United Kingdom)
> *Dependent variable: Dy_t. OLS estimates of Dy_t = α + β₁·r_{t−1} + β₂·Dy_{t−1} + ε_t.*
> *Source: Author's calculations using Excel Data Analysis Toolpak.*

---

## FIGURES (caption BELOW the image)

### Figure 1 — *Below* `Figure1-Combined_Histograms.png`

> **Figure 1.** Distributions of Real Stock Returns and GDP Growth — China & United Kingdom.
> *2×2 panel of histograms. Panel (a) r_CN; (b) Dy_CN; (c) r_GB; (d) Dy_GB. Annual data, China 1991–2024 (n = 34) and UK 1984–2024 (n = 41). Each panel shows the mean (orange dashed line), median (teal dotted line), and a summary-statistics inset.*
> *Source: Author's calculations from Bloomberg SHCOMP / UKX and FRED CPI and real GDP per capita data.*

### Figure 2 — *Below* `Figure5-Combined_Distribution_of_Real_Stock_Returns-China_and_United_Kingdom_professional.png`

> **Figure 2.** Box plot of Real Stock Returns — China vs United Kingdom.
> *Side-by-side box plots of r_CN and r_GB. Box edges show the lower and upper quartiles; the central line is the median; whiskers extend up to 1.5 × IQR; points beyond are outlier observations.*
> *Source: Author's calculations.*

### Figure 3 — *Below* `Figure6-Combined_Distribution_of_GDP_Growth-China_and_United_Kingdom_professional.png`

> **Figure 3.** Box plot of GDP Growth — China vs United Kingdom.
> *Side-by-side box plots of Dy_CN and Dy_GB. Box edges show the lower and upper quartiles; the central line is the median; whiskers extend up to 1.5 × IQR; points beyond are outlier observations.*
> *Source: Author's calculations.*

### Figure 4 — *Below* `Figure7-Scatter_Plot_of_GDP_Growth_vs_Lagged_Stock_Returns-China_professional.png`

> **Figure 4.** Scatter Plot of GDP Growth versus Lagged Stock Returns — China.
> *Each point represents one paired annual observation (Dy_t on the y-axis, r_{t−1} on the x-axis), 1992–2024 (n = 33). The fitted line is the OLS regression from Table 3.*
> *Source: Author's calculations.*

### Figure 5 — *Below* `Figure8-Scatter_Plot_of_GDP_Growth_vs_Lagged_Stock_Returns-United_Kingdom_professional.png`

> **Figure 5.** Scatter Plot of GDP Growth versus Lagged Stock Returns — United Kingdom.
> *Each point represents one paired annual observation (Dy_t on the y-axis, r_{t−1} on the x-axis), 1985–2024 (n = 40). The fitted line is the OLS regression from Table 4.*
> *Source: Author's calculations.*

---

## Legacy individual histograms (kept on disk, NOT cited in the report)

The four individual histogram PNGs/SVGs below have been superseded by the combined `Figure1-Combined_Histograms.png` but are kept in the folder as backup and for any future variant of the report.

- `Figure1-Distribution_of_Real_Stock_Returns-China.png` — was Figure 1 (r_CN histogram alone)
- `Figure2-Distribution_of_GDP_Growth-China_professional.png` — was Figure 2 (Dy_CN histogram alone)
- `Figure3-Distribution_of_Real_Stock_Returns-United_Kingdom_professional.png` — was Figure 3 (r_GB histogram alone)
- `Figure4-Distribution_of_GDP_Growth-United_Kingdom_professional.png` — was Figure 4 (Dy_GB histogram alone)

If you decide to revert to six separate figures in §3 (one panel per histogram + two box plots), restore the previous numbering: 1–4 individual histograms, 5–6 box plots, 7–8 scatter plots, and re-add the corresponding placeholders to `Stat_Report_A1.md`.

---

## Quick layout reminder for Word

For every **Table** insertion:

```
[Title line — bold]              ← above
[Subtitle line — italic, smaller]← above
[Source line — italic, smaller]  ← above
[<<< INSERT TABLE PNG HERE >>>]
```

For every **Figure** insertion:

```
[<<< INSERT FIGURE PNG HERE >>>]
[Caption line — bold]            ← below
[Subtitle line — italic, smaller]← below
[Source line — italic, smaller]  ← below
```

## Notes

- Word counts: per the UWE Assessment Content Limit Policy, the **statistical results inside tables are excluded** from the 1,500-word count, but **table titles and figure captions ARE included** because they are body text. Keep each caption tight (≤ 30 words) — total caption budget across all 11 items will be ≈ 200–250 words.
- Use the same caption font as the body (12-pt Times New Roman or Arial). The italic subtitle/source can drop to 10 or 11 pt for visual hierarchy.
- The italic *Source:* line lets the marker see clearly that data come from Bloomberg + FRED (as specified in the coursebook brief), not from a fabricated dataset.
