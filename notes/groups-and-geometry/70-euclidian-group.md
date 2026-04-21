# Euclidian Group

## _Thm._ $\text{Isom}(\R^n)$

Let $\text{Isom}(\R^n)$ denote the set of all isometries $\R^n \to \R^n$, then it forms a group under composition.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

We have already proved closure. Associativity, identity and inverse are trivial.
</details>

## _Thm._ General Euclidian Isometry

Let $f: \R^n \to \R^n$ be any Euclidian isometry, then there exists an orthogonal matrix $\bold{A} \in \R^{n \times n}$ and a vector $b \in \R^n$ such that

$$
f(x) = \bold{A}x + b
$$

for all $x \in \R^n$ where $b = f(0)$ and $\bold{A}$ is uniquely determined.

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

## _Def._ Euclidian Group

> The Euclidian Group is a subgroup of the group of affine transformations. Precisely, it is the subgroup that preserve the Euclidian distance between any two points.

The isometries of the Euclidian $n$-space $\R^n$ form a group under function composition called the **Euclidian group** denoted by $\mathbb{E}^n$. Equivalently, it could be defined as the semidirect product of translational group $\bold{T}(n)$ and the orthogonal group $\bold{O}(n)$ so that

$$
\mathbb{R}^n = \bold{T}(n) \rtimes \bold{O}(n)
$$

In the Euclidian group, isometries are often split into two classed based on how they affect the **orientation**, namely **direct isometries** and **opposite isometries**.

Direct isometries forms a subgroup in $\mathbb{E}(n)$ denoted with $\mathbb{E}^+(n)$ and their linear part has determinant $+1$.

Opposite isometries are not a subgroup on their own, but form the other half of $\mathbb{E}^n$.

## _Thm._ $\mathbb{E}^2$

In $\mathbb{E}^2$, every direct isometry is a translation or a rotation, and every opposite isometry is a reflection or a glide reflection.

> A reflection in a line followed by a translation parallel to the same line is called a **glide reflection**.

<!-- See: p.151 armstrong -->
