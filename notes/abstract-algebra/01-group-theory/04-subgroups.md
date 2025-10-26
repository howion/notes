# 4. Subgroups

## Def. Subgroup

Let $(G, *)$ be a group and non-empty $H \subseteq G$. The non-empty subset $H$ is called a **subgroup** if $H$ is a group under the same binary operation $*$ which is denoted by $H \leq G$. This implies $H$ has the same identity as $G$ under $*$ (exercise).

> From now on, it should be understood from $A \leq B$ that $B$ is a group and $A$ is its subgroup.

Alternatively (exercise), subset $H$ of a group $G$ is a subgroup of $G$ if and only if:

* $H$ has the same identity as $G$,
* For all $a,b \in H$, we have $ab \in H$,
* Every element $h \in H$ has an inverse.

To be more compact, _non-empty_ $H \subseteq G$ is also a subgroup if and only if (exercise):

* For all $a,b \in H$ we have $ab^{-1} \in H$

Any group $G$ has two subgroups, itself and the subgroup that consists of only the identity element. The latter is called the **trivial subgroup**. A subgroup $K$ which is not the group itself is called a **proper subgroup** denoted with $K \lt G$.

> Convention regarding to this **trivial** and **proper** notation differs from author to author.

## Example. Some Subgroups

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

## Thm. Subgroups Under Multiplication

Let $G$ be a group and $H,K \leq G$, then

* $HH = H$ and $H^{-1} = H$, thus obviously
* $HH^{-1} = H$,
* $HK$ is a group if and only if $HK=KH$, and
* If $A,B$ are finite subgroups of a group $G$, then
$$|AB|=\dfrac{|A|\cdot|B|}{|A \cap B|}$$
