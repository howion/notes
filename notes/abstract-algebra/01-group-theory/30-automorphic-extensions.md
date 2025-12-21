# Automorphic Extensions

<!-- TODO: Find suitable references -->

## Def. (Outer) Semidirect Product

Let $G$ and $H$ be groups and $\theta: H \to \text{Aut }G$ a homomorphism. Let $G \rtimes_\theta H$ be the set $G \times H$ with the binary operation

$$
(g, h)(g', h') = (g[\theta(h) (g')], hh')
$$

So that $G \rtimes_\theta H$ is group with the identity $(e_G,e_H)$ and

$$
(g,h)^{-1} = (\theta(h^{-1})(g^{-1}), h^{-1})
$$

$G \rtimes_\theta H$ is called the **(outer) semidirect product** of $G$ and $H$ with respect to $\theta$.

## Thm. Normal Complement

Let $N \trianglelefteq G$, then the following are equivalent

1. $G = NH$ and $N \cap H = \{e\}$ for some $H \leq G$.
2. For each $g \in G$, there are unique $n \in N$ and $h \in H$ such that $g=nh$.

## Def. Inner Semidirect Product

Let $G$ be a group such that $N \trianglelefteq G$ and $H \leq G$ are complements in $G$, then define

$$
\begin{array}{lllll}
\varphi: & H & \to & \text{Aut }N \\
         & h & \mapsto & \varphi_h(n) := hnh^{-1}
\end{array}
$$

The semidirect product $N \rtimes_{\varphi} H$ denoted simply by $N \rtimes H$ or $H \ltimes N$ is called the **inner semidirect product** of $N$ and $H$, so that $G = N \rtimes H$. We also say $G$ is a **semidirect product** of $H$ acting on $N$.

## Def. Holomorph

<!-- TODO: Reference -->

Let $G$ be a group, then the **holomorph of $G$** is defined as

$$
\text{Hol }G := G \rtimes \text{Aut }G
$$

whose multiplication simplifies to

$$
(g, \alpha) (h, \beta) = (g \alpha(h), \alpha \beta)
$$

<!-- TODO: Reference -->

## Notation. Cartesian and Direct Product

Let $I$ be an index set, then

* $A^{[I]}$ denotes the $|I|$-fold cartesian product, and
* $A^{(I)}$ denotes the $|I|$-fold direct product.

## Def. Wreath Products

Let $G$ and $H$ be groups such that $H$ acts on $\Omega$ from left.

We can extend the action of $H$ on $\Omega$ to an action on $G^{[\Omega]}$ via

$$
h \cdot (g_w)_{w \in \Omega} := (g_{h^{-1} \cdot w})_{w \in \Omega}
$$

for all $h \in H$ and all $(g_w)_{w \in \Omega} \in G^{[\Omega]}$.

The **unrestricted wreath product** is defined as

$$
G \enspace \text{Wr}_{\Omega} \enspace H := G^\Omega \rtimes H
$$

and the subgroup $G^{[\Omega]}$ of $G^{[\Omega]} \rtimes H$ is called the **base** of the wreath product.

Similarly, the **restricted wreath product** denoted with $\text{wr}_{\Omega}$ is the product defined above with $G^{(\Omega)}$ instead of $G^{[\Omega]}$.

Two definitions coincide when $\Omega$ is finite.

If $\Omega$ is not explicitly stated, we take $\Omega = H$.

Either variant is denoted with $\wr_\Omega$.

## Thm. Wreath Properties

Let $G$ and $H$ be groups, and $H$ acts on $\Omega$, then

1. $G \enspace \text{wr}_\Omega \enspace H \leq G \enspace \text{Wr}_\Omega \enspace H$
2. $|G \wr_\Omega H| = {|G|}^{|\Omega|} |H|$

## Thm. Kaluznin-Krasner

Every extension of a group $G$ by a group $H$ can be embedded in the unrestricted wreath product $G \enspace \text{Wr} \enspace H$.
