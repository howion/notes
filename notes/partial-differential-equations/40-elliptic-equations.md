# Elliptic Equations

## _Def._ Laplace Operator

The **Laplace operator** is a second-order differential operator in the $n$-dimensional Euclidean space, defined as the divergence of the gradient of $f \in C^2(\Omega)$. Therefore, if $f$ is a twice-differentiable real-valued function, then the **Laplacian of $f$** is the real valued function

$$
\Delta f := \nabla^{2} f = \nabla (\nabla f)
$$

Moreover, $f$ is called **harmonic** if $\Delta f = 0$.

In this section we will consider the **Laplace Equation** defined by $\Delta u = 0$, and then the **Poisson Equation** defined by $\Delta u = F(x)$ with **Dirichlet boundary condition**:

$$
u |_{\partial\,\Omega} = f(x)
$$

and **Neumann boundary condition**:

$$
\dfrac{\partial}{\partial \vec{n}}u |_{\partial\,\Omega} = f(x)
$$

where $\vec{n}$ is the unit outward normal to $\partial \Omega$.

Recall that

$$
\dfrac{\partial u}{\partial \vec{n}} = \nabla u \cdot \vec{n}
$$

> We will not prove it however Poission equation has an unique solution in both boundary conditions, and stable making it well-posed.

## _Thm._ Weak Maximum Principle

Let $\Omega$ be a bounded domain in $\R^n$ and $u \in C^2(\Omega) \cap C(\overline{\Omega})$ and suppose $\Delta u \geq 0$ in $\Omega$, then

$$
\max_{\overline{\Omega}} u = \max_{\partial\,\Omega} u
$$

and as a result

$$
\min_{\overline{\Omega}} u = \min_{\partial\,\Omega} u
$$

Moreover, if $\Delta u = 0$ in $\Omega$, then

$$
\max_{\overline{\Omega}} |u| = \max_{\partial\,\Omega} |u|
$$

## _Thm._ Laplace Dirichlet Problem in a Rectangle

Consider the rectange $R \subseteq \R^2$ defined as $0 < x < a$ and $0 < y < b$, and the Laplace Equation

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
\Delta u = u_{xx} + u_{yy} &=& 0 \\
\hdashline
u(x, 0) &=& f_1(x) \\
u(0, y) &=& g_1(y) \\
u(x, b) &=& f_2(x) \\
u(a, y) &=& g_2(y) \\
\end{array}
$$

we can write $u = u_1 + u_2 + u_3 + u_4$ where $\Delta u_i = 0$ in $R$ where each $u_i$ corresponds to an edge of $R$.

For simplicity, let us consider just $w=u_1$ so that we have

$$
u_1(x,0) = f_1 \\
u_1(x,b) = 0 \\
u_1(0,y) = 0 \\
u_1(a,y) = 0 \\
$$

and set $w = X(x)Y(y)$ for seperation of variables, which results in

$$
w_n = c_n \sin\left(\dfrac{n \pi}{a} x\right)\sinh\left(\dfrac{n \pi}{a} (y-b)\right)
$$

which can be used to construct a formal solution

$$
w = \sum_{n=1}^{\infty} w_n
$$

> This is not really a good solution, maybe check out p. 163 of Strauss.

<!--
## _Thm._ Laplace Neumann Problem in a Rectangle

Consider the rectange $R \subseteq \R^2$ defined as $0 < x < a$ and $0 < y < b$, and the Laplace Equation with Neumann boundary conditions:

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{xx} + u_{yy} &=& 0 \\
\hdashline
\frac{\partial u}{\partial \vec{n}} &=& h(x,y)
\end{array}
$$

where in the both equations above $(x,y) \in R$. A solution which is determined up to a constant exists if and only if

$$
\int_{\partial R} \frac{\partial u}{\partial \vec{n}}\>ds = \int_{\partial R} h\>ds = 0.
$$

Similarly, we also use seperation of variables which results in

$$
\boxed{u(x,y) = c_0 \dfrac{1}{2} + \sum_{n=1}^{\infty} c_n \cos(nx)\cosh(n(y-\pi))}
$$

## _Thm._ Laplace Dirichlet Problem in a Disk

Consider a disk $D \subseteq \R^2$ defined as $x^2 + y^2 < a^2 \in \R^{\geq 0}$ and the Laplace equation

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
\Delta u = u_{xx} + u_{yy} &=& 0 \\
\hdashline
u |_{\partial\,\Omega} &=& f(x)
\end{array}
$$

Within polar coordinates, we have

$$
\begin{array}{rcl}
D &=& \Set{(r, \theta) : 0 \leq r \leq a, \enspace \theta \in [0, 2\pi]} \\
\partial D &=& \Set{(r, \theta) : r = a, \enspace \theta \in [0, 2\pi]}
\end{array}
$$

and

$$
\boxed{u_{xx} + u_{yy} = u_{rr} + \dfrac{1}{r} u_r + \dfrac{1}{r^2}u_{\theta\theta}}
$$

which results in the following _classical solution_ for the Dirichlet problem:

$$
\boxed{
u(r, \theta) = \dfrac{\alpha_0}{2} + \sum_{n=1}^{\infty} \left(\dfrac{r}{a}\right)^n(\alpha_n \cos(n \theta) + \beta_n \sin(n \theta))
}
$$

where

$$
\boxed{
    \begin{array}{rcl}
\alpha_n = \dfrac{1}{\pi} \displaystyle\int_{-\infty}^\infty f(\theta) \cos(n \theta)\>d\theta \\ \ \\
\beta_n =  \dfrac{1}{\pi} \displaystyle\int_{-\infty}^\infty f(\theta) \sin(n \theta)\>d\theta
\end{array}
}
$$ -->

## _Thm._ Poisson's Formula

Let's consider the Dirichlet Problem for a circle which is

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
\Delta u = u_{xx} + u_{yy} &=& 0, & x^2 + y^2 < a^2 \\
\hdashline
u &=& f(\theta), & x^2 + y^2 = a^2 \\
\end{array}
$$
within polar coordinates, we have

$$
\begin{array}{rcl}
D &=& \Set{(r, \theta) : 0 \leq r \leq a, \enspace \theta \in [0, 2\pi]} \\
\partial D &=& \Set{(r, \theta) : r = a, \enspace \theta \in [0, 2\pi]}
\end{array}
$$

and

$$
\boxed{u_{xx} + u_{yy} = u_{rr} + \dfrac{1}{r} u_r + \dfrac{1}{r^2}u_{\theta\theta}}
$$

so that

$$
\boxed{
u(r, \theta) = \dfrac{a^2 -r ^2}{2\pi} \int_{-\pi}^{\pi} \dfrac{f(\phi)}{a^2 - 2ar\cos(\theta - \phi) + r^2}\>d\phi
}
$$

## _Thm._ Mean Value Property

Let $u$ be a harmonic function in a disk $D$, continuous in its closure $\overline{D}$, then the value of $u$ at the center of $D$ equals to the average of $u$ on its circumference:

$$
u(x_o, y_o) = \dfrac{1}{2 \pi a} \oint_{\partial D} u\>ds
$$
