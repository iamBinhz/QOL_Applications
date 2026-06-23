# New Report
# Stock Returns as a Leading Indicator of GDP Growth: A Comparison of China and the United Kingdom

**Student Number:** 25062677
**Module:** UMET9U-30-1 — Professional Skills for Banking and Finance
**Coursework Title:** Portfolio – Statistics Component
**Word Count (main text including headings, statistical tables and reference list excluded per UWE policy):** 1,548 words

---

## 1. Introduction and Literature

Asset prices move quickly because investors react to news at once, while macroeconomic data such as GDP take much longer to adjust. This timing gap is the basis for using stock returns as a leading indicator of future output growth. Mauro (2003) studied this idea in a panel of emerging and developed economies and reported that the share of countries in which the correlation between lagged real stock returns and current GDP growth is statistically significant is roughly the same in both groups when annual data are used. He also linked the strength of the relationship to characteristics such as market capitalisation and the legal origin of stock-market regulation. Earlier work by Fama (1990, cited in Mauro, 2003) and the survey of theories in Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) provide the underlying explanation: under the “passive informant” view, stock prices reflect the present value of expected future dividends, so positive news about next year’s GDP today shows up as high returns today.

This report applies the same approach to two contrasting countries chosen from the coursework dataset: **China** (an emerging market, MSCI classification, SHCOMP index) and the **United Kingdom** (a developed market, FTSE 100 / UKX index). Real stock returns (denoted *r*) are nominal log-returns deflated by consumer-price inflation. Economic growth (*Dy*) is the log-return of constant-2010-USD GDP per capita. The annual sample covers 1991–2024 for China and 1984–2024 for the UK, giving 34 and 41 observations respectively, and 33 and 40 paired observations once returns are lagged by one year. The leading-indicator question is therefore: *does last year’s real stock return help to predict this year’s GDP growth, and does the answer differ between China and the UK?* Mauro (2003) is used as background literature throughout.

## 2. Descriptive Statistics

`<<INSERT Table 1 — Descriptive Statistics>>`

Table 1 summarises the four series. Chinese real stock returns (r_CN) have a mean of 5.94 % but a very large standard deviation of 40.76 % and a range of 203.7 percentage points (from −112.0 % to +91.7 %). UK returns (r_GB) are much calmer: mean 2.04 %, standard deviation 14.18 %, range 65.4 points. For output, Chinese GDP growth (Dy_CN) averages 7.83 % per year with a small spread (σ = 2.42 %), in line with four decades of fast catch-up. The UK series (Dy_GB) averages only 1.65 % with σ = 2.91 %.

Two further features stand out. First, Dy_GB has a strong negative skewness (−2.09) and a very high kurtosis (8.21), which means the distribution has a heavy left tail. This tail is driven by the 2009 Global Financial Crisis (−5.45 %) and the 2020 COVID-19 contraction (−10.76 %). Second, both r_CN and r_GB are leptokurtic, showing more extreme observations than a normal distribution would suggest. China’s returns are almost symmetric (skewness ≈ 0), while UK returns are moderately negatively skewed. These contrasts match the observation in Richards (1996, cited in Mauro, 2003) that volatility in emerging markets exceeds that of mature markets for both returns and output.

## 3. Histograms and Box Plots

`<<INSERT Figure 1 — Combined 2×2 histogram panel: distributions of r and Dy for China and the UK>>`

Figure 1 collects the four histograms. Panel (a) shows r_CN is roughly bell-shaped, with very fat tails reaching close to ±100 %. Panel (b) shows that Dy_CN is concentrated between 5 % and 12 %, with the only clear deviation being the COVID-related drop in 2020 to 2.08 %. Panel (c) shows r_GB clustered around 0–15 %, but with two pronounced left-tail values: −29.6 % in 2002 (the dot-com correction) and −41.1 % in 2008. Panel (d) illustrates the same idea for Dy_GB: a sharp peak at 1–3 % with the two crisis years producing the heavy left tail flagged by the kurtosis statistic.

`<<INSERT Figure 2 — Box plot of r_CN and r_GB>>`
`<<INSERT Figure 3 — Box plot of Dy_CN and Dy_GB>>`

The box plots highlight the cross-country contrast. In Figure 2, the inter-quartile range of Chinese returns is several times wider than the UK one, and both economies show clear outliers at the tails. In Figure 3, the Chinese growth distribution lies several percentage points above the UK one and is much tighter around the median. The UK box has a lower median and longer whiskers because of the 2009 and 2020 downturns. These shapes are consistent with the leading-indicator idea: if news about future output is reflected quickly in prices, periods of unusually large stock-price moves should statistically come *before* unusual growth outcomes (Mauro, 2003).

## 4. Correlation and Scatter

`<<INSERT Table 2 — Correlation>>`

The Pearson correlation between the lagged return r_{t−1} and current GDP growth Dy_t is **0.275 for China** and **0.223 for the United Kingdom** (Table 2). Both numbers are positive, which is the sign that the “passive informant” theory of Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) and the empirical findings of Fama (1990, cited in Mauro, 2003) would predict: high returns this year should be associated with stronger growth next year. Interestingly, the Chinese correlation is slightly larger than the UK one, although the gap is small. This is in line with Mauro (2003), who concluded that the share of emerging-market economies with significant return–growth correlations is not lower than the share of advanced economies at the annual frequency.

`<<INSERT Figure 4 — Scatter of Dy_CN vs r_CN(−1)>>`
`<<INSERT Figure 5 — Scatter of Dy_GB vs r_GB(−1)>>`

Figures 4 and 5 plot Dy_t against r_{t−1} together with a fitted line. The slope is positive in both cases, but the points are widely scattered around the line. Several years are clearly off the trend, for example the UK in 2008 (a strong return in 2007 was followed by a deep recession) and China in 2020. This visual pattern already suggests that lagged returns alone explain only a modest part of growth.

## 5. Primary Regression

The primary OLS specification is

  Dy_t = α + β · r_{t−1} + ε_t .

`<<INSERT Table 3 — Regression: China>>`
`<<INSERT Table 4 — Regression: United Kingdom>>`

For **China** (Table 3), the slope is 0.0163, with standard error 0.0103, t-statistic 1.591 and p-value 0.122. The intercept of 7.74 percent is large and highly significant (t-statistic 18.33), which simply means that average Chinese GDP growth would still be about 7.7 percent even if the lagged stock return were zero. The absolute t-statistic of 1.591 is below 2, so at the 5 percent level we **cannot reject** the null. Each one-percentage-point rise in last year’s real return is linked to a 0.016 percentage-point increase in next-year growth, but this effect is not statistically distinguishable from zero. The coefficient of determination is 0.0755, so only about 7.5 percent of the variation in Chinese GDP growth is explained by lagged returns.

For the **United Kingdom** (Table 4), the slope is 0.0458, with standard error 0.0324, t-statistic 1.411 and p-value 0.166. The point estimate is roughly three times larger than China’s, but again not significant at the 5 percent level, and the coefficient of determination is similarly low (0.050). Both regressions therefore have the right sign but very modest explanatory power. This is consistent with Mauro’s (2003) result that lagged stock returns carry useful information about future output but are an imperfect predictor on their own, a point also stressed by Stock and Watson (1998, cited in Mauro, 2003).

## 6. Robustness Regression

To check whether the slope on r_{t−1} is robust, the model is re-estimated with last year’s GDP growth added as a second regressor:

  Dy_t = α + β₁ · r_{t−1} + β₂ · Dy_{t−1} + ε_t .

`<<INSERT Table 5 — Robustness: China>>`
`<<INSERT Table 6 — Robustness: United Kingdom>>`

For **China** (Table 5), the result changes a great deal. The slope on last year’s GDP growth itself is highly significant: 0.628, with a t-statistic of 4.43 and a p-value below 0.001. The coefficient of determination rises from 0.076 to 0.441, and the F-statistic of 11.84 is significant at the 0.1 percent level, so the model has clear joint explanatory power. Once last year’s GDP growth is added, the slope on the lagged stock return falls to 0.0098 and remains insignificant (p-value 0.245). For the **United Kingdom** (Table 6), by contrast, the slope on last year’s GDP growth is essentially zero (around −0.025, p-value 0.882). The coefficient of determination stays at only 0.050, and the F-statistic of 0.98 (p-value 0.385) means we cannot reject the null that *all* slopes are jointly zero. The slope on the lagged stock return barely changes (0.047, p-value 0.173). The evidence on lagged returns is therefore neither stronger nor weaker after the robustness step; it remains insignificant in both economies. The robustness check does, however, reveal a clear cross-country asymmetry in the role of past growth itself: in China, last year’s growth strongly predicts this year’s growth, while in the UK it does not.

## 7. Conclusion, Limitations and Improvements

Three findings emerge. First, in both China and the UK, lagged real stock returns are **positively** correlated with subsequent GDP growth, which is the sign predicted by the leading-indicator theories surveyed by Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) and Fama (1990, cited in Mauro, 2003), and confirmed empirically by Mauro (2003). Second, the relationship is **not statistically significant at the 5 percent level** for either economy on its own: the t-tests give p-values of 0.122 (China) and 0.166 (UK), and the coefficient of determination is below 8 percent in both cases. Third, the robustness check shows that the slope on the lagged stock return is stable when last year’s GDP growth is added, but it also exposes a sharp cross-country contrast: past growth is a strong predictor of current growth in China but not in the UK. Overall, these results are broadly in line with Mauro (2003): lagged stock returns carry the right sign, yet their stand-alone predictive content is modest and varies across countries.

The analysis has several **limitations**. The samples are short (33 and 40 paired observations), which weakens the t-test. Index-based stock returns ignore changes in market capitalisation and sector weights. A small number of crisis observations (UK 2008 and 2020, China 2020) may pull the OLS line. The sample is also limited to two countries, so it cannot speak to the wider emerging-versus-developed comparison that Mauro (2003) emphasises. **Possible improvements** include extending the analysis to a panel of countries, adding extra leading indicators such as the term spread or credit growth (Stock and Watson, 1998, cited in Mauro, 2003), splitting the sample into pre-2008 and post-2008 sub-periods, and moving to quarterly data to enlarge the sample.

---

## References

Mauro, P. (2003) ‘Stock returns and output growth in emerging and advanced economies’, *Journal of Development Economics*, 71(1), pp. 129–153.

UWE Bristol (2026) *UMET9U-30-1 PSBF coursework data 2026* [dataset]. UMET9U-30-1: Professional Skills for Banking and Finance. Available from: Blackboard (UWE Bristol VLE) [Accessed 27 April 2026].




