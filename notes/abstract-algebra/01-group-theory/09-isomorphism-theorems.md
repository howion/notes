# Isomorphism Theorems

[**Go Back**](../00-index.md)

## Def. Projection

Let $N \trianglelefteq G$. Then

$$
\begin{array}{lrll}
\pi: & G & \to & G/N \\
& a & \mapsto & aN
\end{array}
$$

is an epimorphism and $\text{Ker }\pi = N$. Such $\pi$ is called the **canonical epimorphism** or **(natural) projection**. Therefore, unless otherwise stated, $G \to G/N$ always denotes the cannonical epimorphism.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Thm. Fundamental Theorem on Homomorphisms

Let $\varphi: G \to H$ be a group homomorphism and $N \trianglelefteq \text{Ker }f \trianglelefteq G$. Then there exists an unique homomorphism $\bar{\varphi}$ where

$$
\begin{array}{rrll}
\bar{\varphi}: & G/N & \to & H \\
& aN & \mapsto & \varphi(a)
\end{array}
$$

and

* $\varphi(G) = \bar{\varphi}(G/N)$,
* $\text{Ker }\bar{\varphi} = (\text{Ker }\varphi) / N$

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Thm. First Isomorphism Theorem

Let $\varphi: G \to H$ be a group homomorphism. Then

1. $\text{Ker }\varphi \trianglelefteq G$, so kernel of any group homomorphism is normal,
2. $\varphi(G) \leq H$, so image of any group homomorphism is a subgroup,
3. $\varphi(G) \cong G/(\text{Ker }\varphi)$, so if $\varphi$ is an epimorphism, then $H \cong G/(\text{Ker }\varphi)$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<center>
<img src="./assets/01-first-isomorphism-theorem.svg" alt="Figure 01. First Isomorphism Theorem" width="600" />

**(Figure 1)** First Isomorphism Theorem
</center>

## Thm. Second Isomorphism Theorem

> This theorem is also called the **Diamond Isomorphism Theorem** or **Parallelogram Theorem** due to lattice it draws.

Let $B \leq G$ and $A \leq N_G(B)$, so that $A$ is a subgroup of the _normalized_ $B$. Then, noting $A$ is normal

1. $AB \leq G$,
2. $B \trianglelefteq AB$,
3. $A \cap B \trianglelefteq A$, and
4. $AB/B \cong A/A \cap B$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<center>
<img src="./assets/02-second-isomorphism-theorem.svg" alt="Figure 02. Second Isomorphism Theorem" width="350" />

**(Figure 2)** Second Isomorphism Theorem
</center>

## Thm. Third Isomorphism Theorem

Let $K \trianglelefteq H \trianglelefteq G$, then

1. $K/H \trianglelefteq G/H$, and
2. $(G/K)/(H/K) \cong G/H$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>
