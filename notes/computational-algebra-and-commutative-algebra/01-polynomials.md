# Polynomials

## _Def._ Monomial

A **monomial** in $x_1, ..., x_n$ is a product of the form

$$
x_1^{a_1} x_2^{a_2} \cdots x_n^{a_n}
$$

where all of the **exponents** $a_1,...,a_n$ are non-negative integers. The **total degree** of this monmial is the sum

$$
a_1 + \cdots + a_n.
$$

## _Notation._ Monomial

Let $a = (a_1, ..., a_n)$ be an $n$-tuple of non-negative integers, then we define

$$
x^a := x_1^{a_1} x_2^{a_2} \cdots x_n^{a_n}
$$

and for $a = (0, ..., 0)$ we have $x^a := 1$. Moreover, we also define

$$
|a| = a_1 + \cdots + a_n
$$

which denotes the total degree of $x^a$.

## _Def._ Polynomial

A **polynomial** $f$ in $x_1, ..., x_n$ with **coefficients** the field $\mathbb{F}$ is a finite linear combination of monomials, denoted:

$$
f = \sum_a k_a x^a, \enspace k \in \mathbb{F}
$$

i.e. $f$ is the sum over a finite number of $n$-tuples $a = (a_1, ..., a_n)$.

> Here $k_a$ does not have any special meaning other than the fact that it just used to index the correspoding coefficient for the $n$-tuple $a$.

The set of all all polynomials in $x_1, ..., x_n$ with coefficients in $\mathbb{F}$ is denoted with $\mathbb{F}[x_1, ..., x_n]$ or simply by $\mathbb{F}[\bar{x}]$ if the context is clear.

We usually use the lowercase letters $f, g, h, p, q, r$ to denote polynomials.

The $k_a$ is called the **coefficient** of the monomial $x^a$. Unless $k_a \neq$, we say $k_a x^a$ is called a **term** of the polynomial $f$. The **total degree** of $f$ denoted by $d(f)$ is the maximum $|a|$ such that the corresponding $k_a \neq 0$.

## _Thm._ Polynomials form a Commutative Ring

The set of polynomials $\mathbb{F}[\bar{x}]$ for any given field $\mathbb{F}$ forms a commutative ring.

> Exercise

## _Def._ Affine Space
