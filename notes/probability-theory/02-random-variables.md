# 2. Random Variables

## _Def._ Random Variable (R.V.)

A **random variable** $X$ is a just map (function)

$$
X: \Omega \to \R
$$

which maps the _elements_ (called outcomes) of $\Omega$ to the real line $\R$.

> Technically it must be a _measurable_ function.

## _Notation._ Random Variable

## _Def._ Cumulative Distribution Function (CDF)

Given a random variable $X$, the **cumulative distribution function $F_X$** is defined as

$$
\def\arraystretch{1.25}
\begin{array}{rcl}
F_X: \enspace \R &\to& [0, 1] \subseteq \R \\
     x &\mapsto& P(X \leq x)
\end{array}
$$

## _Def._ Discrete Random Variable

> TODO: Revise this

A random variable $X$ is said to be **discrete** if there is a countable (finite or countably infinite) list of values
$a_1, a_2, ...$ such that $P(X=a_j \enspace \text{for some} \enspace j)=1$.

If $X$ is discrete r.v., then the countable set of values $x$ such that $P(X=x) > 0$ is called the **support** of $X$.

## _Def._ Probability Mass Function

The **probability mass function (PMF)** of a discrete r.v. $X$ is the function $p_X$ given by

$$
p_X (x) = P(X=x)
$$

Note that this is positive if $x$ is in the support of $X$ and $0$ otherwise.

## Remark. Notation

We use $X = x$ to denote the event $\{s \in S \> | \> X(s) = x \}$. We cannot take the probability of a random variable, only of an event.

## _Thm._ Valid PMFs

> TODO: Rewrite

Let $X$ be a discrete random variable with countable support $x_1, x_2, ...$ (where each $x_i$ is distinct for notational simplicity). The PMF $p_X$ of $X$ must satisfy the following:

* $p_X(x) > 0$ if $x = x_j$ and $p_X(x) = 0$ otherwise.
* $\sum_{j=1} p_X(x_j) = 1$
