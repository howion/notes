# Appendix 2: Group Theory

> You might want to check out my [group theory notes](https://notes.howion.com/group-theory) as well.

## _Def._ Semidirect Product

Let $G$ be a group with the identity $e$, $H \leq G$ and $N \trianglelefteq G$ such that $N \cap H = \Set{e}$. We say $G$ is the **semidirect product** of $N$ and $H$ if $G=NH$ denoted by $G = N \rtimes H$ or $G = H \ltimes N$.

> Notice how $\rtimes$ points toward the normal group similar to $\trianglelefteq$.

## _Thm._ ~

Let $G$ be a group with a (normal) subgroup $N$ of index $2$. If there exists $g \in G \setminus N$ of order $2$, then

$$
G = N \rtimes \Braket{g}
$$

## _Thm._ Orbit-Stabilizer Theorem

Let $G$ be a group and $x \in G$, then

$$
|G| = |\text{Orbit}(x)| \cdot |\text{Stab}(x)|
$$

## _Thm._ Counting via Conjugacies

Let $G$ be a group and $x \in G$, then

$$
|\text{Cl}(x)| = \dfrac{|G|}{|Z(x)|}
$$

## _Thm._ Burnside's Lemma

$$
|X/G| = \dfrac{1}{|G|} \sum_{g \in G} |X^g|
$$

## _Thm._ Center of $\bold{D}_{2n}$

$$
Z(\bold{D}_{2n}) = \begin{cases}
   \Set{e} &\text{if \enspace n is odd} \\
   \Set{e, r^{n/2}} &\text{if \enspace n is even}
\end{cases}
$$
