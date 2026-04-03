# Varieties

## _Def._ (Affine) Variety

Let $\mathbb{F}$ be a field and $f_1, ..., f_s \in \mathbb{F}[x_1, ..., x_n]$, then we define the **(affine) variety** of $f_1, ..., f_s$ as:

$$
\mathbf{V}(f_1, ..., f_s) := \Set{\bar{a} \in \mathbb{F}^n : f_i(\bar{a}) = 0 \quad \forall i}
$$

so that $\mathbf{V}(f_1, ..., f_s)$ is the set of all solutions to:

$$
\def\arraystretch{1.25}
\begin{array}{ll}
 &f_1(x_1, ..., x_n) \\
=& f_2(x_1, ..., x_n) \\
\vdots \\
=& f_s(x_1, ..., x_n) = 0
\end{array}
$$

> Notice how we used $\bar{a}$ to denote $(a_1, ..., a_n)$ and $f(\bar{a})$ to denote $f(a_1, ..., a_n)$ where each $a_i \in \mathbb{F}$.
>
> **IMPORTANT:** From now on, unless otherwise stated, by **variety** we will mean **affine variety**.

We will commonly use the letter $V, W$ to denote the varieties.

> Notice that the graphs of polynomials functions $y = f(x)$ is the variety $\mathbf{V}(y - f(x))$

## _Thm._ Basic Properties of Varieties

Let $V, W \subseteq \mathbb{F}^n$ be varieties, then so are $V \cup W$ and $V \cap W$.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

Use induction and the knowledge polynomial in one variable of degree $m$ has at most $m$ distinct roots.
</details>

<!-- TODO: Prove and show V(z) \cup V(x,y) = V(zx, zy) -->

<!-- TODO: Questions, re-read the chapter (exampls and the end questions) -->

## Exercises

### #1
