# First Order Equations

<!-- ## _Def._ Characteristic Line -->

## _Ex._ Constant Coefficients

Let us be given a first-order homogeneous partial differential equation

$$
au_x + bu_y = 0
$$

with non-zero constant coefficients $a,b \in \R$.

### Geometric Method

Noting $au_x + bu_y$ is the derivational derivative of $u$ in the direction of the vector $\bold{V} = a\bold{i} + b\bold{j}$ which is always zero. Therefore, $u(x,y)$ is constant in the direction of $\bold{V}$ and $(b, -a)$ is orthogonal to $\bold{V}$. The lines parallel to $\bold{V}$ which are called the **characteristic lines** have equations $bx - ay = ``\text{constant}"$. The solution is constant on each line, therefore $u(x,y)$ depends on $bx-ay$ only, so that

$$
u(x,y) = f(bx-ay)
$$

where $f$ is arbitrary function of one variable.

## _Ex._ Variable Coefficient

Now, let us be given a first-order homogeneous partial differential equation

$$
u_x + yu_y = 0
$$

### Geometric Method

This PDE asserts that the directional derivative in the direction of the vector $(1,y)$ is zero. The curves in the plane with $(1,y)$ as tangent vectors have slopes $y$, so that

$$
\dfrac{dy}{dx} = \dfrac{y}{1}.
$$

This ODE has the solutions

$$
y = C e^x
$$

which are the characteristic curves of our PDE. Putting this into our equation and following it we deduce

$$
u(x,y) = u(0, e^{-x}y)
$$

and

$$
\boxed{u(x,y) = f\!\left(ye^{-x}\right)}
$$

which is the general solution to our PDE.

## _Def._ First Order (Quasi-)Linear Equation

A **linear first order partial differential equation** is defined as

$$
A(x,y)z_x + B(x,y)z_y = C(x,y)z
$$

where $z = z(x,y)$. More generaly, a **quasilinear** equation is defined as

$$
A(x,y,z)z_x + B(x,y,z)z_y = C(x,y,z)
$$

and both are are solved in the same way which is

$$
\dfrac{dx}{A}
= \dfrac{dy}{B}
= \dfrac{dz}{C}
\>(=dt)
$$

> todo add more from handwritten notes

## _Thm._ Quasilinear Cauchy Problem

Consider the first order quasilinear equation

$$
A(x,y,z)z_x + B(x,y,z)z_y = C(x,y,z)
$$

where for some domain $\Omega$ we have $x,y,z \in \Omega$ and $A,B,C \in C^1(\Omega)$ and $A^2 + B^2 + C^2 \neq 0$ in $\Omega$.

Passing through the curve

$$
\def\arraystretch{1.25}
\begin{array}{lll}
\Gamma : &x = \alpha(s), & \\
&y = \beta(s), & \\
&z = \gamma(s).&
\end{array}
$$

where $s \in (a,b) \subseteq \Omega$ and $\alpha, \beta, \gamma \in C^1 (\Omega)$.

The Cauch Problem above has an unique solution in some neighborhood of $\Gamma$ if

$$
\Delta := \begin{vmatrix}
   A & B \\
   \alpha' & \beta'
\end{vmatrix}
$$

is non-zero on $\Gamma$.

Moreover, if $\Delta |_\Gamma = 0$ for all $s \in (a,b)$, then either

* We have infinitely many solns if $\Gamma$ is characteristic curve, or
* We have no solutions if $\Gamma$ is not characteristic curve.
