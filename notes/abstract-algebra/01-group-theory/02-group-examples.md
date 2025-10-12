# Group Examples

[**Go Back**](../00-index.md)

All of these groups can be considered their own field of research, so it is suggested you visit their wiki, understand the basics, and follow from there as you see fit.

## Dihedral Groups

See [**Wikipedia: Dihedral group**](https://en.wikipedia.org/wiki/Dihedral_group).

## Symmetric Groups

See [**Wikipedia: Dihedral group**](https://en.wikipedia.org/wiki/Symmetric_group).

### Thm. Symmetric Groups Basics

* For $n > 2$ the symmetric group $S_n$ is nonabelian. So, $S_3$ is a good example of nonabelian group of order $3$.

## Matrix Groups

### Exercise 1

Find the order of the (general linear) group $\text{GL}(3, \Z_5)$.

> In General Linear Group, matrix multiplication is the binary operation.

<details>
<summary><b>Answer</b></summary>
<br/>

$(5^3 - 1)(5^3 - 5)(5^3 - 5^2)$

</details>

<!-- General, Special, Diagonal, (upper) triangular, unitriangular -->

<!-- TODO: Define More groups and their notations  (Revise group p.24,25) -->

## The Quaternion Group

See [**Wikipedia: Quaternion group**](https://en.wikipedia.org/wiki/Quaternion_group).

## The $Q_p$ Group

Let $p$ prime. Denote by $Q_p$ the set:

$$
\left\{{m}/{n^p} : m,n \in \Z \right\}
$$

or the group with the usual addition in rationals.

## Def. Homomorphisms

Let $(G, \cdot_G, e_G)$ and $(H, \cdot_H, e_H)$ be groups.

The (total) function (or map) $\varphi: G \to H$ is called a **(group) homomorphism** if, for all $a, b \in G$:

$$\varphi(a \cdot_G b) = \varphi(a) \cdot_H \varphi(b)$$

> Mostly, we will not be as explicit about the operations and simply write $\varphi(ab)=\varphi(a)\varphi(b)$.

The homomorphism $\varphi: G \to H$ is called:

* an **monomorphism** if it is injective,
* an **epimorphism** if it is surjective,
* an **isomorphism** if it is bijective.

<!--  -->

* an **endomorphism** if $G=H$, and
* an **automorphism** if it is an endomorphism and bijective.

> Notice that if there exists an isomorphism between two groups, then basically, they have the  same structure*.

(Existence of an) isomorphism between two groups $G$ and $H$ is denoted with $G \cong H$.

## Exercise 2

Prove $Q_p$ is _not_ isomorphic to $Q_r$ for distinct primes $p$ and $r$.

<details>
<summary><b>Proof</b></summary>
<br/>

Exercise.

</details>

## Def. Group Action

See [**Wikipedia: Group action**](https://en.wikipedia.org/wiki/Group_action).

Let $(G, \cdot, e)$ be a group and $X$ a set. A binary operation $\bullet: G \times X \to X$ is called a **(left) group action** if, for all $a,b \in G$ and $x \in X$:

* $a \bullet (b \bullet x) = (a b) \bullet x$, and
* $e \bullet x = x$

> For establishing general properties of group actions, it suffices to consider only left actions.
