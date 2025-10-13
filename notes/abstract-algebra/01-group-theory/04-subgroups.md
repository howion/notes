# Subgroups

[**Go Back**](../00-index.md)

## Def. Subgroup

Let $(G, *)$ be a group and $H \subseteq G$. The (necessarily nonempty) subset $H$ is called a **subgroup** if $H$ is a group under the same binary operation $*$ (and thus also the same identity) denoted by $H \leq G$.

Alternatively (exercise), the non-empty subset $H$ of a group $G$ is a subgroup of $G$ if and only if:

* For all $a,b \in H$ we have $ab^{-1} \in H$

So, iff, for any subgroup $H \leq G$ we have:

* $H$ has the same identity as $G$,
* For all $a,b \in H$, we have $ab \in H$,
* Every element $h \in H$ has an inverse.

Any group $G$ has two subgroup, itself and the subgroup that consists of only the identity element. The latter is called the **trivial subgroup**. Subgroups other than these are called **proper subgroups**. Still, convention regarding this naming is quite context-dependent.

### Thm. Basic Subgroup Properties

* $HH = H$ and $H^{-1} = H$.
* The products of subgroups $A,B$ of a group $G$ is a group if and only if $AB=BA$.
* If $A,B$ are finite subgroups of a group $G$, then
$$|AB|=\dfrac{|A|\cdot|B|}{|A \cap B|}$$

### Exercise 1

* Under addition, $\Z \lt \mathbb{Q}_p, \lt \mathbb{Q} \lt \R \lt \Complex$,
* Under addition, $\Z = \bigcap \mathbb{Q}_p$,
* $\mathbf{GF}(p^m) \leq \mathbf{GF}(p^n)$ if $m \mid n$ where $\mathbf{GF}(p^m)$ is the appropriate subset of the algebraic closure of $\mathbf{GF}(p)$.

<!--  -->

* Under multiplication, $\Z^* \lt \mathbb{Q}^*, \lt \R^* \lt \Complex^*$,
* Under multiplication, $\Complex_p^* \lt \Complex_{p^2} \lt \cdots \lt \Complex_{p^\infty}$,
* $\Complex_{p^\infty} = \bigcup \Complex_{p^n}$,
* $\mathbf{GF}(p^m)^* \leq \mathbf{GF}(p^n)^*$ if $m \mid n$.

<!--  -->

* The subset $A_n$ of all _even_ permutations forms a subgroup called the **alternating group of degree $n$**, and $|A_n|=n!/2$.

<!-- TODO: Add more exercises here from kargapolov p.27 and other sources -->

## Def. Centralizer

Let $(G, \cdot)$ be a group and $A$ nonempty subset of $G$. The subset

$$C_G(A) = \{ g \in G \> | \> gag^{-1} = a \enspace \text{for all} \enspace a \in A \}$$

is a subgroup of $G$ (exercise) and is called the **centralizer of $A$ (in $G$)**.

### Some Properties of Centralizer

* If $G$ is abelian, then $C_G(A) = G$ for all non-empty subsets $A$.

## Def. Center

Let $(G, \cdot)$ be a group and $A$ nonempty subset of $G$. The subset

$$Z(G) = \{ g \in G \> | \> gx=xg \enspace \text{for all} \enspace x \in G \}$$

is a subgroup of $G$ (exercise) called the **center (of $G$)**. It is basically the set of elements that commute with all the elements of $G$. Notice that $Z(G) = C_G(G)$.

## Def. Normalizer

Let $(G, \cdot)$ be a group, $A$ nonempty subset of $G$, and

$$gAg^{-1} = \{ gag^{-1} \in G \> | \> gx=xg \enspace \text{for all} \enspace x \in G \}$$

Then the **normalizer** of $A$ in $G$ is the subset

$$N_G(A) = \{ g \in G \> | \> gAg^{-1} = A \}$$

which is also a subgroup of $G$ (exercise).
