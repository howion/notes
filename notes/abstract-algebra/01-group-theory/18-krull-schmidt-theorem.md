# 18. Krull-Schmidt Theorem

## Def. Indecomposable

A group $G$ is called **indecomposable** if $G \neq \Braket{e}$ and $G$ is not the (internal) direct product of two of its proper subgroups.

## Def. Chain Conditions

Let $G$ be a group, then we say

* $G$ satisfies **ascending chain condition (ACC)** on subgroups if every chain $G_1 \leq G_2 \leq \cdots$ of subgroups of $G$ there exists $n$ such that $G_i = G_n$ for all $i \geq n$.
* $G$ satisfies **descending chain condition (DCC)** on subgroups if every chain $G_1 \geq G_2 \geq \cdots$ of subgroups of $G$ there exists $n$ such that $G_i = G_n$ for all $i \geq n$.

## Thm. Normal Chain Condition and Indecomposition

Let $G$ be a group which satisfies ACC or DCC on normal subgroup, then $G$ is a direct product of a finite number of indecomposable subgroups.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Def. Normal Endomorphism

Let $\varphi:$ be an endomorphism of $G$. We say $\varphi$ is a **normal endomorphism** if

$$
a \varphi (b) a^{-1} = \varphi(aba^{-1})
$$

that is

$$
\varphi(b)^a = \varphi(b^a)
$$

for all $a,b \in G$.

## Thm. Chain Conditions and Morphisms

Let $G$ be a group that satisfies ascending (resp. descending) chain condition on normal subgroups and $\varphi$ a normal endomorphism of $G$. Then $\varphi$ is an automorphism of $G$ if and only if $\varphi$ is an epimorphism (resp. monomorphism).

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Thm. Fitting

Let $G$ be a group that satisfies both ACC and DCC on normal subgroups and $\varphi$ a normal endomorphism of $G$, then for some $n \geq 1$

$$
G = \text{Ker }\varphi^n \times \text{Im } \varphi^n
$$

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Def. Nilpotent Endomorphism

Let $\varphi$ be an endomorphism of $G$, then it is said to be **nilpotent** if there exists $n > 0$ such that

$$
\varphi^n (x) = e
$$

for all $x \in G$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Thm. Krull-Schmidt

Let $G$ be a group that satisfies both ACC and DCC on normal subgroups. Moreover, let each $G_i$ and $H_j$ be indecomposable where

$$
\begin{array}{ll}
G = G_1 \times G_2 \times \cdots G_s \\
G = H_1 \times H_2 \times \cdots H_t
\end{array}
$$

then $s = t$ and for some reindexing $G_i \cong H_i$.
