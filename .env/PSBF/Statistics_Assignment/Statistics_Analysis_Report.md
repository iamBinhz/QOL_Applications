# Stock Returns as a Leading Indicator of Output Growth: Evidence from China and the United Kingdom

**Student Number:** 25062677
**Module:** UMET9U-30-1 — Professional Skills for Banking and Finance
**Coursework Title:** Portfolio – Statistics Component
**Word Count:** ≈ 1,470 words (excluding tables, figure captions, and reference list, in line with UWE's Assessment Content Limit Policy)

---

## 1. Introduction

Stock prices respond rapidly to news about expected fundamentals, whereas macroeconomic aggregates adjust slowly. This timing asymmetry is the basis for the long-standing claim that lagged real stock returns can act as a *leading indicator* of GDP growth (Fama, 1990). Mauro (2003) studied this hypothesis on a panel of ten emerging and ten advanced economies and reported two main findings: at the annual frequency, the proportion of countries in which the correlation between lagged real stock returns and output growth is statistically significant is broadly *the same* in emerging as in advanced markets; and the strength of the association is systematically related to stock-market characteristics — high market capitalisation to GDP, a large number of listed companies, and English (non-French) legal origin (Mauro, 2003, pp. 130–131, 146).

Following the coursebook brief, this report selects one country from each MSCI category — **China (CN, SHCOMP)** as the emerging market and the **United Kingdom (GB, UKX/FTSE 100)** as the advanced market — and replicates Mauro's bivariate exercise. Real stock returns *r* are nominal log-returns minus consumer-price inflation, and economic growth *Dy* is the log-return of constant-2010-USD GDP per capita. After lagging, the analysis covers **1992–2024 (n = 33)** for China and **1985–2024 (n = 40)** for the UK. The remainder follows the structure suggested by the brief: descriptive statistics, distributional analysis, correlation, OLS regression, and a robustness check that adds a lagged dependent variable.

## 2. Descriptive Statistics

`<Table 1>`

Table 1 presents the standard summary measures (PSBF lectures 7–9 on descriptive statistics). Three points stand out.

First, **central tendency** differs sharply across the two economies. Chinese GDP-growth averages 7.83 % per year (median 7.72 %), reflecting four decades of catch-up growth; the UK averages 1.65 % (median 2.00 %). Mean stock returns are also higher in China (5.94 %) than in the UK (2.04 %), consistent with the higher risk premium expected of an emerging market.

Second, **dispersion** is much larger in China. The standard deviation of *r_CN* is 40.76 % (variance 1,661.7) against 14.18 % for *r_GB*, and the range of *r_CN* (203.7 percentage points, from –112.04 % to +91.69 %) is more than three times the UK range (65.4 pp). This is exactly the volatility differential between emerging and mature markets that Richards (1996, *cited in* Mauro, 2003) documents.

Third, **shape** matters. Both UK series are heavily skewed and leptokurtic: *Dy_GB* has skewness –2.09 and kurtosis 8.21, driven by the 2009 Global Financial Crisis (–5.45 %) and the 2020 COVID-19 contraction (–10.76 %). *r_GB* is also negatively skewed (–1.05) due to the 2008 collapse (–41.10 %). The Chinese series are far closer to symmetric (skewness near zero for both *r_CN* and *Dy_CN*), although *r_CN* still shows positive excess kurtosis (1.33). These distributional features are consistent with Richards (1996), cited in Mauro (2003), who reports that volatility in emerging markets exceeds that of mature markets for both returns and output.

## 3. Distributional Properties

`<Figure 1>` `<Figure 2>` `<Figure 3>` `<Figure 4>`

Histograms condense the raw observations into frequency classes (PSBF lecture on frequency distributions). Figure 1 shows that *r_CN* is a roughly bell-shaped but very wide distribution with extreme tails reaching beyond ±100 %, dominated by 2008 (–112 %) and the speculative rallies of the early 1990s and 2007. Figure 2 depicts *Dy_CN* as concentrated between 5 % and 12 %, with a single visible left-tail observation in 2020 (2.08 %). Figure 3 shows *r_GB* with a central mass around 0 – 15 % and two extreme negative observations (2002 dot-com correction, 2008 GFC). Figure 4 shows *Dy_GB* clustered tightly around 1–3 %, with the same two crisis years pulling the distribution to the left and producing the high kurtosis reported in Table 1.

`<Figure 5>` `<Figure 6>`

Combined box plots make the cross-country contrast explicit. In Figure 5 the inter-quartile box of *r_CN* is several times wider than that of *r_GB*, with Chinese whiskers extending almost symmetrically while the UK whiskers reach further to the left than to the right. In Figure 6 the GDP-growth box plots show that the median of *Dy_CN* is roughly six percentage points above that of the UK; the UK box itself is shorter, but the lower whisker is much longer because of the crisis observations. These pictures visualise what the Table-1 statistics announced in numerical form.

## 4. Correlation between Lagged Stock Returns and GDP Growth

`<Table 2>`

The Pearson correlation between *r_{t−1}* and *Dy_t* is **0.275 for China** (n = 33) and **0.223 for the UK** (n = 40) (Table 2). Both are positive, in the direction predicted by all theories surveyed by Morck, Shleifer and Vishny (1990), *as cited in* Mauro (2003). Under the simplest "passive informant" hypothesis, equity prices reflect the present discounted value of future dividends, which are tied to future GDP, so a positive *r_{t−1}* should statistically precede a positive *Dy_t* (Mauro, 2003, p. 132). The fact that the Chinese correlation is marginally larger than the British one is consistent with Mauro's panel finding that emerging-market correlations are *not* systematically weaker than those in advanced economies at the annual frequency (Mauro, 2003, pp. 138–139).

`<Figure 7>` `<Figure 8>`

The scatter plots (Figures 7 and 8) display the same association graphically. The fitted lines slope upwards in both panels, but the points are widely dispersed around them, foreshadowing the low coefficients of determination obtained below. Several years lie far from the line — most notably 2008 in the UK (a strong 2007 return followed by recession) and 2020 in China.

## 5. Regression Analysis

The bivariate specification is

  *Dy_t = α + β · r_{t−1} + ε_t*

estimated by OLS. Following the lecture sequence (coefficients → t-test → R² → F-test), interpretation proceeds in four steps.

`<Table 3>` `<Table 4>`

**China (Table 3).** The slope estimate is β = 0.0163 with standard error 0.0103. *Interpretation:* a one-percentage-point increase in last year's real stock return is associated with a 0.016-percentage-point increase in this year's GDP growth — economically very small. *Two-sided t-test* of H₀: β = 0 against H₁: β ≠ 0 yields t = 1.591 with 31 degrees of freedom; the p-value (0.122) exceeds the 5 % significance level, so the null cannot be rejected. The intercept of 7.74 % (t = 18.33, p < 0.001) is highly significant and approximately equals the unconditional mean growth rate. *Coefficient of determination:* R² = 0.0755, meaning that lagged stock returns explain only 7.5 % of the variation in *Dy_CN*. The F-statistic of 2.53 (p = 0.122) confirms the same conclusion as the t-test, as expected in a bivariate regression (PSBF lecture: "When working with a bivariate regression, the F test provides the same conclusion as the t test").

**United Kingdom (Table 4).** β = 0.0458 (s.e. 0.0324, t = 1.411, p = 0.166); intercept 1.53 % (t = 3.30, p = 0.002). The point estimate is roughly three times China's, but again the slope is *not* statistically significant at 5 %. R² = 0.0498 (4.98 %) and F = 1.99 (p = 0.166).

The pattern — a positive sign but a non-significant slope and a low R² — is exactly what Mauro (2003) reports for the median country in his panel: lagged returns "contain valuable information to forecast output", yet are "far from perfect as a leading indicator" (Mauro, 2003, p. 130). The low explanatory power partly reflects the sample size (just 33 / 40 observations) and the fact that one financial variable cannot capture all macroeconomic news (Stock and Watson, 1998, *cited in* Mauro, 2003).

## 6. Robustness Analysis with a Lagged Dependent Variable

To test whether the slope on *r_{t−1}* is robust to the inclusion of last year's GDP growth, the model is re-estimated with the lagged dependent variable as an additional regressor:

  *Dy_t = α + β₁ · r_{t−1} + β₂ · Dy_{t−1} + ε_t*.

`<Table 5>` `<Table 6>`

**China (Table 5).** Adding *Dy_{t−1}* changes the picture markedly. β₂ = 0.628 (t = 4.43, p < 0.001) is highly significant; R² jumps from 0.076 to 0.441, and the F-statistic of 11.84 (p < 0.001) rejects the null that all slopes are jointly zero at the 0.1 % level. Once last year's GDP growth is included as a regressor, β₁ on *r_{t−1}* falls to 0.0098 (p = 0.245) — even *smaller* and still insignificant. The interpretation is that the predictive content of lagged Chinese stock returns is largely captured by last year's GDP growth itself: previous-year growth is a far better predictor of current growth than previous-year stock returns.

**United Kingdom (Table 6).** The opposite happens. β₂ on *Dy_{t−1}* is essentially zero (–0.025, t = –0.150, p = 0.882), the F-statistic falls to 0.98 (p = 0.385), and R² is only 0.050. The model has no overall predictive power: by the F-test we cannot reject the null that all slopes are jointly zero. The slope on *r_{t−1}* is unchanged at 0.047 (p = 0.173). In other words, last year's UK GDP growth contains no useful information about this year's growth.

## 7. Summary, Limitations and Conclusion

The empirical evidence supports three conclusions. **First**, in both China and the UK lagged real stock returns are *positively* correlated with subsequent GDP growth, in agreement with the theoretical priors reviewed in Mauro (2003). **Second**, the bivariate slopes are *small in magnitude and statistically insignificant* at the 5 % level, with low coefficients of determination (7.5 % and 5.0 %), echoing Mauro's finding that the leading-indicator content of stock returns, while non-trivial, is far from perfect. **Third**, the robustness check reveals an interesting asymmetry — for China, last year's GDP growth is the strongest single predictor of current growth (β₂ highly significant), whereas for the UK last year's growth has no statistically significant link with current growth.

Several **weaknesses and possible improvements** should be acknowledged. Sample sizes (33 and 40) are short, lowering statistical power; index returns ignore changes in market capitalisation and sector composition; the linear specification ignores potential structural breaks (1997 Asian crisis, 2008 GFC, 2020 COVID-19, 2015 Chinese stock-market correction); and the few extreme observations identified in Section 2 (e.g. UK 2008, UK 2020, China 2008) may exert a disproportionate influence on the OLS estimates. Future work could (i) extend the analysis to a multi-country panel as in Mauro (2003), (ii) move to quarterly frequency to increase the number of observations, (iii) add a third explanatory variable such as the term spread or credit growth (Stock and Watson, 1998), and (iv) split the sample to compare a pre-2008 and a post-2008 sub-period, since the two crisis years dominate the UK regressions. Within these caveats, the data confirm that lagged stock returns carry the *correct sign* as a leading indicator of output in both an emerging and an advanced economy, while emphasising — as Mauro (2003) does — that the magnitude and significance of the relationship vary substantially across countries.

---

## References

Fama, E. F. (1990) 'Stock returns, expected returns, and real activity', *Journal of Finance*, 45(4), pp. 1089–1108.

Levine, R. and Zervos, S. (1998) 'Stock markets, banks, and economic growth', *American Economic Review*, 88(3), pp. 537–558.

Mauro, P. (2003) 'Stock returns and output growth in emerging and advanced economies', *Journal of Development Economics*, 71(1), pp. 129–153.

Morck, R., Shleifer, A. and Vishny, R. W. (1990) 'The stock market and investment: is the market a sideshow?', *Brookings Papers on Economic Activity*, 1990(2), pp. 157–215. *(Cited via Mauro, 2003.)*

Richards, A. J. (1996) 'Volatility and predictability in national stock markets: how do emerging and mature markets differ?', *IMF Staff Papers*, 43(3), pp. 461–501. *(Cited via Mauro, 2003.)*

Stock, J. H. and Watson, M. W. (1998) 'Business cycle fluctuations in U.S. macroeconomic time series, 1959–1988', NBER Working Paper No. 6528. *(Cited via Mauro, 2003.)*
