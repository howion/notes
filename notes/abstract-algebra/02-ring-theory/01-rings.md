# Rings

> From now on, knowledge of the [**Group Theory notes**](../01-group-theory/01-groups.md) is assumed.

## Def. Ring

A set $R$ with two binary operations $+$ and $\cdot$, respectively called **addition** and **multiplication**, is called a **ring** if:

* $(R, +, 0)$ is an abelian group,
* $(R, \cdot)$ is a semigroup, and
* Distribute laws hold for $+$ and $\cdot$.

> Notice $R$ is necessarily non-empty as the additive identity $0 \in R$.

A ring is said to be **commutative** (but not abelian) if the semigroup is commutative.

If the semigroup has an identity (that is, if the multiplication is a monoid) then its identity, denoted with $1$ or $1_R$, is called the **identity element** or the **unity** (of the ring). Such identity is necessarily unique.

If the ring is with unity, then an element $u \in R$ is said to be **unit** or **invertible** if there exists $v \in R$ such that $uv = vu = 1$. Such $v$ is unique and is called **multiplicative inverse** (or simply **inverse**) of $u$ and is denoted with $u^{-1}$.

> Do not mistake unity with unit. There may be one unique unit and if there is there may be many units.

The **set of all units** in the ring $R$ is denoted by $\mathcal{U}(R)$.

The **set of all non-zero elements** of $R$ is denoted by $R^*$.

<!-- In this case the ring is said to be **unital** or **unitary** or with **unit**. -->

## Thm. Basic Ring Properties

Let $R$ be a ring, then

* The $0$ is never an unit unless $0=1$.
* $0=1$ only if $R=\{0=1\}$, the **trivial ring** or the **zero ring**.
* For each $a \in R$, we have $0a = 0 = a0$.
* For all $a,b \in R$, we have $-(a \cdot b) = (-a) b = a(-b)$.
* For all $a,b \in R$ and $n \in \Z$, we have $n(ab) = (na)b = a(nb)$.
* For each $a \in R$ and $m,n \in \Z$, we have $(mn)a = m(na) = n(ma)$.

<details>
<summary><b>Proof</b></summary>
<br/>

Exercise.
</details>

## Thm. Basic Ring with Unity Properties

Let $R$ be a ring with unity. Then

1. If $u$ and $v$ are units in $R$, then so is $uv$ and $(uv)^{-1} = v^{-1}u^{-1}$.
2. $\mathcal{U}(R)$ is a group under multiplication, called the **group of units of $R$**.
3. Unless the ring is trivial, $0$ is never a unit.

## Def. Zero-Divisor

Let $R$ be a ring and $a \in R$. Then $a$ is called a **_left_ zero-divisor** if there exists $0 \neq b \in R$ such that $ab = 0$. It is defined analogously for the **_right_ zero-divisior**.

If $a$ is either left or right zero-divisor, then it is said to be a **zero divisor**.

## Def. Nilpotent Element

Let $R$ be a ring and $a \in R$. Then $a$ is said to be **nilpotent** if there exists an positive integer $n$ such that $a^n = 0$.

> Note that in any ring $0$ is nilpotent which is called the **trivial nilpotent element**.

## Def. Idempotent Element

Let $R$ be a ring and $a \in R$. Then $a$ is said to be **idempotent** if $a^2 = a$.

> Similarly, in any ring $0$ and, if exists, $1$ are idempotent which are called **trivial idempotents**.

We say two idempotent elements are **orthogonal** to each other if $ab = ba = 0$.

## Thm. (Binomial Theorem)

Let $R$ be a ring with identity, $n \in \N^+$ and for $a, b \in R$ we have $ab=ba$, then

$$
(a+b)^n = \sum_{k=0}^n {{n \choose k} a^k b^{n-k}}
$$

## Def. Integral Domain

A non-zero ring $R$ is called an **integral domain** if it has no non-trivial zero-divisors.

## Def. Division Ring

A ring $(R, +, \cdot)$ is called an **division ring** or a **skew-field** if, equivalently

1. $(R \setminus \{0\}, \cdot)$ forms a group, or
2. Every non-zero element of $R$, denoted $R^*$, has a multiplicative inverse.

## Def. Field

A ring $(R, +, \cdot)$ is called a **field** if, equivalently

1. It is a commutative division ring, or
2. $R^*$ is abelian under multiplication.
3. It is a finite integral domain.

## Thm. On Integral Domains, Division Rings, and Fields

Let $R$ be a ring. Then

1. If $R$ is a field, then it is a division ring.
2. If $R$ is a division ring, then it is an integral domain.

<!--  -->

3. If $R$ is a division ring, then multiplicative cancellation holds for non-zero elements.
4. If $R$ is an integral domain with unit, then only idempotent elements are $0$ and $1$.
