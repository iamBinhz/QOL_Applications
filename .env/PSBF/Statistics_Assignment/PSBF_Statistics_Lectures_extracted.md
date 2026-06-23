# Lecture_Contents — Extracted Lecture Content

*Extracted: 2026-05-05*

---

## UMET9U-30-1 - Lecture 11

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 11 Presented by Reinhold Heinlein Dec ember 2025

---

Lecture content Relationships between variables Scatter graphs Covariance and correlation coefficients

---

Correlation analysis Data of paired observations can be used to study relationships between the variables. Up to here, we studied variables on their own, now we have paired observations, and are interested in relationships. Relationships can be studied by using graphical analysis or by computing correlation coefficients.

---

Correlation analysis Paired observations can be cross-sectional or time series data. Example for cross-sectional data: Revenues of 20 different  companies in the year 2025. And, number of employees of the same companies in the same year. Positive correlation of the two variables is expected. A company with more employees might have higher revenues. Example for time series data: Annual inflation rates of two countries for the time period 2000 to 2025. Most likely inflation will be high at similar points in time. Hence, positive correlation is expected.

---

Graphical analysis - Example Figure: Inflation, consumer prices for the US and the UK, annual, 1960-2024.

---

Graphical c orrelation analysis Positive correlation: When x-values are high, y-values tend to be high. The data cloud is an elliptic upward sloping shape. Negative correlation: When x-values are high, y-values tend to be low. The data cloud is an elliptic downward sloping shape. No correlation: When x-values and y-values seem not to be connected. The data cloud looks like a random circle of dots.

---

The covariance The covariance between two variables X and Y measures the extent to which a variation in one is positively or negatively associated with a variation in the other. That is, when one goes up, does the other tend to go up or down? E.g. Price and quantity demanded, income and consumption, money supply and inflation. Like the variance, the co-variance is calculated using the differences of each observation from the mean.

---

The covariance The Co-variance of X and Y, c ov (X,Y) is then the average of these products of differences from the mean. The significance of this is that, where X and Y are either both above their mean or both below their mean, we will get a positive value, indicating that the two are positively related; wherever one is above its mean and the other below, we will get a negative value, indicating a negative relationship.

---

Covariance example 1 X Y 1 -3 2 -3 3 -1 4 -1 5 1 6 1 7 3 8 3 X Y 1 -3 2 -3 3 -1 4 -1 5 1 6 1 7 3 8 3

---

Covariance example 1 X 1 3 5 7 Y 2 4 6 8

---

Covariance example 2 X Y 1 -4 8 2 5 0 7 1 6 1 4 -2 8 3 5 -1 X Y 1 -4 8 2 5 0 7 1 6 1 4 -2 8 3 5 -1

---

Covariance example 2 X 1 5 6 8 Y 8 7 4 5

---

The covariance Compare with the formula for variance, where we took the average of squared differences from the mean for a single variable – here we take the average product of differences from the mean for two variables. Note , .

---

The covariance Similarly like with variance, if we want to make inference on a population with the help of a sample, one needs to use the sample version of the covariance formula:

---

The correlation coefficient The co-variance is of some use, but the problem is that its size depends on the size of the numbers we’re dealing with for each variable – so if you measured the variables in different units, you’d get a different answer. To obtain a measure of the relationship between the variables that does not depend on the absolute size of the numbers, and which we can therefore compare across datasets, we scale the co-variance according to the standard deviation of each variable. This gives the Correlation Coefficient (precisely, the Pearson Product Moment Correlation Coefficient ), R.

---

The correlation coefficient Pearson Correlation Coefficient: Note, N has been cancelled in the second row.

---

Properties of the correlation coefficient The correlation coefficient always lies between -1 and +1. A positive value of R indicates that the variables tend to move together; a negative value, that they tend to move in opposite directions. The higher the absolute value of R, the closer the relationship. If R=0, it means there is no (linear) relationship between the variables

---

Correlation example 1 X 1 3 5 7 Y 2 4 6 8

---

Covariance example 2 X 1 5 6 8 Y 8 7 4 5

---

Limitations of correlation analysis CORRELATION DOES NOT IMPLY CAUSATION! There can be many reasons why two variables A and B are statistically correlated: A causes B B causes A Something else, C say, causes both A and B Co-incidence Problems with the data For example, a common occurrence in case 3 is where the variable C is time – that is, if both variables tend to increase or decrease over time, quite independently of each other.

---

Next Lecture Probability distributions Binomial distribution Normal distribution Z table

---

## UMET9U-30-1 - Lecture 12

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 12 Presented by Reinhold Heinlein Dec ember 2025

---

Lecture content Probability distributions Binomial distribution Normal distribution Z table

---

Probability theory – building blocks An experiment is an activity which has a number of possible outcomes. A trial is a single performance of the experiment with a single outcome. The sample space consists of all the possible outcomes. The outcomes in the sample space are mutually exclusive. The probability of an outcome is the chance of this outcome occurring. An event is a collection of outcomes within the sample space. Example: event of odd number on the roll of a dice consists of the outcomes 1, 3 and 5.

---

Probability of an outcome The probability of an outcome must lie between 0 and 1. The sum of the probabilities for all the outcomes is 1. The complement of an outcome is everything in the sample space apart from the outcome.

---

Probability distributions A random variable is one whose outcome is a result of chance. We have discussed some basic ways in which we can describe a set of actual statistical data: mean, variance, histogram. But to draw useful conclusions from statistical data, we need to go beyond description, to analysis. To do this, we need to have some idea, or model of the type of distribution of data we might expect a priori. We can then compare the actual data with the prior expectations.

---

Some standard probability distributions Binomial - when the underlying probability experiment has only two possible outcomes (e.g. tossing a coin). Normal - when many small independent factors influence a variable (e.g. height, influenced by genes, diet, etc.). Poisson - for rare events, when the probability of occurrence is low. t distribution – similar like normal, slightly more extreme values. F distribution – is an asymmetric distribution.

---

Binomial distribution We toss a coin 5 times and count the heads. There are six possible scores we can get for the number of heads – 0 up to 5. How likely is each to occur? We can think about this in terms of the different possible sequences of heads and tails we might get – e.g. HHTHT or HTTTH. If the coin is fair, each sequence is equally likely. So, what we need to do is count up the number of possible sequences that can give each number of heads. How many possible sequences are there? Well, there are five trials, and each can have two possible outcomes. This means there are 2x2x2x2x2 possible sequences, or .

---

Binomial distribution How many of these sequences give exactly 0 heads? Clearly only 1: TTTTT. How many give 1 head? There are 5 of these, as the sole head can occur in any of the five tosses – that is, we can get HTTTT, THTTT, TTHTT, TTTHT, TTTTH. How many give 2 heads? HHTTT, HTHTT, HTTHT, HTTTH, THHTT, THTHT, THTTH, TTHHT, TTHTH, TTTHH. There are 10 in total. As the distribution is symmetric, we can infer the second half.

---

Binomial distribution The binomial distribution is symmetric and discrete. What is the probability of the event of exactly 2 heads?

---

Normal distribution Normal distributions are continuous – that is, they can take any value, or any value in a given range – for example the height, weight or income of a randomly selected individual. A lot of variables in the real world tend to have a particular shape of distribution – the normal distribution – and a lot of statistical analysis is based on the assumption that certain variables follow some sort of normal distribution.

---

Normal distribution Characteristics of any normal distribution: Bell-shaped Symmetric about mean Continuous Never touches the x-axis Total area under curve is 1.00 Approximately 68% lies within 1 standard deviation of the mean, 95% within 2 standard deviations, and 99.7% within 3 standard deviations of the mean.

---

Normal distribution Data values represented by x which has mean and variance . (The symbol reads ‘is distributed as’.) Probability Function given by

---

The Standard Normal Curve We fix the horizontal scale so that units of standard deviation are used (Z values) instead of X values Data values represented by z which has mean and variance . Probability Function given by

---

The Standard Normal Curve Example: If mean = 40 and standard deviation = 10 When x = 50  z = 1 When x = 30  z = -1 When x = 60  z = 2

---

Areas under the Curve This area is 0.6826. 68.26% of values are within 1 standard deviation of the mean. There is a probability of 0.68 that a value will lie in this region.

---

Example: probability density functions of men’s and women’s heights Let’s assume heights are normally distributed. and

---

Example: what proportion of women are taller than 175 cm? We need the blue area.

---

Example: what proportion of women are taller than 175 cm? How many standard deviations is 175 above 166? The standard deviation is , hence so 175 lies 1.42 s.d’s above the mean. How much of the Normal distribution lies beyond 1.42 s.d’s above the mean? Use tables of the STANDARD NORMAL DISTRIBUTION.

---

The Z table Body of table gives area under Z curve to the left of z 7.78% of women are taller than 175 cm

---

Next Lecture Programming with Python

---

## UMET9U-30-1 - Lecture 19

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 19 Presented by Reinhold Heinlein March 2026

---

Lecture content Revision of normal probability distributions (see also lecture 12) Statistical inference Sampling distribution of the mean Central limit theorem

---

Normal distribution Characteristics of any normal distribution: Bell-shaped Symmetric about mean Continuous Never touches the x-axis Total area under curve is 1.00 Approximately 68% lies within 1 standard deviation of the mean, 95% within 2 standard deviations, and 99.7% within 3 standard deviations of the mean.

---

Normal distribution Data values represented by x which follows a normal distribution, has mean and variance .

---

The standard normal curve We fix the horizontal scale so that units of standard deviation are used (Z values) instead of X values Data values represented by z which has mean and variance .

---

Areas under the curve Areas under the curve can be looked up on the Z table. There is a probability of 0.68 that a value will lie in this region.

---

Population and samples A population refers to all items of interest A sample is a small subset of the population The sample should be chosen at random so that it is representative of the population We use a sample to infer something about the population Different samples give different results Symbols: Parameter Population Sample Mean Standard deviation Parameter Population Sample Mean Standard deviation

---

Best estimates of the parameters The sample mean, , is the best estimator of the population parameter These are called the Point estimates The word ‘best’ has statistical meaning. It means the estimate with the smallest variance. The expected value of our sample mean is the population mean; the estimate is unbiased

---

Sampling distribution of the mean If you took lots of samples from any distribution with finite variance, the distribution of the sample mean would be approximately normal This is the central limit theorem , which is a very important result in statistics.

---

Sampling distribution of the mean Even in this highly non-normal population, repeated sample means will be approximately normal.  This is essentially because they can be too high or too low in equal measure.

---

Standard error The standard deviation of the sampling distribution is called the standard error For the mean – Standard Error of the Mean ( STEM ) As n increases the denominator increases and our estimate becomes more precise. The bigger n, the better.

---

Distribution of sample means So, if our samples are large enough, the sampling distribution of the mean is normal , with expected value equal to the population mean and standard deviation equal to STEM .

---

Interval estimation We use the sample mean as a point estimator of the population mean . Further, we are interested in an interval estimate: Interval estimate = Point estimate Margin of error To compute the margin of error we use the standard deviation of the sampling distribution. In the following we have two cases: The population standard deviation is known or not known.

---

Case 1: 𝜎 is known The population standard deviation is known. The interval estimate for a population mean is as follows: where is the confidence coefficient and the relevant z value from the standard normal probability distribution. A sample size of is desired. This is less relevant when the population is normal in the first place.

---

Example 1 The standard deviation, , of income is £15,000. In a sample of 40 households, income is £40,000. Estimate the 95% confidence interval for the population mean income? As 𝜎 is known we are in case 1: The population mean is with 95% confidence in the interval .

---

Case 2: 𝜎 is unknown The population standard deviation is not known. In this case we must use the sample standard deviation s to estimate . The interval estimate for a population mean is as follows: where is the confidence coefficient and the relevant t value from the t distribution with degrees of freedom. A sample size of is desired. This is less relevant when the population is normal in the first place.

---

Example 2 In a sample of 40 households, income is £40,000 and sample standard deviation is £15,000. What is the 95% confidence interval for the population mean income? As 𝜎 is unknown we are in case 2: The population mean is with 95% confidence in the interval .

---

Next Lecture Hypothesis testing

---

## UMET9U-30-1 - Lecture 20

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 20 Presented by Reinhold Heinlein March 2026

---

Lecture content Hypothesis testing

---

Hypothesis testing In the previous lecture, we showed how a sample can be used to develop point and interval estimates of population parameters. In a statistical test, we are making a tentative assumption about a population parameter. Depending on findings of the sample we either reject or not reject the assumption.

---

The 5 steps in hypothesis testing Write down what you are testing: Null and alternative hypothesis. Compute a test statistic from the sample data. Look up a critical value in a statistical table. Decision: Reject or not reject the null. Conclusion: What can be learned from the test.

---

Step 1: Formulate null and alternative hypothesis The null hypothesis is denoted by . The alternative hypothesis is the opposite. Hypotheses are made about the population. Often the researcher puts what they want to show in the alternative. If they can reject the null, they have shown what they want to show. Example: The null is that the population mean is equal to some value.

---

Step 2: Compute a test statistic from the sample data The test statistic depends on what statistical test we are doing. It can be for example a z value computed from sample data. Example: This is the z value of the sample mean We know that . So, if the null is true ( ) then . If z is far enough away from zero, then the null is probably not true.

---

Step 3: Look up a critical value in a statistical table The critical value is the dividing point between the region where the null hypothesis is rejected and the region where it is not rejected.

---

Step 3 continues To determine the region of rejection, the level of significance, is chosen by the researcher. Often 5% or 1% is used. Which statistical distribution is relevant to look up the critical value depends on the type of the test performed. If the test is a two-sided or two-tailed test, is put in each tail. If the test is a one-sided test, the full rejection area is put in one tail. The level of confidence is defined as .

---

Step 4: Decision - Reject or not reject the null If the test statistic is in the rejection area, we reject the null and the alternative seems to be true. Example: hence reject

---

Step 5: Conclusion: What can be learned from the test The final step in the hypothesis testing procedure is to interpret the results . If the null cannot be rejected with the sample information and the chosen significance level, this did not prove that the null is true, only that so far it cannot be rejected. If the null has been rejected, we are confident that the null is not true. But there is a small probability, , that the decision to reject the null was an error due to random sampling (type 1 error).

---

Type 1 and type 2 error Type I error: Rejecting the null hypothesis when it is true. Type II error: Not rejecting the null hypothesis when it is false. Does not reject Reject is true Correct decision Type I error is false Type II error Correct decision Correct decision Type I error Type II error Correct decision

---

The p- value approach Instead of the critical value approach, see slides before, one can do the p- value approach. The p- value is a probability that measures the support provided by the sample for the null hypothesis. It reports the probability of getting a value of the test statistic at least as extreme as the value actually obtained. The p- value ranges from 0 to 1. It can be used to measure the strength of the rejection. A very small p-value, such as 0.001, indicates that there is little likelihood the is true. Rejection rule using p- value: Reject if p- value .

---

The confidence interval approach In the previous lecture, we introduced interval estimation . The estimated interval can be used for hypothesis testing. Example: Using the random sample information, we construct the confidence interval: If the confidence interval contains the hypothesized value , do not reject . Otherwise, reject .

---

Example 1: known, two-sided test A sample of 50 provided a sample mean of 14.15. The population standard deviation is 3. Test whether the population mean is 15. Computing the test statistic: Critical value using 5% significance level and z table: Decision: As reject . Conclusion: We are 95% confident that the true population mean is not 15.

---

Example 2: unknown, one -sided test A sample of 60 provided a sample mean of 7.25 and sample standard deviation of 1.052. Test whether the population mean is larger than 7. Computing the test statistic: Critical value using one-tailed 5% significance level of t distribution with is . Decision: As reject . Conclusion: We are 95% confident that the true population mean is larger than 7.

---

Next Lecture Regression analysis

---

## UMET9U-30-1 - Lecture 21

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 21 Presented by Reinhold Heinlein March 2026

---

Lecture content Regression analysis Computing coefficients Interpretation of coefficients

---

Regression analysis Regression analysis is a statistical method for estimating the relationship between a dependent variable and one or more independent variables. Simple or Bivariate regressions have only one independent variable We might be interested in relationships between: Consumption and income Inflation and unemployment Sales revenue and advertisement

---

Example A firm wishes to test the hypothesis that more advertising will result in more sales and also wants to test the strength of the relationship i.e. by how much will sales increase for every additional £1 spent on advertising. Sales Revenue is the dependent variable ( Y ) and advertising expenditure is the independent or explanatory variable ( X ). Values are in thousands of Pound (1 unit = £1,000). Year (t) 1 2 3 4 5 6 7 8 9 10 Advertising Expenditure (X) 10 9 11 12 11 12 13 13 14 15 Sales Revenue(Y) 44 40 42 46 48 52 54 58 56 60

---

Scatter graph A scatter graph plotting advertisement expenditures versus sales revenues. There seems to be a strong positive relationship.

---

Correlation coefficient We can compute a correlation coefficient between the variables: Correlation is strong and positive. Remember, correlation is always between .

---

Fitted line The least squares method is a procedure for using sample data to find the estimated regression equation. The equation can be plotted as a fitted line in the scatter graph.

---

Least square criterion The fitted line should be as close as possible to the dots. This is an optimisation using the least squares criterion:

---

The regression equation The regression equation can be written as follows: where is the Y intercept of the estimated regression line is the slope of the estimated regression line are the residuals or errors are the fitted values, the expectation of Y conditional on the value of X:

---

How to compute the coefficients The OLS optimisation procedure c hooses b 0 and b 1 to minimize residual sum of squares Minimize solve using calculus to get: Note: and

---

Estimated coefficients for the advertisement example X Y 10 44 -2 -6 12 4 9 40 -3 -10 30 9 11 42 -1 -8 8 1 12 46 0 -4 0 0 11 48 -1 -2 2 1 12 52 0 2 0 0 13 54 1 4 4 1 13 58 1 8 8 1 14 56 2 6 12 4 15 60 3 10 30 9 X Y 10 44 -2 -6 12 4 9 40 -3 -10 30 9 11 42 -1 -8 8 1 12 46 0 -4 0 0 11 48 -1 -2 2 1 12 52 0 2 0 0 13 54 1 4 4 1 13 58 1 8 8 1 14 56 2 6 12 4 15 60 3 10 30 9

---

Interpretation of coefficients Slope : If advertising expenditure is increased by £1,000, we expect sales revenues to increase by £3,533, keeping everything else constant. Intercept : The regression estimates that if advertising expenditure is £0 (i.e. ), we predict sales revenue to be £7,600. Note, that is far from the provided sample values. In these cases, the intercept has often no sensible economic interpretation.

---

Pred iction Example for a prediction: When advertisement is £10,000, Expected sales revenues are £42,934. Note that this is a conditional expectation: . Care must be taken when using the regression to estimate the sales revenues for advertising expenditures outside the range of the observed values.

---

Assumptions on the error term The error term is a random variable with a mean value of zero: The variance of denoted by , is the same for all values of X. The values of are independent, hence . The error term is approximately normally distributed.

---

Next Lecture Regression inference Standard err ors Significance test for regression coefficients ( t test)

---

## UMET9U-30-1 - Lecture 23

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 23 Presented by Reinhold Heinlein April 2026

---

Lecture content Regression inference Standard errors Significance test for regression coefficients ( t test)

---

Regression analysis The regression estimates and are specific to the sample. The sample regression function (SRF) is: For a different sample drawn from the same population, we would get slightly different coefficient values. The true regression equation parameters for the population are unknown. The population regression function (PRF): The residuals are estimates of the error term . and are estimates for the parameters and .

---

Precision and standard errors The coefficients are estimates of the true unknown parameters . If we would have many samples of data from the same population, we would have a distribution for a coefficient , the sampling distribution . The greater is the dispersion of the sampling distribution of the estimated values of , the smaller the confidence there would be in the single estimated value of the b coefficient. The standard deviation of the sampling distribution is called standard error .

---

Estimating the variance of the error term The mean square error is an estimate of the variance of the error term : where are the prediction errors n is the sample size and k is the number of coefficients in the model.

---

Computing the standard errors of the coefficients The formulas for the slope and the intercept are slightly different: s Note:

---

S tandard error for slope coefficient in the advertisement-sales example lecture 21 10 44 42.93 1.07 1.14 4 9 40 39.40 0.60 0.36 9 11 42 46.47 -4.47 19.95 1 12 46 50.00 -4.00 16.00 0 11 48 46.47 1.53 2.35 1 12 52 50.00 2.00 4.00 0 13 54 53.53 0.47 0.22 1 13 58 53.53 4.47 19.95 1 14 56 57.07 -1.07 1.14 4 15 60 60.60 -0.60 0.36 9 65.47 30.00 10 44 42.93 1.07 1.14 4 9 40 39.40 0.60 0.36 9 11 42 46.47 -4.47 19.95 1 12 46 50.00 -4.00 16.00 0 11 48 46.47 1.53 2.35 1 12 52 50.00 2.00 4.00 0 13 54 53.53 0.47 0.22 1 13 58 53.53 4.47 19.95 1 14 56 57.07 -1.07 1.14 4 15 60 60.60 -0.60 0.36 9

---

Significance test of individual coefficient Recall the estimates for the example of the effect of advertisement on sales revenues: So, and the standard error . Can we be sure that the true parameter is not zero? If the parameter would be zero, there would be no effect of advertisement on sales revenues. We need to perform a statistical hypothesis test, which is called t test.

---

Conducting a test of significance As a t test is a hypothesis test , it follows the usual steps of a hypothesis test. Write down what you are testing: Null and alternative hypothesis. Compute a test statistic from the sample data. Look up a critical value in a statistical table. Decision: Reject or not reject the null. Conclusion: What can be learned from the test.

---

Conducting a test of significance A t test is focussing on one coefficient at a time; it can be a slope coefficient or the intercept. A t test can be one-sided or two-sided depending on the question. We start with a two-sided test. Is the slope coefficient statistically significant? Meaning: Can we sure that it is not zero.

---

t test: two-sided, for the slope, relative to 0. Write down what you are testing: Null and alternative hypothesis. Note, that this is concerned with the true unknown parameter . If the null is true, advertisement has no effect on sales revenues.

---

t test: two-sided, for the slope, relative to 0. Compute a test statistic from the sample data: is the value under the null, the value we are testing against, here it is 0. The result means, that is standard errors away from 0. The t statistics or also called t values can be negative or positive, depending on the sign of the coefficient, as standard errors are always positive.

---

t test: two-sided, for the slope, relative to 0. Look up a critical value in a statistical table. Using a 5% significance level, and a two-sided test, we put 2.5% in each tail. This information is necessary to find the correct column in the t table. We need to compute the degrees of freedom to determine the correct column. Using the t distribution table, we find a critical value of .

---

t test: two-sided, for the slope, relative to 0. Decision : Reject the null hypothesis. As with we reject the null hypothesis. The test statistics is larger than the critical value. Hence, the test statistics is in the rejection area. The null is rejected the alternative seems to be true. Conclusion As we reject the null, there is an effect from advertisement on sales revenues.

---

Conducting a one-sided t test Test whether the slope, , is significantly greater than 2.5 at α=5%: We put what we want to show in the alternative. If we can reject the null, we have shown what we want to show. The test statistic:

---

Conducting a one-sided t test continues The critical value: As this is a one-sided test, we put all the 5% rejection area in one tail. The degree of freedom is unchanged: The critical value from the t table is: 1.860. Decision: As with we reject the null hypothesis. Conclusion: We are 95% confident that the true slope parameter is larger than 2.5.

---

Next Lecture Regression inference Coefficient of determination Overall significance of a model: F test

---

## UMET9U-30-1 - Lecture 24

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 24 Presented by Reinhold Heinlein April 2026

---

Lecture content Regression inference – learning from the sample Coefficient of determination Overall significance of a model: F test

---

Coefficient of determination How good is the fitted regression line overall? It can be shown: TSS: total sum of squares ESS: explained sum of squares RSS: residual sum of squares

---

Coefficient of determination How good is the fitted regression line overall? The R 2 value is always between 0 and 1: As The R 2 can also be computed as:

---

Coefficient of determination

---

Coefficient of determination Remember the previous example of the effects of advertisement on sales revenues. The estimated regression equation:

---

Computation of the R 2 value. 10 44 -6 36.00 42.93 49.93 9 40 -10 100.00 39.40 112.34 11 42 -8 64.00 46.47 12.48 12 46 -4 16.00 50.00 0.00 11 48 -2 4.00 46.47 12.48 12 52 2 4.00 50.00 0.00 13 54 4 16.00 53.53 12.48 13 58 8 64.00 53.53 12.48 14 56 6 36.00 57.07 49.93 15 60 10 100.00 60.60 112.34 10 44 -6 36.00 42.93 49.93 9 40 -10 100.00 39.40 112.34 11 42 -8 64.00 46.47 12.48 12 46 -4 16.00 50.00 0.00 11 48 -2 4.00 46.47 12.48 12 52 2 4.00 50.00 0.00 13 54 4 16.00 53.53 12.48 13 58 8 64.00 53.53 12.48 14 56 6 36.00 57.07 49.93 15 60 10 100.00 60.60 112.34

---

Interpretation of the R 2 value. 85.1% of the variation in sales revenues can be explained with the variation in advertisement expenditures. This is a high explanatory power. If all the data points were to fall on the regression line all the variations in the dependent variable Y would be explained by the variation in the independent or explanatory variable X and R 2 would equal 1 or 100%. If none of the variation in Y were explained by the variation in X , R 2 would be equal to 0.

---

Testing the overall model significance: F test The F test is a joint test on all the slope coefficients jointly. The test tries to answer whether the regression model has predictive power or not. When we are working with a bi-variate regression, the F test will provide the same conclusion as the t test. As the F test is a hypothesis test, we follow the same steps as in previous tests.

---

Testing the overall model significance: F test Write down what you are testing: Null and alternative hypothesis. Note, that the alternative hypothesis is not , because cannot be negative.

---

Testing the overall model significance: F test Compute a test statistic from the sample data: where n is the sample size and k the number of coefficients in the model. For the advertisement-sales example:

---

Testing the overall model significance: F test Look up a critical value in a statistical table. The test statistic follows . In the F- distribution table we need degree of freedom numerator and degree of freedom denominator . The rejection area is always one-sided and in the right tail. A usual significance level is 5%. For the advertisement-sales example:

---

Testing the overall model significance: F test Decision : Reject the null hypothesis. As with we reject the null hypothesis. The test statistics is larger than the critical value. Hence, the test statistics is in the rejection area. The null is rejected the alternative seems to be true. Conclusion As we reject the null, the model is overall significant, and advertisement can be used to predict sales revenues.

---

Outlook In study year 2, we will do more regression analysis in UMET9W-30-2- Econometric Analysis and Professional Advancement.

---

## UMET9U-30-1 - Lecture 7

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 7 Presented by Reinhold Heinlein November 2025

---

Lecture content Starting with statistics and data analysis Data sources Data collection Types of data Cross section versus time series

---

Introduction The subject of statistics can be divided into two parts: descriptive statistics and inferential statistics . Descriptive statistics are used to summarise information which would otherwise be too complex to take in. Statistical inference concerns the relationship between a sample of data and the population from which it is drawn. What can be learned about the population from the sample?

---

Introduction Usually, we are interested in the population of data. But often we must make decisions based on a limited set of data. Population : The entire set of individuals or objects of interest. Example: All UWE students. Sample : A portion, or part, of the population of interest. Example: 50 UWE students randomly selected on campus.

---

Data sources Where do we get data from? Primary data : New data we collect ourselves to do a particular study. Secondary data : Data we download from a data provider ( Bloomberg , Office for National Statistics (ONS) , Federal Reserve Economic Data (FRED) , UK Data Service , Yahoo Finance ).

---

Stages in primary data collection Purpose of the exercise What is the theory you are trying to test? Information to be collected Need to balance cost and the amount of information needed. Method of data collection Should you use a questionnaire? Sampling Method Random, convenience?

---

Pilot Survey Essential ( eg 50 people). You may discover unforeseen problems in data requested, questionnaire design, sample. Main Survey Carry this out Validation Checking of sensible answers, and expectations. Build in computer checks, screen data for errors. Analysis Data is analysed and conclusions drawn.

---

Methods of primary data collection Personal interview Accurate, but skill of interviewer is important. Bias may occur in how the question is asked. Expensive. (Telephone interviews can be slightly cheaper.) Postal or email questionnaire Cheaper, but skill is needed in design. Response rate low. Bias in self-selection of returns. Direct observation eg Quality control. Counting people. Traffic surveys.

---

Methods of sampling Simple random sampling : Each item/person has an equal chance of being selected. Stratified random sampling : Population subdivided into strata or groups. Use a random sample for each group so that you have proportional representation. Cluster sampling : Use if large geographical area. Could use a map and select a random sample of areas. Sample all or a lower sample fraction in those areas. Convenience sampling : Contact people you know.

---

Types of data Quantitative: result of counting or measuring and represented by numbers (e.g. number of students on a course or the salaries of employees) Qualitative: object or individual is observed and recorded as a nonnumeric characteristic (e.g. job titles of employees or hair colour)

---

Levels of measurement Nominal (categorical) data are qualitative and consist of names or responses that may be labelled with letters or numbers. We cannot rank nominal data (e.g. one is bigger or better than another) or make statements about differences (e.g. how much one is bigger or better). This is the weakest form of measurement. Questionnaire: Have you a valid driving licence? Which party did you vote for at the last election? Which is your favourite restaurant?

---

Levels of measurement Ordinal data is qualitative. Responses may be given letters or numbers so that we can rank them in order but does not allow us to comment on differences (e.g. how much better one is). Questionnaire: How satisfied are you with your job? Very satisfied   Fairly satisfied   Neutral  Fairly unsatisfied  Very unsatisfied Or Put these restaurants in order of preference (1 is most preferred and 4 as least preferred) Dog and Duck    Rose and Crown    Pig and Whistle   Core 24

---

Levels of measurement Cardinal (numerical) data is quantitative. The strongest form of measurement and result from counting a number of objects/responses (e.g. the number of faulty items produced) or from measuring something (e.g. time). We can both rank numbers and make statements about their differences (i.e. by how much one is bigger/better than another).

---

Discrete versus continuous Discrete data can be discrete in nature or result from counting or measuring to a specific degree of precision (e.g. 2 decimal places) Example: The number of cars sold in the UK in 2025 Continuous data result only from measuring (length, weight etc). They can be measured or recorded to any degree of precision. When the units of measurement are small, the distinction between discrete and continuous data is blurred e.g. measuring weight to the nearest gram.

---

Cross section versus time series Cross-sectional data is a type of data collected by observing many subjects (such as individuals, firms, countries, or regions) at a single point or period of time. Time series data is a series of data points indexed (or listed) in time order. Most commonly, a time series is a sequence taken at successive equally spaced points in time ( eg UK inflation Jan 2010 – Dec 2025 in monthly frequency).

---

Spreadsheet Data is usually presented in a spreadsheet where the first row contains the variable names. This dataset has 5 observations (information on 5 employees) and 4 variables. Gender and region are nominal/categorical data. Different categories are coded as numerical values.

---

Frequency table A frequency table is way of condensing information. We see how many data points we have in each class. In some cases, we might have only access to the frequency table but not to the raw data.

---

Next Lecture Descriptive statistics Mean, median, mode Variance, standard deviation Coefficient of variation

---

## UMET9U-30-1 - Lecture 8

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 8 Presented by Reinhold Heinlein November 2025

---

Lecture content Descriptive statistics Mean, median, mode Variance, standard deviation Coefficient of variation

---

Introduction Descriptive statistics are used to summarise information which would otherwise be too complex to take in. To summarise we use: Measures of location or central tendency (mean, median, mode) Measures of dispersion (variance, standard deviation) Measures of skewness Measures of kurtosis (These measures are called moments of a distribution. We will focus on the first two moments.)

---

Mean of a population Mean of a sample

---

How to find the mean for this dataset? 17, 17, 18, 18, 18, 19, 19, 20, 21, 21

---

The median is the ‘number in the middle’ once the data have been put in rank order. If the sample size is odd: 17, 17, 18, 18, 18, 19 , 19, 20, 21, 21 and 22		(11 values) Median = 19 If the sample size is even: 17, 17, 18, 18, 18 , 19 , 19, 20, 21, 21		(10 values) Median is the average of the 5 th and the 6 th value. Median = 18.5

---

The mode is the most frequent value. 17, 17, 18, 18, 18, 19, 19, 20, 21, 21 Mode = 18 In this sample: Mean = 18.8 Median = 18.5 Mode = 18

---

The weighted mean is similar to the arithmetic mean, but more weight is placed on some observations than others. Example: Calculating the average expenditure on a pupil by an education authority would have to take into account the greater numbers in primary and secondary education than post 16 education. Table 1: Cost per pupil in different types of schools Primary Secondary Post-16 Unit costs (£) 5,200 7,400 8,750

---

Table 2: Numbers and proportions of pupils in each age range The formula for the weighted mean is: The average cost per pupil is £6,648.65, when taking into account the different numbers per type of school. Primary Secondary Post-16 Total Numbers 8,000 7,000 3,000 18,000 Proportions 44.4% 38.9% 16.7%

---

Measures of dispersion Range Variance Standard deviation Coefficient of variation

---

The range is the simplest measure of dispersion. It is the difference between the maximum and minimum values of the dataset. Remark: The range is strongly dependent on outlier observations.

---

The variance of a population The variance is the average of all squared deviations from the mean. A more dispersed distribution will have larger deviations from the mean and thus a larger variance. The sample variance is used when trying to make inferences about a population from a sample. Note, the n-1 , which is called Bessel's correction. When sample size becomes very large, n-1 becomes indistinguishable from n .

---

A small variance in pink and a large variance in dark blue.

---

data data-mean (data-mean) 2 17 -1.8 3.24 17 -1.8 3.24 18 -0.8 0.64 18 -0.8 0.64 18 -0.8 0.64 19 0.2 0.04 19 0.2 0.04 20 1.2 1.44 21 2.2 4.84 21 2.2 4.84 188 19.6 Previous data Mean = 18.8 Variance = 19.6/10 = 1.96

---

The square root of the variance is defined as the standard deviation . Variance is measured in squared units of x . The square root of the variance converts the analysis back to original units Previous data Mean = 18.8 Variance = 1.96 Standard Deviation = square root of 1.96 = 1.4

---

The coefficient of variation is a measure of relative dispersion. It is the ratio of standard deviation to mean and often expressed as a percentage. It measures the dispersion/variability relative to the average value.

---

Example: Over the last 6 months, the average price of Internet based shares was £5.80 with a SD of £1.50. Manufacturing share prices were £3.50 on average with an SD of £0.80. Which shares had the highest relative variability? Internet cv = 1.50/5.80 = 0.2586 = 25.86% Manufacturing cv = 0.80/3.50 = 0.2285 = 22.85% Internet shares have a higher relative variability we might infer a riskier investment.

---

Next Lecture Graphical analysis Bar chart, Pie chart, Line graph Histogram Ogive (cumulative frequency plot) Box plot

---

## UMET9U-30-1 - Lecture 9

UMET9U-30-1- Professional Skills for Banking and Finance Lecture 9 Presented by Reinhold Heinlein November 2025

---

Lecture content Graphical analysis Bar chart, Pie chart Line graph Histogram Ogive (cumulative frequency plot) Box plot Scatter graph

---

Graphical Presentation of Data Data in raw form are usually not easy to use for decision making Some type of organization is needed Table Graph The type of graph to use depends on the variable being summarized and the information one tries to display

---

Tables and Graphs for Categorical Variables Tabulating categorical data: Decide on the number of categories and count the observations per category. Display a frequency distribution table . Graphing categorical data: Display bar chart or pie chart using the information from the frequency distribution table. Height of bar or size of pie slice shows the frequency or percentage for each category.

---

Bar Chart Example

---

Pie Chart Example

---

Line plot for time series data A line chart (time-series plot) is used to show the values of a variable over time Time is measured on the horizontal axis The variable of interest is measured on the vertical axis

---

Line plot for time series data Figure: S&amp;P 500 stock market index, monthly frequency

---

Graphs to describe univariate numerical variables Histograms are a graphical display of frequency distribution tables. Ogives show cumulative distribution tables. Box plots graphically display certain descriptive statistics, like lower and upper quartiles, medium, minimum and maximum, and also outlier observations.

---

What is a frequency distribution table? A frequency distribution is a list or a table … containing class groupings (categories or ranges within which the data fall) ... and the corresponding frequencies with which data fall within each class or category A frequency distribution is a way to summarize data The distribution condenses the raw data into a more useful form... and allows for a quick visual interpretation of the data

---

Class intervals and class boundaries of frequency distribution tables? Each class grouping has the same width Determine the width of each interval by Use at least 5 but no more than 15 or 20 intervals Intervals never overlap Round up the interval width to get desirable interval endpoints

---

Frequency distribution example Example: A manufacturer of insulation randomly selects 20 winter days and records the daily high temperature in Fahrenheit 24, 35, 17, 21, 24, 37, 26, 46, 58, 30, 32, 13, 12, 38, 41, 43, 44, 27, 53, 27

---

Frequency distribution example Sort raw data in ascending order: 12, 13, 17, 21, 24, 24, 26, 27, 27, 30, 32, 35, 37, 38, 41, 43, 44, 46, 53, 58 Find range: 58 - 12 = 46 Select number of classes: 5 (usually between 5 and 15) Compute interval width: 10  (46/5 then round up) Determine interval boundaries: 10 but less than 20, 20 but less than 30, . . . , 50 but less than 60 Count observations &amp; assign to classes

---

Frequency distribution example

---

Histogram A graph of the data in a frequency distribution is called a histogram The interval endpoints are shown on the horizontal axis the vertical axis is either frequency, relative frequency, or percentage Bars of the appropriate heights are used to represent the number of observations within each class

---

Histogram Example

---

How many class intervals? Many (Narrow class intervals) may yield a very jagged distribution with gaps from empty classes Can give a poor indication of how frequency varies across classes Few (Wide class intervals) may compress variation too much and yield a blocky distribution can obscure important patterns of variation.

---

Distribution shape The shape of the distribution is said to be symmetric if the observations are balanced, or evenly distributed, about the centre.

---

Distribution shape The shape of the distribution is said to be skewed if the observations are not symmetrically distributed around the centre. A positively skewed distribution (skewed to the right) has a tail that extends to the right in the direction of positive values. A negatively skewed distribution (skewed to the left) has a tail that extends to the left in the direction of negative values.

---

The cumulative frequency distribution

---

The ogive - graphing cumulative frequencies

---

The box plot (Box and Whisker Diagram) Lower quartile is the 25 th percentile. Upper quartile is the 75 th percentile. The length of the box is the interquartile range (IQR). Maximum length of the whiskers is . Outlier observations are more than away from lower quartile or upper quartile.

---

A box plot example in Excel

---

Graphs to describe relationships Scatter graphs are used for paired observations taken from two numerical variables. One variable is measured on the vertical axis, and the other variable is measured on the horizontal axis. The shape of the data cloud can give indication of correlation between the variables. A trendline can be added to the graph to emphasise the relationship between the variables.

---

Scatter graph Figure: Scatter graph, S&amp;P 500 versus NASDAQ Composite, monthly returns, 1990/1 – 2025/6

---

Next Lecture Relationships between variables More s catter graphs Covariance and correlation coefficients

---

