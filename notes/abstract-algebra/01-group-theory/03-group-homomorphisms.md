# Group Homomorphisms

[**Go Back**](../00-index.md)

## Def. Group Homomorphism

Let $(G, \cdot_G, e_G)$ and $(H, \cdot_H, e_H)$ be groups.

The (total) function (or map) $\varphi: G \to H$ is called a **(group) homomorphism** if, for all $a, b \in G$:

$$\varphi(a \cdot_G b) = \varphi(a) \cdot_H \varphi(b)$$

> Mostly, we will not be as explicit about the operations and simply write $\varphi(ab)=\varphi(a)\varphi(b)$ instead.

The homomorphism $\varphi$ is called:

* an **monomorphism** if it is injective,
* an **epimorphism** if it is surjective,
* an **isomorphism** if it is bijective.

<!--  -->

* an **endomorphism** if $G=H$, and
* an **automorphism** if it is an endomorphism and bijective.

> Notice that if there exists an isomorphism between two groups, then basically, they have the  same structure*.

(Existence of an) isomorphism between two groups $G$ and $H$ is denoted with $G \cong H$.

## Def. Kernel

If $\phi: G \to H$ is a group homomorphism, then the **kernel** of $\phi$ is the set

$$
\Set{g \in G | \phi(g) = 1_H}
$$

denoted by $\text{Ker }\phi$.

## Thm. Basic Homomorphism Properties

If $\phi: G \to H$ is a group homomorphism, then

1. $\phi(1_G) = 1_H$,
2. $\phi(g^{-1}) = \phi(g)^{-1}$ for all $g \in G$,
3. $\phi(g^n) = \phi(g)^n$ for all $g \in G$ and $n \in \Z$,
4. $\text{Ker }\phi \leq G$,
5. $\text{Im }\phi \leq H$

## Def. Group Action

See [**Wikipedia: Group action**](https://en.wikipedia.org/wiki/Group_action).

Let $(G, \cdot, e)$ be a group and $X$ a set. A binary operation $\bullet: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

* $a \bullet (b \bullet x) = (a b) \bullet x$, and
* $e \bullet x = x$

> For establishing general properties of group actions, it suffices to consider only left actions.
