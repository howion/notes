# Cosets

## Def. Coset

Let $G$ be a group and $H \leq G$. Then, for all $a \in G$ the set $Ha$ is called a **right coset** and the set $aH$ is called a **left coset**.

## Def. Coset Congruence

Let $G$ be a group, $H \leq G$, and $a,b \in G$. We say,

* **$a$ is right-congruent to $b$ modulo $H$**, denoted by $a \equiv_{R} b \enspace (\text{mod } H)$ when $ab^{-1} \in H$,
* **$a$ is left-congruent to $b$ modulo $H$**, denoted by $a \equiv_{L} b \enspace (\text{mod } H)$ when $a^{-1}b \in H$.

## Thm. Coset Congruence

1. The relations $\equiv_R$ and $\equiv_L$ are equivalence relations.
2. The right (respectively left) equivalence class of $a \in G$ is the set $Ha$ (respectively $aH$).
3. If $G$ is abelian, then left and right congruence coincide. (This is also possible if $G$ is not abelian.)
4. For all $a \in G$, the orders (cardinalities) of the sets $Ha$, $H$ and $aH$ are the same.

## Corollary. Coset Congruence

Let $G$ be a group and $H \leq G$.

1. G is the union of right (respectively left) cosets of $H$.
2. Two right (respectively left) cosets are either _disjoint_ or _equal_.
3. Number of distinct left cosets are equal to number of distinct right cosets.

## Def. Index

[**Wiki: Index of a subgroup**](https://en.wikipedia.org/wiki/Index_of_a_subgroup)

Let $G$ be group and $H \leq G$ then the **index of $H$ in $G$**, denoted $[G:H]$ is the _cardinal number_ of the set of distinct right (or left) cosets of $H$ in $G$.

## Thm. Index Theorem

Let $G$ be a group and $K \leq H \leq G$, then

$$
[G:K] = [G:H][H:K]
$$

## Corollary. Lagrange's Theorem

Let $G$ be a group and $H \leq G$, then the order of $H$ divides the order of $G$. In general, even if $G$ is infinite

$$
|G| = [G:H] \cdot |H|
$$

## Thm. Order of Subgroup Multiplication

Let $G$ be group such that $H$ and $K$ are finite subgroups of $G$. Then

$$
|HK| = \dfrac{|H| \cdot |K|}{|H \cap K|}
$$

## Thm.

Let $G$ be a group and $H,K \leq G$. Then we have $[H:H \cap K] \leq [G:K]$.

If $[G:K]$ is finite, then $[H:H \cap K]=[G:K]$ if and only if $G=KH$.

## Thm.

Let $H$ and $K$ be _subgroups of finite index_ of a group $G$. Then

1. $[G:H \cap K]$ is finite,
2. $[G:H \cap K] \leq [G:H][G:K]$, and
3. $[G:H \cap K] = [G:H][G:K]$ if and only if $G = HK$.
