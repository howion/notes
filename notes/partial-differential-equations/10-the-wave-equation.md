# The Wave Equation

## _Def._ Wave Equation

The (one-dimensional) **wave equation** (on the line) is defined as the (hyperbolic) equation:

$$
u_{tt} = c^2 u_{xx}
$$

where $x \in (-\infty, \infty)$ and $t > 0$. The general solution is easy to solve since operators factor out nicely:

$$
u_{tt} - c^2 u_{xx} = \left(\dfrac{\partial}{\partial t} - c\dfrac{\partial}{\partial x}\right)\left(\dfrac{\partial}{\partial t} + c\dfrac{\partial}{\partial x}\right)u = 0
$$

so that

$$
\boxed{u(x,t) = f(x+ct) + g(x-ct)}
$$

where $f$ and $g$ are twice-differentiable arbitrary functions of single variable.

## _Thm._ Cauchy Problem for the Wave Equation

Assume we are given an initial value problem for the wave equation so that

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{tt} - c^2 u_{xx} &=& 0  \\
\hdashline
u(x, 0) &=& g(x) \\
u_t(x, 0) &=& h(x)
\end{array}
$$

where $g$ and $h$ are the given initial displacement and velocity. There is one and only one solution of this problem which is

$$
\boxed{
    u(x,t) = \dfrac{g(x+ct) + g(x-ct)}{2} + \dfrac{1}{2c} \displaystyle \int_{x-ct}^{x+ct} h(s) \> ds
}
$$

called the **d'Alembert's formula**.

Moreover, this problem (generally inhomogenous wave equation) is well-posed since unique solution exists and it's stable.

<!-- TODO: Add examples and better explanation for domain of influence and dependence -->

## _Def._ Inhomogeneous Wave Equation

Let $f \in C^2(\R^2, \R)$, then the **inhomogeneous wave equation** is defined as

$$
u_{tt} - c^2 u_{xx} = f(x,t)
$$

and unless otherwise stated assume $t > 0$ and $x \in (-\infty, \infty)$.

## _Thm._ Simple Inhomogenous Wave Equation

Assume we are given a inhomogenous wave equation with the initial conditions

$$
\def\arraystretch{1.25}
\begin{array}{ccc}
u(x,0) &=& 0 \\
u_t(x,0) &=& 0 \\
\end{array}
$$

then the solution $u(x,t)$ is given by applying the Green's Theorem on the domain of dependence so that

$$
u(x_0,t_0) = \dfrac{1}{2c} \iint_D f(a,b)\>da\>db
$$

where $D$ is the characteristic triangle.

<p align="center">
  <img src="./partial-differential-equations/10-greens-theorem-on-characteristic-triangle.svg" alt="Green's Theorem on characteristic triangle" width="400">
</p>

where

$$
\def\arraystretch{1.25}
\begin{array}{ccl}
L_0 &=& \Set{(a,0) : x_0 - ct_0 \leq a \leq x_0 + ct_0} \\
L_1 &=& \Set{(a,b) : a+cb = x_0+ct_0, \enspace 0 \leq b \leq t} \\
L_2 &=& \Set{(a,b) : a-cb = x_0-ct_0, \enspace 0 \leq b \leq t} \\
\end{array}
$$

## _Thm._ Generalized d'Alembert's Formula

Let

$$
u_{tt} - c^2 u_{xx} = f(x,t)
$$

be an inhomogeneous wave equation with the initial conditions

$$
\def\arraystretch{1.25}
\begin{array}{ccc}
u(x,0) &=& g(x) \\
u_t(x,0) &=& h(x) \\
\end{array}
$$

then the solution is given by the formula

$$
\def\arraystretch{2.5}
\begin{array}{rll}
u(x,t) = & \dfrac{g(x+ct) + g(x-ct)}{2} \\ + & \dfrac{1}{2c} \displaystyle \int_{x-ct}^{x+ct} h(s) \> ds \\ + & \dfrac{1}{2c} \displaystyle \int_0^t \int_{x-c(t - \tau)}^{x+c(t - \tau)} f(s,\tau) \> ds \> d\tau
\end{array}
$$

notice that the double integral is over the **characteristic triangle $\Delta$**.

Moreover, if this problem on the half line i.e. with extra boundary condition

$$
u(0,t) = r(t)
$$

then the solution is the same as above for $x > ct > 0$, but for $0 < x < ct$, we have

$$
u(x,t) = \cdots \textcolor{red}{ + r\left(t - \dfrac{x}{c}\right) + \dfrac{1}{2c} \iint_D f}
$$

where $t - x/c$ is the reflection point and $D$ is the corresponding shaded region.

## _Thm._ Causality

Effect of initial position $g(x)$ is a pair of waves traveling in either direction at speed $c$ and at half the original amplitude. The effect of an initial velocity $h(x)$ is a wave spreading out at speed $\le c$ in both directions, so part of the wave may lag behind (if there is an initial velocity) but no part goes faster than speed $c$. This is called the **principle of causality**.

> See and add principle of causality figure p. 39

## _Thm._ Domain of Influence and Dependence

<p align="center">
  <img src="./partial-differential-equations/10-domain-of-influence.svg" alt="Domain of Influence" width="400">
</p>

An initial condition (position or velocity or both) at the point $(x_0, 0)$ can affect the solution for $t > 0$ only in the shaded sector, which is called the **domain of influence** of the point $(x_0, 0)$. The domain of influence corresponds to the shaded are for the (upwards infinite) triangle defined by two lines $x+ct = x_0$, $x - ct = x_0$ and the point $(x_0,0)$ where $x_0 \in [x-ct, x+ct]$.

<p align="center">
  <img src="./partial-differential-equations/10-domain-of-dependence.svg" alt="Domain of Dependence" width="400">
</p>

The **domain of dependence** or the **past history** of the point $(x_0,t_0)$ corresponds to the shaded area for the (downwards) triangle $(x_0-ct_0, 0)$, $(x_0+ct_0,0)$ and $(x_0,t_0)$ called the **characteristic triangle**.

## _Def._ Energy

Consider a homogenous wave equation, then we define the **energy integral** as

$$
\boxed{
    E(t) := \dfrac{1}{2} \int_{-\infty}^\infty (u_t^2 + c^2u_x^2) \> dx
}
$$

which is constant (exercise).

## _Thm._ Reflection of Waves

Assume we are given a Dirichlet problem on the half-line $(0,\infty)$ for the wave equation so that

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
v_{tt} - c^2 v_{xx} &=& 0  \\
\hdashline
v(x, 0) &=& g(x) \\
v_t(x, 0) &=& h(x) \\
\hdashline
v(0, t) &=& 0
\end{array}
$$

where $x \in (0,\infty)$ and $t>0$. Then, the solution for $x>ct$ is given by

$$
v(x,t) = \dfrac{1}{2}\bigl(g(x+ct) + g(x-ct)\bigr) + \dfrac{1}{2c} \int_{x-ct}^{x+ct} h(y)\,dy
$$

and for $0<x<ct$ we have

$$
v(x,t) = \dfrac{1}{2}\bigl(g(x+ct) - g(ct-x)\bigr) + \dfrac{1}{2c} \int_{ct-x}^{ct+x} h(y)\,dy
$$

> See Figure 2 in p. 62

## _Thm._ Duhamel's Principle

> **TODOs**
>
> * Add semi infinite: free/fixed end wave equations and their domains.
> * Solution of non-homogenous wave equations via $u = v+w$, see notes p52.
