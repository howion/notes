# Groups

[**Go Back**](./00-index.md)

## Def. Group

A **group** is an ordered pair $(G, \cdot)$ where $G$ is a set and $\cdot$ is a binary operation on $G$ that satisfies:

> Simply, $\cdot$ is a (total) function from $G$ to $G$. Notice that $G$ is any set, finite or infinite.

* **Associativity**, that is, for all $a,b,c \in G$ we have $(a \cdot b) \cdot c = a \cdot (b \cdot c)$
* **Identity**, that is, there exists $e \in G$ called **identity** (of $G$) such that for all $a \in G$ we have $a \cdot e = e \cdot a = a$.
* **Inverse**, that is, for each $a \in G$ there exists an element (called **inverse**) $b \in G$ such that $a \cdot b = b \cdot a = e$.

Noting that the **identity** of a group and the **inverse** of an element in that group is always unique (exercise) we will denote the inverse of an element $a$ with $a^{-1}$ unless it is **abelian**.

A group is called **abelian** (or **commutative**) if its elements commute, that is, if for all $a,b \in G$ we have $a \cdot b = b \cdot a$. For abelian groups, we will prefer the additive notation for the binary operation and denote the inverse with $-a$ instead.

You might sometimes want to consider the group as a triplet with identiy $(G,\cdot, e)$ as it is not clear otherwise what is the identity explicitly.

<details>
<summary><b>Remarks</b></summary>
<br/>

The definition (or axioms) given above are not minimal. For example, it's enough to just accept **right-identity** and **right-inverse** for it to be group. Using just these two, you can later prove it also holds for the **left-identity** and **left-inverse** with the help of the associative property.

Associative property by far is the most powerful property of the group. It allows you to write your expression (involving only $\cdot$) without any parentheses and much more.

The uniqueness of the identity element does not require the use of associativity.
</details>

## Thm. Group Basics

Let $(G, \cdot)$ be a group. Then:

1. Identity $e$ is unique.
2. For each $a \in G$, inverse of $a$ is unique.
3. For each $a \in G$, we have $(a^{-1})^{-1} = a$.
4. For all $a,b \in G$, we have $(a \cdot b)^{-1} = b^{-1} \cdot a^{-1}$.
6. Associative property implies that the expression $a_1 \cdot a_2 \cdot \cdots \cdot a_n$ is the same no matter how the expression bracketed. Note that this is a byproduct of the associative property alone.

<details>
<summary><b>Proof</b></summary>
<br/>

Exercise.
</details>

## Def. Order

Let $(G, \cdot, e)$ be a group and $a \in G$.

The **order of (the group) $G$** is denoted by $|G|$ and is the cardinality of the set $G$.

The **order of (the element) $a$** is denoted by $|a|$ and (if exists) it is the least positive integer $n$ such that $x^n = e$. If there is no such $n$, we say the order is infinite.

If the order is finite, we will denote it with $|x| \lt \infty$.

## Dihedral Groups

See [**Wikipedia: Dihedral group**](https://en.wikipedia.org/wiki/Dihedral_group).

## Symmetric Groups

See [**Wikipedia: Dihedral group**](https://en.wikipedia.org/wiki/Symmetric_group).

## Matrix Groups

## The Quaternion Group

See [**Wikipedia: Quaternion group**](https://en.wikipedia.org/wiki/Quaternion_group).

## Def. Homomorphisms

Let $(G, \cdot_G, e_G)$ and $(H, \cdot_H, e_H)$ be groups.

The (total) function (or map) $\varphi: G \to H$ is called a **(group) homomorphism** if, for all $a, b \in G$:

$$\varphi(a \cdot_G b) = \varphi(a) \cdot_H \varphi(b)$$

> Mostly, we will not be as explicit about the operations and simply write $\varphi(ab)=\varphi(a)\varphi(b)$.

The homomorphism $\varphi: G \to H$ is called:

* an **monomorphism** if it is injective,
* an **epimorphism** if it is surjective,
* an **isomorphism** if it is bijective.

<!--  -->

* an **endomorphism** if $G=H$, and
* an **automorphism** if it is an endomorphism and bijective.

> Notice that if there exists an isomorphism between two groups, then basically, they have the  same structure*.

## Def. Group Action

See [**Wikipedia: Group action**](https://en.wikipedia.org/wiki/Group_action).

Let $(G, \cdot, e)$ be a group and $X$ a set. A binary operation $\bullet: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

* $a \bullet (b \bullet x) = (a b) \bullet x$, and
* $e \bullet x = x$

> For establishing general properties of group actions, it suffices to consider only left actions.
