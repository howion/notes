# Appendix 1: Inner Product Space

## Def. Inner Product Space

An **inner product space** is a vector space $\mathcal{V}$ over the field $\mathbb{F}$ together with an **inner product**

$$
\braket{\cdot, \cdot}: \mathcal{V} \times \mathcal{V} \to \mathbb{F}
$$

that satisfies, for all vectors $x,y,z \in \mathcal{V}$ and scalars $a,b \in \mathbb{F}$

1. $\Braket{x,y} = \overline{\Braket{y, x}}$ called **symmetry axiom**
2. $\Braket{x + y, z} = \Braket{x,z} + \Braket{y,z}$ called **additivity axiom**
3. $\Braket{ax, y} = a\Braket{x,y}$ called **homogenity axiom**
4. $\Braket{x,x} \geq 0$ and $\Braket{x,x} = 0 \iff x = 0$ called the **positivity axiom**

## Thm. Cauchy-Schwarz Inequality

Let $x,y$ be two vectors in the inner product space $\mathcal{V}$, then

$$
\vert \Braket{x,y} \vert \leq \Vert x \Vert \cdot \Vert y \Vert
$$

where $\Vert \cdot \Vert$ is the norm induced by the inner product.
