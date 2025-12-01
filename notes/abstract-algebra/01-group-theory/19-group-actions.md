# 19. Group Actions

## Def. Group Action

Let $G$ be a group and $X$ any set. A binary operation $*: G \times X \to X$ is called a **(left) action** if, for all $a,b \in G$ and $x \in X$:

1. $a * (b * x) = (a b) * x$, and
2. $e * x = x$

where (1) is called **identity** property and (2) is called **compatibility** property.

When such action is given, we say $G$ **acts on the set** $X$.

> For establishing general properties of group actions, it suffices to consider only left actions.

## Def. Orbits

Let the group $G$ act on a set $X$, then the **orbit** of an element $x \in X$ is the set of elements

$$
G * x := \Set{g * x | g \in G}
$$

The orbit of $x$ can be denoted with $\bar{x}$ since, as shown below, orbits partition $G$.

## Def. Transitivity

The group action is said to be **transitive** if for $x, y \in X$ there exists $g \in G$ so that $g * x = y$.

## Def. Stabilizer

Let $G$ act on $X$ and $x \in X$, then the **stabilizer subgroup** of $G$ with respect to $x$ is defined as

$$
G_x := \Set{g \in G | g * x = x}
$$

## Thm. Basic Orbit and Stabilizer Properties

Let the group $G$ act on a set $X$ and $x \in X$, then

1. Set of orbits partition the set $X$.
2. The group action is transitive if and only if it has exactly one orbit.
3. If the action is transitive, then there is exactly one orbit, so that $G * x = G$ for all $x \in X$.
4. $G_x \leq G$.

Since $G_x$ is a subgroup of $G$, stabilizer is also called the **subgroup fixing** $x$ or the **isotropy group** of $x$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Thm. Orbit-Stabilizer Theorem

Let $G$ be a finite group that acts on a set $X$ and $x \in X$, then

$$
|\bar{x}| = |G:G_x|
$$

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Corollary. Normalizer, Centralizer, and Conjugacy Classes

Let $G$ be a finite group and $K \leq G$, then

1. $|\bar{x}| = |G:C_G(x)|$ and $|\bar{x}|$ divides $|G|$,
2. Let $\bar{x_1}, \bar{x_2}, ..., \bar{x_n}$ be all the distinct conjugacy classes of $G$, then

$$
|G| = \sum_{i \> = \> 1}^n |\bar{x_i}| = \sum_{i \> = \> 1}^n |G : C_G(x_i)|
$$

3. The number of subgroups of $G$ conjugate to $K$ is $|G : N_G(K)|$, which divies $|G|$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Thm. Action Induced Homomorphism

Let $G$ act on a set $X$, then this action induces a homomorphism $\varphi: G \to \mathbf{P}(X)$, where $\mathbf{P}(X)$ is the group of all permutations of $X$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Thm. Cayley

Let $G$ be a group, then there exists a monomorphism $\varphi: G \to \mathbf{P}(G)$. Therefore, every group is isomorphic to a group of permutations. In particular, every finite group of order $n$ is isomorphic to a subgroup of $\mathbf{S}_n$.

## Corollary. Introduction to Inner Automorphism

Let $G$ be a group, then

1. For each $h \in G$, conjugation by $h$ induces an automorphism of $G$.
2. There exists a homomorphism $G \to \text{Aut }G$ whose kernel is $C(G)$.

> We will see this in more detail in the next sections.

## Def. Translation

Let $G$ be a group and $H \leq G$. The action of $H$ on the set $G$ which is given by $(h,g) \mapsto hg$, where $hg$ is the group product is called a **(left) translation**.

Let $S$ be the set of all (left) cosets of $H$ in $G$, then we say **$H$ acts on $S$ by translation** so that $(h, gH) \mapsto hg H$.

## Thm.

<!-- TODO: Burnside's Lemma -->
