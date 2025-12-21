# Endomorphisms

## _Def._ Inner and Outer Automorphisms

Let $G$ be a group, $a \in G$, and $\iota_a: G \to G$ be a map such that $x \mapsto x^a$, then $\iota_a$ is an automorphism on $G$ called an **inner automorphism**. Moreover, the **set of all inner automorphism** on $G$ denoted by $\text{Inn }G$ is a normal subgroup of $\text{Aut }G$.

An automorphism which is not inner is called an **outer automorphism**. Noting $\text{Inn }G$ is normal, we define the **outer automorphism group** as

$$
\text{Out } G := \text{Aut } G / \text{Inn }G
$$

## _Thm._ Inner Automorphisms

Let $G$ be a group, then

$$
\text{Inn }G \cong G / C(G)
$$

<details>
<summary><b>Proof</b></summary>
<br/>

> TODO
</details>

## _Def._ Endomorphic Invariance

Let $H \leq G$ and $\Phi \subseteq \text{End }G$. We say $H$ is **$\Phi$-invariant** or **invariant with respect to $\Phi$** if for all $\phi \in \Phi$

$$
\phi(H) \leq H
$$

Noting that $\Braket{e}$ and $G$ is invariant with respect to any arbitrary $\Phi$, we say the group is **$\Phi$-simple** if it contains no other $\Phi$-invariants than these two.

## _Thm._ Equivalent Normal Definition

Let $H \leq G$, then $H$ is normal if and only if $H$ is invariant with respect to $\text{Inn }G$.

> Exercise

## Notation. Invariance

Let $H \leq G$, then we respectively denote $\text{End } G$, $\text{Aut }G$, and $\text{Inn }G$ with

* $\leq_E$ or $\leq_\text{End}$,
* $\leq_A$ or $\leq_\text{Aut}$,
* $\leq_I$ or $\leq_\text{Inn}$ which is equivalent to $\trianglelefteq$ as shown above.

## _Thm._ Invariance Transitivity

The relations $\leq_\text{End}$ and $\leq_\text{Aut}$ are transitive.

> Exercise

## _Def._ Characteristic Subgroup

Let $H \leq G$, then we say $H$ is a **characteristic subgroup** of $G$ if $H$ is invariant with respect to $\text{Aut }G$, that is $H \leq_\text{Aut} G$.

## _Thm._ Characteristic Normality

Let $H$ be a characteristic subgroup of $G$, then $H$ is normal in the whole group, that is $A \trianglelefteq N$ for all $N \trianglelefteq G$.

> Exercise

## _Def._ Complete Group

A group $G$ is called **complete** if it has trivial center and $\text{Aut }G = \text{Inn }G$. Therefore,

$$
\text{Aut }G \cong G
$$

## Exercises

### #1

The center $C(G)$ of a group $G$ is always characteristic.

### #2

The Frattini subgroup of any group is characteristic.
