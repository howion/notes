# (Martin-Löf's) Dependent Type Theory

[**Go Back to Index**](./00-index.md)

```js
```

```js
```

## Def. Rules

There are four kinds of **judgments** in Martin-Löf's dependent type theory.

1. $A$ is a (well-formed) **type** in **context** $\Gamma$, expressed as:

$$\Gamma \vdash A : \mathcal{T}$$

2. $A$ and $B$ are **judgmentally equal types** in context $\Gamma$. We express this judgment as:

$$\Gamma \vdash A \doteq B : \mathcal{T}$$

3. $a$ is an **element** of type $A$ in context $\Gamma$, expressed as:

$$\Gamma \vdash a : A$$

4. $a$ and $b$ are **judgmentally equal elements** of type $A$ in context $\Gamma$, expressed as:

$$\Gamma \vdash a \doteq b : A$$

> Notice that all judgments are context-dependent.

## Def. Context

A **context** is a finite list of **variable declerations**.

$$
\begin{array}{l}
   x_1: A_1, \\
   x_2: A_2 (x_1), \\
   \vdots \\
   x_n: A_n (x_1, ..., x_{n-1})
\end{array}
$$

that satisfy the condition, for each $1 \leq k \leq n$ we can derive the judgment:

$$
(x_1: A_1), ..., (x_{k-1}: A_{k-1} (x_1, ..., x_{k-2})) \vdash A_k (x_1, ..., x_{k-1}) : \mathcal{T}
$$

with the inference rules of our type theory. We may also use variable names as long as no variable is declared more than once.

An context of length $0$ which declares no variables is called the **empty context**.

## Def. Type Families

Let $A$ be a type in context $\Gamma$. A **family** of types $A$ in context $\Gamma$ is a type $B(x)$ in context $(\Gamma, x : A)$.
