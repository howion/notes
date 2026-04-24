# Group Actions

> You may want to check group actions section of my [group theory notes](https://notes.howion.com/group-theory#group-actions). You shoud at least be familiar with the definitions and how orbits partition the space.

## _Def._ (Group) Action

Recall that, formally, an **action** of a group $G$ on a set $X$ is a homomorphism from $G$ to the automorphism group of $X$, namely $\text{Aut}(X)$. We may also say $G$ **acts on** $X$.

> From now on assume we are given an action of a group on a set $X$.

## _Thm._ Same Orbit Conjugates

Points in the same orbit have conjugate stabilizers, so that for all $x$ and $y$ in the same orbit, say $gx = y$, then

$$
g G_x g^{-1} = G_y
$$

## _Thm._ Orbit-Stabilizer Theorem

Let $G$ be a group and $x \in G$, then

$$
|G| = |\text{Orbit}(x)| \cdot |\text{Stab}(x)|
$$

In order to denote the **orbit** of $x$, the notations

* $\bar{x}$,
* $G(x)$
* $Gx$

are also used. Similarly, for the **stabilizer** of $x$, the notations

* $G_x$

could be used as well.

> Notice the direct divisibility results on finite groups this theorem implies.

## _Thm._ Burnside's Lemma

The Burnside's Lemma which also known as The Counting Theorem asserts

$$
|X/G| = \dfrac{1}{|G|} \sum_{g \in G} |X^g|
$$

where

* $|X/G|$ denotes the number of orbits, and
* $|X^g|$ denotes the number of elements in $X$ fixed by $g$. This is also sometimes denoted with $|\text{Fix}(g)|$.

> Notice $X^g$ is not the stabilizer of $x$ which are the elements in $G$ fixed by $g$, but rather elements fixed in $X$ by $g$.

## _Thm._ Center of $\bold{D}_{2n}$

$$
Z(\bold{D}_{2n}) = \begin{cases}
   \> \Set{e} &\text{if \enspace n is odd} \\
   \> \Set{e, r^{n/2}} &\text{if \enspace n is even}
\end{cases}
$$
