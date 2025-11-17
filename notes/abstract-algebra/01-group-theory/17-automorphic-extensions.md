# 17. Automorphic Extensions

<!-- TODO: Find a suitable reference -->

## Def. (Outer) Semidirect Product

Let $G$ and $H$ be groups and $\theta: H \to \text{Aut }G$ a homomorphism. Let $G \rtimes_\theta H$ be the set $G \times H$ with the binary operation

$$
(g, h)(g', h') = (g[\theta(h) (g')], hh')
$$

So that $G \rtimes_\theta H$ is group with the identity $(e_G,e_H)$ and

$$
(g,h)^{-1} = (\theta(h^{-1})(g^{-1}), h^{-1})
$$

$G \rtimes_\theta H$ is called the **(outer) semidirect product** of $G$ and $H$ with respect to $\theta$.

## Thm. Normal Complement

Let $N \trianglelefteq G$, then the following are equivalent

1. $G = NH$ and $N \cap H = \{e\}$ for some $H \leq G$.
2. For each $g \in G$, there are unique $n \in N$ and $h \in H$ such that $g=nh$.

## Def. Inner Semidirect Product

Let $N \trianglelefteq G$ be a complement of $H \leq G$ in $G$, then define $\varphi: H \to \text{Aut }N$. Then, $\varphi$ is an inner automorphism given by

$$
\varphi_h(n) = hnh^{-1}
$$

for some $h \in H$.

The semidirect product $N \rtimes_{\varphi_h} H$ denoted by $N \rtimes H$ or $H \ltimes N$ is called the **inner semidirect product** of $N$ and $H$, so that $G = N \rtimes H$. We also say $G$ is a **semidirect product** of $H$ acting on $N$.

## Def. Wreath Product

Let $G$ and $H$ be groups,
