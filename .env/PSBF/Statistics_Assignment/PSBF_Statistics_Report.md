# Stock Returns as a Leading Indicator of Output Growth: A Comparative Statistical Analysis of China and the United Kingdom

**Student Number:** 25062677
**Module:** UMET9U-30-1 — Professional Skills for Banking and Finance
**Coursework Title:** Portfolio – Statistics Component
**Word Count:** ~1,450 words (excluding statistical tables, captions, and reference list)

---

## 1. Introduction

The empirical relationship between stock returns and economic growth has been a long-standing topic in financial economics. Because asset prices embed expectations about future fundamentals, stock returns react quickly to news, while macroeconomic aggregates respond with a lag. This timing asymmetry creates a positive correlation between the previous year's stock returns and the current year's output growth, making lagged stock returns a candidate leading indicator of GDP growth (Fama, 1990). Mauro (2003) systematically tested this hypothesis on a panel of emerging and advanced economies and found that the proportion of countries in which the correlation is statistically significant is broadly similar across the two groups when annual data are used, although the strength of the relationship varies with country characteristics such as market capitalisation and the legal origin of stock-market regulations.

This report investigates the same relationship for two contrasting economies: **China** (an emerging market, MSCI classification, SHCOMP index) and the **United Kingdom** (a developed market, FTSE 100 / UKX index). Real stock returns are computed as nominal log-returns deflated by inflation, while economic growth (Dy) is the log-return of constant 2010-USD GDP per capita. The analysis covers 1991–2024 for China (n = 33 paired observations after lagging) and 1984–2024 for the UK (n = 40 paired observations after lagging). The structure follows the coursebook brief: descriptive statistics, distributional analysis, correlation, regression, and a robustness check including a lagged dependent variable.

## 2. Descriptive Statistics

`<Table 1>`

Table 1 reports the standard summary statistics for the four series. China's real stock returns (r_CN) display a mean of 5.94 % with a standard deviation of 40.76 %, an extreme range of 203.7 percentage points (–112.0 % to +91.7 %), and excess kurtosis of 1.33. UK returns (r_GB) are far calmer: mean 2.04 %, standard deviation 14.18 %, range 65.4 percentage points. China's GDP-growth series (Dy_CN) averages 7.83 % per year with a relatively low dispersion (σ = 2.42 %), reflecting four decades of catch-up expansion, whereas the UK series (Dy_GB) averages 1.65 % with σ = 2.91 %. A particularly striking feature is the **kurtosis of Dy_GB (8.21)** combined with a strongly negative skewness (–2.09), which signals heavy left tails driven by the 2009 Global Financial Crisis (–5.45 %) and the 2020 COVID-19 contraction (–10.76 %). For China, both r_CN and Dy_CN are close to symmetric (skewness near zero) but r_CN remains leptokurtic. These contrasts are consistent with Richards (1996), cited in Mauro (2003), who documents that volatility in emerging markets exceeds that of mature markets for both returns and output.

## 3. Distributional Properties

`<Figure 1>` `<Figure 2>` `<Figure 3>` `<Figure 4>`

Histograms confirm the descriptive findings. Figure 1 shows that r_CN is broadly bell-shaped but with very fat tails reaching ±100 %; Figure 2 reveals that Dy_CN is concentrated between 5 % and 12 %, with the only significant deviation being the COVID-related drop in 2020 to 2.08 %. Figure 3 shows r_GB clustered around 0–15 % but with two pronounced left-tail observations corresponding to the 2002 dot-com correction (–29.6 %) and the 2008 crisis (–41.1 %). Figure 4 illustrates how Dy_GB is sharply peaked around 1–3 % with the two crisis observations producing the heavy-left-tail pattern flagged by the kurtosis statistic.

`<Figure 5>` `<Figure 6>`

The combined box plots (Figures 5 and 6) make the cross-country contrast explicit. The returns box plot (Figure 5) shows that the inter-quartile range of China is several times wider than that of the UK and that both economies exhibit clear outliers. The growth box plot (Figure 6) shows that China's distribution is shifted upward by roughly six percentage points and is much tighter, while the UK distribution has lower median growth and longer whiskers due to the crisis episodes. These patterns motivate the use of lagged returns as a candidate predictor: if news about future GDP is incorporated into prices in advance, periods of unusually large stock-price movements should statistically precede unusual growth outcomes (Mauro, 2003).

## 4. Correlation between Lagged Stock Returns and GDP Growth

`<Table 2>`

The Pearson correlation between r_{t−1} and Dy_t is **0.275 for China** and **0.223 for the United Kingdom** (Table 2). Both are positive, in line with the theoretical priors reviewed by Mauro (2003) and the "passive informant" hypothesis of Morck, Shleifer and Vishny (1990), under which equity prices reflect the present discounted value of future dividends (which are tied to GDP) so that high returns this year forecast high growth next year. The Chinese correlation is slightly stronger than the British one, the opposite of what one might expect if developed markets were more efficient information aggregators; however, the difference is small and consistent with Mauro's (2003) finding that the share of emerging markets with significant correlations is comparable to that of advanced economies at the annual frequency.

`<Figure 7>` `<Figure 8>`

The scatter plots (Figures 7 and 8) confirm the positive but weak linear association. A wide dispersion of points around the fitted line is visible in both panels, indicating that lagged returns explain only a small share of the variation in subsequent GDP growth and that several years deviate substantially from the regression line — for instance, 2008 in the UK (where a strong return in 2007 was followed by recession) and 2020 in China.

## 5. Regression Analysis

The OLS specification is

  Dy_t = α + β · r_{t−1} + ε_t .

`<Table 3>` `<Table 4>`

For **China** (Table 3), the estimated slope is β = 0.0163 with standard error 0.0103 and t-statistic 1.591 (p = 0.122). The intercept of 7.74 % is large and highly significant (t = 18.33), indicating that average Chinese GDP growth would be roughly 7.7 % even if the lagged stock return were zero. Each one-percentage-point increase in last year's real stock return is associated with a 0.016-percentage-point increase in next year's GDP growth, but at conventional 5 % significance the coefficient is **not statistically distinguishable from zero**. The R² of 0.0755 indicates that only 7.5 % of the variation in Dy_CN is explained by lagged returns.

For the **United Kingdom** (Table 4), β = 0.0458, standard error 0.0324, t = 1.411 (p = 0.166); the intercept is 1.53 % (t = 3.30, p = 0.002). The point estimate is roughly three times larger than China's, but again it is not significant at the 5 % level, and R² is similarly low (0.050). Together, these results echo Mauro (2003): the sign of the relationship is correct in both economies, but a single explanatory variable cannot deliver a high goodness-of-fit, partly because asset prices, although fast-moving, are only an imperfect leading indicator (Stock and Watson, 1998, as cited in Mauro, 2003).

## 6. Robustness Analysis with a Lagged Dependent Variable

To check whether the slope on r_{t−1} is robust to the inclusion of last year's GDP growth, the model is re-estimated with Dy_{t−1} as an additional regressor:

  Dy_t = α + β₁ · r_{t−1} + β₂ · Dy_{t−1} + ε_t .

`<Table 5>` `<Table 6>`

For **China** (Table 5), the results change materially. The slope on lagged GDP growth itself is highly significant (β₂ = 0.628, t = 4.43, p < 0.001), R² rises from 0.076 to 0.441, and the F-statistic of 11.84 is significant at the 0.1 % level by the F-test taught in Lecture 12. Once last year's Chinese GDP growth is included as a regressor, the coefficient on r_{t−1} falls to 0.0098 and remains insignificant (p = 0.245). For the **United Kingdom** (Table 6), in contrast, the coefficient on Dy_{t−1} is essentially zero (β₂ = –0.025, p = 0.882), R² is only 0.050 and the F-statistic of 0.98 (p = 0.385) means we cannot reject the null that all slopes are jointly zero — the model has no overall explanatory power. The slope on lagged returns is unchanged (0.047, p = 0.173). This asymmetry is informative: for China, last year's GDP growth is the strongest single predictor of current growth; for the UK, last year's growth carries no statistically significant information about current growth.

## 7. Summary, Limitations, and Conclusions

Three findings emerge. First, in both China and the UK lagged real stock returns are **positively** correlated with subsequent GDP growth, consistent with the hypothesis that asset prices embed forward-looking information about real activity. Second, the magnitude of the slope is small and the relationship is **not statistically significant at the 5 % level** for either economy in the bivariate specification, with low R² values of 7.5 % and 5.0 % respectively. Third, the robustness check reveals a sharp cross-country contrast: for China, last year's GDP growth is a strong predictor of current growth, whereas for the UK it is not. These results broadly align with Mauro (2003), who emphasised that the strength of the returns–growth association varies systematically across countries with stock-market characteristics, and that emerging-market correlations are not categorically different from those in advanced economies.

Several **weaknesses** of the analysis should be acknowledged. The samples are short (33 and 40 observations) which reduces statistical power; index-based stock returns ignore changes in market capitalisation and sectoral composition; and the few extreme observations identified in Section 2 (UK 2008, UK 2020, China 2008) may exert a disproportionate influence on the OLS estimates. **Possible improvements** include extending the dataset to a panel of emerging and developed economies (as in Mauro, 2003), adding a third explanatory variable such as the term spread or credit growth (Stock and Watson, 1998), moving to quarterly rather than annual frequency to enlarge the sample, and splitting the sample into pre-2008 and post-2008 sub-periods. Despite these caveats, the data confirm that lagged stock returns carry the right sign as a leading indicator of output, even if their stand-alone predictive content for these two economies is modest.

---

## References

Fama, E. F. (1990) 'Stock returns, expected returns, and real activity', *Journal of Finance*, 45(4), pp. 1089–1108.

Levine, R. and Zervos, S. (1998) 'Stock markets, banks, and economic growth', *American Economic Review*, 88(3), pp. 537–558.

Mauro, P. (2003) 'Stock returns and output growth in emerging and advanced economies', *Journal of Development Economics*, 71(1), pp. 129–153.

Morck, R., Shleifer, A. and Vishny, R. W. (1990) 'The stock market and investment: is the market a sideshow?', *Brookings Papers on Economic Activity*, 1990(2), pp. 157–215. *(Cited via Mauro, 2003.)*

Richards, A. J. (1996) 'Volatility and predictability in national stock markets: how do emerging and mature markets differ?', *IMF Staff Papers*, 43(3), pp. 461–501. *(Cited via Mauro, 2003.)*

Stock, J. H. and Watson, M. W. (1998) 'Business cycle fluctuations in U.S. macroeconomic time series, 1959–1988', NBER Working Paper No. 6528. *(Cited via Mauro, 2003.)*
