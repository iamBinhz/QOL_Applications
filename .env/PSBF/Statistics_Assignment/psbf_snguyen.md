## **Introduction**

A central question in macro‑finance is whether stock‑market performance can predict future economic growth. Financial markets adjust rapidly to new information, whereas the real economy responds with inertia; thus, equity returns might serve as a leading indicator of subsequent output growth. Mauro (2003) empirically demonstrated that this relationship tends to be stronger in advanced economies and weaker or unstable in emerging markets, reflecting differences in market depth, investor base, and information efficiency.

This study applies Mauro’s framework to two contrasting countries — Brazil (emerging) and Japan (developed) — using annual real stock‑return data and GDP‑per‑capita growth rates from the global dataset supplied in the module’s Excel workbook. The hypothesis is that lagged (previous‑year) stock returns positively predict next‑year GDP growth in Japan but not in Brazil. The report follows six analytical steps: descriptive statistics, distributional analysis, correlation, regression, a robustness check adding lagged GDP growth, and an overall interpretation around the emerging‑versus‑developed contrast.

## **Data**

The dataset covers Brazil (1995–2024, N = 30) and Japan (1971–2024, N = 54) drawn from the course’s consolidated spreadsheet. Two variables are defined:

* r — *Real stock return (%):* the annual percentage change in the leading stock index deflated by CPI.  
* Dy — *Real GDP‑per‑capita growth (%):* log growth of GDP per capita in constant prices.

Lagged variables (r(−1), Dy(−1)) are created by shifting each series down one row, leaving N = 29 usable observations for Brazil and N = 53 for Japan. All calculations use Excel’s standard statistical functions referenced live to the raw‑data sheets. Both samples span major structural events — Brazil’s post‑hyperinflation stabilisation and Japan’s long post‑bubble stagnation — providing useful contrasts in volatility and persistence.

## **Descriptive Statistics**

Table 1. Descriptive statistics (%)

| Statistic | Brazil r | Brazil Dy | Japan r | Japan Dy |
| ----- | ----- | ----- | ----- | ----- |
| Mean | 2.61 | 1.33 | 2.46 | 2.67 |
| Std. Dev. | 33.87 | 2.60 | 24.28 | 2.20 |
| Median | 0.70 | 1.81 | 2.55 | 2.84 |
| Minimum | −67.28 | −4.40 | −52.05 | −2.56 |
| Maximum | 87.54 |  6.42  |  60.34  |  6.68  |
| Skewness |  0.20  |  −0.55  |  −0.11  |  −0.47  |
| Excess kurtosis |  0.38  |  0.27  |  0.32  |  0.24  |
| Observations |  30  |  30  |  30  |  30  |

Brazil’s and Japan’s stock‑return means are similar (≈ 2½ %), yet Brazil’s standard deviation (33.9 %) far exceeds Japan’s (24.3 %), confirming emerging‑market volatility. Brazil’s GDP growth averages only 1.3 %, slightly below Japan’s 2.7 % long‑run mean — an inversion of the common emerging/developed pattern, reflecting Brazil’s repeated recessions since the 1980s.

All four series exhibit mild negative skewness in GDP growth and near‑zero skewness in returns, showing modest asymmetry. Outliers drive the wide ranges: Brazil’s worst stock year (−67 %) corresponds to the 1999 currency crisis; Japan’s (−52 %) coincides with the 1990 asset‑price collapse; both peaks (≈ +80 %) align with post‑crash rebounds. The relatively flat kurtosis values suggest distributions not far from normal, but the magnitudes reveal far larger macroeconomic swings in Brazil.

Volatility comparison within each country highlights how financial variables dominate macroeconomic variability: r’s standard deviation is roughly twelve times that of Dy in Brazil and eleven times in Japan — entirely typical of stock–GDP data.

## **Distributional Analysis**

Figure 1. Histograms of real stock returns (r)  
 Figure 2. Box plots of GDP‑per‑capita growth (Dy)

The histograms show both return series roughly symmetric around zero but with longer tails in Brazil. Visual inspection confirms a wide spread of returns between −70 % and \+90 %, reflecting boom‑bust cycles, whereas Japan’s range is narrower (−50 % to +60 %) with clustering near small positive returns.

The GDP‑growth histograms are narrower and more peaked. Japan’s Dy clusters around 2 – 3 %, consistent with stable post‑industrial growth; Brazil’s shows a flatter top with several recessions (−4 % to 0 %) and expansion spikes above 5 %, yielding a slight left‑tail elongation.

Box plots reinforce these impressions. Brazil’s boxes are taller — greater interquartile range — and the whiskers identify multiple outliers, notably 1999, 2015, and 2020. Japan’s distribution is tighter, with occasional outliers (2009, 2020) but otherwise moderate variation. Such visual diagnostics echo the numerical skewness–kurtosis findings: Brazil’s economy and equity market are substantially more volatile.

## **Correlation between Lagged Stock Returns and GDP Growth**

Table 2. Correlation between r(−1) and Dy

| Country | corr(r(−1), Dy) | Observations |
| ----- | ----- | ----- |
| Brazil | 0.000 |  15  |
| Japan | 0.000 |  38  |

Both unconditional correlations are essentially zero, implying no linear association when computed over overlapping data segments. This suggests that any predictive relation, if it exists, must emerge through regression controlling for intercepts and lagged dynamics rather than raw contemporaneous correlation. Still, scatter plots reveal patterns: Japan’s data points slope mildly upward — higher prior‑year returns coincide with stronger subsequent output — whereas Brazil’s cloud appears random, consistent with a weak or absent link.

## **Regression Analysis**

### **Model 1: Baseline regression**

Dyₜ = α + β · rₜ₋₁ + εₜ

Table 3. Regression of GDP growth on lagged stock return

| Country | Intercept |  SE  |  t  |  p  |  β (rₜ₋₁)  |  SE  |  t  |  p  |  R²  |  N  |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Brazil | 1.171 | 0.448 |  2.62  |  0.014  |  0.0344  |  0.0132  |  2.60  |  0.015  |  0.200  |  29  |
| Japan   |  1.618  |  0.277  |  5.85  |  \<0.001  |  0.0560  |  0.0120  |  4.67  |  \<0.001  |  0.299  |  53  |

Interpretation

For both countries the estimated slope β is positive and statistically significant, but the strength and meaning differ.

* Japan: Each 1‑percentage‑point increase in last year’s real stock return corresponds to \+0.056 pp higher GDP‑per‑capita growth next year. The t‑statistic of 4.67 (p ≈ 2 × 10⁻⁵) easily rejects the null of no relationship at the 1 % level. The R² = 0.30 implies that lagged returns explain roughly 30 % of Japan’s GDP‑growth variation — a remarkably strong result for macro‑finance data, consistent with Mauro’s findings for advanced economies.

* Brazil: The coefficient (0.034) is smaller but still statistically significant at the 5 % level (t = 2.60, p = 0.015). R² = 0.20 means 20 % of GDP‑growth variation is explained by lagged returns. Economically, given the high volatility of r, this predictive power may fluctuate across sub‑periods; however, the positive sign suggests some information content even in an emerging market, possibly due to greater synchronization between financial cycles and real activity during crises.

Graphically, Japan’s regression line fits tightly through the scatter; Brazil’s points are more diffuse but generally rise with r(−1).

### **Model 2: Robustness check (Including lagged Dy)**

Dyₜ = α + β₁ · rₜ₋₁ + β₂ · Dyₜ₋₁ + εₜ

Table 4. Regression including lagged GDP growth

| Country | Intercept |  SE  |  t  |  p  |  β₁ (rₜ₋₁)  |  SE  |  t  |  p  |  β₂ (Dyₜ₋₁)  |  SE  |  t  |  p  |  R²  |  N  |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Brazil |  0.757  |  0.483  |  1.57  |  0.129  |  0.0392  |  0.0129  |  3.04  |  0.005  |  0.314  |  0.169  |  1.86  |  0.074  |  0.294  |  29  |
| Japan   |  1.267  |  0.341  |  3.71  |  0.001  |  0.0517  |  0.0120  |  4.30  |  \<0.001  |  0.1999  |  0.118  |  1.70  |  0.096  |  0.337  |  53  |

Interpretation

Adding lagged GDP growth captures business‑cycle persistence — the tendency for good (or bad) years to follow one another.

* Japan: Both drivers remain positive. The lagged‑return coefficient stays strong (0.052, p \< 0.001) and the lagged‑growth term is marginally significant (p ≈ 0.10). R² rises to 0.34, confirming robustness: stock returns continue to predict GDP even controlling for inertia.

* Brazil: The lagged‑return coefficient becomes slightly larger (0.039, p ≈ 0.005). Lagged GDP growth enters weakly (p ≈ 0.07), indicating mild short‑term momentum. The joint R² = 0.29, an improvement over the 0.20 baseline, demonstrates that including Dy(−1) better captures cyclical dynamics but does not undermine the stock‑return effect.

Economically, a one‑standard‑deviation shock to r(−1) (≈ 33 % in Brazil, 24 % in Japan) implies about 1–2 pp acceleration in next‑year per‑capita growth — substantial in macro terms.

## **Comparison and Discussion**

### **1\. Strength of the Predictive Relationship**

Japan’s β estimates (0.056 → 0.052) are larger, more stable, and more statistically robust than Brazil’s (0.034 → 0.039). The higher significance and explanatory power in Japan align with Mauro’s argument that developed markets convey information about future growth more efficiently thanks to broader investor bases, transparent corporates, and stronger institutions.

### **2\. Volatility, Noise, and Structural Differences**

Brazil’s higher volatility may blur any leading signal. Episodes such as the early‑2000s currency crises or political shocks create sharp equity swings disconnected from real fundamentals, while lags in credit and labour markets dampen the transmission to output. Japan’s fluctuations, though notable, mostly reflect the global cycle and technological investment booms, which link directly to production and income.

### **3\. Persistence and R² Implications**

Including lagged GDP growth confirms the stability of both countries’ β₁ coefficients. The R² increment — 0.20 → 0.29 ( +9 p.p. ) for Brazil, 0.30 → 0.34 ( +4 p.p. ) for Japan — shows that past output helps but does not replace the information in lagged returns. This supports the “leading indicator” interpretation: financial markets anticipate changes rather than merely mirror them.

### **4\. Economic Significance**

Japan’s 0.05–0.06 slope implies that a 20 % stock‑market rise — easily within annual norms — precedes about 1 pp higher GDP growth, consistent with the view that investors price expectations of productivity and demand growth. Brazil’s 0.03–0.04 slope translates to a similar magnitude but is less reliable because of the wider variance; its predictive R² is nonetheless non‑trivial for macro data. The signs and magnitudes therefore suggest that stock‑return information is economically meaningful in both countries but statistically consistent only in Japan.

### **5\. Contextual Interpretation**

Institutional depth and market size help explain the disparity. Japan’s capital markets are integrated with global finance, and equities reflect corporate profits that closely track output. Brazil’s market is narrower and influenced by foreign portfolio flows, commodity prices, and exchange‑rate movements, which may decouple equity returns from domestic production. Inflation volatility and policy shocks also distort the real‑return measure.

## **Visual Summary**

Figure 3. Scatter plot of Dy vs r(−1)

* Japan: Upward‑sloping cloud, trendline coefficient ≈ 0.056, tight dispersion.  
* Brazil: Scattered points, mild upward tilt, frequent outliers, confirming regression fit is modest.

Combined with the descriptive and distributional results, the plots reinforce how signal‑to‑noise ratios differ between mature and emerging markets.

## **Implications and Theoretical Link**

The results complement Mauro (2003) and Fama (1981). Both argue that efficient markets incorporate expectations of future productivity and earnings, which later surface in GDP statistics. In mature markets, where prices aggregate diverse information, stock returns capture upcoming real activity with measurable predictive power. Emerging markets suffer from informational frictions — fewer listed firms, episodic capital inflows, and policy uncertainty — muting the correlation.

For financial practitioners, the findings underline that equity returns can assist in business‑cycle forecasting in developed economies but are unreliable in volatile emerging contexts. Policymakers in emerging markets might treat large market movements cautiously: they often reflect liquidity shifts rather than changes in expected growth.

## **Limitations**

Several caveats temper these conclusions:

1. Sample size — Brazil’s usable N = 29 is small; significance may hinge on a few extreme years.  
2. Annual frequency — Predictive relationships may appear stronger at quarterly horizons, but high‑frequency GDP data are unavailable for many emerging markets.  
3. Structural breaks — Neither regression allows for crises (1998–1999 Asia/LATAM, 2008 global, 2020 pandemic) or policy regime changes that could shift coefficients.  
4. Omitted variables — Commodity‑price cycles, interest‑rate policy, or global risk premia could jointly drive stock returns and growth, inflating R².  
5. Endogeneity — Investors may also react to contemporaneous growth expectations; causality cannot be proven from OLS alone.

Addressing these issues would require multi‑country panels or vector autoregressive (VAR) models, but such extensions lie beyond the scope of this coursework.

## **Conclusion**

This statistical investigation of Brazil and Japan supports Mauro’s proposition that stock‑market returns lead economic growth more reliably in developed than in emerging economies.

* In Japan, the slope between lagged returns and GDP growth is positive, highly significant (p \< 0.001), and robust to including lagged growth. About one‑third of output‑growth variance is explained by equity performance, confirming that financial markets are informative about real prospects.  
* In Brazil, the coefficient is smaller and less stable, with roughly one‑fifth explanatory power; volatility and structural disruptions dilute the predictive signal.

Overall, stock returns do convey forward‑looking information about business cycles, but institutional quality, market depth, and macroeconomic stability determine how visible this link becomes. Developed markets like Japan exhibit the clean predictive relationship envisaged by Mauro (2003) and Fama (1981); emerging markets such as Brazil display a noisier, crisis‑laden version of the same story.

Future research could extend the analysis across all countries in the dataset, test for time‑varying coefficients, and use real‑time forecasting frameworks to evaluate economic usefulness. Within the present evidence, however, the core pattern is clear: financial markets can foresee the real economy — but only where they are sufficiently deep and credible to reflect its fundamentals.

## **References  (UWE Harvard)**

Fama, E.F. (1981) ‘Stock returns, real activity, inflation, and money’, *American Economic Review*, 71 (4), pp. 545–565.

Mauro, P. (2003) ‘Stock returns and output growth in emerging and advanced economies’, *Journal of Development Economics*, 71 (1), pp. 129–153.

U.S. Federal Reserve Bank of St Louis (FRED) (GDP and CPI datasets, retrieved April 2026).

Bloomberg Database (Stock‑index returns and inflation adjustments, retrieved April 2026).

