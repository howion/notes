# Isometries

## _Def._ Isometry

Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces. A map $f: X \to Y$ is called an **isometry** or **distance-preserving map** if for all $a, b \in X$,

$$
d_X(a, b) = d_Y(f(a), f(b))
$$

Two metric spaces $(X, d_X)$ and $(Y, d_Y)$ are called **isometric** if there is a _bijective_ isometry between them.

## _Thm._ Basic Properties of Isometries

Let $f: X \to Y$ be an isometry on the metric spaces $(X, d_X)$ and $(Y, d_Y)$, then

1. $f$ is always injective.
2. $f$ is _not necessarily surjective_. For example $x \mapsto (x,0)$ is an isometry but not surjective on $\R \to \R^2$.
3. Composition of isometries are an isometry.

> Exercise

<!-- 3. $f$ is always continuous. In particular, it is $1$-Lipschitz and uniformly continious. -->

## _Thm._ Inverse of an Isometry

Let $f: X \to Y$ be an isometry. If $f$ is bijective then $f^{-1}$ is also an isometry. Consider the case $f$ is not bijective, then we can construct an bijective isometry

$$
\def\arraystretch{1.25}
\begin{array}{cccc}
f':& X &\to& \text{Im}(f) \\
   & x &\mapsto& f(x)
\end{array}
$$

so that since $f$ is injective (and thus $f'$) and $f'$ is surjective we have, by construction, $f'$ bijective.

## _Thm._ Isometries are Continuous

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

## _Def._ $\text{Isom}(X)$

Let $(X, d)$ be a metric space, then set of all _bijective_ isometries on $X$ denoted $\text{Isom}(X)$ forms a group under composition called the **(full) isometry group of $X$**.

> Exercise.

## Exercises

### #1

Let $f: X \to Y$ be an isometry on the metric spaces $(X, d_X)$ and $(Y, d_Y)$. Show that $f$ preserves diameters so that for $A \subseteq X$ we have

$$
\text{diam}(A) = \text{diam}(f(A))
$$

where $\text{diam}(X) := \sup\Set{d(x,y) \mid x,y \in X}$.
