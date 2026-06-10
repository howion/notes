# Hilbert's Nullstellensatz

## _Thm._ The Weak Nullstellensatz

Let $\mathbb{F}$ be an algebraically closed field and let $I \subseteq \mathbb{F}[x_1, ..., x_n]$ be an ideal satisfying $\bold{V}(I) = \varnothing$, then $I = \mathbb{F}[x_1, ..., x_n]$.

> In the special case when $\mathbb{F} = \Complex$, the Weak Nullstellensatz may be thought of as the "Fundamental Theorem of Algebra for multivariable polynomials" so that every system of polynomials that generates an ideal strictly smaller than $\Complex[x_1, ..., x_n]$ has a common zero in $\Complex^n$.

## _Thm._ Consistency Algorithm

Suppose we have polynomials $f_1, ..., f_s \in \Complex[x_1, ..., x_n]$, and we compute a reduced Gröbner basis $B$ of the ideal $\Braket{f_1, ..., f_s}$ with respect to any ordering. If this basis $B$ is $\{1\}$, the polynomials have no common zero in $\Complex^n$, and if the basis is not $\{1\}$, they must have a common zero.

> This arises from the fact that if $1$ is an element of an ideal, then that ideal is the ring itself.

## _Thm._ Hilbert's Nullstellensatz

Let $\mathbb{F}$ be an algebraically closed field and $f,f_1,...,f_s \in \mathbb{F}[x_1, ..., x_n]$ such that $f \in \bold{I}(\bold{V}(f_1, ..., f_s))$, then there exists an integer $m \geq 1$ such that

$$
f^m \in \Braket{f_1, ..., f_s}
$$

and the converse also holds.
