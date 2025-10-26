# 8. Conjugates and Normals

## Def. Conjugate

Let $G$ be a group, $g,h \in G$, and $H$ a subgroup of $G$.

1. The element $ghg^{-1} \in G$ is called **the conjugate of $h$ by $g$**.
2. The set $gHg^{-1} \subseteq G$ is called **the conjugate of $H$ by $g$**.
3. The element $g$ is said to **normalize** $H$ if $gHg^-1 = H$.

> Note that more general definitions would use symmetries (that is $gh = hg$) instead of inverses for semigroups.

We also say $a$ is **conjugate to an element $b$ by an element $x$** if $a = xbx^{-1}$ denoted with $a = b^x$. We further define for sets $A, B \subseteq G$, and $g \in G$

$$
\begin{array}{ll}
A^B := \Set{a^b | a \in A, b \in B} \neq BAB^{-1} \\
A^g := gAg^{-1}
\end{array}
$$

> Notice that $A^B$ is defined as the set of elements $bab^{-1}$, not $ba(b')^{-1}$ for some $b'$.

### Thm. Basic Conjugate Properties

Let $G$ a group and $a,b,x \in G$, then

* $(ab)^x = a^x b^x$,
* $(a^x)^y = a^{xy}$,
* $a=b^x \implies |a| = |b|$.

## Def. Normal

Let $G$ be a group and $N$ its subgroup. If for all $a \in G$ we have $aN=Na$, then $N$ is called a **normal subgroup** (or simply a **normal**) of $G$ denoted by $N \trianglelefteq G$.

If $N \neq G$, then $N \vartriangleleft G$ will also be used to denote $N$ is a **proper normal subgroup** of $G$.

> From now on, it should be understood from $A \trianglelefteq B$ alone that $B$ is a group and $A$ is its normal subgroup.

### Thm. Equivalent Normal Definitions

Let $G$ be a group and $N \leq G$. Then the following are equivalent

1. $\equiv_L$ and $\equiv_R$ modulo $N$ coincide,
2. $gN=Ng$,
3. $N^g = gNg^{-1} \subseteq N$ for all $g \in G$, that is $N^G \subseteq N$,
4. $N^g = gNg^{-1} = N$ for all $g \in G$, that is $N^G = N$.

### Thm. Basic Normal Properties

> Recall that the "join" of two subgroup $H,K$ denoted $H \lor K$ is the subgroup $\Braket{H \cup K}$.

Let $N \trianglelefteq G$ and $K \leq G$, then

1. $(N \cap K) \trianglelefteq G$, so intersection of any subgroup with a normal is a normal,
2. $N \trianglelefteq (N \lor K)$,
3. $NK = N \lor K = KN$,
4. If $K \trianglelefteq G$ and $K \cap N = \{e\}$, then $nk=kn$ for all $n \in N$ and $k \in K$.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>

## Def. Simple Group

A group is said to be **simple** if it has no proper normal subgroups.

<!-- ## Thm. '

Let $G$ be a group, $M \subseteq G$, and $H \leq G$, then -->

<!-- TODO: See kargapolov p.16 -->
