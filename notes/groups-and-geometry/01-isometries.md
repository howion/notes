# Isometries

## Def. Isometry

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces. A map $f: X \to Y$ is called an **isometry** or **distance-preserving map** if for all $a, b \in X$,

$$
d_X(a, b) = d_Y(f(a), f(b))
$$

Two metric spaces $(X, d_X)$ and $(Y, d_Y)$ are called **isometric** if there is a _bijective_ isometry between them.

## Thm. Basic Properties of Isometry

Let $f: X \to Y$ be an isometry on the metric spaces $(X, d_X)$ and $(Y, d_Y)$, then

1. $f$ is always injective.

    > Trivial, as otherwise distance preservation would be violated $f(a)=f(b)$ for $a \neq b$.

2. $f$ is _not necessarily surjective_. For example $x \mapsto (x,0)$ is an isometry but not surjective on $\R \to \R^2$.
3. Composition of isometries are an isometry.
4. Diameters are preserved, that is

    $$
    \sup d_X(x,y) = \sup d_Y(f(x), f(y))
    $$

> Exercise
<!-- 3. $f$ is always continuous. In particular, it is $1$-Lipschitz and uniformly continious. -->

## Thm. Isometries are Continious

An isometry $f: X \to Y$ is always continuous.

<details>
<summary><b>Proof</b></summary>
<br/>

For any $x,y \in X$ we have

$$
d_X(a, b) = d_Y(f(a), f(b))
$$

so that if $x_n \to x$, then $d_X(x_n, x) \to 0$, therefore $f(x_n) \to f(x)$ due to distance-preservation.
</details>

<!--
    TODO:
    * Also mention 1-Lipschitz and uniformity?
    * Topology is preserved
    * Open balls are preserved
    * Cauchy Sequences preserved
    * Diameter preserved
-->
