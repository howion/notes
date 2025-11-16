# 3. Subgroups

> Until now we have explicitly defined and shown which multiplication is to which operator and which identity belongs to which group. From now on, these must be understood from the context. We will prefer little brevity over cumbersome notation.

## Def. Subgroup

Let $G$ be a group and non-empty $H \subseteq G$. The non-empty subset $H$ is called a **subgroup** if $H$ is again a group under the restriction of $G$'s binary operation. This implies $H$ has the same identity as $G$ under the same binary operation.

## Thm. Equivalent Subgroup Definitions

A subset $H \subseteq G$ is a subgroup of $G$ if

* $H$ has the same identity as $G$,
* For all $a,b \in H$, we have $ab \in H$ that is $HH \subseteq H$,
* Every element $h \in H$ has an inverse that is $H^{-1} \subseteq H$.

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

## Thm. Finite and Closed Subset

Let $G$ be a group and $S$ a non-empty subset of $G$. If $S$ is finite and closed under the group product, then $S$ is a subgroup of $G$.

> So, we don't even need the inverse condition if $S$ non-empty and finite.

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

We have $e \in G$ since $a^n$ must repeat. Similarly, for inverse we have $a^r = a^s$ implies $a^{r-s} = e$ implies $a^{r-s-1}=a^{-1}$ where $r > s \geq 1$.
</details>

## Thm. Intersection of Subgroups

Let $\{H_i\}$ be any non-empty family of subgroups of $G$, then $\bigcap H_i$ is also a subgroup of $G$.

> Exercise

## Thm. Subgroups Under Multiplication

Let $G$ be a group and $H,K \leq G$, then

* $HH = H$ and $H^{-1} = H$, thus obviously
* $HH^{-1} = H$,
* $HK$ is a subgroup of $G$ if and only if $HK=KH$, and

> Exercise

## Def. Complement

Let $H \leq G$. We say $K$ is a **complement** of a subgroup $H$ if

* $G = HK$, and
* $H \cap K = \{e\}$.

Noting $KH=HK$, this complement relation is symmetrical.

## Thm. Basic Complement Properties

<!-- TODO: References & Proofs -->

1. Complements need not to exists, and if they exists they need not to be unique.

Let $H$ and $K$ be complements in $G$, then

2. Every element of $G$ has an unique expression as a product $hk$ or $k'h'$ where $h,h' \in H$ and $k,k' \in K$.
3. $K$ forms both left and right transversal of $H$ for the cosets of $H$.

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO:
</details>

## Def. Maximal Subgroup

Let $G$ be a group and let $H$ be a proper subgroups of $G$. We say $H$ is a **maximal subgroup** if $H \subseteq K$ implies $K = H$ for all $K \lt G$.

> Simply, $H$ is maximal if there is no greater proper subgroup which contain it.

## Def. Frattini Subgroup

Let $G$ be a group. We define **frattini subgroup** $\Phi(G)$ as the intersection of all maximal subgroups of $G$. In the case $G$ has no maximal subgroups, we define $\Phi(G) = G$.

> This is analogous to the Jacobson radical in the ring theory.

## Thm. Frattini Subgroup and Non-Generators

The frattini subgroup $\Phi(G)$ of a group $G$ is equal to the set of all non-generators of $G$. Therefore, non-generators of a group form a subgroup &mdash; namely the frattini subgroup.

## Exercises

### #1

Let $H \leq G$ and $g \in G$ such that $|g| = n$ and $g^m \in H$ where $(m,n) = 1$, then $h \in G$.

<details>
<summary><b>Help</b></summary>
<br/>

Use Bézout's identity.
</details>

### #2

Let $G$ be a group and $g \in G$ such that $|g| = n_1 n_2$ where $(n_1, n_2) = 1$, then there exists $g_1, g_2 \in G$ such that

* $g = g_1 g_2 = g_2 g_1$, and
* $|g_1| = n_1$ and $|g_2| = n_2$.

### #3

Let $H,K \leq G$ such that $Hx = Ky$ for some $x,y \in G$, then $H=K$.

### #4

Let $H \leq G$ and $x, y \in G$, then $Hx = Hy$ if and only if $x^{-1}H = y^{-1}H$.
