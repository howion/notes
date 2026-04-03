# Hilbert Basis Theorem and Groebner Bases

## _Def._ $\text{LT}(I)$

Let $\Braket{0} \neq I \subseteq \mathbb{F}[x_1,...,x_n]$ be an ideal, then we define **the set of leading terms of $I$** as

$$
\text{LT}(I) := \Set{cx^\alpha : \exists f \in I \quad \text{LT}(f) = cx^\alpha}.
$$

## _Thm._ $\Braket{\text{LT}(I)}$

Let $I \subseteq \mathbb{F}[x_1,...,x_n]$ be an ideal, then

1. $\Braket{\text{LT}(I)}$ is an monomial ideal, and
2. there exists $g_1, ..., g_s \in I$ such that $\Braket{\text{LT}(I)} = \Braket{\text{LT}(g_1), ..., \text{LT}(g_s)}$.

## _Thm._ Hilbert Basis Theorem

Every ideal $I \subseteq \mathbb{F}[x_1,...,x_n]$ has a finite basis, so that

$$
I = \Braket{g_1, ..., g_s}
$$

for some $g_1, ..., g_s \in I$.

## _Def._ Groebner Basis

Fix a monomial order and let $I$ be an ideal, then a finite subset $G = \Set{g_1, ..., g_s} \subseteq I$ is said to be a **Groebner basis (Gr-basis)** or **standard basis** if

$$
\Braket{\text{LT}(g_1), ..., \text{LT}(g_s)} = \Braket{\text{LT}(I)}.
$$

> Equivalently, $\Set{g_1, ..., g_s}$ is a Gr-basis of $I$ _if and only if_ the leading term of any element of $I$ is divisible by one of $\text{LT}(g_i)$.

## _Thm._ Existence of Gr-basis

Every non-zero ideal $I \subseteq \mathbb{F}[x_1,...,x_n]$ has a Groebner basis. Moreover, any Groebner basis of $I$ is a basis of $I$.

## _Thm._ ACC

Let $I_1 \subseteq I_2 \subseteq \cdots$ be an asceding chain of ideals in $\mathbb{F}[x_1, ..., x_n]$, then there exists an $N \geq 1$ so that $I_N = I_{N+i}$ for all $i \in \N$.

## _Def._ $\bold{V}(I)$

Let $I \subseteq \mathbb{F}[x_1, ..., x_n]$ be an ideal, then we define the **variety of $I$** as

$$
\bold{V}(I) := \Set{\bar{a} \in \mathbb{F}^n : f(\bar{a}) = 0 \enspace \forall f \in I}
$$

## _Thm._ Varieties are Determined by Ideals

Let $I$ be an ideal, then $\bold{V}(I)$ is indeed an (affine) variety. Moreover, if $I = \Braket{f_1, ..., f_s}$, then

$$
\bold{V}(I) = \bold{V}(f_1,...,f_s).
$$

> Therefore, varieties are determined by ideals.
