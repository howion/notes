# 11. Quotients and Isomorphisms

<!-- TODO: Continue from kargapolov pdf p. 47 -->

## Def. (Group) Congruence Relation

An equivalence relation $\equiv$ on a group $G$ is called a (group) **congruence relation** if for all $x_1,x_2,y_1,y_2 \in G$

$$
x_1 \equiv x_2 \> \land \> y_1 \equiv y_2
\implies
x_1y_1 \equiv x_2y_2
$$

The product of two congruence classes is again a congruence class. Indeed, the set of all congruence classes $G/{\equiv}$ is a group under the multiplication of classes called the **quotient group with respect to $\equiv$**.

<!-- TODO: Explain more -->

## Thm. Group Congruences and Normals

The congruence relations on a group $G$ are in one-to-one correspondence with the normal subgroups of $G$.

> Usually quotient groups in group theory are defined via normal groups but this paints a much wider picture. Following this motivation, here is the classical definition of quotient groups.

## Def. Quotient Group

Let $G$ be a group and $N \trianglelefteq G$. The set of all cosets of $N$ in $G$ denoted by $G/N$ (read as $G$ modulo $N$) forms a group under the binary operation

$$(aN)(bN)=(ab)N$$

and is of order $[G:N]$. This group is called the **quotient group** (or **factor group**) **of $G$ by $N$**.

> Notice how we are not multiplying cosets directly, but rather the elements in front of them.

## Thm. Basic Quotient Properties

Let $G$ be a group and $N \trianglelefteq G$.

1. If $G$ is cyclic, then so is $G/N$.
2. $G/N$ is abelian if and only if $[G,G] \subseteq N$.

<details>
<summary><b>Proof</b></summary>
<br/>

Exercise.
</details>

## Def. Projection

Let $N \trianglelefteq G$. Then

$$
\begin{array}{lrll}
\pi: & G & \to & G/N \\
     & a & \mapsto & aN
\end{array}
$$

is an epimorphism and $\text{Ker }\pi = N$. Such $\pi$ is called the **canonical epimorphism** or **(natural) projection**. Therefore, unless otherwise stated, $G \to G/N$ always denotes the cannonical epimorphism.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

### Thm. Commutativity of Projection

Let $\pi: G \to G/H$ be the natural projection of $G$ and $N \ (\trianglelefteq G)$. Then $G/H$ is abelian if and only if $[G,G] \subseteq H$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Thm. Fundamental Theorem on Homomorphisms

<!-- TODO: Draw the commutative diagram -->

Let $\varphi: G \to H$ be a group homomorphism and $N \trianglelefteq \text{Ker }\varphi \trianglelefteq G$. Then there exists an unique homomorphism $\bar{\varphi}$ where

$$
\begin{array}{rrll}
\bar{\varphi}: & G/N & \to & H \\
& aN & \mapsto & \varphi(a)
\end{array}
$$

and

* $\varphi(G) = \bar{\varphi}(G/N)$,
* $\text{Ker }\bar{\varphi} = (\text{Ker }\varphi) / N$

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<!-- TODO: By the Fundamental Theorem on Homomorphism, the following diagram commutes -->

## Thm. First Isomorphism Theorem

Let $\varphi: G \to H$ be a group homomorphism. Then

1. $\text{Ker }\varphi \trianglelefteq G$, so kernel of any group homomorphism is normal,
2. $\varphi(G) \leq H$, so image of any group homomorphism is a subgroup,
3. $\varphi(G) \cong G/(\text{Ker }\varphi)$, so if $\varphi$ is an epimorphism, then $H \cong G/(\text{Ker }\varphi)$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<center>
<img src="https://raw.githubusercontent.com/howion/notes/master/notes/abstract-algebra/01-group-theory/assets/01-first-isomorphism-theorem.svg" alt="Figure 01. First Isomorphism Theorem" width="600" />

**(Figure 1)** First Isomorphism Theorem
</center>

## Thm. Second Isomorphism Theorem

<!-- TODO: Generalize, see Hungerford p. 44 -->

> This theorem is also called the **Diamond Isomorphism Theorem** or **Parallelogram Theorem** due to lattice it draws.

Let $B \leq G$ and $A \leq N_G(B)$, so that $A$ is a subgroup of the _normalized_ $B$. Then, noting $A$ is normal

1. $AB \leq G$,
2. $B \trianglelefteq AB$,
3. $A \cap B \trianglelefteq A$, and
4. $AB/B \cong A/A \cap B$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<center>
<img src="https://raw.githubusercontent.com/howion/notes/master/notes/abstract-algebra/01-group-theory/assets/02-second-isomorphism-theorem.svg" alt="Figure 02. Second Isomorphism Theorem" width="350" />

**(Figure 2)** Second Isomorphism Theorem
</center>

## Thm. Third Isomorphism Theorem

Let $K \trianglelefteq H \trianglelefteq G$, then

1. $K/H \trianglelefteq G/H$, and
2. $(G/K)/(H/K) \cong G/H$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<!-- ## Thm. Subgroups to Quotient Subgroups

> Recall that $L(G,A)$ was the set of all subgroups of $G$ which contain the subset $A$.

The natural projection $\pi: G \to G/H$ induces a injective $\psi: L(G,H) \to L(G/H, e)$ such that for subgroups $A, B \leq G$ -->

## Thm.
