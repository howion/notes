# Appendix 1: Inner Product Space

## _Def._ Inner Product Space

An **inner product space** is a vector space $\mathcal{V}$ over the field $\mathbb{F}$ together with an **inner product**

$$
\braket{\cdot, \cdot}: \mathcal{V} \times \mathcal{V} \to \mathbb{F}
$$

that satisfies, for all vectors $x,y,z \in \mathcal{V}$ and scalars $a,b \in \mathbb{F}$

1. $\Braket{x,y} = \overline{\Braket{y, x}}$ called **symmetry axiom**
2. $\Braket{x + y, z} = \Braket{x,z} + \Braket{y,z}$ called **additivity axiom**
3. $\Braket{ax, y} = a\Braket{x,y}$ called **homogenity axiom**
4. $\Braket{x,x} \geq 0$ and $\Braket{x,x} = 0 \iff x = 0$ called the **positivity axiom**

## _Thm._ Cauchy-Schwarz Inequality

Let $x,y$ be two vectors in the inner product space $\mathcal{V}$, then

$$
\vert \Braket{x,y} \vert \leq \Vert x \Vert \cdot \Vert y \Vert
$$

where $\Vert \cdot \Vert$ is the norm induced by the inner product.

## _Def._ Kronecker Delta Function

$$
\delta_{ij} := \begin{cases}
   \> 0 & \text{if } \enspace i \neq j \\
   \> 1 & \text{if } \enspace i = j
\end{cases}
$$

## _Def._ Orthonormality

Let $\mathcal{V}$ be an inner product space. A set of vectors $\Set{v_1, v_2, ...} \subseteq \mathcal{V}$ is called **orthonormal** if

$$
\forall i,j \Braket{u_i, u_j} = \delta_{ij}
$$

> Each vector is orthogonal to each other.

## _Def_. Orthogonal Matrix

An **orthogonal (or orthonormal) matrix** is a real square matrix whose columns and rows are orthonormal vectors. Equivalently, a matrix $Q$ is orthogonal if

$$
\bold{Q}^T = \bold{Q}^{-1}
$$

An orthogonal matrix is called **special** if its determinant is $1$.

## _Thm._ Basic Properties of Orthonal Matrices

Let $\bold{O}$ be an orthogonal matrix, then

1. $\bold{O}$ is invertible.
2. $\bold{O}^T \bold{O} = \bold{I}$
3. The determinant of $\bold{O}$ is either $1$ or $-1$.
4. If $\bold{O}$ is special orthogonal matrix, then &mdash; as a linear transformation &mdash; it acts as a rotation around a fixed point if $n \geq 2$ in $\R^n$.
