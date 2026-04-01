# Fields ands Polynomials

## _Def._ Monomial

A **monomial** in $x_1, ..., x_n$ is a product of the form

$$
x_1^{\alpha_1} x_2^{\alpha_2} \cdots x_n^{\alpha_n}
$$

where all of the **exponents** $\alpha_1,...,a_\alpha$ are non-negative integers. The **total degree** of this monmial is the sum

$$
a_1 + \cdots + a_n.
$$

## _Notation._ Monomial

Let $\alpha = (\alpha_1, ..., \alpha_n)$ be an $n$-tuple of non-negative integers, then we define

$$
x^\alpha := x_1^{\alpha_1} x_2^{\alpha_2} \cdots x_n^{\alpha_n}
$$

and for $\alpha = (0, ..., 0)$ we have $x^\alpha := 1$. Moreover, we also define

$$
|\alpha| = \alpha_1 + \cdots + \alpha_n
$$

which denotes the total degree of $x^a$.

## _Def._ Polynomial

A **polynomial** $f$ in $x_1, ..., x_n$ with **coefficients** in the field $\mathbb{F}$ is a finite linear combination of monomials, denoted:

$$
f = \sum_\alpha k_\alpha x^\alpha, \enspace k \in \mathbb{F}
$$

i.e. $f$ is the sum over a finite number of $n$-tuples $\alpha = (\alpha_1, ..., \alpha_n)$.

> Here $k_\alpha$ does not have any special meaning other than the fact that it just used to index the correspoding coefficient for the $n$-tuple $a$.

The set of all all polynomials in $x_1, ..., x_n$ with coefficients in $\mathbb{F}$ is denoted with $\mathbb{F}[x_1, ..., x_n]$ or simply by $\mathbb{F}[\bar{x}]$ if the context is clear.

We usually use the lowercase letters $f, g, h, p, q, r$ to denote polynomials.

The $k_\alpha$ is called the **coefficient** of the monomial $x^\alpha$. Unless $k_\alpha \neq 0$, we say $k_a x^a$ is called a **term** of the polynomial $f$. The **total degree** of $f$ denoted by $d(f)$ is the maximum $|\alpha|$ such that the corresponding $k_\alpha \neq 0$.

> So far, all the definitions we have made should be intuitive.

## _Thm._ Polynomials form a Commutative Ring

The set of polynomials $\mathbb{F}[x_1, ..., x_n]$ for any given field $\mathbb{F}$ forms a commutative ring under the standard polynomial addition and multiplication.

> Exercise

<!-- TODO: Maybe define operators and explain convolutionness of multiplication? -->

## _Def._ Algebraically Closed

Given a field $\mathbb{F}$ if every _non-constant_ polynomial in $\mathbb{F}[x]$ has a root in $\mathbb{F}$ we say $\mathbb{F}$ is **algebraically closed**.

> Notice that, $\mathbb{F}[x]$ is the set of polynomials with single indeterminate $x$ unlike $\mathbb{F}[x_1, ..., x_n]$.

<!-- TODO: Generalization? or later on? -->

## _Thm._ Fundamental Theorem of Algebra

The field of complex numbers $\mathbb{C}$ is algebraically closed. Therefore, every non-constant polynomial $f \in \mathbb{C}[x]$ has a root in $\mathbb{C}$.

> We will not prove this common theorem here. You might want to check out other resources online for a wide range of proofs. However, we will prove a more general theorem called **Hilbert Nullstellensatz** later on.
>
> Note that $\R$ is not algebraically closed as $x^2 + 1$ has no roots in $\R$

## _Def._ Affine Space

Given a field $\mathbb{F}$ and a positive integer $n$, we define the $n$-dimensional **affine space** over $\mathbb{F}$ to be the set

$$
\mathbb{F}^n := \Set{(a_1, ..., a_n) \mid a_1, ..., a_n \in \mathbb{F}}.
$$

In particular, we call $\mathbb{F}^n$ the **affine line** for the $n=1$ and **affine plane** for $n=2$.

> Notice that given $(a_1, ..., a_n) \in \mathbb{F}^n$ the polynomial $f \in \mathbb{F}[x_1, ..., x_n]$ gives a function $f: \mathbb{F}^n \to \mathbb{F}$ if we replace each $x_i$ by $a_i$. This is the fundamental idea behind our connection between the algebra and the geometry.

## _Thm._ Infinite Field Polynomials and Zeroes

Let $\mathbb{F}$ be an infinite field, and let $f \in \mathbb{F}[x_1, ..., x_n]$. Then $f = 0$ (in $\mathbb{F}[x_1, ..., x_n]$) _if and only if_ $f: \mathbb{F}^n \to \mathbb{F}$ is the zero function.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

Use induction and the knowledge polynomial in one variable of degree $m$ has at most $m$ distinct roots.
</details>

## _Corollary._ Polynomial Equality in Infinite Fields

Let $\mathbb{F}$ be an infinite field and let $f,g \in \mathbb{F}[x_1, ..., x_n]$. Then $f=g$ (in $\mathbb{F}[x_1, ..., x_n]$) _if and only if_ $f$ and $g$ are the same function.

> Exercise

## Exercises

### #1
