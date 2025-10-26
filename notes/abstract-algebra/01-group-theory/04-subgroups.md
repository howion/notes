# 4. Subgroups

> Until now we have explicitly defined and shown which multiplication is which operator and which identity belongs which group. From now on, these must be understood from the context. We will prefer little brevity over cumbersome notation.

## Def. Subgroup

Let $G$ be a group and non-empty $H \subseteq G$. The non-empty subset $H$ is called a **subgroup** if $H$ is again a group under the restriction of $G$'s binary operation. This implies $H$ has the same identity as $G$ under the same binary operation.

Equivalently, a subset $H \subseteq G$ of a group $G$ is called a **subgroup** if

* $H$ has the same identity as $G$,
* For all $a,b \in H$, we have $ab \in H$,
* Every element $h \in H$ has an inverse.

To be more compact, _non-empty_ $H \subseteq G$ is called a **subgroup** if and only if (exercise):

* For all $a,b \in H$ we have $ab^{-1} \in H$.

From now on, we will denote by $H \leq G$ that $H$ is a subgroup of $G$, moreover $H \lt G$ if $H \neq G$. The latter is called a **proper subgroup** of $G$.

Any group has two subgroups called the **trivial subgroup** which consists of only the identity and the group itself.

<!-- Any group $G$ has two subgroups, itself and the subgroup that consists of only the identity element. The latter is called the **trivial subgroup**. A subgroup $K$ of $G$ which is not the group $G$ itself is called a **proper subgroup** denoted with $K \lt G$. -->

> Convention regarding to this **trivial** and **proper** notation differs from author to author &mdash; we will stick to this naming.

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
