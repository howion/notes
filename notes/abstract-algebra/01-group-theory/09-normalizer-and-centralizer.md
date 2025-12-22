# Normalizer And Centralizer

<!-- https://en.wikipedia.org/wiki/Centralizer_and_normalizer -->

## _Def._ Centralizer

Let $G$ be a (sub)group and $A$ a non-empty subset of $G$, then the **centralizer of $A$ in a group $G$** is defined as

$$
C_G(A) := \Set{ g \in G | a^g = a \quad \forall a \in A }
$$

> Beware that if we were to write $A^g = A$ to the right-hand side it wouldn't be the same definition.
>
> Note that a more general definition would use $ga = ag$ for semigroups.

## _Def._ Center

The **center** of a (sub)group $G$ denoted with $Z(G)$ is defined as $Z(G) := C_G(G)$.

> It is basically the set of all elements in the group that commute with all other elements in the group.

## _Def._ Normalizer

Let $G$ be a group and $A$ a non-empty subset of $G$. Similar to centralizer (but not necessarily equivalent), the **normalizer of $A$** in $G$ is defined as

$$
N_G(A) := \Set{ g \in G | A^g = A}
$$

and it is also a subgroup of $G$.

The definitions of centralizer and normalizer are similar but not identical. If $g \in C_G(A)$ and $a \in A$, then it must be the case that $a^g = a$, but if $g \in N_G(S)$, then $a^g = a'$ for some $a' \in A$, with $a'$ possibly different from $a$.

Obviously a subgroup is a normal subgroup in a group if and only if its normalizer is the whole group.

> This is one reason why the notation $gag^{-1}$ (or $a^g$) is preferred over $ga=ag$ &mdash; unless we working with semigroups of course.

## _Thm._ Basic Properties of Normalizer and Centralizer

<!-- TODO: Order? -->

Let $G$ be a group, then

1. $Z(G) \trianglelefteq G$

## _Thm._ '

> TODO: Revise, define $a^G$ etc.

Let $G$ be a group and $a \in G$, then

$$
|a^G| = [G:N_G(a)]
$$

> You may check out Kargapolov p. 16 for a more general version of theorem and the proof.

## _Notation._ Normal Generators

<!-- TODO: Btter notation or explanation? -->

Let $H \leq G$, then

* $H^G$ denotes the intersection all normals in $G$ that contain $H$,
* $H_G$ denotes $\Braket{H^g | g \in G}$.

> join and largest normal subgroup contained in H.

## _Thm._ Building Normal from a Subgroup

Let $H \leq G$, then the set

$$
N = \bigcap_{g \> \in \> G} H^g
$$

is a normal subgroup of $G$. Moreover, $N = H_G$.

> Exercise

## Exercise

If $G$ is not abelian, then $Z(G)$ is _properly_ contained in an abelian subgroup of $G$.

<details>
<summary><b>Hint</b></summary>
<br/>

Consider $x \in G \setminus Z(G)$.
</details>
