# 11. Symmetric Groups

## Def. Permutation

A **permutation** $\sigma$ on a set $X$ is a bijective function from $X$ to $X$. The permutation $x \mapsto x$ will be called the **identity permutation**.

We say an element $x \in X$ is **fixed under** $\sigma$ if $\sigma(x) = x$. Similarly, we say $x$ is **moved by** $\sigma$ if $\sigma(x) \neq x$.

For simplicity, we will use the set $\textbf{I}_n = \Set{1, 2, ..., n}$ instead of any $X$ of any cardinality.

> More formally, we could make use of Well-Ordering Principle, initial segments, and ordinals. For now, this definition should suffice.

## Def. Support

The **support** of a permutation $\sigma$ denoted by $\text{supp }\sigma$ is defined as the set of elements that are moved by $\sigma$, that is

$$
\text{supp }\sigma := \Set{i \in \mathbf{I}_n | \sigma(i) \neq i}.
$$

Similarly, the set of fixed elements denoted with $\text{fix }\sigma$ is the set

$$
\text{fix }\sigma := \Set{i \in \mathbf{I}_n | \sigma(i) = i}.
$$


## Def. Disjoint Permutations

The permutations $\sigma_1, \sigma_2, ..., \sigma_n$ are said to be **disjoint** if their support is disjoint.

<!-- TODO: Disjoint cycles commute etc. -->

## Def. Symmetric Group

Set of all permutations (bijections) on $\textbf{I}_n$ will be denoted with $\textbf{S}_n$ and it forms a group under function composition (exercise) called the **symmetric group** (of $n$ letters).

> Notice that $\textbf{S}_n$ is of order $n!$.

## Def. Cycle

Let $\tau$ be a permutation on $\mathbf{I}_n$ with the support $\Set{k_1, k_2, ..., k_r}$. Then $\tau$ is said to be a **cycle** (or **cyclic**) of **length** $r$ if

$$
\begin{array}{lll}
k_1 & \mapsto k_2 \\
k_2 & \mapsto k_3 \\
    & \vdots \\
k_r & \mapsto k_1
\end{array}
$$

A cycle of length $k$ will be called a **$k$-cycle**. A $2$-cycle is called a **transposition**.

> There is no widespread consensus on how to define a cycle, but the intuition should be clear.

## Thm. Permutations are (Unique) Product of Disjoint Cycles

Every non-identity permutation in $\textbf{S}_n$ is uniquely (up to the order of the factors) a product of disjoint cycles, each of which has length at least $2$.

### Corollary. Order of Permutation

The order of a permutation is the least common multiple of the orders of its disjoint cycles.

### Corollary. Permutations are a Product of Transpositions

Every permutation can be written as a product of (not necessarily unique) transpositions.

## Def. Odd and Even

A permutation is said to be **even** (resp. **odd**) if it can be written as a product of even (resp. **odd**) number of transpositions.

## Thm. Exclusively Odd or Even

A permutation $\sigma \in \textbf{S}_n$ where $n \geq 2$ is either even or odd, but not both.

Therefore, the **sign** of a permutation $\sigma$ denoted $\text{sgn } \sigma$ is defined to be $1$ if even and $-1$ if odd.

## Thm. Alternating Group

Let $\textbf{A}_n$ denote the set of all permutations of $\textbf{S}_n$. Then $\textbf{A}_n$ is a normal subgroup of $\textbf{S}_n$ of index $2$.

Moreover, $\textbf{A}_n$ is the only subgroup of $\textbf{S}_n$ of index $2$.

$\textbf{A}_n$ is called the **alternating group** (of **degree $n$**).

## Thm. $\textbf{A}_n$ is (Generally) Simple

The alternating group $\textbf{A}_n$ is simple if and only if $n \neq 4$.

<!-- ### Lemma.  -->

<!-- p.49 Hungford -->
