# Matrix Groups

## _Def._ General Special Linear Groups

Let $\mathbb{F}$ be a field and recall that the set of all invertible $n \times n$ matrices form a group with matrix multiplication with the identity $I_n$.

Moreover, each matrix $A$ in this group determines an invertible linear transformation:

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
f_A &:& \R^n \to \R^n \\
f_A(x) &=& Ax
\end{array}
$$

where $(\cdot)^T$ denotes the transpose matrix.

The group of invertible $n\times n$ is matrices called the **general linear group** denoted with $\text{GL}_n(\mathbb{F})$. Simply $\text{GL}_n$ or $\text{GL}(n)$ if the field is known. Unless otherwise stated, we will assume the field is the real numbers $\R$.

The subgroup of $\text{GL}_n(\mathbb{F})$ which is composed of $n \times n$ matrices with the determinant equal to $+1$ is called the **special linear group** and denoted with $\text{SL}_n(\mathbb{F})$.

> Note that we are using column vector notation, in the row-vector notation $f_A$ would be defined as $xA^T$.

## _Def._ Orthogonal Matrix

> See the appendix for the formal definition of orthonormality.

An **orthogonal (or orthonormal) matrix** is a real square matrix whose columns and rows are orthonormal vectors. Equivalently, a matrix $Q$ is orthogonal if

$$
Q^T Q = I
$$

An orthogonal matrix is called **special** if its determinant is $1$. Moreover, note that the determinant of an orthogonal matrix is either $+1$ or $-1$ (exercise).

<!--
So far we know that orthogonal matrices preserve the inner product. Moreover, orthogonal matrices also imply orthogonal transformations.
-->

## _Def._ Orthogonal Group

Noting the orthogonal $n \times n$ matrices forms a group under matrix multiplication, we also define **orthogonal group** $\text{O}_n$ and **special orthogonal group** $\text{SO}_n$ where the latter is the subgroup of the former with elements of determinant value of $+1$.

We have seen so far that if $A \in O_n$, then $f_A$ preserves the distance and the inner product (and thus preserves orthogonality).

## _Thm._ $\text{O}_2$ and $\text{SO}_2$ on the Unit Circle

Let $A \in \text{O}_2$, then the columns of $A$ are unit vectors and are orthogonal to one another. Noting these vectors lie in the unit circle we get the following two representations for $A$:

Let $A$ has determinant $+1$, then we obtain

$$
A = \begin{bmatrix}
   \cos\theta & -\sin\theta \\
   \sin\theta & \cos\theta
\end{bmatrix}
$$

which is an element of $\text{SO}_2$ and represents anti-clockwise rotation. Notice how this implies each element of $\text{SO}_2$ has the form $e^{i \theta}$. Indeed, there is an isomorphism between the unit circle in the complex plane and $\text{SO}_2$.

Now, if $A$ has determinant $-1$, then we obtain

$$
A = \begin{bmatrix}
   \cos\theta & \sin\theta \\
   \sin\theta & -\cos\theta
\end{bmatrix}
$$

which represents reflection in a line at angle $\frac{\theta}{2}$ to the positive $x$-axis.

Therefore, each $2 \times 2$ orthogonal matrix represents either a rotation of the plane about the origin (determinant $+1$), or a reflection in a straight line through the origin (determinant $-1$).

Similarly, in the three-dimensional case, $\text{SO}_3$ represents a rotation of $\R^3$ about an axis which passes through the origin. Conversely, every rotation of $\R^3$ which fixes the origin is represented by a matrix in $\text{SO}_3$. From now on, we shall refer $\text{SO}_3$ as the **rotation group in three dimensions**.

## _Thm._ Finite Subgroups of $\text{O}_2$

A finite subgroup of $\text{O}_2$ is either cyclic or dihedral.

##  _Thm._ Finite Subgroups of $\text{SO}_3$

A finite subgroup of $\text{SO}_3$ is isomorphic to either

* cyclic group,
* dihedral group,
* rotational symmetry group of one of the regular (platonic) solids

## _Thm._ Rotations

In the plane every rotation commute. In $\R^3$, rotations usually does not commute and the only matrix commuting with all of $\text{SO}_3$ is the identity matrix. In $\R^4$, both $\Set{I, -I}$ commutes with every other element in $\text{SO}_4$.

> Recall the fact $\det(\lambda A) = \lambda^n \det(A)$ where $\lambda$ is a constant.

## Exercises

### #1

Show that the square of an orientation-reversing plane isometry is a translation.

### #2

For any $H \leq \text{O}_n$, show that $[H : H \cap \text{SO}_n] \leq 2$.

<details>
<summary><b>Hint</b></summary>
<br>

Use the First Isomorphism Theorem with the homomorphism $\text{O}_n \to \Set{\pm 1}$.

</details>

### #3

Show that $\text{Isom}^+(\R^2) \trianglelefteq \text{Isom}(\R^2)$.
