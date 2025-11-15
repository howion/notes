# 8. Conjugates and Normals

## Def. Conjugate

Let $G$ be a group, $H \leq G$, and $a,b \in G$, then

1. the element $aba^{-1}$ is called **the conjugate of $a$ by $b$**,
2. the set $aHa^{-1}$ is called **the conjugate of $H$ by $a$**,
3. the element $a$ is said to **normalize** $H$ if $aHa^{-1} = H$.

> Note that more general definitions would use only commutativity (that is $gh = hg$) instead of inverses for semigroups.

We also say $a$ is **conjugate to an element $b$ by an element $x$** if $a = xbx^{-1}$ denoted with $a = b^x$. We further define for sets $A, B \subseteq G$, and $g \in G$

$$
\begin{array}{lll}
A^B & := & \Set{a^b | a \in A, b \in B} \neq BAB^{-1} \\
A^g & := & gAg^{-1}
\end{array}
$$

> Note that $A^B$ is defined as the set of elements $bab^{-1}$, not $ba(b')^{-1}$ for some $b'$.

## Thm. Basic Conjugate Properties

Let $G$ a group and $a,b,x \in G$, then

* $(ab)^x = a^x b^x$,
* $(a^x)^y = a^{xy}$,
* $a=b^x \implies |a| = |b|$.

## Def. Normal

Let $G$ be a group and $N$ its subgroup. If for all $a \in G$ we have $aN=Na$, then $N$ is called a **normal subgroup** (or simply a **normal**) of $G$ denoted by $N \trianglelefteq G$.

If $N \neq G$, then $N \vartriangleleft G$ will also be used to denote $N$ is a **proper normal subgroup** of $G$.

> From now on, it should be understood from $A \trianglelefteq B$ alone that $B$ is a group and $A$ is its normal subgroup.

## Thm. Equivalent Normal Definitions

Let $G$ be a group and $N \leq G$. Then the following are equivalent

1. $\equiv_L$ and $\equiv_R$ modulo $N$ coincide,
2. $gN=Ng$,
3. $N^g = gNg^{-1} \subseteq N$ for all $g \in G$, that is $N^G \subseteq N$,
4. $N^g = gNg^{-1} = N$ for all $g \in G$, that is $N^G = N$.

## Thm. More Normal Properties

1. Let $M,N \trianglelefteq G$. If $M \cap N = \{e\}$, then $mn=nm$ for all $m \in M$ and $n \in N$.
2. Kernel of any group homomorphism is a normal subgroup.
3. If $|G:H| = 2$, then $H \trianglelefteq G$.
4. $A, B \trianglelefteq G$ implies $AB \trianglelefteq G$.
5. Find normal subgroups $A, B, C$ such that $A \trianglelefteq B \trianglelefteq C$, but $A \not\trianglelefteq C$.

## Thm. Normal and Subgroup Properties

> Recall that the "join" of two subgroup $H,K$ denoted $H \lor K$ is the subgroup $\Braket{H \cup K}$.

Let $N \trianglelefteq G$ and $K \leq G$, then

1. $(N \cap K) \trianglelefteq G$, so intersection of any subgroup with a normal is a normal,
2. $N \lor K = NK = KN$, so join of any subgroup with a normal is their product,
3. $N \trianglelefteq (N \lor K)$.

> TODO: Revise (2) noting that we have defined the multiplication as join! Did we define that?

## Exercise

Let $G$ be a group of finite order, $N \trianglelefteq G$ and $K \leq G$ such that $|K|$ is relatively prime to $|G:H|$, then $K \leq H$.
