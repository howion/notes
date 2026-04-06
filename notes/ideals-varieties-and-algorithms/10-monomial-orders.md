# Monomial Orders

## _Def._ Monomial Order

A **monomial order** $>$ on $\mathbb{F}[x_1, ..., x_n]$ is any relation $>$ on $\N^n$, or equivalently, any relation on the set of monomials $x^\alpha$ that satisfies, for $\alpha, \beta \in \N^n$

1. $>$ is a total (or linear) order on $\N^n$
2. $\alpha > \beta$ implies $\alpha + \gamma > \beta + \gamma$ for all $\gamma \in \N^n$
3. $>$ is a well ordering on $\N^n$ i.e. every non-empty subset of $\N^n$ has a smallest element under $>$.

> Due to Dickson's Lemma (which we will prove later) we could replace (3) with $\alpha \geq 0$ as (1) and (2) implies (3).

## _Def._ Lexicographic Order

Let $\alpha = (\alpha_1, ..., \alpha_n)$ and $\beta = (\beta_1, ..., \beta_n)$ where $\alpha,\beta \in \N^n$. The **lexiocographic (or lex) order** $\succ$ is defined as $\alpha \succ \beta$ _if and only if_ the leftmost non-zero entry is positive in $\alpha - \beta$ .

> For example $(1,2, 0) \succ (0,3,4)$ since $(1,2,0) - (0,3,4) = (1,-1,4)$.

From now on, we will write $x^\alpha \succ x^\beta$ if $\alpha \succ \beta$. We will also use $\succcurlyeq$ to denote $\alpha \succ \beta$ or $\alpha = \beta$.

## _Thm._ Lexicographic is Monomial

The lexicographic order $\succ$ is a monomial ordering.

## _Def._ Graded Lex Order

Let $\alpha = (\alpha_1, ..., \alpha_n)$ and $\beta = (\beta_1, ..., \beta_n)$ where $\alpha,\beta \in \N^n$. The **graded lexicographic (grlex) order** $\gg$ is defined as $\alpha \gg \beta$ _if and only if_ $|\alpha| \geq |\beta|$, or $|\alpha|=|\beta|$ and $\alpha \succ \beta$.

## _Def._ Graded Reverse Lex Order

Let $\alpha = (\alpha_1, ..., \alpha_n)$ and $\beta = (\beta_1, ..., \beta_n)$ where $\alpha,\beta \in \N^n$. The **graded reverse lexicographic (grevlex) order** $\gg$ is defined as $\alpha \gg \beta$ _if and only if_ $|\alpha| \geq |\beta|$, or $|\alpha|=|\beta|$ and the rightmost non-zero entry of $\alpha - \beta$ is _negative_.

## _Def._ Fundamental Definitions

Let $f = \sum_\alpha c_\alpha x^\alpha$ be a polynomial in $\mathbb{F}[x_1, ..., x_n]$ and let $>$ be a monomial order, then we define

1. **multidegree** of $f$ as: $$md(f) := \max(\alpha : c_\alpha \neq 0)$$
2. **leading coefficient** of $f$ as: $$\text{LC}(f) := c_{md(f)}$$
3. **leading monomial** of $f$ as: $$\text{LM}(f) := x^{md(f)}$$
4. **leading term** of $f$ as: $$\text{LT}(f) := \text{LC}(f) \cdot \text{LM}(f)$$

> Notice that $\max$ is w.r.t. the monomial order $>$.

## _Def._ Basic Properties of Monomials

Let $f, g \in \mathbb{F}[x_1, ..., x_n]$ be non-zero polynomials and, then

1. $md(fg) = md(f) + md(g)$
2. $f + g \neq 0 \implies md(f+g) \leq \max(md(f), md(g))$. Moreover, they are equal if in addition to $f+g\neq 0$, we have $md(f) \neq md(g)$.

> where $<$ and $\leq$ are the monomial orders. From now on, assume a fixed monomial order $>$ is selected unless otherwise stated.
