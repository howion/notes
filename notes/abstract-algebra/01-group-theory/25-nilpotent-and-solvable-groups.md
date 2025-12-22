# Nilpotent and Solvable Groups

## _Def._ Central Series

<!-- > TODO: References, wiki used -->

Let $G$ be a group, a **central series** of $G$ is a _finite?_ sequence of subgroups such that

$$
\Braket{e} = C_0 \trianglelefteq C_1 \trianglelefteq C_2 \trianglelefteq \cdots \trianglelefteq C_n = G
$$

> TODO: Fix this and add the central condition.

> Following definitions and their naming will make more sense later on.

The **lower (or descending) central series** of $G$ is a sequence of subgroups

$$
G =: D_1 \trianglerighteq D_2 \trianglerighteq D_3 \trianglerighteq \cdots
$$

where

$$
G_i := [G_{i-1}, G]
$$

> Do not confuse this with the derived series we have defined as $G^{(n)} := [G^{(n-1)}, G^{(n-1)}]$ earlier.

Similarly, **upper (or ascending) central series** of $G$ is the sequence

$$
\Braket{e} =: A_0 \trianglelefteq A_1 \trianglelefteq A_2 \trianglelefteq \cdots
$$

where

$$
A_i := \Set{x \in G \mid \forall y \in G : [x, y] \in A_{i-1}}
$$

> **Exercise** that indeed each subgroup is indeed a normal subgroup.

## _Thm._ TFAE: Nilpotent Groups

<!-- > TODO: References, wiki used -->

A group $G$ is called **nilpotent** if it satisfies any of equivalent definitions

1. $G$ has a central series of finite lenght.
2. $G$ has a lower central series finitely terminating in the trivial subgroup, that is $D_n = \Braket{e}$ for some $n$.
3. $G$ has an upper central series finitely terminating in the whole group, that is $A_n = G$ for some $n$.

## _Thm._ Finite $p$-groups are Nilpotent

Every finite $p$-group is nilpotent.

## _Thm._ Finite Direct Product of Nilpotents are Nilpotent

The direct product of a _finite_ number of nilpotent groups is nilpotent.

<!-- see lemma 7.4 p.101 -->

## _Thm._ Nilpotency and Sylow Subgroups

A finite group is nilpotent if and only if it is the direct product of its Sylow subgroups.

### _Corollary._ Nilpotent Cauchy

If $G$ is a finite nilpotent group and $m \in \N^+$ divides $|G|$, then $G$ has a subgroup of order $m$.

## _Def._ Solvable Groups

A group $G$ is said to be **solvable** if $G^{(n)} = \Braket{e}$ for some $n$.

## _Thm._ Nilpotent $\implies$ Solvable

Every nilpotent group is solvable.

## _Thm._ Solvable Group Properties

1. Let $G$ be a solvable group, then every subgroup and every homomorphic image of $G$ is also solvable.
2. Let $N \trianglelefteq G$ such that $N$ and $G/N$ are solvable, then $G$ is solvable.

## _Thm._ Solvability of $\mathbf{S}_n$

The symmetric group $\mathbf{S}_n$ is not solvable if $n \geq 5$.

## _Thm._ More on Solvable Groups

Let $N$ be a normal subgroup of a finite group $G$ and $H \leq G$, then

1. If $H$ is a characteristic subgroup of $N$, then $H \trianglelefteq G$,
2. Every normal Sylow $p$-subgroup of $G$ is fully invariant,
3. If $G$ is solvable and $N$ is a minimal normal subgroup, then $N$ is an abelian $p$-group for some prime $p$.

## _Thm._ (P. Hall)

Let $G$ be a finite solvable group of order $mn$ such that $(m,n)=1$, then

1. $G$ contains a subgroup of order $m$,
2. Any two subgroups of $G$ of order $m$ are conjugate,
3. Any subgroup of $G$ of order $k$ such that $k \mid m$ is contained in a subgroup of order $m$.

> This theorem is difficult to prove, so if you are interested check out Hungerford pp. 104-106.
