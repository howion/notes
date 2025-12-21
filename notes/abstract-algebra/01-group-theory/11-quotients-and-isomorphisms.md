# Quotients and Isomorphisms

<!-- TODO: Continue from kargapolov pdf p. 47 -->

## _Def._ (Group) Congruence Relation

An equivalence relation $\equiv$ on a group $G$ is called a (group) **congruence relation** if for all $x_1,x_2,y_1,y_2 \in G$

$$
x_1 \equiv x_2 \> \land \> y_1 \equiv y_2
\implies
x_1y_1 \equiv x_2y_2
$$

The product of two congruence classes is again a congruence class. Indeed, the set of all congruence classes $G/{\equiv}$ is a group under the multiplication of classes called the **quotient group with respect to $\equiv$**.

<!-- TODO: Explain more -->

## _Thm._ Group Congruences and Normals

The congruence relations on a group $G$ are in one-to-one correspondence with the normal subgroups of $G$.

> Usually quotient groups in group theory are defined via normal groups but this paints a much wider picture. Following this motivation, here is the classical definition of quotient groups.

## _Def._ Quotient Group

Let $G$ be a group and $N \trianglelefteq G$. The set of all cosets of $N$ in $G$ denoted by $G/N$ (read as $G$ modulo $N$) forms a group under the binary operation

$$(aN)(bN)=(ab)N$$

and is of order $[G:N]$. This group is called the **quotient group** (or **factor group**) **of $G$ by $N$**.

> Notice how we are not multiplying cosets directly, but rather the elements in front of them.

## _Thm._ Basic Quotient Properties

Let $G$ be a group and $N \trianglelefteq G$.

1. If $G$ is cyclic, then so is $G/N$.
2. $G/N$ is abelian if and only if $[G,G] \subseteq N$.

> Exercise

## _Def._ Projection

Let $N \trianglelefteq G$. Then

$$
\begin{array}{lrll}
\pi: & G & \to & G/N \\
     & a & \mapsto & aN
\end{array}
$$

is an epimorphism and $\text{Ker }\pi = N$. Such $\pi$ is called the **canonical epimorphism** or **(natural) projection** of $G$ under $N$. Therefore, unless otherwise stated, $G \to G/N$ always denotes the natural projection.

If the group is clear from the context, we may make use of the notation $\pi_N$ to denote the projection $G \to G/N$.

> Exercise

### _Thm._ Commutativity of Projection

> TODO: Revise, add proof

Let $\pi_N$ be the natural projection of $G$ under $N$, then $G/N$ is abelian if and only if $[G,G] \subseteq N$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## _Thm._ Fundamental Theorem on Homomorphisms

<!-- TODO: Draw the commutative diagram -->

Let $\varphi: G \to H$ be a group homomorphism, $N \trianglelefteq G$, and $N \subseteq \text{Ker }\varphi \trianglelefteq G$. Then there exists an unique homomorphism $\bar{\varphi}$ where

$$
\begin{array}{rrll}
\bar{\varphi}: & G/N & \to & H \\
& aN & \mapsto & \varphi(a)
\end{array}
$$

and

* $\varphi(G) = \bar{\varphi}(G/N)$,
* $\text{Ker }\bar{\varphi} = (\text{Ker }\varphi) / N$

Therefore, $\bar{\varphi}$ is an isomorphism if and only if

* $\varphi$ is an epimorphism, and
* $N = \text{Ker }\varphi$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

<!-- TODO: By the Fundamental Theorem on Homomorphism, the following diagram commutes -->

## _Thm._ First Isomorphism Theorem

Let $\varphi: G \to H$ be a group homomorphism. Then

1. $\text{Ker }\varphi \trianglelefteq G$, so kernel of any group homomorphism is normal,
2. $\varphi(G) \leq H$, so image of any group homomorphism is a subgroup,
3. $\varphi(G) \cong G/(\text{Ker }\varphi)$, so if $\varphi$ is an epimorphism, then $H \cong G/(\text{Ker }\varphi)$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO
</details>

<center>
<img src="https://raw.githubusercontent.com/howion/notes/master/notes/abstract-algebra/01-group-theory/assets/01-first-isomorphism-theorem.svg" alt="Figure 01. First Isomorphism Theorem" width="600" />

**(Figure 1)** First Isomorphism Theorem
</center>

## _Thm._ Second Isomorphism Theorem

<!-- TODO: Generalize, see Hungerford p. 44 -->

> This theorem is also called the **Diamond Isomorphism Theorem** or **Parallelogram Theorem** due to lattice it draws.

Let $G$ be a group, $H \leq G$, and $N \trianglelefteq G$. Then

> Recall that since $N$ is normal and $H$ is a subgroup, we have $H \lor N = HN = NH$.

1. $N \trianglelefteq HN \leq G$,
2. $H \cap N \trianglelefteq H$, and
3. $HN/N \cong H/(H \cap N)$.

> TODO: (Examine) Technically, $N$ need not to be normal in $G$, it suffices $H$ to be a subgroup of $N_G(N)$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

<center>
<img src="https://raw.githubusercontent.com/howion/notes/master/notes/abstract-algebra/01-group-theory/assets/02-second-isomorphism-theorem.svg" alt="Figure 02. Second Isomorphism Theorem" width="350" />

**(Figure 2)** Second Isomorphism Theorem
</center>

> TODO: Redraw diagram

## _Thm._ Third Isomorphism Theorem

Let $K \trianglelefteq H \trianglelefteq G$, then

1. $H/K \trianglelefteq G/K$, and
2. $(G/K)/(H/K) \cong G/H$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

<!--
TODO: Write this, see korgapolov p. 28

## _Thm._ Subgroups to Quotient Subgroups

> Recall that $L(G,A)$ was the set of all subgroups of $G$ which contain the subset $A$.

Let $G$ be a group and $N \trianglelefteq G$. Then $\pi_N: G \to G/N$ incudes a one-to-one correspondence

$$
\psi_N: L(G,H) \to L(G/H, e)
$$

The natural projection $\pi: G \to G/H$ induces a injective $\psi: $ such that for subgroups $A, B \leq G$
-->

## _Thm._ Homomorphism Induced Bijection

> Recall that $L(G,A)$ was the set of all subgroups of $G$ which contain the subset $A$, and $L(G) := L(G, e)$.

Let $\varphi: G \to H$ be a group homomorphism. Then $\varphi$ induces a bijective map

$$
\begin{array}{ll}
\psi: L(G, \text{Ker }\varphi) \to L(H)
\end{array}
$$

such that image of normal subgroups are normal subgroups.

> TODO: Proof, omitted.

## _Corollary._ Normal Subgroups of Qutients

Let $N \trianglelefteq G$, then every subgroup of $G/N$ is of the form $K/N$ where $N \subseteq K \leq G$. Moreover, $K/N \trianglelefteq G/N$ if and only if $K \trianglelefteq G$.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

Direct implication of the theorem above for the epimorphism $\pi_N$.
</details>
