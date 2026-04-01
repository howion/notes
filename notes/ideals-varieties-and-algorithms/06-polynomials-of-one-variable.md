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
> d(f) \leq d(g) \iff \text{LT}(f) > \mid \text{LT}(g).
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
r <- 0

WHILE r != 0 AND (LT(g) | LT(r))
    q <- q + LT(r) / LT(g)
    r <- r - (LT(r) / LT(g))g
ENDWHILE

-> q, r
```

## _Thm._ Maximum Number of Roots

Let $0 \neq f \in \mathbb{F}[x]$, then $f$ has at most $d(f)$ roots in $\mathbb{F}$.

## _Thm._ Ideals of $\mathbb{F}[x]$

Every ideal of $\mathbb{F}[x]$ can be written as $\Braket{f}$ for some $f \in \mathbb{F}[x]$. Moreover, such $f$ is unique up to multiplication by a non-zero constant in $\mathbb{F}$.

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
