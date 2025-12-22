# Commutators

## _Def._ Commutator

Let $G$ be a group and $a, b \in G$. Obviously, two elements $a$ and $b$ commute if and only if $a^{-1}b^{-1}ab = e$. The left-hand side of this equation will be denoted with $[a,b]$ called the **commutator** of $a$ and $b$, that is

$$
[a,b] := a^{-1}b^{-1}ab
$$

For $A, B \subseteq G$, we define **mutual commutator subgroup** as

$$
[A, B] := \Braket{\> [a,b] | a \in A, b \in B \>}
$$

More generally,

$$
[a_1, a_2, ..., a_{n+1}] := [[a_1, ..., a_n], a_{n+1}]
$$

and

$$
[A_1, A_2, ..., A_{n+1}] := [[A_1, ..., A_n], A_{n+1}]
$$

## _Thm._ Basic Commutator Properties

Let $G$ be a group and $a,b,c, x \in G$, then

* $[a,b] = e$ if and only if $ab=ba$, indeed
* $e$ is the only commutator if and only if $G$ is abelian,
* $[a,b]^{-1} = [b,a]$,
* $[a,b]^x = [a^x, b^x]$,
* $[ab,c]=[ac]^b[b,c]$,
* $[a^{-1}, b] = [b,a]^{a^{-1}}$,
* For any group homomorphism $\phi: G \to H$, we have $\phi([a,b]) = [\phi(a), \phi(b)]$.

> The product of two or more commutators need not be a commutator. Indeed, it is known that the least order of a finite group for which there exists two commutators whose product is not a commutator is 96; in fact there are two nonisomorphic groups of order 96 with this property &mdash; See [**Stack Exchange**: Mariano Suárez-Álvarez](https://math.stackexchange.com/questions/7811/derived-subgroup-where-not-every-element-is-a-commutator).

## _Def._ Commutator Subgroup and Derived Series

Let $G$ be a group. Then the **commutator subgroup** (or **derived subgroup**) **of $G$** denoted with $G'$ or $G^{(1)}$ is the (normal) subgroup $[G, G]$.

Applied recursively, we get the **derived series** of the group $G$

$$
G^{(0)} := G \trianglerighteq G^{'} \trianglerighteq G^{''} \trianglerighteq G^{(3)} \trianglerighteq \cdots
$$

where **$i$-th derived subgroup** $G^{(n)}$ is defined as

$$
G^{(n)} := [G^{(n-1)}, G^{(n-1)}]
$$

> For a finite group this series terminates, to what is called a **perfect group** which may be trivial or not. Moreover, realize that $G$ is abelian if and only if $G' = \Braket{e}$. In a sense, $G'$ provides a measure of how much $G$ differs from an abelian group.

## _Thm._ Some Commutator Subgroup Properties

Let $G$ be a group and $N \trianglelefteq G$, then

1. $G' \trianglelefteq G$,
2. $G/G'$ is abelian,
3. $G/N$ is abelian if and only if $G' \subseteq N$.

<details>
<summary><b>Proof</b></summary>
<br/>

> Exercise
</details>

## _Thm._ Three Commutator Lemma

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

## Exercises

### #1

Let $A, B, C \trianglelefteq G$, then $[AB, C] = [A,C][B,C]$.
