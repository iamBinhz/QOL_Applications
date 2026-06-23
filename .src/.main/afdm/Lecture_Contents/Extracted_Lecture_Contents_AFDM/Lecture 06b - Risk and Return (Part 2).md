# Risk & Return-Part 2(1)

*Source: Risk & Return-Part 2(1).pptx | Extracted: 2026-06-17*

---

### Slide 1

Risk and Return - Part 2 Dr Adnan Aslam Lecture - 6 UMET9G-30-1: Accounting and Finance for Decision Making Dec 2025

---

### Slide 2

Learning outcomes By the end of the session, students will be able to: Explain the principles of portfolio theory and the benefits of diversification. Illustrate the concept of the efficient frontier and its implications for investment choices. Describe the Capital Asset Pricing Model (CAPM) and its assumptions. Apply the CAPM to estimate the expected return of an asset. Interpret the role of beta in measuring systematic risk relative to the market.

---

### Slide 3

Recap - Risk and Return – Part 1 3 📊 Risk = volatility of returns (measured by standard deviation) 💰 Return = dividends + capital gains ⚖️ Individual stocks are riskier than portfolios 🌍 Systematic risk → market-wide, cannot diversify 🏢 Unsystematic risk → firm-specific, reduced via diversification 📐 Risk measures → standard deviation &amp; beta 📅 Return measures → historical vs expected 📊 Market Efficiency → (weak, semi-strong, strong)

---

### Slide 4

Historical Returns (UK example) Histogram of returns on UK equities, 1926–2019 The height of the graph gives the number of sample observations in the range on the horizontal axis. Notice the higher frequency of large positive returns than large negative returns. 4

---

### Slide 5

Historical Returns (UK example) Normal distribution: a symmetric, bell-shaped frequency distribution that is completely defined by its mean and standard deviation 5

---

### Slide 6

Historical Risk and Return The standard deviation captures the spread of returns around the average but does not tell us how many returns are below or above the average. We can use a density plot to assess the distribution of returns. A density plot shows how many observed returns are within a given range. The plot can help visualise how observed returns are distributed around the average. The density plot can show how returns are skewed above and below the average. 6 Normal Skewness Negative Skewness Positive Skewness Skewness there are more returns below the average than above it. Skewness there are more returns above the average than below it. Skewness returns are evenly distributed around the average.

---

### Slide 7

Historical Risk and Return Density plots also show how many extreme returns are in the sample. This is called the kurtosis. 7 Normal Kurtosis (=3) High Peak (&gt;3) Flat Peak (&lt;3) Kurtosis The probabilities of returns gradually decreases as we go further from the average. Kurtosis Higher probability of extreme returns (big gains/losses) Kurtosis Lower probability of extreme returns (more stable)

---

### Slide 8

Measuring Risk - Beta As we diversify a portfolio, we reduce volatility until only SYSTEMATIC (Market) risk remains. Exposure to risks that effect the entire market. Therefore, we can consider the Market risk of a stock, separately to its total risk. The measure of market risk is the Beta 𝛃. Beta 𝛃 is percentage change in a stock return given a 1% change in the theoretical market portfolio ( eg. S&amp;P 500 index)….. “how tied in is the stocks return to market conditions, its sensitivity compared to the overall market”. A higher 𝛃 the more sensitive it is to market conditions and the more reactive. 𝛃 is amount of systematic risk present in a particular risky asset relative to that in an average risky asset.

---

### Slide 9

Calculating Beta – Example Rolex Mkt Boom 30% 20% Recession -25% -10% Calculate Changes in Returns Calculate Beta Calculate Beta (Statistical Method) Covariance(stock, market): Measures how the stock and market move together Variance(market): Measures the volatility of the market Excel functions =SLOPE =COVARIANCE.S =VAR.S

---

### Slide 10

Beta cont’d…. M&amp;S 			1.6 Tesco 			0.58 Sainsbury’s		0.63 JD Sports			1.63 Next			1.37 𝛃&lt;1, less systematic risk than the average firm 𝛃&gt;1, more systematic risk than the average firm 𝛃 = 0, NO systematic risk 𝛃&lt;0, return is less than the risk free rate, “insurance if the market goes bad” e.g. simplify Bitcoin (MAXI) The Beta, the systematic market risk, cannot be diversified away.

---

### Slide 11

Beta vs Volatility Beta analysis: With M&amp;S you can expect a greater return than the market, but Tesco is less affected by market influences …with volatility analysis: Tesco has a lower beta but a higher volatility?! Therefore, there must be more firm specific risk, more uncertainty about the actual company. IMPORTANT Beta measuring systematic risk  (unitless)		Different units! Std dev measuring total risk  (percentage) Total risk Market risk

---

### Slide 12

Probabilistic vs Historical Historical risk and return analysis gives us an idea of the risk and return profile of the share. Most of the time, we want to have a look at the future. We will calculate the risk and return using probable states of the economy. Example You have IBM forecasted returns in three possible states of the economy: 12 State Probability: Return: Boom 15% 20% Normal 55% 10% Recession 30% -5% State Boom 15% 20% Normal 55% 10% Recession 30% -5% What is the expected return and risk of the IBM share?

---

### Slide 13

Probabilistic Return Calculation IBM’s expected returns given the three states of the economy is weighted average return , given the probability of each state : The expected return is: 13 State Probability: Return: Boom 15% 20% Normal 55% 10% Recession 30% -5% State Boom 15% 20% Normal 55% 10% Recession 30% -5% On average, an IBM shareholder can expect to receive a return of 7% using forecasted data. = probability of outcome = return in outcome

---

### Slide 14

Probabilistic Risk and Return Calculation IBM’s variance given the three states of the economy is weighted average of the differences squared , given the probability of each state. 14 State Probability: Return: Boom 15% 20% Normal 55% 10% Recession 30% -5% State Boom 15% 20% Normal 55% 10% Recession 30% -5% The weighted variance is: The standard deviation of returns is: So you can expect to receive a return of 7%, which could vary by +/- 8.57% 7% 7%

---

### Slide 15

Portfolio _ Risk &amp; Return In most cases, we do not want to put all our eggs in one basket. Investors tend to create a portfolio of different financial instruments (FI’s). They split their investment budget across multiple FI’s. Example Consider the forecasted returns on IBM and HP shares in three possible states of the economy: 15 State Probability: IBM: HP: Boom 25% 20% 15% Normal 45% 10% 8% Recession 30% -5% -2% State Boom 25% 20% 15% Normal 45% 10% 8% Recession 30% -5% -2% What is the expected return and standard deviation of portfolio invested 40% in IBM and 60% in HP?

---

### Slide 16

Portfolio _ Risk &amp; Return 1. calculate the return of the portfolio in each state of the economy - 40% in IBM and 60% in HP 16 State Probability: IBM: HP: Portfolio: Boom 25% 20% 15% Normal 45% 10% 8% Recession 30% -5% -2% State Boom 25% 20% 15% Normal 45% 10% 8% Recession 30% -5% -2% 2. calculate the overall portfolio return 25% x 17% + 45% x 8.8% + 30% x -3.2% = 7.25% 3. calculate the variance and standard deviation as we did for a single asset: State Probability: Portfolio: Boom 25% Normal 45% Recession 30% State Boom 25% Normal 45% Recession 30% The portfolio’s expected return is 7.25% and the associated risk is 0.58 = 7.59%

---

### Slide 17

Efficient vs Inefficient Portfolios A portfolio is inefficient if we can find another portfolio that has a better expected return without having a higher volatility. Consider a portfolio consisting of 2 stocks, stock A &amp;B. What is the volatility and the expected return for different weighting of each stock within the portfolio: 17

---

### Slide 18

Capital Asset Pricing Model (CAPM) CAPM assumes that investors hold fully diversified portfolios Returns are determined by systematic risk only ( 𝛃 ), not total risk E( ri ) = Rf + β i (E(rm) – Rf) equity risk premium Where: E( ri ) = return required on financial asset Rf = risk-free rate of return (minimum level of return) β i = beta value for financial asset E(rm) = average return on the capital market Helps investors determine the minimum return they should expect for an investment 18

---

### Slide 19

Capital Asset Pricing Model (CAPM) Figure: The Security Market Line 19 SML helps investors assess whether an asset is correctly priced given its systematic risk. Asset offers higher return for its risk → undervalued Asset offers lower return for its risk → overvalued

---

### Slide 20

Application for CAPM ABC Ltd. is a company for which we want to calculate the cost of equity. Given the following information: 20 Risk-free rate of return = 4% Equity risk premium = 5% Beta value of ABC.ltd = 1.2 Task: Calculate the expected return on Ram Co’s equity using the CAPM E( ri ) = Rf + β i (E(rm) – Rf) = 4 + (1.2 x 5) = 10% Investors would expect at least 10% return for investing in ABC Ltd.’s equity, given the risk it carries. Pricing signal: If the stock is expected to return more than 10%, it may be undervalued. If the stock is expected to return less than 10%, it may be overvalued.

---

### Slide 21

Advantages &amp; Disadvantages of CAPM Advantages: Focuses only on market (systematic) risk, ignoring company-specific risk. Based on theory and research, tested over decades. Helps calculate fair discount rates for investments, better than WACC. Disadvantages: Must estimate risk-free rate, market return, equity premium, and beta. Risk-free rate and equity premium can change over time → affects accuracy. Beta changes over time → expected returns are uncertain. Estimating inputs introduces uncertainty in the cost of equity. 21

---

### Slide 22

Key Takeaways Portfolio theory helps reduce unsystematic risk through diversification. The efficient frontier shows portfolios with the highest return for a given level of risk. CAPM links expected return to systematic risk (beta). Beta (β) measures an asset’s sensitivity to market movements. The Security Market Line illustrates the risk-return trade-off for all assets. CAPM can be used to calculate the cost of equity for investment and valuation decisions.

---

### Slide 23

Image by Gerd Altmann from Pixabay Additional Reading Chapters 12 – Risk and Return ( Hillier, David. EBook Fundamentals of Corporate Finance 4e , McGraw-Hill UK Higher Ed, 2021.)

---

### Slide 24

Next Week Sources of Finance

---

### Slide 25

Any Questions?? 25 If you have questions or find any topic challenging, please feel free to contact me: adnan.aslam@uwe.ac.uk to book an appointment or get clarification.

---

