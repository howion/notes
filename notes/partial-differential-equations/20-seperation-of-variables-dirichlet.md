# Seperation of Variables and the Dirichlet Condition

## _Thm._ in the Wave Equation

Assume we are given an homogenous wave equation with Dirichlet conditions so that

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{tt} - c^2 u_{xx} &=& 0  \\
\hdashline
u(0, t) &=& 0 \\
u(l, t) &=& 0 \\
\hdashline
u(x, 0) &=& g(x) \\
u_t(x,0) &=& h(x)
\end{array}
$$

where $x \in (0, l)$. A **seperated solution** is a solution of the form

$$
u(x,t) = X(x) T(t)
$$

So if we plug this equation into our PDE, we get

$$
XT'' = c^2 X'' T \implies -\dfrac{T''}{c^2 T} = -\dfrac{X''}{X} = \lambda.
$$

This defines a quantity $\lambda$ which must be a positive constant! So let $\lambda = \beta^2$ where $\beta > 0$, then the equations above are a pair of seperate ODEs such that

$$
\begin{array}{lcl}
X'' + \beta^2 X &=& 0 \\
T'' + c^2 \beta^2 T &=& 0
\end{array}
$$

These ODEs are easy to solve and have solutions of the form

$$
\begin{array}{lcl}
X = C \cos(\beta x) + D \sin(\beta x) \\
T = A \cos(\beta c t) + B \sin (\beta c t)
\end{array}
$$

where $A,B,C$, and $D$ are constants. Now the boundary conditions require $X(0) = 0 = X(l)$ so that

$$
0 = X(l) = D \sin (\beta l)
$$

> We are not interested at trivial $C=D=0$ solution.

therefore $\beta = \frac{n \pi}{l}$ and there are an infinite number of seperated solutions of the form

$$
\boxed{
    u_n(x,t) = \left(A_n\cos\left(\dfrac{n \pi ct}{l}\right) + B_n\sin\left(\dfrac{n \pi ct}{l}\right)\right)\sin\left(\dfrac{n \pi x}{l}\right)
}
$$

where $n = 1,2,...$ and $A_n$ and $B_n$ are arbitrary constants. Noting sum of solutions is also a solution, we have

$$
\boxed{
    u(x,t) = \sum_{n=1}^\infty u_n(x,t)
}
$$

> The coefficients $n \pi c / l$ before the variable $t$ are sometimes called the **frequencies**.

For the initial condition, notice that

$$
g(x) = \sum_{n=1}^\infty A_n \sin\left(\dfrac{n \pi x}{l}\right)
$$

and

$$
h(x) = \sum_{n=1}^\infty \dfrac{n \pi c}{l} B_n \sin\left(\dfrac{n \pi x}{l}\right).
$$

## _Thm._ in the Heat Equation

Analogously assume we are given an homogenous diffusion equation with Dirichlet conditions so that

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{t} - k u_{xx} &=& 0  \\
\hdashline
u(0, t) &=& 0 \\
u(l, t) &=& 0 \\
\hdashline
u(x, 0) &=& g(x)
\end{array}
$$

where $x \in (0, l)$, then

$$
\dfrac{T'}{kT} = \dfrac{X''}{X} = -\lambda
$$

so that

$$
\boxed{
    u(x,t) = \sum_{n=1}^\infty A_n e^{-(n \pi / l)^2 kt} \sin\left(\dfrac{n \pi x}{l}\right)
}
$$

and

$$
g(x) = \sum_{n=1}^\infty A_n \sin\left(\dfrac{n \pi x}{l}\right).
$$

> TODO: Learn and write the methodology. Check out ODE solution as well.
