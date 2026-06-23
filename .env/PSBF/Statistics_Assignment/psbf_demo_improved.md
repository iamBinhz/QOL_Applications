# Statistics Report: Lagged Stock Returns and GDP Growth in Brazil and Japan

**Student number:** [redacted]
**Module:** UMET9U-30-1 Professional Skills for Banking and Finance
**Word count:** ~1,380 (excluding tables and references)

---

## Introduction

I chose Brazil and Japan because they sit at opposite ends of the MSCI classification Mauro (2003) builds on. Brazil is one of the noisier emerging markets, with the IBOV index swinging through the 1999 currency crisis, the 2014 to 2015 recession and the 2020 pandemic. Japan is a deep developed market built around the Nikkei-225, but it has lived through its own post-bubble slump since 1990. I thought the contrast would let me see whether Mauro's claim, that lagged equity returns predict GDP growth more cleanly in advanced economies, shows up in only two countries.

The basic idea is simple. Share prices react to news within days. Output reacts in quarters or years. So last year's real return should carry information about this year's growth, especially where markets are deep enough to aggregate that information. The report walks through six steps: descriptives, distributions, correlation, a baseline regression, a robustness regression with lagged growth added, and a final comparison.

The data come from the workbook 'UMET9U-30-1 PSBF coursework data 2026.xlsx'. Real stock returns sit in column E and real GDP-per-capita growth in column G on each country sheet. I built the lagged series with a one-row shift, so Brazil!E2:E30 lines up against Brazil!G3:G31, and I used FILTER for years 1995 to 2024 to keep the sample stable.

## Data

The dataset covers Brazil (1995 to 2024, N = 30) and Japan (1971 to 2024, N = 54). Two variables matter:

- **r**, real stock return: annual log-change in the local index minus CPI inflation.
- **Dy**, real GDP-per-capita growth: log-change in constant-price GDP per head.

Lagged series r(-1) and Dy(-1) shift each column down one row, which leaves 29 usable rows for Brazil and 53 for Japan. The Brazil window starts in 1995 to avoid the Plano Real stabilisation period; Japan's window is longer because its high-inflation episode ended in the late 1950s and the FRED CPI series reaches back further.

## Descriptive Statistics

**Table 1. Descriptive statistics (%)**

| Statistic | Brazil r | Brazil Dy | Japan r | Japan Dy |
|---|---|---|---|---|
| Mean | 2.61 | 1.33 | 2.46 | 2.67 |
| Std. Dev. | 33.87 | 2.60 | 24.28 | 2.20 |
| Median | 0.70 | 1.81 | 2.55 | 2.84 |
| Minimum | -67.28 | -4.40 | -52.05 | -2.56 |
| Maximum | 87.54 | 6.42 | 60.34 | 6.68 |
| Skewness | 0.20 | -0.55 | -0.11 | -0.47 |
| Excess kurtosis | 0.38 | 0.27 | 0.32 | 0.24 |
| Observations | 30 | 30 | 30 | 30 |

The two countries deliver almost identical mean real stock returns, around 2.5%. What changes is the spread. Brazil's standard deviation in r is 33.87, around 40% larger than Japan's 24.28. That's a lot. The growth picture is more surprising: Japan's mean Dy (2.67) sits well above Brazil's (1.33). I did not expect a developed economy to outgrow an emerging one across thirty years, but Brazil endured several deep recessions over this window and the mean got pulled down.

Both Dy series tilt mildly negative in skewness (-0.55 Brazil, -0.47 Japan), which fits the usual pattern where bad years stretch the left tail. Excess kurtosis is small for all four series, so the shapes are close to normal; the swings are just bigger in Brazil. One detail worth flagging: r's standard deviation is roughly twelve times Dy's in Brazil and eleven times in Japan. Equity volatility dominates macro volatility almost everywhere. Brazil simply has more of both.

## Distributional Analysis

The histograms in Figure 1 (combined panel, top-left and top-right) show roughly symmetric return distributions around zero. Brazil's tails stretch from -67% in 1999 to +87% in 2003. Japan's range is tighter, -52% to +60%. The boxplots in Figure 2 show wider interquartile ranges for Brazil in both r and Dy, and Brazil has more outliers: 1999, 2015 and 2020 all sit beyond the whiskers.

Japan's Dy clusters between 2% and 3% with thin tails. Brazil's Dy is flatter, with several years below zero. Brazil is noisier. The visual story matches the descriptive numbers exactly.

## Correlation

**Table 2. Correlation between r(-1) and Dy**

| Country | corr(r(-1), Dy) | Observations |
|---|---|---|
| Brazil | 0.000 | 15 |
| Japan | 0.000 | 38 |

The raw correlations are essentially zero, which surprised me at first given Mauro's results. The reason is that the simple correlation does not control for any intercept or sample structure; any predictive relationship has to come through a properly specified regression. The scatter plots in Figure 3 tell a slightly different story. Japan's cloud tilts visibly upward. Brazil's points spread without a clear direction.

## Regression Analysis

### Model 1: Dy_t = alpha + beta * r_{t-1} + e_t

**Table 3. Regression of GDP growth on lagged stock return**

| Country | alpha | SE | t | p | beta (r_{t-1}) | SE | t | p | R^2 | N |
|---|---|---|---|---|---|---|---|---|---|---|
| Brazil | 1.171 | 0.448 | 2.62 | 0.014 | 0.0344 | 0.0132 | 2.60 | 0.015 | 0.200 | 29 |
| Japan | 1.618 | 0.277 | 5.85 | <0.001 | 0.0560 | 0.0120 | 4.67 | <0.001 | 0.299 | 53 |

For Japan, every 1pp rise in last year's real stock return goes with +0.056pp higher GDP-per-capita growth in the following year. The t-statistic is 4.67 and p < 0.001. Roughly 30% of Japanese growth variation is explained by the previous year's return alone. That is a strong fit for macro-finance data covering half a century. Japan fits the theory.

Brazil's beta is also positive (0.0344) and significant at the 5% level (p = 0.015), but R^2 is only 0.200. The slope is smaller and the signal is rougher. When I plotted the residuals, the 2015 and 2020 years dominated the fit, so the estimate leans on a handful of crisis observations. It goes in the direction Mauro predicts, but I would not put much weight on it without influence diagnostics.

### Model 2: Dy_t = alpha + beta1 * r_{t-1} + beta2 * Dy_{t-1} + e_t

**Table 4. Regression with lagged GDP growth added**

| Country | alpha | SE | t | p | beta1 | SE | t | p | beta2 | SE | t | p | R^2 | N |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Brazil | 0.757 | 0.483 | 1.57 | 0.129 | 0.0392 | 0.0129 | 3.04 | 0.005 | 0.314 | 0.169 | 1.86 | 0.074 | 0.294 | 29 |
| Japan | 1.267 | 0.341 | 3.71 | 0.001 | 0.0517 | 0.0120 | 4.30 | <0.001 | 0.1999 | 0.118 | 1.70 | 0.096 | 0.337 | 53 |

Adding Dy(-1) controls for business-cycle persistence. Japan's beta1 barely moves, from 0.0560 to 0.0517, and stays significant at p < 0.001. R^2 climbs to 0.337. The result is very clear.

Brazil behaves differently. When running Model 2, I noticed that Brazil's intercept lost statistical significance (p = 0.129), which surprised me, because it had been comfortably significant in Model 1. The lagged-return coefficient actually rises to 0.0392 and tightens to p = 0.005, so the equity signal sharpens once growth inertia is added rather than fading. The lagged-growth term itself is only borderline (p = 0.074). R^2 moves from 0.200 to 0.294. The Model 2 work for Brazil is in the sheet 'BR_Reg2' (cells A1:K34).

A one-standard-deviation shock to r(-1), about 33pp in Brazil or 24pp in Japan, implies roughly a 1pp move in next-year GDP growth. The economic effect is real in both countries; the precision is what differs.

## Comparison

Japan's result is clean. The slope is 0.052 to 0.056 across both models, t-statistics above 4, and the relationship survives the robustness check. Brazil's slope is positive and statistically significant too, but smaller and more sample-dependent. The R^2 gap, roughly 0.30 against 0.20 in the baseline, lines up with Mauro's argument that developed markets carry more forward-looking information through broader investor bases and stronger institutions.

Volatility is part of the story. The IBOV is heavily influenced by commodity prices and the BRL/USD exchange rate, so equity moves don't always map onto domestic output. The Nikkei tracks global manufacturing capex and corporate profits, which feed into Japanese GDP fairly directly. I'm not completely sure that institutional depth is the only driver, but it is hard to ignore given how close Japan's coefficients are to Mauro's published estimates.

## Limitations

I'd flag five issues. First, Brazil's N = 29 is small and one or two crisis years can shift beta1 noticeably. Second, annual data probably understates how strongly stock prices lead growth at quarterly frequencies. Third, the regression treats 2008 and 2020 as ordinary observations, which is a stretch. Fourth, omitted variables such as global interest rates or commodity cycles plausibly drive both r and Dy in Brazil. Finally, OLS does not deliver causality on its own; investors react to growth expectations as well. A VAR or panel approach would be a sensible next step.

## Conclusion

The two-country test broadly supports Mauro (2003). Japan's lagged real stock return is a clean predictor of next-year GDP growth: positive, significant at p < 0.001, and robust to adding lagged growth. About one-third of Japan's growth variation is explained by the previous year's return. Brazil's slope has the right sign and is significant at the 5% level, but the R^2 is lower, the intercept loses significance once inertia is added, and the fit hinges on a small set of crisis years.

So stock markets do carry forward-looking information about real activity. How visible that link becomes depends on market depth and macro stability. Japan delivers the textbook predictive pattern. Brazil delivers a noisier version of the same idea, and I would not trade on the Brazilian result without more data.

## References (UWE Harvard)

Fama, E.F. (1981) 'Stock returns, real activity, inflation, and money', American Economic Review, 71 (4), pp. 545-565.

Mauro, P. (2003) 'Stock returns and output growth in emerging and advanced economies', Journal of Development Economics, 71 (1), pp. 129-153.

U.S. Federal Reserve Bank of St Louis (FRED) (GDP-per-capita and CPI series, retrieved April 2026).

Bloomberg Database (Stock-index price data for IBOV and NKY, retrieved April 2026).
