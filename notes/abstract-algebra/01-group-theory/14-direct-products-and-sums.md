# 14. Direct Products and Sums

> Note that the letter $I$ denotes any index set which is mostly taken to be $\N$ or non-empty initial segment of $\N$.

## Def. Direct Product (of Groups)

> This is equivalent to the formal definition of set of tuples from the axiomatic set theory, but for the family of groups instead of family of sets.

Let $\Set{G_i}$ be a family of groups indexed by a non-empty set $I$, then the **direct product (or complete direct sum)** of the groups $G_i$ denoted with $\prod_{i\>\in\>I} G_i$ is the set of all functions

$$f: I \to \bigcup_{i\>\in\>I} G_i$$

such that $f(i) \in G_i$. Notice that since each $G_i$ is a group, thus non-empty, we have $\prod G_i \neq \varnothing$.

> As a mental image, think of $\prod G_i$ as the set of all (ordered) tuples where each $i$-th element belongs to $G_i$ so that each $f \in \prod G_i$ represent a tuple in that set.

## Def. Natural Projections

Let $\Set{G_i}$ be a non-empty family of groups, then $\prod G_i$ is a group under component-wise multiplication and for each $k \in I$, the map

$$
\def\arraystretch{1.2}
\begin{array}{lrll}
\pi_k: & \prod G_i & \to & G_k \\
       & f & \mapsto & f(k)
\end{array}
$$

called the **(natural) projection(s)** of the direct product is an epimorphism of groups.

> Exercise

## Def. (External) Weak Direct Product

Let $\Set{G_i}$ be a non-empty family of groups, then the **(external) weak direct product** of the groups $G_i$ denoted with $\prod^w G_i$ is the set of all $f \in \prod G_i$ such that $f(i) = e_i$ for all but a finite number of $i \in I$.

> That is, non-identity elements of the tuple $f$ are finite. Tuple consists of "mostly" identity elements.

Notice that if $I$ is finite, then every direct product is a weak direct product.

Moreover, if each $G_i$ is additive (that is abelian) $\prod^w G_i$ is called the **(external) direct sum** denoted with $\sum G_i$.

## Thm. Normals and Injections

Let $\Set{G_i}$ be a family of non-empty groups, then

1. $\prod^w G_i \trianglelefteq \prod G_i$,
2. for each $k \in I$, the map
   $$
   \def\arraystretch{1.5}
   \begin{array}{lrll}
   i_k: & G_k & \to & \prod^w G_i \\
        & a & \mapsto & f = (e_1, ..., e_{k-1}, a, e_{k+1}, ...)
   \end{array}
   $$
   is a monomorphism of groups,
3. for each $k \in I$, we have $i_k(G_k)\trianglelefteq \prod G_i$.

> Exercise

## Thm. Direct Sum and Family of Homomorphisms

Let $\Set{A_i}$ be a non-empty family of abelian groups, and $B$ an abelian group. If $\Set{\varphi_i: A_i \to B}$ is a family of homomorphisms (with the same index set), then there exists an unique homomorphism

$$
\begin{array}{lrll}
\varphi: \sum A_i \to B
\end{array}
$$

such that $\varphi \circ i_k = \varphi_k$ for all $k \in I$. This property determines $\sum A_i$ uniquely up to isomorphism.

<!-- TODO: Coproduct in Category of abelian groups -->

> This theorem is false if the groups are not abelian.

## Thm. Direct Sum of Normals

Let $\Set{N_i}$ be a non-empty family of normal subgroups of a group $G$ such that

* $G = \Braket{\>\bigcup N_i\>}$, and
* for each $k \in K$, we have $N_k \cap  \Braket{\>\bigcup_{i\>\neq\>k} N_i\>} = \Braket{e}$.

Then

$$
G \cong \prod^w N_i
$$

and $\Set{N_i}$ is called a **normal decomposition** of $G$.

## Def. Internal Product

Let $\Set{G_i}$ be a non-empty family of groups and $\prod G_i = G$. If $\Set{G_i}$ is a normal decomposition of $G$, then $G=\prod G_i$ is said to be the **internal weak direct product** (or **internal direct sum** if $G$ is abelian).

## Thm. Normal Decomposition Condition

Let $\Set{N_i}$ be a non-empty family of normal subgroups of $G$. Then, $\Set{N_i}$ is a normal decomposition of $G$ if and only if for each non-identity $g \in G$ is the unique product

$$
g = a_{i_1}a_{i_2} \cdots a_{i_n}
$$

where each $i_k \in I$ is distinct and $e \neq a_{i_k} \in N_{i_k}$ for each $k = 1,2,...,n$.

> Exercise

## Thm. Internal Direct Sum and Family of Homomorphisms

Let $\Set{\varphi_i: G_i \to H_i}$ be a family of homomorphism of groups and let

$$
\def\arraystretch{1.5}
\begin{array}{lrll}
\varphi: & \prod G_i & \to & \prod H_i \\
    & (a_i) & \mapsto & (\varphi_i(a_i))
\end{array}
$$

Then $\varphi$ is a homomorphism of groups such that

$$
\varphi\left(\prod^w G_i\right) \subseteq \prod^w H_i
$$

and

$$
\text{Ker }\varphi = \prod \text{Ker }\varphi_i
$$

and

$$
\text{Im }\varphi = \prod \text{Im }\varphi_i
$$

Moreover, $\varphi$ is a monomorphism (resp. epimorphism) if each $\varphi_i$ is.

## Corollary. Normals and Quotients

Let $\Set{G_i}$ be a non-empty family of groups and $\Set{N_i}$ be a non-empty family of normal subgroups (of same index) such that $N_i \trianglelefteq G_i$ for all $i \in I$. Then

1. $\prod N_i \trianglelefteq \prod G_i$ and ${(\prod G_i)}/{(\prod N_i)} \cong \prod (G_i/N_i)$,
2. $\prod^w N_i \trianglelefteq \prod^w G_i$ and ${(\prod^w G_i)}/{(\prod^w N_i)} \cong \prod^w (G_i/N_i)$

> Exercise, use First Isomorphism Theorem.
