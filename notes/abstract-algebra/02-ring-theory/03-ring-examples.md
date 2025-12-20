# 3. Ring Examples

## Def. Ring of Continuous Functions

Let $R$ be the set of real valued continuous functions from the topological space $X$ to $\R$. For $f,g \in R$, define the pointwise operations for all $x \in X$ as

$$
\begin{array}{rl}
(f+g)(x) &= f(x) + g(x) \\
(fg)(x) &= f(x)g(x)
\end{array}
$$

Then $R$ is a commutative ring with unity where the additive identity is the constant map $\bold 0$ and the unity is the constant map $\bold 1$.

## Def. Matrix Ring

> TODO

## Def. Ring of Polynomials

Let $R$ be a ring and $X$ an _indeterminate_ or _variable_ over $R$. Define the set called **ring of polynomials over $R$** as

$$
R[x] = \Set{ a_0 + a_1X + a_2X^2 + \cdots + a_nX^n | a_i \in R, n \in \N^+ }
$$

> We could have actually wrote $n \in \N$ since $X^0 = 1$, but we don't know if $R$ is with identity.

then $R[X]$ is a ring where addition and multiplication defined as expected over polynomials. Notice how elements of $R[X]$ are of finite length, so this a set of **finite polynomials**.

Let $a_0 + a_1X + \cdots + a_nX^n = p(X) \in R[X]$. Then

* $n$ is called the **degree** of $p(X)$ denoted with $\text{d}(p)$. If $p(X)$ is the zero polynomial it is defined to be $0$,
* $a_n$ is called the **leading coefficient** of $p(X)$,
* $p(X)$ is said to be **monic** if $a_n = 1$.

### Thm. Integral Domain Polynomials Properties

Let $R$ be an integral domain and $p(X), q(X) \in R[X]$, then

* $\text{d}(p(X)q(X)) = \text{d}(p(X)) + \text{d}(q(X))$,
* Units of $R[X]$ are the units of $R$,
* $R[X]$ is also an integral domain.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Def. Power Series Ring

If we extend the definition of $R[X]$ to infinite polynomials we have

$$
R[[X]] = \Set{a_0 + a_1X + a_2X^2 + \cdots | a_i \in R}
$$

which is called the **power series over $R$** and is also a ring (exercise).

## Def. Laurent Ring and Series

Similar to ring of polynomials, Let $R$ be a ring then a **Laurent polynomial** denoted with $R[X^{\pm1}]$ or $R[X, X^{-1}]$ is the set

$$
\def\arraystretch{1.25}
\begin{array}{ll}
R[X^{\pm1}] = \{& a_{-n}X^{-n} + \cdots + a_{-1}X^{-1} + a_0 + a_1X \\ & + \cdots + a_mX^m \enspace | \enspace m,n \in \Z^*, \enspace a_i \in R\}.
\end{array}
$$

If we further extend this definition for the positive part as we did in power series the resulting set is called the **Laurent series** denoted with $R\Braket{X}$. Moreover, the bounded negative side is called the **principal part** and the other is called the **power series** part.

## Def. Boolean Ring

A ring $R$ in which every element is idempotent is called a **boolean ring**.

### Thm. Structure Theorem for Boolean Rings

Every boolean ring is a subring of ($\mathcal{P}(X), \triangle, \cap)$, **the universal boolean ring**, for some set $X$ where the addition operation $\triangle$ is the _symmetric difference_ of two sets.

> Notice that under these operations $\mathcal{P}(X)$ is a commutative ring with unity. Moreover, a boolean ring need not to have unity. Take $X$ infinite, then the subring which consists of all finite subsets of $X$ has no unity.

## Def. Group Rings

Let $(R, +, \cdot)$ be a commutative ring with identity $1 \neq 0$, and $(G, *) = \Set{g_1, g_2, ..., g_n}$ a finite group. Define the **group ring** $RG$ of $G$ with coefficients in $R$ as the set

$$
RG = \Set{a_1g_1 + a_2g_2 + \cdots + a_ng_n | a_i \in R \enspace \text{and} \enspace 1 \leq i \leq n}
$$

> Notice $a_ig_i$ multiplication is not defined.

If $g_1$ is the identity of $G$, then instead of $a_1g_1$, simply, $a_1$ will be written.

Addition and multiplication in $RG$ is defined componentwise on coefficients canonically. This makes $RG$ a ring (exercise).

## Thm. Integers Modulo $n$

Let $n \in Z^*$ so that $\Z_n = \{\bar{0}, \bar{1}, ..., \overline{n-1}\}$. Then $\Z_n$ is a ring and for $\bar{x} \in \Z_n$

1. $\bar{x}$ is a unit $\iff$ $\bar{x}$ is not a zero-divisor $\iff$ $x$ is coprime to $n$.
2. $\Z_n$ is an integral domain $\iff$ $n$ prime $\iff$ $\Z_n$ is a field.
3. $\Z_n^*$ forms an additive subgroup $\iff$ $n$ is a power of a prime.
4. If $n$ prime, then $x^n = x$ for all $x \in \Z_n$.

> **Exercise**

## Cartesian Two Product

Let $\Set{R_i}$ be a non-empty family of rings, then $\prod \Set{R_i}$ is a ring called the **direct product** of $\Set{R_i}$'s under component-wise addition and multiplication.

### Remarks

Let $T = \prod \Set{R_i}$ be the direct product of family of rings $\Set{R_i}$ with at least two rings.

1. $T$ is a ring with identity if and only if each $R_i$ is with identity.
2. $T$ is commutative if and only if each $R_i$ is commutative.
3. Even if each $R_i$ is a field, $T$ is not even an integral domain.
