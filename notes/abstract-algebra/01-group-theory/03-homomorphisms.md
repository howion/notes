# 3. Homomorphisms

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

If $\varphi: G \to H$ is a group homomorphism, then the **kernel** of $\varphi$ is the set

$$
\Set{g \in G | \varphi(g) = e_H}
$$

denoted by $\text{Ker }\varphi$.

> This is also sometimes denoted by $\varphi^{-1}(e_H)$.

## Notation. Homomorphisms

We say semigroups $G$ and $H$ are **isomorphic** denoted with $G \cong H$ if there exists an isomorphism between them.

Let $\phi: G \to H$ be a group homomorphism, $g \in G$ and $A \subseteq G$. Then

* $g^\phi$ denotes $\phi(g)$, and
* $A^\phi$ denotes $\phi(A)$ called the **homomorphic (respectively monomorphic, epimorphic, ...) image** of $A$.

> $\phi(A)$ is sometimes also denoted with $\text{Im } A$ &mdash; we will not prefer this notation.

## Thm. Basic Homomorphism Properties

Let $\varphi: G \to H$ be a group homomorphism, then

1. $\varphi(e_G) = e_H$. This is not necessarily true for monoid homomorphisms!
2. $\varphi(g^{-1}) = \varphi(g)^{-1}$ for all $g \in G$,
3. $\varphi(g^n) = \varphi(g)^n$ for all $g \in G$ and $n \in \Z$,
4. $\text{Ker }\varphi \leq G$,
5. $\varphi(G) \leq H$

## Def. Basic Kernel Properties

Let $\varphi: G \to H$ be a group homomorphism, then

1. $\varphi$ is a monomorphism if and only if $\text{Ker } \varphi = \{e_G\}$.
2. $\varphi$ is an isomorphism if any only if there exists an homomorphism $\varphi^{-1}: H \to G$ such that $\varphi \varphi^{-1} = e_G$.

## Thm. More Homomorphism Properies

1. $A$ is abelian group if and only if the map $a \mapsto a^{-1}$ is an automorphism.

<details>
<summary><b>Proof</b></summary>
<br/>

1. Exercise.

</details>

## Def. Group Action

<!-- TODO: Where to place this, and detail this? -->

See [**Wikipedia: Group action**](https://en.wikipedia.org/wiki/Group_action).

Let $G$ be a group and $X$ any set. A binary operation $\bullet: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

* $a \bullet (b \bullet x) = (a b) \bullet x$, and
* $e \bullet x = x$

> For establishing general properties of group actions, it suffices to consider only left actions.
