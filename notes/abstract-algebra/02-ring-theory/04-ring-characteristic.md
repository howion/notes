# 4. Ring Characteristic

## Def. Characteristic

Let $R$ be any ring. The **characteristic** of $R$, denoted by $\text{Char}(R)$ is the least positive integer $n$ such that $na = 0$ for all $a \in R$. If such $n$ does not exists, then it is defined to be $0$.

## Thm. Basic Characteristic Properties

1. $\text{Char}(R) = 1$ if and only if $R = \Braket{0}$.
2. $\text{Char}(R) = 0$ if and only if the additive order $|1|$ is infinite.
3. $\text{Char}(R) = n \neq 0$ if and only if the additive order $|1|$ is equal to $n$.

## Example. Characteristic Examples

<!-- Detail 3 with R<x> myb? -->

1. $\text{Char}(\Z) = \text{Char}(\mathbb{Q}) = \text{Char}(\R) = \text{Char}(\Complex) = \text{Char}(\mathbb{H}) = 0$,
2. $\text{Char}(M_n(R)) = \text{Char}(R)$,
3. $\text{Char}(R) = \text{Char}(R[x]) = \text{Char}(R[[x]])$,
4. $\text{Char}(\Z_n) = n$

<details>
<summary><b>Proof</b></summary>
<br/>

Exercise.
</details>

## Thm. Characteristic of Cartesian Product Ring

Let $R$ and $S$ be rings, then their characteristic is

1. $0$ if either $R$ or $S$ has characteristic $0$, or
2. $\text{lcm}(\text{Char}(R), \text{Char}(S))$.

## Thm. '

Suppose $R$ is a ring with $1$ whose non-units forms a subgroup under addition. Then either,

1. $\text{Char}(R) = 0$, or
2. $\text{Char}(R) = p^n$ where $p$ prime and $n$ positive integer.

<details>
<summary><b>Proof</b></summary>
<br/>

TODO:
</details>
