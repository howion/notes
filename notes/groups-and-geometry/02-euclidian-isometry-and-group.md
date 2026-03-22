# Euclidian Isometry and Group

From now on we will mostly work on $\R^n$ with the usual Euclidean Distance.

## Def. Euclidian Isometry

From now on we will call an isometry $f: \R^n \to \R^n$ under the Euclidian distance an **Euclidian isometry**.

Notice that $\tilde{f}(x) := f(x) - f(0)$ which we will call **reduced Euclidian isometry of $f$** is also an origin-fixing Euclidian isometry so that $\tilde{f}(0) = 0$.

## Thm. Euclidian Isometries Are Bijective

Let $f: \R^n \to R^n$ be an Euclidian Isometry, then $f$ is bijective.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

We already know $f$ is surjective. Prove that $\bar{f}$ is surjective.
</details>

<!-- TODO: First how that \bar{f}(x) = Ax where A is invertible -->

## Thm. Basic Properties of Euclidian Isometries

Let $f$ be an Euclidian isometry, then

1. $f$ preservers midpoints, that is
    $$
    f\left(\dfrac{x+y}{2}\right) = \dfrac{f(x) + f(y)}{2}
    $$
2. $\tilde{f}$ _preserves norms_, that is $||\tilde{f}(x)|| = ||x||$. This is not necessarily the case for $f$.
3. $\tilde{f}$ _preserves inner product_, that is $\braket{\tilde{f}(x),\tilde{f}(y)} = \braket{x,y}$. This is not necessarily the case for $f$.
4. $\tilde{f}$ is _additive_, that is $\tilde{f}(x+y) = \tilde{f}(x) + \tilde{f}(y)$. This is not necessarily the case for $f$.

> Exercise

<!-- TODO: Give general forms Ax+b, affinity, and orthogonlity and A \in O(n)-->

## Thm. $\text{Isom}(\R^n)$

Let $\text{Isom}(\R^n)$ denote the set of all isometries $\R^n \to \R^n$, then it forms a group under composition.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

We have already proved closure and associativity and identity and inverse are trivial.
</details>

## Def. Euclidian Group
