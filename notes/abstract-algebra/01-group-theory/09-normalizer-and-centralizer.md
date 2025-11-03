# 10. Normalizer And Centralizer

<!-- https://en.wikipedia.org/wiki/Centralizer_and_normalizer -->

## Def. Centralizer

Let $G$ be a (sub)group and $A$ a non-empty subset of $G$. Then the **centralizer of $A$** is defined as

$$C_G(A) := \Set{ g \in G | a^g = a \quad \forall a \in A }$$

> Beware that if we were to write $A^g = A$ to right-hand side it wouldn't be the same definition.
>
> Note that a more general definition would use $ga = ag$ for semigroups.

## Def. Center

The **center** of a (sub)group $G$ denoted with $Z(G)$ is defined as $Z(G) := C_G(G)$.

> It is basically the set of all elements that commute with all other elements.

## Def. Normalizer

Let $G$ be a group and $A$ a non-empty subset of $G$. Similar to centralizer (but not equivalent), the **normalizer of $A$** in $G$ is defined as

$$N_G(A) = \Set{ g \in G | A^g = A}$$

and it is also a subgroup of $G$.

The definitions of centralizer and normalizer are similar but not identical. If $g \in C_G(A)$ and $a \in A$, then it must be the case that $a^g = s$, but if $g \in N_G(S)$, then $a^g = a'$ for some $a' \in A$, with $a'$ possibly different from $s$.

Obviously a subgroup is a normal subgroup in a group if and only if its normalizer is the whole group.

> This is one reason why the notation $gag^{-1}$ (or $a^g$) is preferred over $ga=ag$ &mdash; unless we working with semigroups of course.

## Thm. '

Let $G$ be a group and $a \in G$, then

$$
|a^G| = [G:N_G(a)]
$$

> You may check out Kargapolov p. 16 for a more general version of theorem and the proof.

## Thm. Building Normal from a Subgroup

Let $A \leq G$, then the set

$$
N = \bigcap_{x \> \in \> G} A^x
$$

is a normal subgroup of $G$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Thm. Centralizer, Normalizer and Normals

> TODO
