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

## Notation

We will utilize the symbol $\bold{n}$ to denote the finite $n$-element linearly ordered set $\{0, 1, ..., n-1\}$ with the natural linear order. Similarly, $\bold{\bar{n}}$ will denote the $n$-element antichain.

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

Let $P$ be an ordered set and $x, y \in P$. We say $x$ is **covered by** $y$ denoted with $x \  -\negthickspace\!< y$ if $x \neq y$ and there is no $z \in P$ distinct from $x$ and $y$ such that

$$x \leqslant z \leqslant y$$

## Def. Hasse Diagrams

See [**Wikipedia:** Hasse Diagram](https://en.wikipedia.org/wiki/Hasse_diagram).

## Thm. TFAE

Let $P$ and $Q$ be finite ordered sets and $\phi : P \to Q$ a bijective map. Then TFAE:

* $\phi$ is an order-isomorphism
* $x \lt_P y$ if and only if $\phi(x) \lt_Q \phi(y)$.
* $x \  -\negthickspace\!<_P y$ if and only if $\phi(x) \  -\negthickspace\!<_Q \phi(y)$.
* They can be drawn with identical Hasse Diagrams.

## Def. Dual

Let $P$ be an ordered set with the order relation $\leqslant$. The **dual** of $P$ denoted with $P^\partial$ is the set ordered with $\leqslant_\partial$ where, for all $x, y \in P$:

$$x \leqslant_\partial y \iff y \leqslant x$$

<!-- ## Thm. Duality Principle

Given a statement $\Phi$ about ordered sets which is true in all ordered sets, the dual statement $\Phi^\partial$ is also true in all ordered sets. -->

## Def. Bottom and Top

For an ordered set $P$, we say $P$ has a **bottom** $\bot \in P$ if for all $x \in P$ we have $\bot \leqslant x$. Similarly, we say $P$ has a **top** $\top \in P$ if for all $x \in P$ we have $x \leqslant \top$.

Notice that $\top$ and $\bot$ are unique  when they exist due to antisymmetry, and they are comparable with any element.

For example, for $\langle \mathcal{P}(X); \subseteq\rangle$, we have $\bot = \varnothing$ and $\top = X$.

A finite chain always has bottom and top element.

<!-- ## Lifts -->

## Def. Min-Max(imal)

Let $P$ be an ordered set and $p \in P$. We say $a \in P$ is:

* **maximal element of $P$** if $a \leqslant x \implies a = x$. We denote the **set of maximal elements** with $\text{Max}\ P$.
* **minimal element of $P$** if $x \leqslant a \implies a =x$. Similarly, we denote **the set of minimal elements** with $\text{Min}\ P$.
* **maximum** if $a$ is the (unique) top element.
* **minimum** if $a$ is the (unique) bottom element.

Notice that if $P$ has a top element $\top$, then $\text{Max}\ P = \{\top\}$.

<!-- Zorn's Lemma -->

## Def. Sums

Suppose $P$ and $Q$ are two disjoint ordered sets. The **disjoint union** denoted $P \sqcup Q$ is the ordered set $P \cup Q$ ordered by $\leqslant$ where $x \leqslant y$ if and only if either:

* For $x,y \in P$ we have $x \leqslant_P y$,
* For $x,y \in Q$ we have $x \leqslant_Q y$.

## Def. Linear Sum

For two disjoint ordered sets $P$ and $Q$, the **linear sum** denoted $P \oplus Q$ is the ordered set $P \cup Q$ ordered by $\leqslant$ where $x \leqslant y$ if and only if either:

* For $x,y \in P$ we have $x \leqslant_P y$,
* For $x,y \in Q$ we have $x \leqslant_Q y$.
* $x \in \text{Max}\ P$ and $y \in \text{Min}\ Q$.

Obviously, $\oplus$ is not necessarily commutative.

Note that both $\sqcup$ and $\oplus$ are associative (up to isomorphism).

For example, $\bold{2} \oplus \bold {3} = \bold{5}$.

## Def. Product

Let $P_1, ..., P_n$ be ordered sets. The (Cartesian) product $P_1 \times ... \times P_n$ can be (coordinatewise) ordered with $\leqslant$ where $(x_1, ..., x_n) \leqslant (y_1, ..., y_n)$ if and only if, for all $i$, we have $x_i \leqslant_{P_i} y_i$. As a shorthand we will use $P^n$ to denote the $n$-fold cartesian product ordered with such order.

## Ex. ~

Let $X = \{1, 2, ..., n\}$ and $\phi : \mathcal{P}(X) \to \bold{2}^n$ such that $\phi(A) = (\varepsilon_1, ..., \varepsilon_n)$ where

$$
\varepsilon_i = \begin{cases}
   \ 1 &\text{if } \enspace i \in A \\
   \ 0 &\text{if } \enspace i \notin A
\end{cases}
$$

Then $\phi$ is an order-isomorphism.

## Def. Ups and Downs

Let $P$ be an ordered set and $Q \subseteq P$.

Then, we say $Q$ is a **down-set** (or **order ideal**) if for all $x \in Q$ and $y \in P$:

$$y \leqslant x \implies y \in Q$$

Dually, we say $Q$ is a **up-set** (or **order filter**) if for all $x \in Q$ and $y \in P$:

$$y \geqslant x \implies y \in Q$$

You may think of them as a subset "closed" under increase or decrase.

For an arbitrary subset $Q$ of ordered $P$, define the unary operators $\downarrow$ called **down** and $\uparrow$ **up** on the subset as:

$$
\downarrow Q := \{\ y \in P \ |\ (\exists x \in Q)\ y \leqslant x\ \} \\
\uparrow Q := \{\ y \in P \ |\ (\exists x \in Q)\ y \geqslant x\ \}
$$

and for $x \in P$:

$$
\downarrow x := \{\ y \in P \ |\ y \leqslant x\ \} \\
\uparrow x := \{\ y \in P \ |\ y \geqslant x\ \} \\
$$

Notice that:

* $\downarrow Q$ is the smallest down-set that contains $Q$.
* $Q$ is a **down-set** if and only if $Q =\ \downarrow Q$.
* $\downarrow \{x\} =\ \downarrow x$.
* $Q$ is a down-set of $P$ if and only if $P \setminus Q$ is an up-set of $P$ (or equivalently, a down-set of $P^\partial$).

Down-sets (dually up-sets) of the form $\downarrow x$ (dually $\uparrow x$) are called **principal**.

## Def. Ordered Set of Down-sets

The family of all down-sets of the ordered set $P$ is denoted by $\mathcal{O}(P)$. Under the inclusion order, $\mathcal{O}(P)$ is an ordered set.

When $P$ is finite, every non-empty down-set $Q$ of $P$ is expressible in the form

$$\bigcup_{i=1}^{k} \downarrow x_i$$

where $\{x_1, ..., x_k\} = \text{Max}\ Q$ is an antichain.

Notice that $\mathcal{O}(P)^\partial \cong \mathcal{O}(P^\partial)$ as $A \subseteq$ iff $P \setminus A \supseteq P \setminus B$.

## Thm. ~

Let $P, P_1, P_2$ be ordered sets. Then

* $\mathcal{O}(P \oplus \bold{1}) \cong \mathcal{O}(P) \oplus \bold{1}$
* $\mathcal{O}(\bold{1} \oplus P) \cong \bold{1} \oplus \mathcal{O}(P)$
* $\mathcal{O}(P_1 \sqcup P_2) \cong \mathcal{O}(P_1) \times \mathcal{O}(P_2)$
