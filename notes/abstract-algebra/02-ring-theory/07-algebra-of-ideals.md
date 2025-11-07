# 7. Algebra of Ideals

Let $R$ be a ring and $I$ and $J$ its ideals of the same kind. Then the **addition of ideals** $I$ and $J$ is defined as

$$
I + J = \Set{i + j | i \in I, j \in J} \subseteq R
$$

which is an ideal of the same kind in $R$. Such addition is commutative and associative.

The **multiplication of ideals** $I$ and $H$ is defined as

$$
IJ = \Set{i_1j_1 + \cdots + i_nj_n | i_i \in I, j_i \in J}
$$

that is the finite sums of products of pairs from $I$ and $J$. This product is again an ideal in $R$. Such multiplication is associative but not necessarily commutative.

> Notice how the multiplication in Ring Ideals differs from the subset/subring/coset multiplication in Group Theory.

## Remark

Let $R$ be a ring and $I, J \subseteq R$.

1. $IJ$ is a left ideal if $I$ is an ideal.
2. $IJ$ is a right ideal if $J$ is an ideal.
3. $IJ$ is a $2$-sided ideal if $I$ is a left ideal and $J$ is a right ideal.
    1. $IR \subseteq I$ and $RI \subseteq I$.
    2. Moreover, if $R$ is with $1$, then $IR    = I = RI$.

## Def. Nilpotent Ideal

Let $I$ be an ideal. If for some $n \geq 1$ we have $I^n = (0)$, then $I$ is called a **nilpotent ideal**.

## Def. Nil Ideal

Let $I$ be an ideal such that every element of $I$ is nilpotent, then $I$ is called a **nil ideal**.

## Thm. Nilpotent and Nil Ideal

Every nilpotent ideal $I$ is a nil ideal. Converse is not necessarily true unless $I$ is finitely generated.
