# Appendix 2: Group Theory

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

## _Thm._ Orbit-Stabilizer Theorem

Let $G$ be a group and $x \in G$, then

$$
|G| = |\text{Orbit}(x)| \cdot |\text{Stab}(x)|
$$

In order to denote the **orbit** of $x$, the notations

* $\bar{x}$,
* $G(x)$
* $Gx$

are also used. Similarly, for the **stabilizer** of $x$, the notations

* $G_x$

could be used as well.

## _Thm._ Burnside's Lemma

$$
|X/G| = \dfrac{1}{|G|} \sum_{g \in G} |X^g|
$$

where

* $|X/G|$ denotes the number of orbits, and
* $|X^g|$ denotes the elements in $X$ fixed by $g$

> Notice $X^g$ is not the stabilizer of $x$ which are the elements in $G$ fixed by $g$ but rather in $X$.

## _Thm._ Center of $\bold{D}_{2n}$

$$
Z(\bold{D}_{2n}) = \begin{cases}
   \> \Set{e} &\text{if \enspace n is odd} \\
   \> \Set{e, r^{n/2}} &\text{if \enspace n is even}
\end{cases}
$$
