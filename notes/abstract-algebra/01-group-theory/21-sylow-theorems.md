# Sylow Theorems

## Lemma 1

Let $H$ be a group of order $p^n$ that acts on finite set $S$ where $p$ is prime, if

$$
S_0 = \Set{x \in S \mid hx = x \quad \forall h \in H}
$$

then $|S| \equiv_p |S_0|$.

## Thm. Cauchy

Let $G$ be a group such that for some prime $p$ divides $|G|$, then $G$ has an element of order $p$.

## Def. $p$-group

Let $p$ be any prime. A group in which every element is with order $p^k$ where $k \geq 0$ is called a **$p$-group**. If a subgroup is a $p$-group of a group, then it is called a **$p$-subgroup**.

> Notice that $\Braket{e}$ is a $p$-subgroup of any group for any prime $p$.

## Thm. $p$-groups

A finite group $G$ is a $p$-group if and only if order of $G$ is a power of $p$.

### Corollary. Center of $p$-groups

The center $Z(G)$ of a non-trivial finite $p$-group $G$ contains more than one element.

## Lemma 2

If $H$ is a $p$-subgroup of a finite group $G$, then

$$
|N_G(H):H| \equiv_p |G:H|
$$

Moreover if $p$ divides $|G:H|$, then

$$
N_G(H) \neq H
$$

## Thm. First Sylow Theorem

Let $p$ be a prime and $n \geq 1$.
If $G$ be a group of order $p^n m$ where $(p,m)=1$, then

1. $G$ contains a subgroup of order $p^i$ for each $1 \leq i \leq n$, and
2. Every subgroup of $G$ of order $p^i$ is normal in some subgroup of order $p^{i+1}$.

## Def. Sylow $p$-subgroup

A subgroup $P$ of a group $G$ is said to be a **Sylow $p$-subgroup** of $G$ if $P$ is a maximal $p$-subgroup.

## Thm. Basic Sylow $p$-subgroup Properties

Let $G$ be a group of order $p^n m$ where $(p, m) = 1$ and $H$ is its $p$-subgroup, then

1. $H$ is a Sylow $p$-subgroup if and only if $|H|=p^n$,
2. Every conjugate of a Sylow $p$-subgroup is a Sylow $p$-subgroup,
3. If there is only one Sylow $p$-subgroup $P$, then $P \trianglelefteq G$.

## Thm. Second Sylow Thorem

If $H$ is a $p$-subgroup of a finite group $G$, and $P$ is any Sylow $p$-subgroup of $G$, then there exists $x \in G$ such that

$$
H \leq P^x := xPx^{-1}
$$

In particular, any two Sylow $p$-subgroups of $G$ are conjugate.

## Thm. Third Sylow Theorem

Let $G$ be a finite group, then the number of Sylow $p$-subgroups of $G$ divides $|G|$ and is of the form $kp + 1$ for some $k \geq 0$.

## Thm. Idempotency of Normalizer on Sylow $p$-subgroups

If $P$ is a Sylow $p$-subgroup of a finite group $G$, then

$$
N_G(N_G(P)) = N_G(P)
$$
