# Euclidian Isometries

From now on we will mostly work on the **Euclidian $n$-space** $\R^n$.

> Sometimes the notation $\mathbb{E}^n$ is used to denote the **Euclidian $n$-space** which is formally a finite-dimensional inner product space over the real numbers. For simplicity we have preferred $\R^n$ but $\mathbb{E}^n$ better indicates that it is an Euclidian space and not any other space defined on $\R^n$.

Recall that any inner product on a vector space induces a norm such that

$$
\Vert x \Vert = \sqrt{\Braket{x,x}}
$$

so reversing this, we get the following **polarization identity** for $\R^n$:

$$
\Braket{x,y} = \dfrac{\Vert x\Vert^2 + \Vert y \Vert^2 - \Vert x-y\Vert^2}{2}
$$

<!-- ## Thm. Every Orthogonal Matrix is a Product of Reflections -->

## _Def._ Euclidian Isometry

From now on we will call an isometry $f: \R^n \to \R^n$ under the Euclidian distance an **Euclidian isometry**.

Notice that $\tilde{f}(x) := f(x) - f(0)$, which we will call **reduced Euclidian isometry of $f$**, is an **origin-fixing** Euclidian isometry so that $\tilde{f}(0) = 0$.

## _Thm._ Euclidian Isometries are Bijective

Let $f: \R^n \to \R^n$ be any Euclidian isometry, then $f$ is bijective.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

We already know $f$ is injective. Prove that $\bar{f}$ is surjective.
</details>

## _Thm._ $\text{Sym}(\R^n) = \text{Isom}(\R^n)$

> Obvious as each Euclidian isometry is bijective.

## _Thm._ Norm Preservation

Let $\tilde{f}$ be an origin-fixing Euclidian isometry, then $\tilde{f}$ preserves the norm so that, for all $x \in \R^n$

$$
\Vert \tilde{f}(x) \Vert = \Vert x \Vert
$$

> Exercise

## _Thm._ Inner Product Preservation

Let $\tilde{f}$ be an origin-fixing Euclidian isometry, then $\tilde{f}$ preserves the inner product so that, for all $x,y \in \R^n$

$$
\Braket{x, y} = \Braket{\tilde{f}(x), \tilde{f}(y)}
$$

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

Use the polarization identity
</details>

## _Thm._ Additivity

Let $\tilde{f}$ be an origin-fixing Euclidian isometry, then $\tilde{f}$ is additive so that, for all $x,y \in \R^n$

$$
\tilde{f}(x + y) = \tilde{f}(x) + \tilde{f}(y)
$$

> TODO: Add not so simple proof which make use of norm expension and preservation

## _Thm._ Euclidian Isometry Linearity

An Euclidian isometry $f: \R^n \to \R^n$ is **linear if and only if** it fixes the origin.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

Linear $\implies$ origin-fixing is obvious so assume $f$ fixes the origin. We have already proved inner product preservation and additivity. We just need to prove homogenity.

> We should prove this here in detail and homogenity proof might be hard
</details>

<!-- TODO: Give general forms Ax+b, affinity, and orthogonlity and A \in O(n)-->

## _Thm._ General Euclidian Isometry

Let $f: \R^n \to \R^n$ be any Euclidian isometry, then there exists an orthogonal matrix $\bold{A} \in \R^{n \times n}$ and a vector $b \in \R^n$ such that

$$
f(x) = \bold{A}x + b
$$

for all $x \in \R^n$ where $b = f(0)$ and $\bold{A}$ is uniquely determined.

> Recall that an orthogonal matrix $\bold{A}$ is an $n \times n$ matrix such that $\bold{A}^T \bold{A} = \bold{I}$.

## _Thm._ $\text{Isom}(\R)$

Let $f \in \text{Isom}(\R)$, then $f$ is of the form

$$
f(x) = \epsilon x + b
$$

with $\epsilon = \pm 1$ and $b \in \R$. Moreover, if

* $\epsilon = 1$, then it is a translation, and
* $\epsilon = -1$, then it is a reflection

> Direct result of the theorem General Euclidian Isometry proven above.

## _Thm._ Euclidian Isometries Preserve the Midpoint

Let $f: \R^n \to \R^n$ be an Euclidian isometry, then it preserves the midpoints so that

$$
f\left(\dfrac{x+y}{2}\right) = \dfrac{f(x) + f(y)}{2}
$$

> Exercise.
>
> Note that this is not necessarily the case for other isometries nor other other norms on $\R^n$.
