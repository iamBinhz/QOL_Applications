# 25062677_NguyenThanhBinh_PSBF_Report_A1 — Extracted Content

*Extracted: 2026-05-09*

---

Student Number:

Module Code:

Module Title:

Introduction and Literature
Asset prices move quickly because investors react to news at once, while macroeconomic data, such as GDP, take longer to adjust. This timing gap is the basis for treating stock returns as a leading indicator of future output growth. Mauro (2003) studied this idea in a panel of emerging and developed economies and discovered that the share of countries with a statistically significant correlation between lagged real stock returns and current GDP growth is about the same in both groups at annual frequency. He also linked the strength of the relationship to features such as market capitalisation and the legal origin of stock market regulation. Earlier work by Fama (1990, cited in Mauro, 2003) and the survey of theories in Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) provides the underlying explanation: stock prices reflect the present value of expected future dividends, so good news about next year's GDP today shows up as high returns today.
This report applies the same approach to two contrasting economies from the coursework dataset: China (an emerging market, MSCI classification, SHCOMP index) and the United Kingdom (a developed market, FTSE 100 / UKX index). Real stock returns are nominal log returns deflated by consumer price inflation, and economic growth is the log return of constant 2010 USD GDP per capita. The annual sample covers 1991 to 2024 for China and 1984 to 2024 for the UK, giving 33 and 40 paired observations once returns are lagged by one year. The leading indicator question is whether last year's real stock return helps to predict this year's GDP growth, and whether the answer differs between the two economies.

Descriptive Statistics
Table 1: Descriptive statistics
 
Table 1 confirms the very different volatility profiles of the two economies. Chinese real stock returns swing across a 200-percentage-point range, with a standard deviation of about 41%, almost three times that of UK returns. By contrast, Chinese GDP growth is the calmest series, averaging 7.83% with a standard deviation of only 2.42%, a clear sign of four decades of fast catch-up growth.
The most striking distributional feature is UK GDP growth, with a strong negative skewness of -2.09 and a kurtosis of 8.21, far above the values for the other three series, which all lie close to symmetric. This heavy left tail is driven by two outlier years: -5.45% in 2009 (Global Financial Crisis) and -10.76% in 2020 (COVID-19 contraction). The leptokurtic shape of Chinese returns is also worth noting, but is in line with the wider observation in Richards (1996, cited in Mauro, 2003) that emerging-market volatility tends to exceed that of mature markets.

Histograms and Box Plots
 
Figure 1. Histograms of real stock returns and GDP growth, China and the UK (2×2 panel)

Figure 1 collects the four histograms. Panel (a) shows r_CN is roughly bell-shaped, with very fat tails reaching close to 100%. Panel (b) shows that Dy_CN is concentrated between 5% and 12%, with the only clear deviation being the COVID-related drop in 2020 to 2.08%. Panel (c) shows r_GB clustered around 0 to 15%, but with two pronounced left tail values: -29.6% in 2002 (the dot-com correction) and -41.1% in 2008. Panel (d) illustrates the same idea for Dy_GB: a sharp peak at 1-3 % with the two crisis years producing the heavy left tail flagged by the kurtosis statistic.
 
Figure 2. Box plot of real stock returns, China vs UK
 Figure 3. Box plot of GDP growth, China vs UK.
The box plots make the cross-country contrast explicit. Chinese returns have an interquartile range several times wider than the UK one, while Chinese GDP growth sits several percentage points above the UK median with a much tighter spread. The UK growth box has long lower whiskers driven by 2009 and 2020. This pattern is consistent with the leading-indicator idea: years of unusually large stock-price movement should statistically come before unusual growth outcomes (Mauro, 2003).

Correlation and Scatter
Table 2. Correlation coefficients
 
Table 2 ilustrates the Pearson correlation between the lagged return and current GDP growth is 0.275 for China and 0.223 for the UK. Both are positive, the sign predicted by the "passive informant" theory of Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) and the empirical findings of Fama (1990, cited in Mauro, 2003), under which high returns this year should be associated with stronger growth next year. The Chinese correlation is slightly larger than the UK one. This is the opposite of what the naive efficient-markets view would predict, since a developed market like the UK is usually thought to aggregate forward-looking information more cleanly. Mauro (2003) argues that the cross-country pattern is driven less by emerging-versus-developed status than by stock-market characteristics such as market capitalisation relative to GDP and the legal origin of regulation, which is consistent with what we see here.

 Figure 4. Scatter plot of GDP growth vs lagged stock returns, China

 
Figure 5. Scatter plot of GDP growth vs lagged stock returns, UK


Figures 4 and 5 plot GDP growth against lagged return together with a fitted line. The slope is positive in both cases, but the points are widely scattered around the line. Several years are clearly off the trend, for example the UK in 2008 (a strong return in 2007 was followed by a deep recession) and China in 2020. This visual pattern already suggests that lagged returns alone explain only a modest part of growth.

Primary Regression
Table 3. China - main regression
 
Table 4. UK – main regression
 
For China (Table 3), the slope on the lagged return is 0.0163 with a t-statistic of 1.591 and a p-value of 0.122. The intercept of 7.74% absorbs the country's high mean growth. With an absolute t-statistic well below 2, we cannot reject the null at the 5% level, and the coefficient of determination of 0.0755 means lagged returns explain only about 7.5% of the variation in Chinese GDP growth.
For the UK (Table 4), the slope is 0.0458 with a t-statistic of 1.411 and a p-value of 0.166. The point estimate is roughly three times larger than China's, but again not significant at the 5% level, and the coefficient of determination is similarly low at 0.050. Although insignificant, the UK estimate is not economically trivial: a 10-percentage-point shock to last year's stock return is associated with about 0.46 percentage points of next-year growth, which is meaningful relative to a UK growth mean of only 1.65%. The wide standard errors therefore reflect a small sample more than a small effect. Both regressions are consistent with Mauro's (2003) finding that lagged stock returns carry useful information but are imperfect predictors on their own, also stressed by Stock and Watson (1998, cited in Mauro, 2003).

Robustness Regression
To check whether the slope on r_(t-1) is robust, the model is re-estimated with last year’s GDP growth added as a second regressor:
Table 5. China - robustness regression
 
Table 6. UK - robustness regression
 



For China (Table 5), the result changes substantially. The slope on last year's GDP growth itself is highly significant (0.628, p-value below 0.001), the coefficient of determination jumps from 0.076 to 0.441, and the F-statistic of 11.84 is significant at the 0.1% level. Once last year's growth is included, the slope on the lagged stock return falls to 0.0098 and stays insignificant. For the UK (Table 6), by contrast, the coefficient on last year's GDP growth is essentially zero (-0.025, p-value 0.882), the coefficient of determination stays at 0.050, and the F-statistic of 0.98 means we cannot reject the null that all slopes are jointly zero. The slope of the lagged stock return barely changes. The robustness check, therefore, leaves the lagged-return evidence unchanged in both countries, but it reveals a sharp asymmetry in the role of past growth itself: in China, last year's growth strongly predicts this year's growth, while in the UK it does not. 

Conclusion
In summary, lagged real stock returns are positively correlated with subsequent GDP growth in both China and the UK, the sign predicted by the leading-indicator theories surveyed by Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) and Fama (1990, cited in Mauro, 2003), and confirmed empirically by Mauro (2003). However, the relationship is not statistically significant at the 5% level for either economy on its own, with coefficient of determination values below 8% in both cases. The robustness check leaves this conclusion intact but reveals that past growth predicts current growth in China but not in the UK. Overall, lagged stock returns carry the right sign yet have only modest stand alone predictive content, in line with Mauro (2003).
The main limitations are short samples (33 and 40 paired observations), a few crisis outliers that may dominate the OLS line, and the restriction to two countries. Possible improvements include extending the analysis to a panel of countries, adding extra leading indicators such as the term spread or credit growth (Stock and Watson, 1998, cited in Mauro, 2003), splitting the sample into pre- and post-2008 sub-periods, and moving to quarterly data to enlarge the sample.


References:

Mauro, P. (2003) ‘Stock returns and output growth in emerging and advanced economies’, *Journal of Development Economics*, 71(1), pp. 129–153.

UWE Bristol (2026) *UMET9U-30-1 PSBF coursework data 2026* [dataset]. UMET9U-30-1: Professional Skills for Banking and Finance. Available from: Blackboard (UWE Bristol VLE) [Accessed 27 April 2026].

---

# Reduced Version

*Trimmed for the 1,500 word cap. No special symbols other than %. Hyphenated word compounds avoided where possible.*

---

Introduction and Literature

Asset prices move quickly because investors react to news at once, while macroeconomic data such as GDP take longer to adjust. This timing gap is the basis for treating stock returns as a leading indicator of future output growth. Mauro (2003) studied this in a panel of emerging and developed economies and found that the share of countries with a statistically significant correlation between lagged real stock returns and current GDP growth is similar in both groups at annual frequency, with the strength of the relationship linked to features such as market capitalisation and the legal origin of stock market regulation. Earlier work by Fama (1990, cited in Mauro, 2003) and the survey of theories in Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) provides the underlying explanation: stock prices reflect the present value of expected future dividends, so good news about next year's GDP today shows up as high returns today.

This report applies the same approach to two contrasting economies from the coursework dataset: China (an emerging market, MSCI classification, SHCOMP index) and the United Kingdom (a developed market, FTSE 100 / UKX index). Real stock returns are nominal log returns deflated by consumer price inflation, and economic growth is the log return of constant 2010 USD GDP per capita. The annual sample covers 1991 to 2024 for China and 1984 to 2024 for the UK; lagging by one year leaves 33 and 40 paired observations. The leading indicator question is whether last year's real stock return helps predict this year's GDP growth, and whether the answer differs between the two economies.

Descriptive Statistics

Table 1: Descriptive statistics

Table 1 confirms the very different volatility profiles of the two economies. Chinese real stock returns span 200 percentage points, with a standard deviation of about 41%, three times the UK figure. By contrast, Chinese GDP growth is the calmest series, averaging 7.83% with a standard deviation of only 2.42%, reflecting four decades of catch up.

The most striking distributional feature is UK GDP growth, with a strong negative skewness of -2.09 and a kurtosis of 8.21, far above the values for the other three series, which all lie close to symmetric. This heavy left tail is driven by two outlier years: -5.45% in 2009 (Global Financial Crisis) and -10.76% in 2020 (COVID-19 contraction). The leptokurtic shape of Chinese returns is also worth noting, but is in line with the wider observation in Richards (1996, cited in Mauro, 2003) that emerging market volatility tends to exceed that of mature markets.

Histograms and Box Plots

Figure 1. Histograms of real stock returns and GDP growth, China and the UK (2×2 panel)

Figure 1 collects the four histograms. Panel (a) shows Chinese returns widely dispersed, with fat tails reaching close to plus or minus 100%. Panel (b) shows Chinese GDP growth concentrated between 5% and 12%, with the only clear deviation being the COVID related drop in 2020 to 2.08%. Panel (c) shows UK returns clustered around 0% to 15%, with two pronounced left tail values: -29.6% in 2002 (the dot com correction) and -41.1% in 2008. Panel (d) shows UK GDP growth peaking sharply at 1% to 3%, with the two crisis years producing the heavy left tail flagged by the kurtosis statistic.

Figure 2. Box plot of real stock returns, China vs UK
Figure 3. Box plot of GDP growth, China vs UK.

The box plots make the cross country contrast explicit. Chinese returns have a much wider interquartile range than the UK, while Chinese GDP growth sits several percentage points above the UK median with a tighter spread. The UK growth box has long lower whiskers from 2009 and 2020. This pattern is consistent with the leading indicator idea that unusually large stock price movements precede unusual growth outcomes (Mauro, 2003).

Correlation and Scatter

Table 2. Correlation coefficients

Table 2 reports the Pearson correlation between the lagged return and current GDP growth, which is 0.275 for China and 0.223 for the UK. Both are positive, the sign predicted by the "passive informant" theory of Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) and the empirical findings of Fama (1990, cited in Mauro, 2003), under which high returns this year should be associated with stronger growth next year. The Chinese correlation is slightly larger than the UK one. This is the opposite of what the naive efficient markets view would predict, since a developed market like the UK is usually thought to aggregate forward looking information more cleanly. Mauro (2003) argues that the cross country pattern is driven less by emerging versus developed status than by stock market characteristics such as market capitalisation relative to GDP and the legal origin of regulation, which is consistent with what we see here.

Figure 4. Scatter plot of GDP growth vs lagged stock returns, China
Figure 5. Scatter plot of GDP growth vs lagged stock returns, UK

Figures 4 and 5 plot GDP growth against the lagged return together with a fitted line. The slope is positive in both cases, but the points are widely scattered, and several years sit clearly off the trend, for example the UK in 2008 (a strong 2007 return followed by a deep recession) and China in 2020. This already suggests that lagged returns alone explain only a small share of growth variation.

Primary Regression

Table 3. China - main regression
Table 4. UK – main regression

For China (Table 3), the slope on the lagged return is 0.0163 with a t-statistic of 1.591 and a p-value of 0.122. The intercept of 7.74% absorbs the country's high mean growth. With an absolute t-statistic well below 2, we cannot reject the null at the 5% level, and the coefficient of determination of 0.0755 means lagged returns explain only about 7.5% of the variation in Chinese GDP growth.

For the UK (Table 4), the slope is 0.0458 with a t-statistic of 1.411 and a p-value of 0.166. The point estimate is roughly three times larger than China's, but again not significant at the 5% level, and the coefficient of determination is similarly low at 0.050. Although insignificant, the UK estimate is not economically trivial: a 10% shock to last year's return is associated with about 0.46 percentage points of growth in the following year, meaningful relative to a UK growth mean of only 1.65%. The wide standard errors therefore reflect a small sample more than a small effect. Both regressions are consistent with Mauro's (2003) finding that lagged stock returns carry useful information but are imperfect predictors on their own, also stressed by Stock and Watson (1998, cited in Mauro, 2003).

Robustness Regression

To check whether the slope on the lagged stock return is robust, the model is estimated again with last year's GDP growth added as a second regressor.

Table 5. China - robustness regression
Table 6. UK - robustness regression

For China (Table 5), the result changes substantially. The slope on last year's GDP growth itself is highly significant (0.628, p-value below 0.001), the coefficient of determination jumps from 0.076 to 0.441, and the F-statistic of 11.84 is significant at the 0.1% level. Once last year's growth is included, the slope on the lagged stock return falls to 0.0098 and stays insignificant. For the UK (Table 6), by contrast, the coefficient on last year's GDP growth is essentially zero (-0.025, p-value 0.882), the coefficient of determination stays at 0.050, and the F-statistic of 0.98 means we cannot reject the null that all slopes are jointly zero. The slope on the lagged stock return barely changes. The robustness check therefore leaves the lagged return evidence unchanged, but reveals a sharp asymmetry: in China, last year's growth strongly predicts this year's, while in the UK it does not.

Conclusion

In summary, lagged real stock returns are positively correlated with subsequent GDP growth in both China and the UK, the sign predicted by the leading indicator theories surveyed by Morck, Shleifer and Vishny (1990, cited in Mauro, 2003) and Fama (1990, cited in Mauro, 2003), and confirmed empirically by Mauro (2003). However, neither relationship is significant at the 5% level on its own, with coefficient of determination below 8% in both cases. The robustness check leaves this conclusion intact but reveals that past growth predicts current growth in China but not in the UK. Overall, lagged stock returns carry the right sign yet have only modest stand alone predictive content, in line with Mauro (2003).

The main limitations are short samples (33 and 40 paired observations), a few crisis outliers that may dominate the OLS line, and the restriction to two countries. Possible improvements include extending the analysis to a panel of countries, adding extra leading indicators such as the term spread or credit growth (Stock and Watson, 1998, cited in Mauro, 2003), splitting the sample into the period before and after 2008, and moving to quarterly data to enlarge the sample.

References:

Mauro, P. (2003) ‘Stock returns and output growth in emerging and advanced economies’, *Journal of Development Economics*, 71(1), pp. 129–153.

UWE Bristol (2026) *UMET9U-30-1 PSBF coursework data 2026* [dataset]. UMET9U-30-1: Professional Skills for Banking and Finance. Available from: Blackboard (UWE Bristol VLE) [Accessed 27 April 2026].

---

