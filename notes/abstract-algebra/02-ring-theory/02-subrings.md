# Subrings

[**Go Back**](../00-index.md)

## Def. Subring

Let $(R, +, \cdot)$ be a ring and $S$ a non-empty subset of $R$. Then $(S, +, \cdot)$ is called a subring if:

* $(S, +)$ is a subgroup of $(R, +)$, and
* $(S, \cdot)$ is a sub-semigroup of $(R, \cdot)$.

> $\{0\}$ and $R$ called the **trivial subrings**. The convention regarding what subring is proper or trivial is context-dependent.

The **center of $R$** is, similar to groups, defined as

$$
Z(R) = \{ r \in R \> | \> rx=xr \enspace \text{for all} \enspace x \in R \}
$$

is a subring, and any subring of $Z(R)$ is called a **central subring**.

> **Beware** that existence of unity in subring or the ring does not imply existence of unity in the other. Indeed, if they both have unity, they are not necessarily equal.
>
> Same issue is also true for the units. Remember, for multiplication operation, we are assumming sub-semigroup not subgroup.

## Def. Opposite Ring

Given a ring $R$, the **opposite ring** is the ring with the same set of elements and same additive operation but multiplication reversed.

### Thm. Self-Opposite iff Commutative

A ring $R$ is it's **self-opposite** (isomorphic to it's opposite) if and only if $R$ is commutative.
