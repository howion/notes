# Monomial Ideals and Dicksons Lemma

## _Def._ Monomial Ideal

An ideal $I \subseteq \mathbb{F}[x_1, ..., x_n]$ is a **monomial ideal** if there exists (possibly infinite) basis of monomials so that

$$
I = \Braket{x^{\alpha_1}, x^{\alpha_2}, ...}
$$

## _Lemma._ Membership via Division

Let $I = \Braket{x^\alpha : \alpha \in A}$ be a monomial ideal, then $x^\beta \in I$ _if and only if_ $x^\alpha \mid x^\beta$ for some $\alpha \in A$.

## _Lemma._ Membership and Equivalence

Let $I$ be a monomial ideal and $f \in \mathbb{F}[x_1,...,x_n]$, then the following are equivalent

1. $f \in I$.
2. Every term of $f$ lies in $I$.
3. $f$ is a $\mathbb{F}$-linear combination of the monomials in $I$.

Therefore, two monomial ideals are the same _if and only if_ they contain the same monomials.

## _Thm._ Dickson's Lemma

Let $I = \Braket{x^\alpha : \alpha \in A} \subseteq \mathbb{F}[x_1,...,x_n]$ be a monomial ideal, then

$$
I = \Braket{x^{\alpha_1}, ..., x^{\alpha_s} : \alpha_i \in A}.
$$

> Therefore every monomial ideal has a necessarily finite monomial basis.
