# 3. Ring Examples

## Def. Ring of Continious Functions

Let $R$ be the set of real valued continious functions from the topological space $X$ to $\R$. For $f,g \in R$, define the pointwise operations for all $x \in X$ as

$$
\begin{array}{rl}
(f+g)(x) &= f(x) + g(x) \\
(fg)(x) &= f(x)g(x)
\end{array}
$$

Then $R$ is a commutative ring with unity where the additive identity is the constant map $\bold 0$ and the unity is the constant map $\bold 1$.

### Example

<!-- TODO: -->

## Def. Matrix Ring

## Def. Ring of Polynomials

Let $R$ be a ring and $x$ an _indeterminate_ or _variable_ over $R$. Define the set called **ring of polynomials over $R$** as

$$
R[x] = \Set{ a_0 + a_1x + a_2x^2 + \cdots + a_nx^n | a_i \in R, n \in \N^* }
$$

> We could have actually wrote $n \in \N$ since $X^0 = 1$, but we don't know if $R$ is with identity.

then $R[x]$ is a ring where addition and multiplication defined as expected over polynomials. Notice how elements of $R[x]$ of finite length, so this a set of **finite polynomials**.

Let $a_0 + a_1x + \cdots + a_nx^n = p(x) \in R[x]$. Then

* $n$ is called the **degree** of $p(x)$ denoted with $\text{d}(p)$. If $p(x)$ is the zero polynomial it is defined to be $0$,
* $a_n$ is called the **leading coefficient** of $p(x)$,
* $p(x)$ is said to be **monic** if $a_n = 1$.

### Thm. Integral Domain Polynomials Properties

Let $R$ be an integral domain and $p(x), q(x) \in R[x]$, then

* $\text{d}(p(x)q(x)) = \text{d}(p(x)) + \text{d}(q(x))$,
* Units of $R[x]$ are the units of $R$,
* $R[x]$ is also an integral domain.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Def. Power Series Ring

If we extend the definition of $R[[x]]$ to infinite polynomials, that is the set

$$
F[[x]] = \Set{a_0 + a_1x + a_2x^2 + \cdots | a_i \in R}
$$

is called the **power series over $R$** and is also a ring (exercise).

## Def. Boolean Ring

A ring $R$ in which every element is idempotent is called a **boolean ring**.

### Thm. Structure Theorem for Boolean Rings

Every boolean ring is a subring of $\mathcal{P}(X)$, **the universal boolean ring**, for some set $X$.

## Def. Group Rings

Let $(R, +, \cdot)$ be a commutative ring with identity $1 \neq 0$, and $(G, *) = \Set{g_1, g_2, ..., g_n}$ a finite group. Define the **group ring** $RG$ of $G$ with coefficients in $R$ as the set

$$
RG = \Set{a_1g_1 + a_2g_2 + \cdots + a_ng_n | a_i \in R \enspace \text{and} \enspace 1 \leq i \leq n}
$$

> Notice $a_1g_1$ multiplication is not defined.

If $g_1$ is the identity of $G$, then instead of $a_1g_1$, simply, $a_1$ will be written.

Addition and multiplication in $RG$ is defined componentwise on coefficients canonically. This makes $RG$ a ring (exercise).

> **(Exercise)** define addition (obvious) and multiplication.
