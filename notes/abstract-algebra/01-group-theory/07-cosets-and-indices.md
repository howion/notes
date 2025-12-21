# Cosets and Indices

## _Def._ Coset

Let $G$ be a group and $H \leq G$. Then, for all $a \in G$ the set $aH$ is called a **left coset** and the set $Ha$ is called a **right coset**.

## _Def._ Coset Congruence

Let $G$ be a group, $H \leq G$, and $a,b \in G$. We say,

* **$a$ is left-congruent to $b$ modulo $H$**, denoted by $a \equiv_{L} b \enspace (\text{mod } H)$ when $a^{-1}b \in H$.
* **$a$ is right-congruent to $b$ modulo $H$**, denoted by $a \equiv_{R} b \enspace (\text{mod } H)$ when $ab^{-1} \in H$,

## _Thm._ Coset Congruence

1. The relations $\equiv_L$ and $\equiv_R$ are equivalence relations.
2. The left (resp. right) equivalence class of $a \in G$ is the set $aH$ (resp. $Ha$).
3. For all $a \in G$, cardinalities of the sets $Ha$, $H$ and $aH$ are the same.
4. If $G$ is abelian, then left and right congruence coincide. Moreover, this is also _possible_ if $G$ is not abelian.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

### _Corollary._ Coset Congruence

Let $G$ be a group and $H \leq G$. Then

1. $G$ is the union of right (respectively left) cosets of $H$,
2. Two right (respectively left) cosets are either _disjoint_ or _equal_,
3. Number of distinct left cosets are equal to number of distinct right cosets.

## _Def._ Index

[**Wiki: Index of a subgroup**](https://en.wikipedia.org/wiki/Index_of_a_subgroup)

Let $G$ be group and $H \leq G$ then the **index of $H$ in $G$**, denoted $|G:H|$ is the _cardinal number_ of the set of distinct right (or left) cosets of $H$ in $G$.

## _Thm._ Index Theorem

Let $G$ be a group and $K \leq H \leq G$, then

$$
|G:K| = |G:H||H:K|
$$

### Corollary: Lagrange's Theorem

Let $G$ be a group and $H \leq G$, then the order of $H$ divides the order of $G$. In general, even if $G$ is infinite

$$
|G| = |G:H| \cdot |H|
$$

### Corollary: Element Order Divides Group Order

Let $G$ be a group and $x \in G$, then $|x|$ divides $|G|$.

## _Thm._ Cauchy's Theorem

Let $G$ be a finite group of order $n$ and $p$ is any prime that divides $n$. Then $G$ contains an element of order $p$.

> We will prove this useful theorem later on, after Sylow Theorems.

## _Thm._ Poincaré

Every subgroup of finite index $m$ of a group $G$ contains a normal subgroup of $G$ of finite index $n$ divisible by $m$. Moreover, $n$ divides $m!$.

## _Thm._ Order of Subgroup Multiplication

Let $G$ be group such that $H$ and $K$ are finite subgroups of $G$. Then

$$
|HK| = \dfrac{|H| \cdot |K|}{|H \cap K|}
$$

## _Thm._ 1

Let $G$ be a group and $H,K \leq G$. Then we have $|H:(H \cap K)| \leq |G:K|$.

If $|G:K|$ is finite, then $|H:(H \cap K)|=|G:K|$ if and only if $G=KH$.

## _Thm._ 2

Let $H$ and $K$ be _subgroups of finite index_ of a group $G$. Then

1. $|G:H \cap K|$ is finite,
2. $|G:H \cap K| \leq |G:H||G:K|$, and
3. $|G:H \cap K| = |G:H||G:K|$ if and only if $G = HK$.

## _Thm._ Groups of Prime Order

Let $G$ be a group, then the following are equivalent

1. $|G|$ is prime,
2. $G \neq \Braket{e}$ and $G$ has no proper subgroups,
3. $G \cong \Z_p$ for some prime $p$.

> Notice that (3) implies that every group of prime order is cyclic.

## Exercises

### #1

Let $G$ be a group and $H,K \leq G$ such that indices of $H$ and $K$ are relatively prime, then $G=HK$.
