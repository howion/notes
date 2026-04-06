# Varieties

## _Def._ (Affine) Variety

Let $\mathbb{F}$ be a field and $f_1, ..., f_s \in \mathbb{F}[x_1, ..., x_n]$, then we define the **(affine) variety** of $f_1, ..., f_s$ as:

$$
\mathbf{V}(f_1, ..., f_s) := \Set{\bar{a} \in \mathbb{F}^n : f_i(\bar{a}) = 0 \quad \forall i}
$$

so that $\mathbf{V}(f_1, ..., f_s) \subseteq \mathbb{F}^n$ is the set of all solutions to:

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
> **IMPORTANT:** From now on, unless otherwise stated, by **variety** we will mean the **affine variety** defined here.

We will commonly use the letter $V, W$ to denote the varieties.

> Notice that the graphs of polynomials functions $y = f(x)$ is the variety $\mathbf{V}(y - f(x))$.

## _Thm._ Basic Properties of Varieties

Let $V, W \subseteq \mathbb{F}^n$ be varieties, then so are $V \cup W$ and $V \cap W$. Moreover, if $V = \bold{V}(f_1,...,f_s)$ and $W = \bold{V}(g_1, ..., g_t)$, then

1. $V \cap W = \bold{V}(f_1,...,f_s,g_1,...,g_t)$, and
2. $V \cup W = \bold{V}(f_i g_j : i = 1,...,s \> \land \> j = 1,...,t)$

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

(1) is trivial, for (2) show $\subseteq$ and $\supseteq$.
</details>

<!-- TODO: Prove and show V(z) \cup V(x,y) = V(zx, zy) -->

<!-- TODO: Questions, re-read the chapter (exampls and the end questions) -->

## Exercises

### #1

Show that all finite subsets of $\mathbb{F}^n$ are affine varieties. First, prove it for a single point $(a_1,...,a_n) \in \mathbb{F}[x_1,...,x_n]$.

### #2

1. Prove that finite union and finite intersection of variaties are also varieties.
2. Show that infinite union of varieties need not to be a variety by giving an example.
3. Show that the difference of two varieties $V - W$, need not to be a variety by giving an example.
3. Let $V \subseteq \mathbb{F}^n$ and $W \subseteq \mathbb{F}^k$ be two varieties. Show that their cartesian product $V \times W$ is a variety in $\mathbb{F}^{n + k}$.
