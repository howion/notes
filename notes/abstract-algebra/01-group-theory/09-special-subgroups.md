# 9. Special Subgroups

<!-- https://en.wikipedia.org/wiki/Centralizer_and_normalizer -->

## Def. Centralizer

Let $G$ be a (sub)group and $A$ a non-empty subset of $G$. Then the **centralizer of $A$** is defined as

$$C_G(A) = \Set{ g \in G | gag^{-1} = a \quad \forall a \in A }$$

and it is a subgroup of $G$.

> Note that a more general definition would use $gA = Ag$ for semigroups.

## Def. Center

The **center** of a (sub)group $G$ denoted with $Z(G)$ is defined as $Z(G) := C_G(G)$.

> It is basically the set of all elements that commute with all other elements.

## Def. Normalizer

Let $G$ be a (sub)group and $S$ a non-empty subset of $G$. Similar to centralizer (but not equivalent), the **normalizer of $S$** in $G$ is defined as

$$N_G(S) = \Set{ g \in G | gSg^{-1} = S}$$

and it is also a subgroup of $G$.

The definitions of centralizer and normalizer are similar but not identical. If $g \in C_G(S)$ and $s \in S$, then it must be the case that $gsg^{-1} = s$, but if $g \in N_G(S)$, then $gsg^{-1} = t$ for some $t \in S$, with $t$ possibly different from $s$.

> This is one reason why the notation $gsg^{-1}$ is preferred over $gs=sg$ &mdash; unless we working with semigroups of course.

## Thm. Centralizer, Normalizer and Normals

## Def. Maximal Subgroup

Let $G$ be a group and let $H$ be a proper subgroups of $G$. We say $H$ is a **maximal subgroup** if $H \subseteq K$ implies $K = H$ for all $K \lt G$.

> Simply, $H$ is maximal if there is no greater proper subgroup which contain it.

## Def. Frattini Subgroup

Let $G$ be a group. We define **frattini subgroup** $\Phi(G)$ as the intersection of all maximal subgroups of $G$. In the case $G$ has no maximal subgroups, we define $\Phi(G) = G$.

> This is analogous to the Jacobson radical in the ring theory.

## Thm. Frattini Subgroup and Non-Generators

The frattini subgroup $\Phi(G)$ of a group $G$ is equal to the set of all non-generators of $G$. Therefore, non-generators of a group form a subgroup &mdash; namely the frattini subgroup.

<!-- If $G$ is finite, then $\Phi(G)$ is nilpotent -->

## Def. Commutator

Let $G$ be a group and $a, b \in G$. Obviously, two elements $a$ and $b$ commute if and only if $a^{-1}b^{-1}ab = e$. The left-hand side of this equation will be denoted with $[a,b]$ called the **commutator** of $a$ and $b$, that is

$$
[a,b] := a^{-1}b^{-1}ab
$$

For $A, B \subseteq G$, we define **mutual commutator subgroup** as

$$
[A, B] := \Braket{\> [A,B] | a \in A, b \in B \>}
$$

More generally,

$$
[a_1, a_2, ..., a_{n+1}] = [[a_1, ..., a_n], a_{n+1}]
$$

and

$$
[A_1, A_2, ..., A_{n+1}] = [[A_1, ..., A_n], A_{n+1}]
$$

### Thm. Basic Commutator Properties

Let $G$ be a group and $a,b,c, x \in G$. Then

* $[a,b] = e$ if and only if $ab=ba$, indeed
* $e$ is the only commutator if and only if $G$ is abelian,
* $[a,b]^{-1} = [b,a]$,
* $[a,b]^x = [a^x, b^x]$,
* $[ab,c]=[ac]^b[b,c]$,
* $[a^{-1}, b] = [b,a]^{a^{-1}}$,
* For any group homomorphism $\phi: G \to H$, we have $\phi([a,b]) = [\phi(a), \phi(b)]$.

> The product of two or more commutators need not be a commutator. Indeed, it is known that the least order of a finite group for which there exists two commutators whose product is not a commutator is 96; in fact there are two nonisomorphic groups of order 96 with this property &mdash; See [**Stack Exchange**: Mariano Suárez-Álvarez](https://math.stackexchange.com/questions/7811/derived-subgroup-where-not-every-element-is-a-commutator).

## Def. Commutator Subgroup and Derived Series

Let $G$ be a group. Then the **commutator subgroup** (or **derived subgroup**) **of $G$** denoted with $G'$ or $G^{(1)}$ is the normal subgroup $[G, G]$.

Applied recursively, we get the **derived series** of the group $G$

$$
G^{(0)} := G \trianglerighteq G^{'} \trianglerighteq G^{''} \trianglerighteq G^{(3)} \trianglerighteq \cdots
$$

> For a finite group this series terminates, to what is called a **perfect group** which may be trivial or not.

### Thm. Three Commutator Lemma

Let $G$ be a group, $A, B, C \leq G$, and $N \trianglelefteq G$. If any two commutator subgroups

$$
[A,B,C], \enspace [B, C, A], \enspace [C, A, B]
$$

lie in $N$, then so is the other one.

<details>
<summary><b>Proof</b></summary>
<br/>

Use **Witt's Identity** which is

$$
[a, b^{-1},c]^b [b, c^{-1}, a]^c [c, a^{-1}, b]^a = e
$$
</details>
