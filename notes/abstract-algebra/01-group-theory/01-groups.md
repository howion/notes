# Groups

## Def. Group

A **group** is an ordered pair $(G, \cdot)$ where $G$ is a set and $\cdot$ is a binary operation on $G$ that satisfies:

> Simply, $\cdot$ is a (total) function from $G$ to $G$. Notice that $G$ is any set, finite or infinite.

* **Associativity**, that is, for all $a,b,c \in G$ we have $(a \cdot b) \cdot c = a \cdot (b \cdot c)$

> This alone defines a **semigroup**.

* **Identity**, that is, there exists $e \in G$ called **identity** (of $G$) such that for all $a \in G$ we have $a \cdot e = e \cdot a = a$.

> Until here it defines a **monoid** where identity is two-sided, namely left and right.

* **Inverse**, that is, for each $a \in G$ there exists an element (called **inverse**) $b \in G$ such that $a \cdot b = b \cdot a = e$.

Noting that the **identity** of a group and the **inverse** of an element in that group is always unique (exercise) we will denote the inverse of an element $a$ with $a^{-1}$ unless it is **abelian**.

A group is called **abelian** (or **commutative**) if its elements commute, that is, if for all $a,b \in G$ we have $a \cdot b = b \cdot a$. For abelian groups, we may prefer the additive notation $+$ instead of $\cdot$ for the binary operation and denote the inverse with $-a$ instead.

We might also consider the group as a triplet with identiy $(G,\cdot, e)$ as it is not clear otherwise what is the identity explicitly.

## Remarks

The definition (or axioms) given above are not minimal. For example, it's enough to just accept **right-identity** and **right-inverse** for it to be group. Using just these two, you can later prove it also holds for the **left-identity** and **left-inverse** with the help of the associative property.

Associative property by far is the most powerful property of the group. It allows you to write your expression (involving only $\cdot$) without any parentheses and much more.

Indeed a structure which only satisfies associative property is called a **semigroup**. A semigroup with identity is called a **monoid** and a monoid with inverses is called a **group**.

## Thm. Basic Group Properties

Remembering any group is also a monoid and thus a semigroup, let $(G, \cdot)$ be a group. Then:

1. Identity $e$ is unique. The uniqueness of the identity element does not require the use of associativity.
2. For each $a \in G$, inverse of $a$ is unique.
3. For each $a \in G$, we have $(a^{-1})^{-1} = a$.
4. For all $a,b \in G$, we have $(a \cdot b)^{-1} = b^{-1} \cdot a^{-1}$. Indeed, in general, $(a_1 \cdots a_n)^{-1} = a_n^{-1} \cdots a_1^{-1}$.

> Exercise

## Thm. Basic _Monoid_ Properties

If $M$ is a monoid, then

1. The identity element of $M$ is unique.

## Thm. Semigroup to Group

Let $(S, \cdot)$ be a semigroup, then it is a group if and only if both of the following hold:

* Left-identity exists, and
* Left-inverse exists for each $s \in S$.

> By symmetry, the analogous result holds for rights instead of left.

## Thm. Semigroup to Group 2

Let $S$ be a semigroup, then it is a group if and only if for all $a,b \in S$ the equations

$$
\begin{array}{ll}
ax = b \\
ya = b
\end{array}
$$

have solutions in $G$.

> Exercise

## Thm. Generalized Associative Law

Let $S$ be a semigroup and $a_i \in S$. Associative property implies that the expression $a_1 \cdot a_2 \cdot \cdots \cdot a_n$ is the same no matter how the expression bracketed.

<details>
<summary><b>Proof</b></summary>
<br/>

By induction. Exercise.
</details>

> Similarly one could also prove **Generalized Commutative Law** for the commutative property.

## Def. Order

Let $(G, \cdot)$ be a group and $a \in G$.

The **order of (the group) $G$** is denoted by $|G|$ and is the cardinality of the set $G$.

The **order of (the element) $a$** is denoted by $|a|$ and (if exists) it is the least positive integer $n$ such that $x^n = e$. If there is no such $n$, we say the order is infinite.

> Order of an element $a$ is sometimes denoted with $o(a)$.

If the order of an element $x$ (or group) is finite, we will denote it with $|x| \lt \infty$. Moreover, if $x^2 = x$, then $x$ is called an **idempotent element** where $e$ is the **trivial idempotent element**.

We say that a group if **torsion-free** if every non-identity element has infinite order. If every element of a group has finite order then we say the group is **periodic**.

If orders of a periodic group are bounded, then the least common multiple of their orders is called the **exponent** of the group. If the orders of elements of a periodic group are powers of prime $p$, then we call the group a $p$-group.

## Notation. Subsets

Let $G$ be a group and $A,B \subseteq G$, then we define

1. $AB := \Set{ab \in G | a \in A, \> b \in B}$,
2. $A^0 := \{e\}$,
3. $A^n := AA^{n-1}$,
4. $A^{-1} := \Set{a^{-1} \in G| a \in A}$.

## Notation. The Additive Notation

If the binary operation is written additively, which is mostly the case for abelian groups, we may write:

* $0$ for the identity instead of $1$ (or $e$ for that matter).
* $n a$ instead of $a^n$ where $n \in \Z$. Notice that operation between $n$ and $a$ is not the binary operation of our structure but rather "$n$ times $a$".

We _define_ $a^0$ (or $0a$) as the identity element $1$ or $0$. Notice that, in additive notation, $0a$ is not the multiplication by the identity but rather "$0$ times $n$" which we define to be _the identity_ $0$.

<!-- We define $a^0$ to be the identity element which is mostly denoted as $1$ in multiplicative notation and $0$ in additive notation (in abelian case). -->

## Thm. More Group Properties

Let $G$ be a group, then

1. If $a^2 = e$ for all $a \in G$, then $G$ is abelian. (Such groups are called **elementary abelian $2$-groups**.)
2. If $|G|$ is finite and even, then it has an element $x$ of order $2$. Moreover, $x \in Z(G)$ that is $g^{-1}xg = x$ for all $g \in G$.
3. If $A \subseteq G$ and $g \in G$, then $|A| = |gA|=|Ag|$.

<details>
<summary><b>Proof</b></summary>
<br/>

1. Exercise,
2. Consider $G \setminus \{e\}$ and the map $x \mapsto x^{-1}$.

</details>

## Exercises

### #1

Let $G$ be a group and $x,y \in G$ such that $xy$ has finite order $k$, then $|xy| = |yx|$.

### #2

Let $G$ be a group and $A,B \subseteq G$ such that $|A| + |B| \gt |G|$, then $G = AB$.

<details>
<summary><b>Proof</b></summary>
<br/>

See (7) from [**Graduate Algebra Problems with Solutions**](https://users.metu.edu.tr/matmah/Graduate-Algebra-Solutions/graduate-algebra-solutions-10-11-2011.pdf).
</details>

### #3

Let $G$ be a group of finite order and $S \subseteq G$ such that $|S| \gt \frac{|G|}{2}$, then $S^2 = G$.

<details>
<summary><b>Proof</b></summary>
<br/>

See (8) from [**Graduate Algebra Problems with Solutions**](https://users.metu.edu.tr/matmah/Graduate-Algebra-Solutions/graduate-algebra-solutions-10-11-2011.pdf).

</details>
