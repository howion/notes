# Ordered Sets

> TODO: Further define some notations and definitions.

[**Go Back to Index**](./00-index.md)

```js
```

```js
```

## Def. Partial Order

A **partial order** (relation) or simply an **order** (relation) on some set $P$ is a binary relation $\leqslant$ on $P$ such that, for all $x,y,z \in P$, it is

1. **Reflexive:** $x \leqslant x$.
2. **Antisymmetric:** $x \leqslant y$ and $y \leqslant x$ implies $x=y$.
3. **Transitive:** $x \leqslant y$ and $y \leqslant z$ implies $x \leqslant z$.

We say $x$ and $y$ are **comparable** if either $x \leqslant y$ or $y \leqslant x$.

The set $P$ with such order relation $\leqslant$ is said to be a (partially) **ordered set**, or simply a **poset** denoted $\langle P; \leqslant \rangle$.

On any set, $=$ is an order called the **discrete order**.

A binary relation $\leqslant$ that satisfies (1) and (3) but not necessarily (3) is called a **quasi-order** or **pre-order**.

Let $\langle P; \leqslant_P \rangle$ and $Q \subseteq P$. Then $Q$ inherits an order relation $\leqslant_Q$ from $P$ such that for all $x,y \in Q$ we have $x \leqslant_Q y \iff x \leqslant_P y$ called the **induced order** or the **order inherited from $P$**.

## Def. Chains

Let $\langle P; \leqslant\rangle$ be a poset. Then $P$ is said to be a **chain** (or **linearly ordered set** or **totally ordered set**) if any two elements of $P$ are comparable.

Similarly, $P$ is said to be an **antichain** if, for all $x,y \in P$, we have $x \leqslant y$ implies $x=y$.

Notice that any subset of a chain (an antichain) is a chain (an antichain).

## Def. Order-Isomorphism

We say two ordered sets $P$ and $Q$ are (order-)**isomorphic** denoted $P \cong Q$ if there exists a surjective map (function) $\phi: P \twoheadrightarrow Q$ such that, for all $x,y \in P$:

$$
x \leqslant_P y \iff
\phi(x) \leqslant_Q \phi(y)
$$

Such a map $\phi$ is called an **order-isomorphism**.

Notice that:

* $\phi$ must also be injective and thus bijective.
* Not every bijective map between $P$ and $Q$ is an order-isomorphism.

## Ex. Social Choice Function

See [**Wikipedia**: Arrow's impossibility theorem](https://en.wikipedia.org/wiki/Arrow%27s_impossibility_theorem).

## Def. Cover Relation

> TODO: Check if this definition is equivalent to the one in the main book.

Let $P$ be an ordered set and $x, y \in P$. We say $x$ is **covered by** $y$ denoted with $x \> -\negthickspace\!< y$ if $x \neq y$ and there is no $z \in P$ distinct from $x$ and $y$ such that

$$x \leqslant z \leqslant y$$

## Def. Hasse Diagrams

See [**Wikipedia:** Hasse Diagram](https://en.wikipedia.org/wiki/Hasse_diagram).

## Thm. TFAE

Let $P$ and $Q$ be finite ordered sets and $\phi : P \to Q$ a bijective map. Then TFAE:

* $\phi$ is an order-isomorphism
* $x \lt_P y$ if and only if $\phi(x) \lt_Q \phi(y)$.
* $x \> -\negthickspace\!<_P y$ if and only if $\phi(x) \> -\negthickspace\!<_Q \phi(y)$.
* They can be drawn with identical Hasse Diagrams.

## Def. Dual

Let $P$ be an ordered set with the order relation $\leqslant$. The **dual** of $P$ denoted with $P^\partial$ is the set ordered with $\leqslant_\partial$ where, for all $x, y \in P$:

$$x \leqslant_\partial y \iff y \leqslant x$$

<!-- ## Thm. Duality Principle

Given a statement $\Phi$ about ordered sets which is true in all ordered sets, the dual statement $\Phi^\partial$ is also true in all ordered sets. -->
