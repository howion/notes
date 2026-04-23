# Appendix 2. Group Theory

> You might want to check out my [group theory notes](https://notes.howion.com/group-theory) as well.

## _Def._ Semidirect Product

Let $G$ be a group with the identity $e$, $H \leq G$ and $N \trianglelefteq G$ such that $N \cap H = \Set{e}$. We say $G$ is the **semidirect product** of $N$ and $H$ if $G=NH$ denoted by $G = N \rtimes H$ or $G = H \ltimes N$.

> Notice how $\rtimes$ points toward the normal group similar to $\trianglelefteq$.
>
> This is not a good definition of the semidirect product but a simple one. Curious reader might want to check out other resources.

## _Thm._

Let $G$ be a group with a (normal) subgroup $N$ of index $2$. If there exists $g \in G \setminus N$ of order $2$, then

$$
G = N \rtimes \Braket{g}
$$
