# 8. Normals and Quotiens

## Def. Normal

Let $G$ be a group and $N$ its subgroup. Then, if for all $a \in G$ we have $aN=Na$, then $N$ is called a **normal subgroup** (or simply a **normal**) of $G$ denoted by $N \trianglelefteq G$.

If $N$ is non-trivial (that is $N \neq G$) then $N \vartriangleleft G$ is also used instead to denote $N$ is (non-trivially) normal in $G$.

> From now on, it should be understood from $A \trianglelefteq B$ that $B$ is a group and $A$ is its normal subgroup.

## Thm. Equivalent Normals

Let $N \leq G$. Then the following are equivalent

1. $\equiv_L$ and $\equiv_R$ modulo $N$ coincide,
2. $aN=Na$ for all $a \in G$,
3. $aNa^{-1} \subseteq N$ for all $a \in G$,
4. $aNa^{-1} = N$ for all $a \in G$.

## Thm. Basic Normal Properties

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

## Def. Quotient Group

Let $N \trianglelefteq G$. The set of all left cosets of $N$ in $G$ denoted by $G/N$ (read as $G$ modulo $N$) forms a group under the binary operation **(exercise)**

$$(aN)(bN)=(ab)N$$

and is of order $[G:N]$. This group is called **quotient group** or **factor group** of $G$ by $N$.

> Notice that in additive notation it would be written as $(a+N)+(b+N) = (a+b)+N$.
