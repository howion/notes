# 4. Homomorphisms

## Def. Homomorphism

Let $(G, \cdot_G)$ and $(H, \cdot_H)$ be semigroups.

The (total) function (or map) $\varphi: G \to H$ is called a **homomorphism** if, for all $a, b \in G$:

$$\varphi(a \cdot_G b) = \varphi(a) \cdot_H \varphi(b)$$

> Mostly, we will not be as explicit about the operations and simply write $\varphi(ab)=\varphi(a)\varphi(b)$ instead.

The homomorphism $\varphi$ is called:

* an **monomorphism** if it is injective,
* an **epimorphism** if it is surjective,
* an **isomorphism** if it is bijective.

<!--  -->

* an **endomorphism** if $G=H$, and
* an **automorphism** if it is an endomorphism and bijective.

Composition of homomorphisms is again a homomorphism. Respectively, this is also the case for monomorphisms, epimorphisms, isomorphisms and automorphisms.

### Example

If $A$ is abelian, then the map $a \mapsto a^{-1}$ is an automorphism, and the map $a \mapsto a^2$ is an endomorphism.

## Def. Kernel

If $\varphi: G \to H$ is a group homomorphism, then the **kernel** of $\varphi$ is defined as

$$
\text{Ker }\varphi := \Set{g \in G | \varphi(g) = e_H}.
$$

## Notation. Homomorphisms

We say semigroups $G$ and $H$ are **isomorphic** denoted with $G \cong H$ if there exists an isomorphism between them.

Let $\phi: G \to H$ be a group homomorphism, $g \in G$ and $A \subseteq G$. Then

* $g^\phi$ denotes $\phi(g)$, and
* $A^\phi$ denotes $\phi(A)$ called the **homomorphic (respectively monomorphic, epimorphic, ...) image** of $A$.

## Thm. Basic Homomorphism Properties

Let $\varphi: G \to H$ be a group homomorphism, then

1. $\varphi(e_G) = e_H$. This is not necessarily true for monoid homomorphisms!
2. $\varphi(g^{-1}) = \varphi(g)^{-1}$ for all $g \in G$,
3. $\varphi(g^n) = \varphi(g)^n$ for all $g \in G$ and $n \in \Z$,
4. $\text{Ker }\varphi \leq G$,
5. $\text{Im }\varphi := \varphi(G) \leq H$

> Exercise

## Def. Basic Kernel Properties

Let $\varphi: G \to H$ be a group homomorphism, then

1. $\varphi$ is a monomorphism if and only if $\text{Ker } \varphi = \{e_G\}$.
2. $\varphi$ is an isomorphism if and only if there exists an homomorphism $\varphi^{-1}: H \to G$ such that $\varphi \varphi^{-1} = \text{id}_G$.

> Exercise

## Def. Endomorphisms

Let $G$ be a group and $\text{End } G$ the **set of all endomorphism** on $G$, then $\text{End } G$ is a semigroup under composition. Moreover, if $G$ is a abelian, $\text{End } G$ is a ring with pointwise function addition that is, for $\alpha, \beta \in \text{End } G$

$$
(\alpha + \beta)(x) = \alpha(x) + \beta(x) \qquad x \in G
$$

> Exercise

## Def. Automorphisms

The **set of automorphisms** on $G$ denoted by $\text{Aut }G$ is a group under function composition. Moreover, $\text{Aut }G \leq \mathbf{S}(G)$ where $\mathbf{S}(G)$ is the group of permutations on $G$.

> Exercise

## Exercises

### #1

$A$ is abelian group if and only if the map $a \mapsto a^{-1}$ is an automorphism.

### #2

Let $\alpha: G \to G$ be a group automorphism and $x \in G$, then $|\alpha(x)| = |x|$.

### #3

Let $\alpha \in \text{Aut}(G)$ and $H = \Set{g \in G | \alpha(g) = g}$. Show that $H$, which is called the **fixed point subgroup of $G$ under $\alpha$** is indeed a subgroup of $G$.
