# 2. Subrings

## Def. Subring

Let $(R, +, \cdot)$ be a ring and $S$ a non-empty subset of $R$. Then $(S, +, \cdot)$ is called a subring if:

* $(S, +)$ is a subgroup of $(R, +)$, and
* $(S, \cdot)$ is a sub-semigroup of $(R, \cdot)$.

> $\{0\}$ and $R$ are called the **trivial subrings**.

The **center of $R$** is, similar to groups, defined as

$$
Z(R) = \{ r \in R \> | \> rx=xr \enspace \text{for all} \enspace x \in R \}
$$

is a subring, and any subring of $Z(R)$ is called a **central subring**.

> **Beware** that existence of unity in subring or the ring does not imply existence of unity in the other. Indeed, if they both have unity, they are not necessarily equal.
>
> Same issue is also true for the units. Remember, for multiplication operation, we are assumming sub-semigroup not subgroup.

## Remarks

Let $R$ be a ring and $S \leq R$ its subring. Then

1. $S$ may be commutative even if $R$ is not.
2. $S$ may not have unity even if $R$ does. Moreover, $S$ may have unity even if $R$ does not.
4. $S$ and $R$ may have different unities.

> **Exercise**, show this is also the case for zero-divisors and units.

## Def. Maximal Subring

Let $R$ a ring and $S$ a subring of $R$, then $S$ is said to be **maximal subring** if $S \neq R$ and for any subring $T$ of $R$ we have

$$
S \subseteq T \subseteq R
\implies
T=S \enspace \lor \enspace T = R
$$

> Notice how we exclude the ring itself to be called maximal subring in itself.

## Def. Opposite Ring

Given a ring $R$, the **opposite ring** is the ring with the same set of elements and same additive operation but multiplication reversed.

### Thm. Self-Opposite iff Commutative

A ring $R$ is it's **self-opposite** (isomorphic to it's opposite) if and only if $R$ is commutative.
