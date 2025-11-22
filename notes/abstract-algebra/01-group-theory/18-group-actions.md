# 18. Group Action

<!-- TODO: References -->

## Def. Group Action

Let $G$ be a group and $X$ any set. A binary operation $*: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

1. $a * (b * x) = (a b) * x$, and
2. $e * x = x$

where (1) is called **identity** property and (2) is called **compatibility** property.

> For establishing general properties of group actions, it suffices to consider only left actions.

## Def. Orbits

Let the group $G$ act on a set $X$, then the **orbit** of an element $x \in X$ is the set of elements

$$
G * x := \Set{g * x | g \in G}
$$

The group action is said to be **transitive** if for $x, y \in X$ there exists $g \in G$ so that $g * x = y$.

## Def. Stabilizer

Let $G$ act on $X$ and $x \in X$, then the **stabilizer subgroup** of $G$ with respect to $x$ is defined as

$$
G_x := \Set{g \in G | g * x = x}
$$

## Thm. Basic Orbit and Stabilizer Properties

Let the group $G$ act on a set $X$ and $x \in X$, then

1. Set of orbits partition the set $X$.
2. The group action is transitive if and only if it has exactly one orbit.
3. If the action is transitive, then there is exactly one orbit, so that $G * x = G$ for all $x \in X$.
4. $G_x \leq G$.

## Thm. Orbit-Stabilizer Theorem

Let $G$ be a finite group that acts on a set $X$ and $x \in X$, then

$$
|G * x| = |G:G_x|
$$

<!-- TODO: Burnside's Lemma -->
