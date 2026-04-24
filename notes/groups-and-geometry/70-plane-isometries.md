# Plane Isometries

> In this section, by $\R^2$, we mean the two-dimensional plane in $\R^2$ with the usual Euclidian distance.

## _Thm._ $\text{Isom}(\R^n)$

Let $\text{Isom}(\R^n)$ denote the set of all isometries $\R^n \to \R^n$, then it forms a group under composition.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

We have already proved closure. Associativity, identity and inverse are trivial.
</details>

## _Thm._ Plane Isometry Properties

An isometry $u$ of $\R^2$

1. maps any triangle $ABC$ to a congruent triangle
2. preserves angles, and
3. maps lines to lines

> Exercise

## _Thm._ $\text{Isom}(\R^2)$ Determinacy

An isometry of $\R^2$ is determined by its effect on any three non-collinear points.

<!-- ## _Def._ Orientation

Let $\delta = ABC$ be a triangle with three sides $AB$, $BC, $CA$ and three (interior) angles $BCA$, $CAB$, $ABC$. The points $A,B,C$ are called the **vertices** of $\delta$ and their disposition determines an **orientation** of $\delta$ which is declared positive if  -->

## _Def._ Translations

A **translation** $t$ in $\R^2$ is a map that moves every point of the plane through a fixed distance in a fixed direction so that

$$
(x_1, x_2) \mapsto (x_1 + a_1, x_2 + a_2)
$$

where $\bold{a} = (a_1, a_2)$ is a constant.

Three key properties of translations are

* they are orientation preserving,
* have no fixed points unless $\bold{a} = \bold{0}$, and
* compose according to $t(\bold{a})t(\bold{b}) = t(\bold{a+b})$.

## _Def._ Rotation

A **rotation** $s$ is a map that moves every point of the plane through a fixed angle $\theta$ about a fixed point $O$ called the **centre**.

Three key properties of rotations are

* they are orientation preserving,
* have just one fixed point, and
* and compose according to $s(O, \alpha)s(O, \beta) = s(O, \alpha + \beta)$.

## _Def._ Reflection

A **reflection** $r$ is a map that moves every point of the plane to its mirror-image in a fixed line $\ell$ called the **axis**..

Three key properties of reflections are

* they are orientation reversing,
* fix every point on the line $\ell$, and
* satisfy $r(\ell)^2 = \bold{1}$.

> Reflection through a line $\ell$ is sometimes denoted with $\sigma_\ell$.

## _Thm._ Normal Form Theorem

Fix a point $O$ and line $\ell$ in $\R^2$ with $O \in \ell$, then any isometry $u$ of $\R^2$ can be written uniquely in the form

$$
u = r^\epsilon s t
$$

where

* $r$ is a reflection in $\ell$
* $\epsilon = \pm 1$
* $s$ is a rotation around the point $O$, and
* $t$ is a translation.

## _Def._ Glide Reflection

Given a pair $P, P'$ of distinct points on a line $\ell$ in $\R^2$, the isometry

$$
q(P, P') := r(\ell) t(\overrightarrow{PP'})
$$

is called a **glide reflection**. Such isometries have no fixed points and orientation reversing.

## _Thm._ Product of Three Reflections

The product of three reflections in $\R^2$ is either a reflection or a glide reflection.

## _Thm._ Classification of Plane Isometries

In $\R^2$, an isometry is either

* identity (d),
* reflection (db)
* rotation (dp)
* translation (dd), or
* glide reflection (dq)

## _Thm._ Characterisation of Plane Isometries

For the $4$ isometry types we defined so far, we have the following characterization table

<center>

| Fixed Point? | Yes        | No               |
|--------------|------------|------------------|
| OP           | Rotation   | Translation      |
| OR           | Reflection | Glide Reflection |

</center>

## _Thm._ Isometries in the Complex Plane

Every isometry of the Euclidian plane $\R^2$ viewed as the complex line $\Complex$ is of one of the forms

* $f(z) = \alpha z + \beta$, or
* $f(z) = \alpha \bar{z} + \beta$

where $\alpha, \beta \in \Complex$ and $|\alpha| = 1$.

Moreover, one is orientation-preserving and the other one is orientation-reversing.

## _Thm._ General Plane Isometry

Let $u$ be any plane isometry, then there exists an $2 \times 2$ orthogonal matrix $\bold{M}$ and a vector $v \in \R^2$ such that

$$
u(\bold{x}) = \bold{v} + \bold{M} \bold{x}
$$

for all $x \in \R^2$ where $\bold{v} = u(\bold{0})$ and $\bold{M}$ is uniquely determined. Converse also holds i.e. this defines an isometry.

Therefore, the pair $(\bold{v}, \bold{M})$ where $\bold{v} \in \R^2$ and $\bold{M}$ is an orthogonal $2 \times 2$ matrix determines an isometry and vice-versa.

> In row-vector notation, we would have $u(\bold{x}) = \bold{v} + \bold{x}\bold{M}^T$ where $\bold{x}$ and $\bold{v}$ are row-vectors.

## _Thm._ Explicit Classification of Plane Isometries

Before we continue, let $u$ be an plane isometry, and define

$$
\bold{A}_\theta = \begin{bmatrix}
   \cos\theta & -\sin\theta \\
   \sin\theta & \cos\theta
\end{bmatrix}, \quad

\bold{B}_\theta = \begin{bmatrix}
   \cos\theta & \sin\theta \\
   \sin\theta & -\cos\theta
\end{bmatrix}
$$

then, if $u$ is a

* **translation**, then is of the form $(\bold{v} , \bold{I})$ for some translation vector $\bold{v}$,
* **rotation** anti-clockwise through $\theta$ about the origin, then is of the form $(\bold{0}, \bold{A}_\theta)$,
* **reflection** in the line $\ell$ passing through the origin, then is of the form $(\bold{0}, \bold{B}_{2\theta})$ where $\theta$ is the clockwise angle between the line and the $x$-axis.
* **rotation** anti-clockwise through $\theta$ about the point $\bold{c}$, then is of the form $(\bold{c} - \bold{A}_\theta \bold{c}, \bold{A}_\theta)$
* **reflection** in any line $m$, then is of the form $(2\bold{a}, \bold{B}_{2\theta})$ where $\bold{a}$ is the vector from the origin to the line &mdash; where $\theta$ defined as above,
* **glide reflection** with the line $m$ for points $\bold{a}$ and $\bold{b}$, then is of the form $(2 \bold{a} + \bold{b}, \bold{B}_{2\theta})$ &mdash; where $\theta$ and $\bold{a}$ defined as above.

## _Thm._ $3$-product of Reflections

Every plane isometry is a composition of at most $3$ reflections.

> Note how every reflection changes orientation.

Moreover, the composition of three reflections in the plane is always an orientation-preserving isometry, hence it is either

* a reflection, or
* glide reflection.

## Exercises

### #1

Show that if $\sigma_m \sigma_n$ where $m \neq n$ fixes a point $P$, then $P$ is on both $m$ and $n$.
