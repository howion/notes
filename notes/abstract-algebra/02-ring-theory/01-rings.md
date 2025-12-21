# 1. Rings

> From now on, fundamental knowledge of Group Theory (notes) are assumed.

## _Def._ Ring

A set $R$ with two binary operations $+$ and $\cdot$, respectively called **addition** and **multiplication**, is called a **ring** if:

* $(R, +, 0)$ is an abelian group,
* $(R, \cdot)$ is a semigroup, and
* Distribute laws hold for $+$ and $\cdot$.

> Notice $R$ is necessarily non-empty as the additive identity $0 \in R$.

A ring is said to be **commutative** (but not abelian) if the semigroup is commutative.

If the semigroup has an identity (that is, if the multiplication is a monoid) then its identity, denoted with $1$ or $1_R$, is called the **identity element** or the **unity** (of the ring). Such identity is always unique (exercise).

If the ring is with unity, then an element $u \in R$ is said to be **unit** or **invertible** if there exists $v \in R$ such that $uv = vu = 1$. Such $v$ is unique and is called **multiplicative inverse** (or simply **inverse**) of $u$ and is denoted with $u^{-1}$.

> Do not mistake unit with unity. The unity is the **trivial unit**.

The **set of all units** in the ring $R$ is denoted by $\mathcal{U}(R)$.

The **set of all non-zero elements** of $R$ is denoted by $R^*$.

The multiplication is called **trivial** if for all $a,b \in R$ we have $ab = 0$.

<!-- In this case the ring is said to be **unital** or **unitary** or with **unit**. -->

## _Thm._ Basic Ring Properties

Let $R$ be a ring, then for all $a,b \in R$

1. $0a = 0 = a0$.
2. $-(a \cdot b) = (-a) b = a(-b)$.
3. $(-a)(-b) = ab$

For all $m,n \in \Z$

4. $n(ab) = (na)b = a(nb)$.
5. $(mn)a = m(na) = n(ma)$.

> **Exercise**

## _Thm._ Basic Ring with Unity Properties

Let $R$ be a ring with unity. Then

1. The $0$ is never an unit unless $0=1$.
2. $0=1$ only if $R=\{0=1\}$, the **trivial ring** or the **zero ring**.
3. If $u$ and $v$ are units in $R$, then so is $uv$ and $(uv)^{-1} = v^{-1}u^{-1}$.
4. $\mathcal{U}(R)$ is a group under multiplication, called the **group of units of $R$**.

## _Def._ Zero-Divisor

Let $R$ be a ring and $a \in R$. Then $a$ is called a **_left_ zero-divisor** if there exists $0 \neq b \in R$ such that $ab = 0$. It is defined analogously for the **_right_ zero-divisior**.

If $a$ is either left or right zero-divisor, then it is said to be a **zero divisor**.

## _Def._ Nilpotent Element

Let $R$ be a ring and $a \in R$. Then $a$ is said to be **nilpotent** if there exists an positive integer $n$ such that $a^n = 0$.

> Note that in any ring $0$ is nilpotent which is called the **trivial nilpotent element**.

## _Def._ Idempotent Element

Let $R$ be a ring and $a \in R$. Then $a$ is said to be **idempotent** if $a^2 = a$.

> Similarly, in any ring $0$ and, if exists, $1$ are idempotent which are called **trivial idempotents**.

We say two idempotent elements are **orthogonal** to each other if $ab = ba = 0$.

## _Thm._ (Binomial Theorem)

Let $R$ be a ring with identity, $n \in \N^+$ and for $a, b \in R$ we have $ab=ba$, then

$$
(a+b)^n = \sum_{k=0}^n {{n \choose k} a^k b^{n-k}}
$$

## _Def._ Integral Domain

A non-zero ring $R$ is called an **integral domain** if it has no non-trivial zero-divisors.

###
Therefore, let $R$ be an integral domain, and $a,b,c \in R$. If $ab = ac$, then either $a = 0$ or $b = c$.

## _Def._ Division Ring

A ring $(R, +, \cdot)$ is called an **division ring** (or a **skew-field**) if, equivalently

1. Every non-zero element of $R$, denoted $R^*$, has a multiplicative inverse, or
2. $(R^*, \cdot)$ forms a group.

## _Def._ Field

A ring $(R, +, \cdot)$ is called a **field** if, equivalently (exercise)

1. It is a commutative division ring, or
2. $R^*$ is abelian under multiplication.
3. It is a finite integral domain.

## _Thm._ On Integral Domains, Division Rings, and Fields

Let $R$ be a ring. Then

1. If $R$ is a field, then it is a division ring.
2. If $R$ is a division ring, then it is an integral domain.

Moreover,

3. If $R$ is a division ring, then multiplicative cancellation holds for non-zero elements.
4. If $R$ is an integral domain with unit, then only idempotent elements are $0$ and $1$.

> **Exercise**

## _Thm._ Basic Idempotent Properties

Let $R$ be a ring, and $a \in R$ idempotent. Then

1. $1-a$ is idempotent as well.
2. If $a$ is non-trivial, it is a zero-divisor as well. This shows that integral domains and division rings do not have such idempotents.

> **Exercise**
