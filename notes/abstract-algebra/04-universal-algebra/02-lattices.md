# Lattices

<!-- TODO: Further define some notations and definitions. -->

## _Def._ Bounds

Let $P$ be an ordered set and $S \subseteq P$. Then, $x \in P$ is called an **upper bound of $S$** if $s \leqslant x$ for all $s \in S$. **Lower bound** is defined dually.

The set of all upper bounds of $S$ is denoted by $S^+$ and the set of all lower bounds denoted by $S^-$.

The least element of $S^+$, if exists, is called the **supremum** (or **least upper bound**) of $S$ denoted $\sup S$. Dually, the greatest element of $S^-$ is called **infimum** of $S$ denoted $\inf S$.

Notice that:

* Since $\leqslant$ is transitive, $S^+$ is always an up-set and $S^-$ is a down-set.

## _Notation._ Join and Meet

If exists, we will denote $\sup \{x, y\}$ with $x \vee y$ read as $x$ **join** $y$. Similarly, we will denote $\inf \{x, y\}$ with $x \wedge y$ read as $x$ **meet** $y$.

Similarly, we will also utilize $\bigvee S$ and $\bigwedge S$ for $\sup S$ and $\inf S$.

## _Def._ Lattice and Complete Lattice

Let $P$ be a non-empty (partially) ordered set.

* If join and meet exist for all $x,y \in P$, then $P$ is called a **lattice**.
* If join of and meet of exist for all $S \subseteq P$, then $P$ is called a **complete lattice**.

## _Def._ Axiomatic Definition

> From **A Course in Universal Algebra**.

A non-empty set $L$ with two binary operations $\vee$ and $\wedge$ on $L$ is called a **lattice** if it satisfies:

* **(commutative laws)**\
$x \vee y \approx y \vee x$\
$x \wedge y \approx y \wedge x$

* **(associative laws)**\
$x \vee (y \vee z) \approx x \vee (y \vee z)$\
$x \wedge (y \wedge z) \approx x \wedge (y \wedge z)$

* **(idempotent laws)**\
$x \vee x \approx x$\
$x \wedge x \approx x$

* **(absorption laws)**\
$x \approx x \vee (x \wedge y)$\
$x \approx x \wedge (x \vee y)$
