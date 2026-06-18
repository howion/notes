# Coxeter Groups

## _Def._ Coxeter Group

Informally, a Coxeter group is an abstract group that admits formal description in terms of reflections. Indeed, every finite Coxeter group admits a faithful representation as a finite reflection group of some Euclidian space and vice-versa.

Formally, **Coxeter group** is defined with the presentation

$$
W = \Braket{s_1, ..., s_n \mid s_i^2 = 1,\>(s_i s_j)^{m_{ij}} = 1}
$$

## _Def._ Coxeter Graph

Finite Coxeter groups are classified in terms of their Coxeter diagrams. Let $W$ be a Coxeter group with simple reflections $\{s_1, ..., s_n\}$. Then, the Coxeter graph is a labeled simple graph where

1. For each generator $s_i$, there corresponds an unique vertex $v_i$,
2. Two vertices $v_i$ and $v_j$ is connected by and edge $e_{ij}$ if $m_{ij} > 2$,
3. Moreover, if $m_{ij} > 3$, then we label $e_{ij}$ with $m_{ij}$.

> Notice that we do not label the edge if $m_{ij} = 3$ and do not connect $v_i$ and $v_j$ if $m_{ij} < 3$.

Moreover, if the Coxeter graph (of a reflection group) is connected, then we say it **irreducible**.

For example, the Coxeter graph of the dihedral group $\bold{D}_{2n}$ is

$$
\bullet \overset{n}{\text{-----}} \bullet
$$

and the Coxeter graph of $\bold{S}_n$ is given by

$$
\underset{1}{\bullet} \text{-----} \underset{2}{\bullet} \text{-----} \underset{3}{\bullet} \cdots \underset{n-2}{\bullet} \text{-----} \underset{n-1}{\bullet}
$$

since

$$
\bold{S}_n = \Braket{t_i \mid 1 \leq i \leq n -1}
$$

where $t_i := (i \> i+1)$, and $(t_i\>t_j)^2 = 1$ if $|i-j| \geq 2$.
