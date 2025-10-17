# Isomorphism Theorems

[**Go Back**](../00-index.md)

## Def. Projection

Let $N \trianglelefteq G$. Then

$$
\begin{array}{l}
\pi: G \to G/N \\
\pi(a) = aN
\end{array}
$$

is an epimorphism and $\text{Ker }\pi = N$. Such $\pi$ is called the **canonical epimorphism** or **(natural) projection**. Therefore, unless otherwise stated, $G \to G/N$ always denotes the cannonical epimorphism.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Thm. First Isomorphism Theorem

Let $\varphi: G \to H$ be a group homomorphism. Then

1. $\text{Ker }\varphi \trianglelefteq G$, so kernel of any homomorphism is normal,
2. $\varphi(G) \leq H$, so image of any homomorphism is a subgroup,
3. $\varphi(G) \cong G/(\text{Ker }\varphi)$, so if $\varphi$ is an epimorphism, then $H \cong G/(\text{Ker }\varphi)$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

<center>
<img src="./assets/01-first-isomorphism-theorem.svg" alt="First Isomorphism Theorem" width="600">
</center>

## Thm. Second Isomorphism Theorem

> This theorem is also called the **Diamond Isomorphism Theorem** or **Parallelogram Theorem** due to lattice it draws.

Let $B \leq G$ and $A \leq N_G(B)$, so that $A$ is a subgroup of the normalized $B$. Then, noting $A$ is normal

1. $AB \leq G$,
2. $B \trianglelefteq AB$,
3. $A \cap B \trianglelefteq A$, and
4. $AB/B \cong A/A \cap B$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Thm. Third Isomorphism Theorem

Let $K \trianglelefteq H \trianglelefteq G$, then

1. $K/H \trianglelefteq G/H$, and
2. $(G/K)/(H/K) \cong G/H$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>
