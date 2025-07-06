# (Discrete) Random Variables and Their Distributions

[**Go Back to Probability**](./00-index.md)

```js
```

```js
```

## Def. Random Variable

A **random variable** $X$ (r.v.) is a function from the sample $S$ to the set of real numbers $\R$.

So, a random variable is a function from the elements (not events) of $S$ to a real number. Since $X$ is a function, $X(s) \in \R$ is defined for all $s \in S$.

## Def. Discrete Random Variable

> TODO: Revise this

A random variable $X$ is said to be **discrete** if there is a countable (finite or countably infinite) list of values
$a_1, a_2, ...$ such that $P(X=a_j \enspace \text{for some} \enspace j)=1$.

If $X$ is discrete r.v., then the countable set of values $x$ such that $P(X=x) > 0$ is called the **support** of $X$.

## Def. Probability Mass Function

The **probability mass function (PMF)** of a discrete r.v. $X$ is the function $p_X$ given by

$$p_X (x) = P(X=x)$$

Note that this is positive if $x$ is in the support of $X$ and $0$ otherwise.

## Remark. Notation

We use $X = x$ to denote the event $\{s \in S \> | \> X(s) = x \}$. We cannot take the probability of a random variable, only of an event.

## Thm. Valid PMFs

> TODO: Rewrite

Let $X$ be a discrete random variable with countable support $x_1, x_2, ...$ (where each $x_i$ is distinct for notational simplicity). The PMF $p_X$ of $X$ must satisfy the following:

* $p_X(x) > 0$ if $x = x_j$ and $p_X(x) = 0$ otherwise.
* $\sum_{j=1} p_X(x_j) = 1$

```js
```

```js
```

## Def. Bernoulli Distribution

[**Wikipedia:** Bernoulli Distribution](https://en.wikipedia.org/wiki/Bernoulli_distribution)

A random variable $X$ is said to have the **Bernoulli Distribution** with **parameter** $p$ if $P(X = 1) = p$ and $P(X = 0) = 1 - p$, where $0 < p < 1$.

We write this as $X \thicksim \text{Bern}(p)$. The symbol $\thicksim$ is read as **"is distributed as"**.

The parameter $p$ is often called the **success probability** of the $\text{Bern}(p)$ distribution.

Any random variable whose possible values are $0$ and $1$ has a $\text{Bern}(p)$ distribution.

## Def. Indicator Random Variable

The **indicator random variable** or **Bernoulli random variable** of an event $A$ is the random variable which equals $1$ if $A$ occurs and $0$ otherwise. We will denote the indicator random variable of $A$ by $I_A$.

Note that $I_A \thicksim \text{Bern}(p)$ with $p = P(A)$.

## Def. Binomial Distribution

> Todo: Rewrite

[**Wikipedia:** Binomial Distribution](https://en.wikipedia.org/wiki/Binomial_distribution)

Suppose $n$ _independent_ Bernoulli trials are performed, each with the same success probability $p$. Let the random variable $X$ be the number of successes.

The distribution of $X$ is called the **Binomial distribution** with parameters $n \in \N^+$ and $p \in [0, 1]$ denoted by $X \thicksim \text{Bin}(n, p)$.

## Thm. Binomial PMF

If $X \thicksim \text{Bin}(n, p)$, then the PMF of $X$ is

$$P(X = k) = \dbinom{n}{k} p^k (1-p)^{n-k}$$

for $k \in \N$. and $k \leq n$. If $k > n$, then $P(X=k)=0$.

## Thm. ~

Let $X \thicksim \text{Bin}(n, p)$ and $q = 1 -p$. Then $n - X \thicksim \text{Bin}(n, q)$.

## Thm. ~

Let $X \thicksim \text{Bin}(n, \frac{1}{2})$ and $n$ even. Then the distribution of $X$ is symmetric about $\frac{n}{2}$ such that

$$P(X = \frac{n}{2} + j) = P(X = \frac{n}{2} - j)$$

for all $j \geq 0$.

## Thm. Hypergeometric Distribution

> Todo: Further define

[**Wikipedia:** Hypergeometric Distribution](https://en.wikipedia.org/wiki/Hypergeometric_distribution)

If $X \thicksim \text{HGeom}(w, b, n)$, then the PMF of $X$ is

$$P(X = k) = \dfrac{\dbinom{w}{k} \dbinom{b}{n- k}}{\dbinom{w+b}{n}}$$

for $0 \leq k \leq w$ and $0 \leq n-k \leq b$, and $P(X=k)=0$ otherwise.

## Thm. ~

The distributions $\text{HGeom}(w, b, n)$ and $\text{HGeom}(n, w + b -n, w)$ are identical.

## Def. Discrite Uniform Distribution

[**Wikipedia:** Discrete Uniform Distribution](https://en.wikipedia.org/wiki/Discrete_uniform_distribution)

The PMF of $X \thicksim \text{DUnif}(C)$ is

$$P(X=x) = \dfrac{1}{|C|}$$

for $x \in C$ and $0$ otherwise.

## Def. Cumulative Distribution Function

The **cumulative distribution function** of an random variable $X$ (not necessarily discrete) is the function $F_X$ where

$$F_X(x) =P(X \leq x)$$

## Thm. Valid CDFs

For any CDF $F_X$, or simply $F$, we have

* $x_1 \leq x_2 \implies F(x_1) \leq F(x_2)$
* $F(a) = \lim_{x \to a^+} F(x)$
* $\lim_{x \to - \infty} F(x) = 0$
* $\lim_{x \to \infty} F(x) = 1$

```js
```

```js
```

## Def. Function of a Random Variable

For a random variable $X$ in the sample space $S$ and a function $h: \R \to \R$ the random variable $h(X)$ maps $s \in S$ to $h(X(s))$.
