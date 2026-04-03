# Properties of Groebner Bases

## _Thm._ Normal Form

Let $G = \Set{g_1, ..., g_s}$ be a Gr-basis for an ideal $I \subseteq \mathbb{F}[x_1, ..., x_n]$ and $f \in \mathbb{F}[x_1,...,x_n]$, then there exists an unique $r \in \mathbb{F}[x_1,...,x_n]$ such that

1. no term of $r$ is divisible by any of $\text{LT}(g_1), ..., \text{LT}(g_s)$, and
2. there exists $g \in I$ so that $f = g + r$

In particular, $r$ is the remainder on division of $f$ by $G$ (no matter how the elements of $G$ are listed) using the division algorithm.

Such $r$ is called the **normal form of $f$**.

## _Corollary._ Membership via Division

Let $G = \Set{g_1, ..., g_s}$ be a Gr-basis for an ideal $I \subseteq \mathbb{F}[x_1, ..., x_n]$ and $f \in \mathbb{F}[x_1, ..., x_n]$, then $f \in I$ _if and only if_ $G \mid f$ i.e. division of $f$ by $G$ is zero.

## _Notation._ Remainder

Let $F = (f_1, ..., f_s)$ be an orderer $s$-tuple. We will denote the remainder of $f$ by division of $F$ with

$$
\dfrac{\quad}{f}F
$$

> Notice that if $\Set{f_1, ..., f_s}$ is a Gr-basis for $\Braket{f_1, ..., f_s}$, the order of $F$ doesn't matter.

## _Def._ $\text{LCM}$ of Monomials

Let $f,g \in \mathbb{F}[x_1, ..., x_n]$ be non-zero polynomials where $md(f) = \alpha$ and $md(g) = \beta$, and

$$
\def\arraystretch{1.25}
\begin{array}{rll}
\gamma_i &=& \max(\alpha_i, \beta_i) \\
\gamma   &=& (\gamma_1, ..., \gamma_n)
\end{array}
$$

We call $x^\gamma$ the **least common multiplier** of $\text{LM}(f)$ and $\text{LM}(g)$ denoted with

$$
x^\gamma := \text{LCM}(\small \text{LM}(f), \text{LM}(g) \normalsize)
$$

## _Def._ $\bold{S}$-polynomial

Let $f,g \in \mathbb{F}[x_1,...,x_n]$, then we define their **$\bold{S}$-polynomial** as

$$
\bold{S}(f,g) := \dfrac{x^\gamma}{\small \text{LT}(f)} \cdot f - \dfrac{x^\gamma}{\small \text{LT}(g)} \cdot g
$$

where $x^\gamma = \text{LCM}(\small \text{LM}(f), \text{LM}(g) \normalsize)$.

> Note that we are inverting the leading coefficients here as well.

<!-- TODO: ## _Thm._  -->

## _Thm._ Buchberger’s Criterion

Let $I$ be an ideal, then a basis $G = \Set{g_1, ..., g_s}$ is a Gr-basis for $I$ _if and only if_ for all pairs $i \neq j$, we have $G \mid \bold{S}(f,g)$.
