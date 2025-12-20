# Embeddings

## Notation. Structures

When we refer to an element of the model $M$ we actually mean an element from the universe $\mathbf{V}$ of $M$. So that a map $f: \mathfrak{M_1} \to \mathfrak{M_2}$ means a map from $\mathbf{V_1}$ to $\mathbf{V_2}$.

## Def. Embedding

Let $M$ and $N$ be two structures of $\mathcal{L}(\mathbf{S})$. A map $f: M \to N$ is said to **preserve** the formula $\varphi(\bar{x})$ if for each tuple $\bar{a}$ of elements in $\mathbf{V_M}$ we have

$$
M \models \varphi(\bar{a}) \implies N \models \varphi(f(\bar{a}))
$$

If $f$ preserves all formulas that are literals, then $f$ is called a **(literal) embedding**.

If $f$ preserves all formulas, then $f$ is called a **elementary embedding**.

## Thm. Embedding 1

Let $f: M \to N$ be an embedding and $\varphi$ a quantifier-free formula, then

$$
M \models \varphi(\bar{a}) \iff N \models \varphi(f(\bar{a}))
$$

## Thm. Embedding 2

Let $f: M \to N$ be an embedding and $\varphi(\bar{x})$ an existential formula, then $f$ preserves $\varphi(\bar{x})$.

## Thm. Embedding 3

Let $f: M \to N$ be an _onto_ map (not necessarily embedding), then $f$ is an embedding if and only if it is an elementary embedding.

## Def. Isomorphism

Let $M$ and $N$ be two structures of $\mathcal{L}(\mathbf{S})$. If there exists a _bijective_ (elementary) embedding $f: M \to N$ called a **isomorphism**, we say $M$ and $N$ are **isomorphic** denoted with $M \cong N$.

## Def. Structure
