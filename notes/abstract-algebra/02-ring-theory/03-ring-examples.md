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

## Def. Power Series Ring

If we extend the definition of $R[[x]]$ to infinite polynomials, that is the set

$$
F[[x]] = \Set{a_0 + a_1x + a_2x^2 + \cdots | a_i \in R}
$$

is called the **power series over $R$** and is also a ring (exercise).

## Def. Boolean Ring

A ring $R$ in which every element is idempotent is called a **boolean ring**.

## Thm. Structure Theorem for Boolean Rings

Every boolean ring is a subring of $\mathcal{P}(X)$, **the universal boolean ring**, for some set $X$.
