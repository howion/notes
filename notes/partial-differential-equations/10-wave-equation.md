# Wave Equation

## _Def._ 1D Wave Equation

The **(one-dimensional) wave equation** is defined as

$$
u_{tt} = c^2 u_{xx}
$$

where $x \in (-\infty, \infty)$ and $t > 0$.

## _Def._ Inhomogeneous Wave Equation

Let $f \in C^2(\R^2, \R)$, then the **inhomogeneous wave equation** is defined as

$$
u_{tt} - c^2 u_{xx} = f(x,t)
$$

## _Thm._ d'Alembert's Formula

Let

$$
u_{tt} - c^2 u_{xx} = f(x,t)
$$

be an inhomogenous wave equation with the initial conditions

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
