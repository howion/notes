# First Order Equations

<!-- ## _Def._ Characteristic Line -->

## _Thm._ Constant Coefficients

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

## _Thm._ Variable Coefficient

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
