# draft_stat_dpp — Trimmed Draft (<1,500 words)

*Source:* `draft_stat_dpp.docx` (1,713 words)
*Trimmed:* 2026-05-11

---

## Introduction and Literature

Financial markets are forward-looking: stock prices aggregate expectations, allowing equity returns to predict macroeconomic outcomes. Mauro (2003) studied cross-country correlations between real GDP per capita growth (Dy, %) and lagged real stock returns (r = nominal index return − CPI inflation, %). Extending the analysis beyond G-7 to emerging economies, he found both groups exhibited similar proportions of statistically significant positive correlations annually, though emerging markets showed weaker quarterly correlations. This report replicates and extends Mauro's (2003) annual framework for India (1991–2024) and the USA (1961–2024), computing descriptive statistics, examining distributional properties, testing lead–lag relationships, and estimating regression models. The contrasting findings instructively illustrate the heterogeneity Mauro (2003) documented.

## Descriptive Statistics

Table 1 summarises descriptive statistics for real stock returns and real GDP per capita growth for both countries.

`<<INSERT Table 1 — Descriptive Statistics>>`

India's 5.53% mean stock return exceeds the USA's 3.42%, reflecting emerging-market risk premia (Richards, 1996). India's 27.24-point standard deviation dwarfs the USA's 17.12, validating Mauro's (2003) volatility finding. India averages higher GDP growth via structural catch-up, yet both output series show similar 2–3 point standard deviations. The −52.43% USA stock crash in 2008 is the extreme outlier, where Lehman Brothers' collapse triggered a credit freeze, deleveraging, and halved valuations (Wiggins and Metrick, 2019); conversely, 1995 hit 26.54% from dot-com optimism, expansion, and declining rates. India's −81.32% stock low in 2008 reflected currency stress and capital flight during the Global Financial Crisis (Kumar and Vashisht, 2009). Both stock series are negatively skewed: crashes outweigh gains. India's GDP growth is sharply skewed at −2.07 and leptokurtic with 6.52 excess kurtosis, driven by the −6.92% COVID-19 contraction in 2020. USA GDP growth is nearly symmetric (−0.58 skewness, 0.53 kurtosis). Outliers disproportionately distort Indian data.

## Histograms and Box plots

**Chart 1: Histogram of USA Real Stock Returns (1961 – 2024)**

`<<INSERT Chart 1>>`

Chart 1 shows USA stock returns follow a broadly bell-shaped distribution. Most annual observations cluster between 0% and 25%, reflecting developed equity markets' long-run positive drift. A clear left tail emerges: the 2008 bar (−52.43%) stands alone beyond −45%, with 1974 (−46.32%) adjacent. The mean (3.42%) lies visibly left of the median (7.74%), graphically confirming the negative skewness in Table 1.

**Chart 2: Histogram of USA GDP Growth (1961 – 2024)**

`<<INSERT Chart 2>>`

Chart 2 shows USA GDP growth clustering near its mean with noticeable skewness and kurtosis. Most observations sit near the centre, while fat tails and modest outliers reflect the historical volatility typical of macroeconomic growth.

**Chart 3: Histogram of India Real Stock Returns (1991 – 2024)**

`<<INSERT Chart 3>>`

Chart 3 is immediately striking in width and irregularity. India's modal range (0% to 30%) sits slightly higher than the USA's, but the distribution spreads across 131 percentage points — nearly double the USA's range. The 2008 bar (−81.32%) is completely isolated at the far left, no other year close. Three bars beyond 40% show India's boom years. The Indian histogram is wider and more irregular than Chart 1, visually confirming Mauro's (2003) observation about higher emerging-market return volatility.

**Chart 4: Histogram of India GDP Growth (1991 – 2024)**

`<<INSERT Chart 4>>`

Chart 4 shows India's GDP growth as a roughly bell-shaped distribution centred near the mean and slightly skewed. The concentration around the mean indicates typical conditions, while fat tails reveal occasional extreme volatility and significant economic shocks during the sample.

**Chart 5: Box plot – Real Stock Returns of USA and India (Dots = Outliers)**

`<<INSERT Chart 5>>`

Chart 5 compares spread and outliers for stock returns. The USA's interquartile range runs roughly −5% to 20% with a 7.74% median; two lower outliers — 2008 (−52.43%) and 1974 (−46.32%) — sit far below the whisker. India's 2008 (−81.32%) appears as a dramatic isolated dot nearly 30 pp below the next worst year, with three positive outliers above the upper whisker. The slightly wider Indian box confirms its higher IQR. Box plots complement the histograms by showing each outlier as a named point rather than a bar.

**Chart 6: Box plot – GDP per capita Growth of USA and India (Dots = Outliers)**

`<<INSERT Chart 6>>`

Chart 6 compares GDP growth box plots. The compact USA box concentrates between 1% and 4%, with only two lower outliers (−3.49% in 2009; −2.60% in 2020). India's box sits higher with a 5.28% median, reflecting structural growth advantages, but features a dominant −6.92% downside outlier in 2020 and an exceptional 8.43% upside outlier in 2021. Alongside Charts 2 and 4, these plots confirm India's superior average growth carries substantially higher tail risk; India's 2020 shock was far more severe than the 2009 US recession.

## Correlation and scatter

Table 2 reports the Pearson correlation coefficient between lagged stock returns r(t−1) and current-year GDP growth Dy(t).

`<<INSERT Table 2 — Pearson Correlation>>`

The two coefficients contrast sharply. USA: r = 0.505 (n = 63), a moderate positive relationship — strong S&P 500 years tend to precede above-average GDP growth, an economically meaningful link. Squaring this coefficient yields approximately the R² = 0.255 obtained in regression. India: r = −0.065 (n = 33), so close to zero that it is economically and statistically meaningless. The pattern for India is not merely weak, it is genuinely absent.

**Chart 7: Scatter – USA Lagged Stock Returns and GDP Growth**

`<<INSERT Chart 7>>`

Chart 7 shows a clear upward-sloping OLS trend line for the USA — points scatter with considerable noise, but the trend is unmistakable. The most influential point is 2008–2009: the worst annual return (−52.4%) was followed by the deepest recession (−3.49% GDP), exactly what the leading-indicator hypothesis predicts. R² = 0.255 means lagged returns explain about 25% of GDP variation, leaving 75% unexplained — predictive but imperfect, consistent with Samuelson's quip that the stock market has predicted nine of the last five recessions (Mauro, 2003).

**Chart 8: Scatter – India Lagged Stock Returns and GDP Growth**

`<<INSERT Chart 8>>`

Chart 8 shows a near-horizontal cloud of points for India with a nearly flat OLS line — the pattern is very weak, in fact absent. The 2008–2009 point is telling: despite the catastrophic −81.3% Nifty return in 2008, India's GDP grew 6.12% in 2009, buffered by domestic consumption and fiscal stimulus. This single point sits in the top-left quadrant, directly contradicting the leading-indicator hypothesis. The 2019–2020 point shows the opposite: a modestly positive 2019 return preceded a −6.92% GDP collapse caused by COVID lockdowns exogenous to financial markets. R² = 0.004 confirms the pattern is genuinely absent for India.

## Primary regression

The primary regression estimates current-year GDP growth on the previous year's real stock return, following the lecture model:

Dy(t)  =  α  +  β · r(t−1)  +  ε(t)

`<<INSERT Table 3 — Primary Regression>>`

USA: β̂ = 0.059 — every 10 pp rise in lagged S&P 500 returns predicts approximately 0.59 pp higher GDP growth the following year. The t-statistic of 4.57 (p < 0.001) confirms β differs clearly from zero. R² = 0.255: lagged returns explain about 25% of variation in US GDP growth, consistent with Mauro (2003). The leading-indicator hypothesis is supported for the USA.

India: β̂ = −0.006 (t = −0.36, p = 0.720), not different from zero at any significance level. R² = 0.004: lagged Nifty returns explain less than 0.5% of India's GDP variation. The leading-indicator hypothesis is not supported for India.

## Robustness regression

Adding lagged GDP growth Dy(t−1) checks whether β still differs from zero once growth momentum is controlled for:

Dy(t)  =  α  +  β · r(t−1)  +  γ · Dy(t−1)  +  ε(t)

`<<INSERT Table 4 — Robustness Regression>>`

USA: β remains 0.058 (t = 4.54, p < 0.001), virtually unchanged; lagged GDP growth is insignificant (p = 0.181); R² rises marginally to 0.277. The coefficient on lagged returns is clearly different from zero even after controlling for momentum, and still explains meaningful variation in GDP growth.

India: both β̂ = −0.008 (p = 0.681) and γ̂ = 0.063 (p = 0.722) are insignificant; R² = 0.008. Neither coefficient differs from zero. The null result for India is fully robust.

## Conclusion, limits, improvements

### Summary of findings

Lagged S&P 500 returns predict US GDP growth (β = 0.059, t = 4.57, R² = 0.255); adding lagged GDP yields a robust β = 0.058 (t = 4.54, R² = 0.277). Nifty 50 returns lack predictive power for India (β = −0.006, t = −0.36, R² = 0.004). Replicating Mauro (2003), this divergence reflects market depth: he cites capitalisation-to-GDP as the main predictor, and India recorded 25% in 1998 versus 158% for the USA (Mauro, 2003), indicating unrepresentative markets. The US relationship is predictive, not causal.

### Limitations

First, India's short sample limits power. Second, omitting interest spreads, credit, and money supply weakens the model, which Mauro (2003) proved valuable. Third, 2008 and 2020 shocks distort OLS estimates. Fourth, Stock and Watson (1998) showed fluctuating US predictive power, making the 1961–2024 estimate an average of sub-periods.

### Improvements

Research should split sub-periods to test stability and add monetary controls following Mauro (2003). Outlier-robust regression mitigates 2008 and 2020 extremes. Quarterly data would raise Indian statistical power. Re-running analysis with post-2010 data, when capitalisation exceeded 50% of GDP, tests whether this link strengthened as markets deepened.
