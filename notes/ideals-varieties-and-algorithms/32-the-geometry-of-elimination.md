# The Geometry of Elimination

Now, we will give a geometric interpretation of the elimination and extension theorems.

## _Def._ Projection Map

Let $V = \mathbb{V}(f_1, ..., f_s) \subseteq \Complex^n$, then we define the **projection map**

$$
\def\arraystretch{1.25}
\begin{array}{lrll}
\pi_\ell :& \Complex^n &\to& \Complex^{n - \ell} \\
& (a_1, ..., a_n) &\mapsto& (a_{\ell + 1}, ..., a_n)
\end{array}
$$

then, in $\Complex^{n - \ell}$, we have

$$
\pi_\ell(V) \subseteq \bold{V}(I_\ell)
$$

> This is basically the projection of $V$ onto the last $n - \ell$ components which is a subset of $\bold{V}(I_\ell)$ &mdash; exercise.

## _Thm._ Geometric Extesion Theorem

Let $V = \bold{V}(f_1, ..., f_s) \subseteq \Complex^n$ and be $g_i$ defined as in the extension theorem. For $I = \Braket{f_1, ..., f_s}$, we have the equality in $\Complex^{n-1}$

$$
\bold{V}(I_1) = \pi_1(V) \cup (\bold{V}(g_1, ..., g_s) \cap \bold{V}(I_1)).
$$

> Proof follows from the extension theorem.

## _Thm._ The Closure Theorem

Let $I = \Braket{f_1, ..., f_s}$ and $V = \bold{V}(I) \subseteq \Complex^n$, then

1. $\bold{V}(I_\ell)$ is the smallest* (affine) variety containing $\pi_\ell(V) \subseteq \Complex^{n-\ell}$, and
2. if $V \neq \varnothing$, then there exists an (affine) variety $W \subset \bold{V}(I_\ell)$ such that $\bold{V}(I_\ell) - W \subseteq \pi_\ell(V)$.

> *smallest with respect to set inclusion.

## _Thm._ Constant Coefficient Closure Theorem

Let $I = \Braket{f_1, ..., f_s}$ and $V = \bold{V}(I) \subseteq \Complex^n$ where some $f_i$ is of the form

$$
f_i = cx_1^N + T
$$

where $T$ are the terms in which $x_1$ has degree less than $N$ where $N > 0$ and $0 \neq c \in \Complex$. Then, in $\Complex^{n-1}$

$$
\pi_1(V) = \bold{V}(I_1).
$$
