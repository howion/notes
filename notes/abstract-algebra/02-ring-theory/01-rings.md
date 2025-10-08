# Rings

[**Go Back**](./00-index.md)

Knowledge of the group theory notes is assumed for the notes below.

## Def. Ring

A set $R$ with two binary operations $+$ and $\cdot$, called **addition** and **multiplication** respectively, is called a **ring** if:

* $(R, +)$ is an abelian group,
* $(R, \cdot)$ is a semigroup, and
* Distribute laws hold for $+$ and $\cdot$.

> Notice $R$ is necessarily non-empty as the additive identity $0 \in R$.

A ring is said to be **commutative** (but not abelian) if the semigroup is commutative.

If the semigroup has an identity (that is, if it is a monoid) then its identity is called the **identity element** or the **unity** (of the ring). Such identity is necessarily unique.

If the ring is with unity, then an element $u \in R$ is said to be **unit** or **invertible** if there exists $v \in R$ such that $uv = vu = 1$. Such $v$ is unique and is called **multiplicative inverse** (or simply **inverse**) of $u$ and is denoted with $u^{-1}$.

The **set of all units** in the ring $R$ is denoted by $\mathcal{U}(R)$.

<!-- In this case the ring is said to be **unital** or **unitary** or with **unit**. -->

## Thm. Basic Ring Properties

Let $(R, +, \cdot)$ be a ring, then

* The $0$ is never an unit unless $0=1$.
* $\mathcal{U}(R)$ forms a group under multiplication with $1$ as its identity. Notice that $0=1$ only if $R=\{0=1\}$, the **trivial ring**.
* For each $a \in R$, we have $0 \cdot a = 0 = a \cdot 0$.
* For all $a,b \in R$, we have $-(a \cdot b) = (-a) \cdot b = a \cdot (-b)$.
* For all $a,b \in R$ and $n \in \Z$, we have $n(ab) = (na)b = a(nb)$.
* For each $a \in R$ and $m,n \in \Z$, we have $(mn)a = m(na) = n(ma)$.

<details>
<summary><b>Proof</b></summary>
<br/>

Exercise.
</details>
