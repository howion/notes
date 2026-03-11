# (Affine) Varieties

## _Def._ (Affine) Variety

Let $\mathbb{F}$ be a field and $f_1, ..., f_s \in \mathbb{F}[x_1, ..., x_n]$, then we define the **(affine) variety** of $f_1, ..., f_s$ as:

$$
\mathbf{V}(f_1, ..., f_s) := \Set{(a_1, ..., a_n) \in \mathbb{F}^n \mid f_i(a_1, ..., a_n) = 0 \quad \forall i}
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

We will commonly use the letter $V, W$ to denote the (affine) varieties.

> Notice that the graphs of polynomials functions $y = f(x)$ is the (affine) variety $\mathbf{V}(y - f(x))$

## _Thm._ Basic Properties of Varieties

Let $V, W \subseteq \mathbb{F}^n$ be (affine) varieties, then so are $V \cup W$ and $V \cap W$.

> Exercise

<!-- TODO: Prove and show V(z) \cup V(x,y) = V(zx, zy) -->

## Exercises
