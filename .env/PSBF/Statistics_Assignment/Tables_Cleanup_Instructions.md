# Tables Cleanup Instructions — Remove Non-Lecture Content

## Purpose
Both reports (`PSBF_Statistics_Report.md` and `Statistics_Analysis_Report.md`) have already been edited to remove every analytical sentence that relies on statistics not taught in PSBF lectures 7–12. To stay consistent, the **SVG/PNG tables themselves must be re-rendered** with the same rows/cells removed. This file lists exactly what to wipe.

## What is allowed (covered in lectures)

| Concept | Lecture |
|---|---|
| Mean, Median, Mode | Lecture 7–8 (descriptive statistics) |
| Range, Minimum, Maximum, Sum, Count | Lecture 7–8 |
| Standard deviation, Sample variance, Standard error | Lecture 8, Lecture 11 |
| **Skewness, Kurtosis** | Lecture 7 (introduced as "measures of skewness" and "measures of kurtosis" in the moments-of-a-distribution slide) — kept in the report and table |
| Histogram, Box plot (with quartiles, IQR, whiskers, outliers) | Lecture 9 |
| Scatter graph | Lecture 9 |
| Pearson correlation coefficient | Lecture 9 |
| Regression coefficient (intercept, slope) | Lecture 11 |
| Standard error of coefficient | Lecture 11 |
| t-statistic, p-value, t-test | Lecture 11 |
| Coefficient of determination R² | Lecture 12 |
| F-statistic, F-test, Significance F (= Prob (F-stat)) | Lecture 12 |

## What must be removed (NOT covered in lectures)

| Concept | Reason |
|---|---|
| **Adjusted R²** | Not mentioned anywhere in lectures 7–12. Lecture 12 ends with: *"In study year 2, we will do more regression analysis in UMET9W-30-2 — Econometric Analysis and Professional Advancement."* Adjusted R² is year-2 econometrics material. |
| **Period (1985–2024 / 1992–2024)** | Not a statistical output. The lectures briefly mention "time series vs cross section" but never prescribe reporting the sample window inside a regression results table. |

---

## Per-table edit list

### `Table1-Descriptive_Statistics.svg`

**No changes needed.** Skewness and Kurtosis are introduced in Lecture 7 as the third and fourth moments of a distribution and are therefore retained. All 13 rows of Table 1 (Mean, Standard Error, Median, Mode, Standard Deviation, Sample Variance, Kurtosis, Skewness, Range, Minimum, Maximum, Sum, Count) stay as they are.

### `Table2-Correlation.svg`

No changes needed. Pearson correlation and observation count are both lecture content.

### `Table3-Regression_China.svg`

**REMOVE the following from the footer block:**
- The **Adjusted R²** label and its value (0.0457)
- The **Period** label and its value (1992–2024)

Keep R², F-statistic, Prob (F-stat), Observations.

### `Table4-Regression_United_Kingdom.svg`

Same as Table 3:
- Remove **Adjusted R²** (0.0248)
- Remove **Period** (1985–2024)

### `Table5-Robustness_China.svg`

Same edits:
- Remove **Adjusted R²** (0.4039)
- Remove **Period** (1992–2024)

### `Table6-Robustness_United_Kingdom.svg`

Same edits:
- Remove **Adjusted R²** (–0.0010)
- Remove **Period** (1985–2024)

---

## Concrete SVG edits (copy-paste ready)

For Tables 3–6 the footer block currently has three rows (y = 210/232/254 for 2-row tables; y = 236/258/280 for 3-row tables). Each row contains four `<text>` elements. The pattern to delete is the **right-hand pair** that points to "Adjusted R²" / "Period". After deletion, also remove the now-unused right-hand `<text>` value cells.

### Table 3 / Table 4 (viewBox `0 0 1000 290`)

Locate this block:

```xml
    <text x="135" y="210" font-weight="600">R²</text>
    <text x="475" y="210" text-anchor="end" font-weight="600">[R² value]</text>
    <text x="610" y="210" text-anchor="end" fill="#4A5568">Adjusted R²</text>     ← DELETE
    <text x="870" y="210" text-anchor="end" font-weight="600">[Adj R² value]</text>  ← DELETE

    <text x="135" y="232" font-weight="600">F-statistic</text>
    <text x="475" y="232" text-anchor="end" font-weight="600">[F value]</text>
    <text x="610" y="232" text-anchor="end" fill="#4A5568">Prob (F-stat)</text>
    <text x="870" y="232" text-anchor="end" font-weight="600">[Prob value]</text>

    <text x="135" y="254" font-weight="600">Observations</text>
    <text x="475" y="254" text-anchor="end" font-weight="600">[N]</text>
    <text x="610" y="254" text-anchor="end" fill="#4A5568">Period</text>          ← DELETE
    <text x="870" y="254" text-anchor="end" font-weight="600">[Period value]</text>  ← DELETE
```

### Table 5 / Table 6 (viewBox `0 0 1000 316`)

Same pattern but at y = 236, 258, 280. Delete the four lines marked above.

### Table 1 (viewBox `0 0 1000 510`)

No edits required. Skewness and Kurtosis stay.

---

## After editing the SVGs

Only Tables 3–6 need to be re-rendered. Re-run the Edge headless command in [CLAUDE.md](../../../CLAUDE.md):

```powershell
$base = "F:\HTML-CSS-JS\University_QOL_Applications\Contents\PSBF\Statistics_Assignment"
$tables = @(
    @{svg="Table3-Regression_China.svg";          h=580},
    @{svg="Table4-Regression_United_Kingdom.svg"; h=580},
    @{svg="Table5-Robustness_China.svg";          h=632},
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

---

## Verification checklist

After editing each SVG, open the corresponding PNG and confirm:

- [ ] Table 1 is **unchanged** (Skewness and Kurtosis still present)
- [ ] Table 3 has **no Adjusted R² cell** and **no Period cell**
- [ ] Table 4 has **no Adjusted R² cell** and **no Period cell**
- [ ] Table 5 has **no Adjusted R² cell** and **no Period cell**
- [ ] Table 6 has **no Adjusted R² cell** and **no Period cell**
- [ ] R², F-statistic, Prob (F-stat), Observations are still present in Tables 3–6
- [ ] All descriptive statistics (Mean, Standard Error, Median, Mode, σ, Sample Variance, Skewness, Kurtosis, Range, Min, Max, Sum, Count) are still present in Table 1

Once verified, both reports' analytical text and the rendered tables/figures will only reference statistics taught in PSBF lectures 7–12.

---

## Note on report-text edits already applied

The following non-lecture content has already been removed from `PSBF_Statistics_Report.md` and `Statistics_Analysis_Report.md`:

- All references to **Adjusted R²** (0.404, –0.001, "adjusted R² ≈ 0")
- All references to **heteroscedasticity-robust / HAC standard errors** (year-2 material)
- The terms **"autoregressive", "white noise", "persistence"** (replaced with plain language: "last year's GDP growth")
- The recommendation to "test for structural breaks" formally (replaced with the simpler "split the sample into pre-2008 and post-2008 sub-periods")

**Skewness and kurtosis discussions have been retained** in both reports, because Lecture 7 introduces them as the third and fourth moments of a distribution. Both reports now use only mean, σ, skewness, kurtosis, range, min, max, R², t-test, F-test, and correlation — all explicitly mentioned in lectures 7–12.
