# Unique Factorization and Resultants

## _Def._ Irreducible

A polynomial $f \in \mathbb{F}[x_1, ..., x_n]$ is called **irreducible over $\mathbb{F}$** if $f$ is non-constant and is not the product of two non-constant polynomials in $\mathbb{F}[x_1, ..., x_n]$.

## _Thm._ Division

Let $f \in \mathbb{F}[x_1, ..., x_n]$ be an irreducible and suppose $f$ divides the product $gh$, then $f$ divides $g$ or $h$.

## _Thm._ Normal Form

Every non-constant $f \in \mathbb{F}[x_1, ..., x_n]$ can be written uniquely as a product of irreducibles up to permutation.

## _Lemma._ Common Factor Lemma

Let $f, g \in \mathbb{F}[x]$ be polynomials of degree $\ell > 0$ and $m > 0$, respectively. Then $f$ and $g$ have a common factor if and only if there are polynomials $A,B \in \mathbb{F}[x]$ such that:

1. $A$ and $B$ are not both zero.
2. $A$ has degree at most $m - 1$ and $B$ has degree at most $\ell - 1$.
3. $Af + Bg = 0$.

## _Def._ Sylvester Matrix and Resultant

Given polynomials $f, g \in \mathbb{F}[x]$ of positive degree, write them down in the form

$$
\begin{array}{rcl}
f &=& a_0 x^\ell &+& \cdots &+& a_\ell \\
g &=& b_0 x^m &+& \cdots &+& b_m \\
\end{array}
$$

where $a_0 \neq 0 \neq b_0$, then the **Sylvester Matrix** of $f$ and $g$ with respect to $x$, denoted $\text{Syl}(f, g, x)$ is the $(\ell + m) \times (\ell + m)$ coefficient matrix of the system of equations

$$
\cdots
$$

so that

$$
\text{Syl}(f,g,x) := \cdots
$$

The **resultant** of $f$ and $g$ with respect to $x$ denoted $\text{Res}(f,g,x)$ is the determinant of the Sylvester Matrix:

$$
\text{Res}(f,g,x) := \text{det}(\text{Syl}(f,g,x))
$$

## _Thm._ Common Factor

Two polynomials $f, g \in \mathbb{F}[x]$ of positive degree have a common factor in $\mathbb{F}[x]$ if and only if $\text{Res}(f,g,x) = 0$.

> Easy to prove using the lemma given above.

<!-- ## _Thm._  -->

<!-- Given f, g ∈ k[x] of positive degree, there are polynomials A, B ∈ k[x] such tha... -->

## _Def._ Resultants in $\mathbb{F}[x_1, ..., x_n]$

Suppose $f, g \in \mathbb{F}[x_1, ..., x_n]$ of positive degree in $x_1$, then to compute it's Sylvester Matrix, we write down

$$
\begin{array}{rcl}
f &=& a_0 x_1^\ell &+& \cdots &+& a_\ell \\
g &=& b_0 x_1^m &+& \cdots &+& b_m \\
\end{array}
$$

where $a_i, b_i \in \mathbb{F}[x_2, ..., x_n]$, and we define the **resultant of $f$ and $g$ with respect to $x_1$** to be the determinant with the corresponding coefficients

$$
\text{Res}(f,g,x_1) = \cdots
$$

## _Thm._ Resultant in Several Variables

Let $f,g \in \mathbb{F}[x_1, ..., x_n]$ have positive degree in $x_1$, then

1. $\text{Res}(f,g,x_1)$ is the first elimination ideal $\Braket{f,g} \cap \mathbb{F}[x_2, ..., x_n]$.
2. $\text{Res}(f,g,x_1) = 0$ if and only if $f$ and $g$ have a common factor in $\mathbb{F}[x_1, ..., x_n]$ which has positive degree in $x_1$.

### Over $\Complex$

Suppose $f, g \in \Complex[x]$, then $\text{Res}(f,g,x) = 0$ if and only if $f$ and $g$ have a common root in $\Complex$.

<!-- TODO: Proof of Extension Theorem -->
