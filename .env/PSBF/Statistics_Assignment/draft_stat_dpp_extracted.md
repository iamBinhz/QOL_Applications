# draft_stat_dpp — Extracted Content

*Extracted: 2026-05-11*

---

Introduction and Literature 

Financial markets are inherently forward-looking because stock prices rapidly aggregate expectations, allowing equity returns to predict macroeconomic outcomes. Mauro (2003) investigated this cross-country relationship by studying correlations between real GDP per capita growth, denoted as Dy in percentages, and lagged real stock returns, denoted as r. The variable r equals nominal index returns minus consumer price inflation in percentages. Mauro (2003) expanded this analysis beyond advanced G-7 nations to emerging economies, finding both groups exhibited similar proportions of statistically significant positive correlations annually, although emerging markets demonstrated weaker correlations quarterly. This report replicates and extends the annual-frequency framework of Mauro (2003) for India and the United States. Employing data spanning 1991–2024 for India and 1961–2024 for the USA, this study computes descriptive statistics, examines distributional properties, tests lead–lag relationships, and estimates regression models. The contrasting findings between these economies instructively illustrate the heterogeneity documented by Mauro (2003).

Descriptive Statistics 

Table 1 summarises the key descriptive statistics for real stock returns and real GDP per capita growth for both countries. 



India's 5.53% mean stock return exceeds the USA's 3.42% reflecting emerging market risk premia (Richards, 1996). India's 27.24 point standard deviation dwarfs the USA's 17.12 points validating Mauro's (2003) volatility finding. India averages higher GDP growth via structural catch-up yet both output series show similar 2 to 3 point standard deviations. The -52.43% USA stock crash in 2008 is the extreme outlier where Lehman Brothers collapsing triggered a credit freeze, deleveraging, and halved valuations (Wiggins and Metrick, 2019). Conversely 1995 hit 26.54% from dot-com optimism, expansion, and declining rates. India's -81.32% stock low in 2008 occurred as the Global Financial Crisis brought currency issues and capital flight (Kumar and Vashisht, 2009). Both negatively skewed stock series show crashes outweigh gains. India's GDP growth is sharply negatively skewed at -2.07 and leptokurtic with 6.52 excess kurtosis driven by the -6.92% COVID-19 contraction in 2020. USA GDP growth is nearly symmetric with -0.58 skewness and 0.53 kurtosis. Outliers disproportionately distort Indian data complicating.

Histograms and Box plots



Chart 1: Histogram of USA Real Stock Returns (1961 – 2024)

Chart 1 shows that USA stock returns follow a broadly bell-shaped distribution. The most common value range is between 0% and 25%, where the majority of annual observations cluster, this reflects the long-run positive drift of developed equity markets. The distribution has a clear left tail when the 2008 bar (−52.43%) stands completely alone beyond −45%, and 1974 (−46.32%) sits adjacent. The mean (3.42%) lies visibly to the left of the median (7.74%), graphically confirming the negative skewness in Table 1. 





Chart 2: Histogram of USA GDP Growth (1961 – 2024)

Chart 2 displays the frequency distribution of the chosen economic variable, clearly illustrating its central tendency, spread, and overall shape. The data exhibits noticeable skewness and kurtosis, with most observations clustering near the mean. Fat tails and potential outliers reflect the historical volatility typical of financial markets and macroeconomic growth.



Chart 3: Histogram of India Real Stock Returns (1991 – 2024)

Chart 3 is immediately striking in its width and irregularity. The most common value range for India is 0% to 30%, slightly higher than the USA's. However, the distribution spreads across 131 percentage points, nearly double the USA's range. The 2008 bar (−81.32%) is completely isolated at the far left, no other year comes close. Three bars beyond 40% show India's boom years. Comparing Charts 1 and 3 directly, the Indian histogram is both wider and more irregular, visually confirming Mauro (2003)'s observation about higher emerging-market return volatility.





Chart 4: Histogram of India GDP Growth (1991 – 2024)

Chart 4 illustrates the frequency distribution of the specific observed variable. It exhibits a predominantly normal, bell-shaped curve centered near zero, though slightly skewed. The concentration of data around the mean indicates typical market conditions, while fat tails reveal occasional extreme volatility and significant economic shocks during the studied timeframe.





Chart 5: Box plot – Real Stock Returns of USA and India (Dots = Outliers)

Chart 5 allows precise comparison of spread and outliers for stock returns. For the USA, the interquartile range covers roughly −5% to 20%, and the median sits at 7.74%. Two lower outliers are annotated: 2008 (−52.43%) and 1974 (−46.32%), both far below the lower whisker. For India, the 2008 observation (−81.32%) appears as a dramatic isolated dot nearly 30 pp below the next worst year. Three positive outliers sit above the upper whisker. The Indian box is slightly wider than the USA box, confirming its higher IQR. Box plots complement the histograms by showing each outlier as a named point rather than a bar. 





Chart 6: Box plot – GDP per capita Growth of USA and India (Dots = Outliers)

Chart 6 compares GDP growth box plots. The extremely compact USA box concentrates between 1% and 4%, showing only two lower outliers of negative 3.49% in 2009 and negative 2.60% in 2020. India's box sits higher with a 5.28% median, reflecting structural growth advantages, but features a dominant negative 6.92% downside outlier in 2020 and an exceptional 8.43% upper outlier in 2021. Alongside the histograms in Charts 2 and 4, these plots confirm India's superior average growth carries substantially higher tail risk. Relative to normal growth bands, India's 2020 shock was far more severe than the 2009 US recession.

Correlation and scatter

Table 2 reports the Pearson correlation coefficient between lagged stock returns r(t−1) and current-year GDP growth Dy(t).



The two coefficients contrast sharply. For the USA: r = 0.505 (n = 63), a moderate positive relationship. When last year's S&P 500 performed well, this year's GDP growth tended to be above average. The direction is positive and the strength is economically meaningful. Squaring this coefficient yields approximately the R² of 0.255 obtained in the regression. For India: r = −0.065 (n = 33), the value is so close to zero that it is economically and statistically meaningless. The pattern for India is not merely weak, it is genuinely absent.



Chart 7: Scatter – USA Lagged Stock Returns and GDP Growth

Chart 7 shows a clear upward-sloping OLS trend line for the USA. The direction is positive and the strength is moderate, points scatter around the line with considerable noise, but the trend is unmistakable. The most influential point is 2008 to 2009: the worst annual return (−52.4%) was followed by the deepest recession (−3.49% GDP), exactly what the leading-indicator hypothesis predicts. The R² = 0.255 means lagged returns explain about 25% of GDP variation, leaving 75% unexplained. The relationship is predictive but imperfect, consistent with Samuelson's famous quip that the stock market has predicted nine out of the last five recessions (Mauro, 2003).



Chart 8: Scatter – India Lagged Stock Returns and GDP Growth

Chart 8 shows a near-horizontal cloud of points for India, the pattern is very weak, in fact absent. The OLS trend line is nearly flat. The most telling point is 2008 to 2009: despite the catastrophic −81.3% Nifty return in 2008, India's GDP grew 6.12% in 2009, buffered by domestic consumption and fiscal stimulus. This single point sits in the top-left quadrant, directly contradicting the leading-indicator hypothesis. The 2019 to 2020 point shows the opposite problem: a modestly positive stock return in 2019 preceded a −6.92% GDP collapse caused by COVID lockdowns exogenous to financial markets. The R² of 0.004 confirms the pattern is genuinely absent for India.

Primary regression

The primary regression estimates a linear relationship between current-year GDP growth and the previous year's real stock return, following the model shown in lectures:

Dy(t)  =  α  +  β . r(t−1)  +  ε(t)



For the USA, the coefficient β̂ = 0.059 means every 10 pp rise in lagged S&P 500 returns predicts approximately 0.59 pp higher GDP growth the following year. The t-statistic of 4.57 (p < 0.001) confirms the coefficient is clearly different from zero. R² = 0.255, lagged returns explain about 25% of the variation in US GDP growth, consistent with Mauro (2003). The leading-indicator hypothesis is supported for the USA.

For India, β̂ = −0.006 (t = −0.36, p = 0.720), not different from zero at any significance level. R² = 0.004: lagged Nifty returns explain less than 0.5% of India's GDP variation. The leading-indicator hypothesis is not supported for India.

Robustness regression 

Lagged GDP growth Dy(t−1) is added to check whether β still differs from zero once growth momentum is controlled for:

Dy(t)  =  α  +  β . r(t−1)  +  γ . Dy(t−1)  +  ε(t)



For the USA, β remains 0.058 (t = 4.54, p < 0.001), virtually unchanged. Lagged GDP growth is insignificant (p = 0.181). R² rises marginally to 0.277. The coefficient on lagged returns is clearly different from zero even after controlling for momentum, and still explains meaningful variation in GDP growth.

For India, both β̂ = −0.008 (p = 0.681) and γ̂ = 0.063 (p = 0.722) are insignificant; R² = 0.008. Neither coefficient differs from zero. The null result for India is fully robust.

Conclusion, limits, improvements

Summary of findings

Lagged S&P 500 returns predict US GDP growth with a 0.059 beta, 4.57 t-statistic, and 0.255 R-squared. Adding lagged GDP yields a robust 0.058 beta, 4.54 t-statistic, and 0.277 R-squared. Nifty 50 returns lack Indian predictive power given a negative 0.006 beta, negative 0.36 t-statistic, and 0.004 R-squared. Replicating Mauro (2003), divergence reflects market depth. Mauro (2003) cites capitalisation to GDP as the main predictor. India recorded 25% in 1998 versus 158% for the USA (Mauro, 2003), indicating unrepresentative markets. The US relationship is predictive, not causal.

Limitations

First, India's short sample limits power. Second, omitting interest spreads, credit, and money supply weakens models, which Mauro (2003) proved valuable. Third, 2008 and 2020 shocks distort OLS estimates. Fourth, Stock and Watson (1998) showed fluctuating US predictive power, making the 1961–2024 estimate an average of sub-periods.

Improvements

Research should split sub-periods testing stability and add monetary controls following Mauro (2003). Outlier-robust regression mitigates 2008 and 2020 extremes. Quarterly data increases Indian statistical power. Re-running analysis with post-2010 data, when capitalisation exceeded 50% of GDP, tests if this link strengthened as markets deepened.

---

