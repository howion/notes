# 3. Homomorphisms

## Def. Group Homomorphism

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

> Notice that if there exists an isomorphism between two semigroups, then basically, they have the  same structure*.

(Existence of an) isomorphism between two semigroups $G$ and $H$ is denoted with $G \cong H$.

## Def. Kernel

If $\varphi: G \to H$ is a group homomorphism, then the **kernel** of $\varphi$ is the set

$$
\Set{g \in G | \varphi(g) = 1_H}
$$

denoted by $\text{Ker }\varphi$.

## Thm. Basic Homomorphism Properties

If $\varphi: G \to H$ is a group homomorphism, then

1. Composition of homomorphisms is again a homomorphism. This is also the case for monomorphisms, epimorphisms, isomorphisms and automorphisms.
2. $\varphi(1_G) = 1_H$, this is not necessarily true for monoid homomorphisms,
3. $\varphi(g^{-1}) = \varphi(g)^{-1}$ for all $g \in G$,
4. $\varphi(g^n) = \varphi(g)^n$ for all $g \in G$ and $n \in \Z$,
5. $\text{Ker }\varphi \leq G$,
6. $\text{Im }\varphi \leq H$

## Exercise

If $A$ is an abelian group, then the map $a \mapsto a^{-1}$ is an automorphism.

## Def. Basic Kernel Properties

Let $\varphi: G \to H$ be a group homomorphism, then

1. $\varphi$ is a monomorphism if and only if $\text{Ker } \varphi = \{e_G\}$.
2. $\varphi$ is an isomorphism if any only if there exists an homomorphism $\varphi^{-1}: H \to G$ such that $\varphi \varphi^{-1} = 1_G$.

## Def. Group Action

See [**Wikipedia: Group action**](https://en.wikipedia.org/wiki/Group_action).

Let $(G, \cdot, e)$ be a group and $X$ a set. A binary operation $\bullet: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

* $a \bullet (b \bullet x) = (a b) \bullet x$, and
* $e \bullet x = x$

> For establishing general properties of group actions, it suffices to consider only left actions.
