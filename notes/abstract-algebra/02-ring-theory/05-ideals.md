# 5. Ideals

## Def. Ideal

Let $R$ be a ring. $I \subseteq R$ is called a **left (respectively right) ideal** of $R$ if

1. $I \leq (R, +)$, and
2. for all $a \in R$ we have $aI \subseteq I$ (respectively $Ia \subseteq I$).

If $I$ is both a left and right ideal, then it is called a **two-sided ideal** or a **2-sided ideal**. Notice that in this case we have $Ia = aI = I$.

Noting a ring $R$ is an ideal of itself, such ideal $R$ is called the **unit ideal**. $(0) = \{0\}$ is also an ideal in $R$ called the **zero ideal**. These two ideals are called the **trivial ideals** of $R$.

> Notice how the concept of an ideal is similar to the concept of a coset in group theory.

<!-- ## Thm. Basic Ideal Properties

Let $R$ be a ring. If $R$ is with $1$, then its only ideal is $R$, namely the unit ideal. -->

## Def. Maximal Ideal

A left (resp. right or $2$-sided) ideal $I$ of a ring $R$ is called **maximal ideal** in $R$ if for any left (resp. right or $2$-sided) ideal $J$ of $R$ we have

$$
I \subseteq J \subseteq R
\implies
J=I \enspace \lor \enspace J=R
$$

where $I \neq R$. Thus, we exclude unit ideal to be called maximal ideal.

## Def. Minimal Ideal

Similar to maximal ideal, a left (resp. right or $2$-sided) ideal of $R$ is called a **minimal ideal** in $R$ if for any left (resp. right or $2$-sided) ideal $J$ of $R$ we have

$$
(0) \subseteq J \subseteq I
\implies
J = (0) \enspace \lor \enspace J=I
$$

where $I \neq (0)$. Thus, we exclude zero ideal to be called minimal ideal.

## Thm. Existence of Maximal Ideal

Let $R$ be a ring with $1$ and $I$ its left (resp. right or $2$-sided) ideal such that $I \neq R$. Then there exists left (resp. right or $2$-sided) maximal ideal $M$ such that $I \subseteq M$.

> This theorem need not to be true for minimal ideals even if the ring is commutative. For example, take the ring $\Z$ and its ideal $2\Z$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO: Zorn's Lemma and add partial order defn to preliminaries.
</details>

## Def. Prime Ideal

Let $R$ be a commuative ring and $I$ its ideal. $I$ is called a **prime ideal** if $I \neq R$ and for all $x,y \in R$

$$
xy \in I
\implies
x \in I \enspace \lor \enspace y \in I.
$$

## Thm. Nilpotents of a Commutative Ring

The set of all nilpotent elements in a commutative ring $R$ with $1$ is the intersection of all prime ideals.
