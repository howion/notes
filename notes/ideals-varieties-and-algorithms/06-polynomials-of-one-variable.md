# Polynomials of One Variable

## _Def._ Leading Term

Let $0 \neq f \in \mathbb{F}[x]$ such that

$$
f = a_0 x^m + a_1 x^{m-1} + \cdots + a_m
$$

> Notice how we indexed the coefficients

where $a_i \in \mathbb{F}$ and $a_0 \neq 0$. We say $a_0 x^m$ is the **leading term** of $f$ denoted with

$$
\text{LT}(f) := a_0 x^m
$$

> Notice that if $f$ and $g$ are nonzero polynomials we have

> $$
> d(f) \leq d(g) \iff \text{LT}(f) \mid \text{LT}(g).
> $$

## _Thm._ Division Algorithm

Let $f,g \in \mathbb{F}[x]$ where $g \neq 0$, then there exists unique $q,r \in \mathbb{F}[x]$ such that

$$
f = gq + r
$$

where either $r = 0$ or $d(r) < d(g)$. Moreover, the following program realizes this

```python
<- f, g

q <- 0
r <- f

WHILE r != 0 AND (LT(g) | LT(r))
    q <- q + LT(r) / LT(g)
    r <- r - (LT(r) / LT(g))g
ENDWHILE

-> q, r
```

## _Thm._ Maximum Number of Roots

Let $0 \neq f \in \mathbb{F}[x]$, then $f$ has at most $d(f)$ roots in $\mathbb{F}$.

> Exercise, use induction and division fact.

## _Thm._ Ideals of $\mathbb{F}[x]$

Every ideal of $\mathbb{F}[x]$ can be written as $\Braket{f}$ for some $f \in \mathbb{F}[x]$. Therefore, every ideal of $\mathbb{F}[x]$ is principal. Moreover, such $f$ is unique up to multiplication by a non-zero constant in $\mathbb{F}$.

> Exercise, use the division fact for a non-zero ideal.

## _Def._ $\text{GCD}(\cdot, \cdot)$

Let $f,g \in \mathbb{F}[x]$, then we say $h \in \mathbb{F}[x]$ is their **greatest common divisor** if

1. $h \mid f,g$
2. $p \mid f,g \implies p \mid h$

Such $h$ is denoted with

$$
\text{GCD}(f,g)
$$

## _Thm._ Basic Properties of $\text{GCD}(\cdot, \cdot)$

Let $f,g \in \mathbb{F}[x]$, then

1. $\text{GCD}(f,g)$ always exists and is unique up to multiplication by a non-zero constant in $\mathbb{F}$.
2. $\text{GCD}(f,g)$ is a generator of the ideal $\Braket{f,g}$.
3. The following algorithm generates $h = \text{GCD}(f,g)$

> Exercise, for (1) and (2) use the corresponding principal ideal.

```python
<- f, g

h <- f
s <- g

WHILE s != 0
    rem <- remainder of h/s
    h   <- s
    s   <- rem
ENDWHILE

-> h
```

Notice that the algorithm uses the division fact $f = qg + r$ so that

$$
\text{GCD}(f,g) = \text{GCD}(f - qg, g) = \text{GCD}(r,g) = \text{GCD}(g,r).
$$

since $\Braket{f-qg, g} = \Braket{f,g}$.

> So, to find a GCD, we repeat the division algorithm until the remainder is 0.

## _Thm._ $\text{GCD}(\cdot, \cdot, \cdots)$

Let $f_1, ..., f_s \in \mathbb{F}[x]$, then a **greatest common divisor of $f_1, ..., f_s$** is defined as $h \in \mathbb{F}[x]$ such that

1. $h \mid f_1, ..., f_s$
2. $p \mid f_1, ..., f_s \implies p \mid h$

denoted $\text{GCD}(f_1, ..., f_s)$.

## _Thm._ Basic Properties of Generalized $\text{GCD}$

Let $f_1, ..., f_s \in \mathbb{F}[x]$, then

1. $\text{GCD}(f_1, ..., f_s)$ exists and unique up to multiplication by a non-zero constant in $\mathbb{F}$.
2. $\text{GCD}(f_1, ..., f_s)$ is a generator of the ideal $\Braket{f_1, ..., f_s}$.
3. For $s \geq 3$, we have $\text{GCD}(f_1, ..., f_s) = \text{GCD}(f_1, \text{GCD}(f_2, ..., f_s))$.

> Exercise. The proof is similar to $\text{GCD}(\cdot, \cdot)$.

### Exercises

## 1

Find a basis for the ideal $\bold{I}(\bold{V}(x^5 − 2x^4 + 2x^2 − x, x^5 − x^4 − 2x^3 + 2x^2 + x − 1)) \subseteq \mathbb{F}[x]$.

1. For $\mathbb{F} = \mathbb{C}$, and
2. For any field.

> For (2) you can consider whether the field characteristic is $2$ or not to check $1 \overset{?}{=} -1$.
