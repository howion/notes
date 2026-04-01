# Monomial Orders

## _Def._ Monomial Order

A **monomial order** $>$ on $\mathbb{F}[x_1, ..., x_n]$ is any relation $>$ on $\N^n$, or equivalently, any relation on the set of monomials $x^\alpha$ that satisfies, for $\alpha, \beta \in \N^n$

1. $>$ is a total (or linear) order on $\N^n$
2. $\alpha > \beta$ implies $\alpha + \gamma > \beta + \gamma$ for all $\gamma \in \N^n$
3. $>$ is a well ordering on $\N^n$ i.e. every non-empty subset of $\N^n$ has a smallest element under $>$.

## _Def._ Lexicographic Order

Let $\alpha = (\alpha_1, ..., \alpha_n)$ and $\beta = (\beta_1, ..., \beta_n)$ where $\alpha,\beta \in \N^n$. The **lexiocographic order** $\succ$ is defined as $\alpha \succ \beta$ _if and only if_ the leftmost non-zero entry is positive in $\alpha - \beta$ .

> For example $(1,2, 0) \succ (0,3,4)$ since $(1,2,0) - (0,3,4) = (1,-1,4)$.

From now on, we will write $x^\alpha \succ x^\beta$ if $\alpha \succ \beta$. We will also use $\succcurlyeq$ to denote $\alpha \succ \beta$ or $\alpha = \beta$.
