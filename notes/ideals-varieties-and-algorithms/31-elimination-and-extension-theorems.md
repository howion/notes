# Elimination and Extension Theorems

We will study systematics methods to eliminate variables from system of equations mainly using two theorems that will be mentioned namely the elimination and the extension thorem.

## _Def._ $\ell$-th Elimination Ideal

Given $I = \Braket{f_1, ..., f_s} \subseteq \mathbb{F}[x_1, ..., x_n]$, the **$\ell$-th elimination ideal** $I_\ell$ is the ideal of $\mathbb{F}[x_{\ell + 1},...,x_n]$ defined as

$$
\begin{array}{lll}
I_\ell &:=& I \cap \mathbb{F}[x_{\ell + 1},...,x_n] \\
I_0 &:=& I
\end{array}
$$

## _Thm._ The Elimination Theorem

Let $I \subseteq \mathbb{F}[x_1, ..., x_n]$ be an ideal and let $G$ be a Gröbner basis of $I$ with respect to lex order where $x_1 > x_2 > \cdots > x_n$, then for every $0 \leq \ell \leq n$, the set

$$
G_\ell = G \cap \mathbb{F}[x_{\ell + 1}, ..., x_n]
$$

is a Gröbner basis of the $\ell$-th elimination ideal $I_\ell$.

> The Elimination Theorem shows that a Gröbner basis for lex order eliminates not only the first variable, but also the first two variables, the first three variables, and so on.

## _Thm._ The Extension Theorem

> We saw that we can eliminate variables but now we will see that we can also extend our partial solutions to complete ones.

Let $I = \Braket{f_1, ..., f_s} \subseteq \Complex[x_1, ..., x_n]$ and rewrite each $f_i$ as

$$
f_i = g_i (x_2, ..., x_n) x_1^{N_i} + T
$$

where $T$ are the terms in which $x_1$ has degree less than $N_i$ where $N_i \geq 0$ and $0 \neq g_i \in \Complex[x_2, ..., x_n]$.

Now, if $\bold{V}(I_1) \ni (a_2, ..., a_n) \notin \bold{V}(g_1, ..., g_s)$, then there exists $a_1 \in \Complex$ such that $(a_1, ..., a_n) \in \bold{V}(I)$.

> Notice how we stated the theorem for the field $\Complex$. Indeed, this theorem is false over $\R$.
>
> We will later see that this and the following theorems are generally true for any algebraically closed field.

## _Corollary._ Constant Coefficient Extension Theorem

> The Extension Theorem becomes extra useful if one of the leading coefficients is consant.

Let $I = \Braket{f_1, ..., f_s} \subseteq \Complex[x_1, ..., x_n]$ and assume for some $f_i$ we have

$$
f_i = c x_1^{N} + T
$$

where $T$ are the terms in which $x_1$ has degree less than $N$ where $N > 0$ and $0 \neq c \in \Complex[x_2, ..., x_n]$.

Now, if $\bold{V}(I_1) \ni (a_2, ..., a_n)$, then there exists $a_1 \in \Complex$ such that $(a_1, ..., a_n) \in \bold{V}(I)$.

> Direct result of the Extension Theorem.
