# Some Applications of Gröbner Bases

## _Thm._ Buchberger's Algorithm

We know now that every non-zero ideal in $\mathbb{F}[x_1, ..., x_n]$ has a Gröbner basis. In order to construct such basis we have **Buchberger's Algorithm**.

Let $I = \Braket{f_1,...,f_s} \neq \Braket{0}$ be a polynomial ideal, then a Gröbner basis for $I$ can be constructed in a finite number of steps by the algorithm:

```python
<- F = (f_1, ..., f_s)

G <- F

DO
    G' <- G

    FOR {p, q} where p != q in G'
        S <- remainder of S(p,q) by G'

        IF S != 0
            G <- G ∪ {S}
        ENDIF
    ENDFOR
WHILE G = G'

-> G
```

where $G$ is a Gröbner basis for $I$ with $F \subseteq G$.

## _Thm._ Lemma

Let $G$ be a Gröbner basis for the polynomial ideal $I$ and $p \in G$ such that $\text{LT}(p) \in \Braket{\small\text{LT}(G - \{p\})}$, then $G - \{p\}$ is also a Gröbner basis for $I$.

## _Def._ Minimal Gröbner Basis

A **minimal Gröbner basis** $G$ for a polynomial ideal $I$ is a Gröbner basis for $I$ such that for all $p \in G$

1. $\text{LC}(p) = 1$, and
2. $\text{LT}(p) \notin \Braket{\small\text{LT}(G - \{p\})}$.

## _Def._ Reduced Gröbner Basis

A **reduced Gröbner basis** $G$ for a polynomial ideal $I$ is a Gröbner basis for $I$ such that for all $p \in G$

1. $\text{LC}(p) = 1$, and
2. no monomial of $p$ lies in $\Braket{\small\text{LT}(G - \{p\})}$.

## _Thm._ Ideal Equality

For a given monomial order, any nonzero ideal has a _unique_ reduced Gröbner basis.

> Thus we can simply reduce bases to check if their ideals are equal.

## The Ideal Membership Problem

When we combine the Gröbner bases with the divison algorithm, we have the **ideal membership algorithm** so that given an ideal $I = \Braket{f_1, ..., f_s}$, we can decide whether a given polynomial $f$ lies in $I$ as follows:

1. Find the Gröbner basis $G = \Set{g_1, ..., g_t}$ for $I$, then
2. $f \in I$ _if and only if_ the remainder of $f$ by $G$ is $0$.

## The Problem of Solving Polynomial Equations

Assume we are given a system of equations such that

$$
\def\arraystretch{1.25}
\begin{array}{ll}
 &f_1(x_1, ..., x_n) \\
=& f_2(x_1, ..., x_n) \\
\vdots \\
=& f_s(x_1, ..., x_n) = 0
\end{array}
$$

then these equations determine an ideal $I = \Braket{f_1, ..., f_s}$ and we want to find all points $\bold{V}(I)$.

Recall that $\bold{V}(I) = \bold{V}(f_1,...,f_s)$. Now, if we use a Gröbner basis computations become suprisingly easy to solve. We will see this in more detail later on.

> Check out the David Cox §8 for more examples in this regard.

## The Implicitization Problem

Suppose

$$
\def\arraystretch{1.25}
\begin{array}{ccl}
x_1 &=& f_1(t_1, ..., t_m) \\
&\vdots \\
x_n &=& f_n(t_1, ..., t_m)
\end{array}
$$

then just as above using Gröbner basis make computations much easier as we will see later on in more detail.

> Check out the David Cox §8  for more examples in this regard.

## Exercises

### #1

Let $I = \Braket{f_1, f_2} = \Braket{xz - y^2, x^3 - z^2} \in \Complex [x,y,z]$ and use the grlex order to check $f = (-4x^2y^2z^2 + y^6 + 3z^5) \in I$.

> You may use a computer system to compute the Gröbner basis.
