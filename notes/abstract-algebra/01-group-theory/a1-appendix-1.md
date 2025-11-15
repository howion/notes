# A1. Appendix 1

> This is not really an appendix, but rather parking space for stuff I wasn't able to locate yet.

## Def. Group Action

> TODO: Create a new section for this and populat it with stabilizers, orbits etc.

See [**Wikipedia: Group action**](https://en.wikipedia.org/wiki/Group_action).

Let $G$ be a group and $X$ any set. A binary operation $\bullet: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

* $a \bullet (b \bullet x) = (a b) \bullet x$, and
* $e \bullet x = x$

> For establishing general properties of group actions, it suffices to consider only left actions. (TODO: Why)

---

## Def. Maximal Subgroup

Let $G$ be a group and let $H$ be a proper subgroups of $G$. We say $H$ is a **maximal subgroup** if $H \subseteq K$ implies $K = H$ for all $K \lt G$.

> Simply, $H$ is maximal if there is no greater proper subgroup which contain it.

## Def. Frattini Subgroup

Let $G$ be a group. We define **frattini subgroup** $\Phi(G)$ as the intersection of all maximal subgroups of $G$. In the case $G$ has no maximal subgroups, we define $\Phi(G) = G$.

> This is analogous to the Jacobson radical in the ring theory.

## Thm. Frattini Subgroup and Non-Generators

The frattini subgroup $\Phi(G)$ of a group $G$ is equal to the set of all non-generators of $G$. Therefore, non-generators of a group form a subgroup &mdash; namely the frattini subgroup.

<!-- If $G$ is finite, then $\Phi(G)$ is nilpotent -->

---

## Def. Simple Group

A group is said to be **simple** if it has no proper normal subgroups.

## Thm. On Simple Groups

1. $\Z_p$ is simple if $p$ is prime. Does the converse holds?

---

## Def. Perfect Group

---

<<<<<<< HEAD
## Thm. Dedekind Modular Law (Identity)

> See https://math.stackexchange.com/questions/3957388/intuition-behind-dedekinds-modular-law

## Exercises

### U 2.39

If $H \leq G$, then $G \setminus H$ is finite if and only if $G$ finite or $H=G$.

> p. 24
=======
## Def. Locally Cyclic

A group $G$ is said to be **locally cyclic** if every finitely generated subgroup is cyclic.

## Thm. Locally Cyclic Properties

1. Every cyclic group is locally cyclic.
2. Every finetely-generated locally cyclic group is cyclic.
3. Every subgroup (and quotient group) of a locally cyclic group is locally cyclic.
4. Every homomorphic image of a locally cyclic group is locally cylic.
5. A group is locally cyclic if and only if every pair of elements in the group generates  a cyclic group.
6. A group is locally cyclic if and only if its lattice of subgroups is distributive.

<!-- TODO: Revise, relocate, see: https://en.wikipedia.org/wiki/Locally_cyclic_group -->
>>>>>>> 10cbd5639403756668a032d2ea05d24ca1a3ffc9
