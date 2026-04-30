# Seperation of Variables and the Neumann Condition

## _Thm._ in the Diffusion Equation

Assume we are given an homogenous wave equation with Neumann conditions so that

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{tt} - c^2 u_{xx} &=& 0  \\
\hdashline
u\textcolor{red}{_x}(0, t) &=& 0 \\
u\textcolor{red}{_x}(l, t) &=& 0 \\
\hdashline
u(x, 0) &=& g(x) \\
u_t(x,0) &=& h(x)
\end{array}
$$

$$
\cdots
$$

then it has a solution of the form

$$
\boxed{
    u(x,t) = \dfrac{1}{2} A_0 + \sum_{n=1}^\infty A_n e^{-(n \pi / l)^2 k t} \cos\left(\dfrac{n \pi x}{l}\right)
}
$$

where

$$
g(x) = \dfrac{1}{2} A_0 + \sum_{n=1}^\infty A_n \cos\left(\dfrac{n \pi x}{l}\right)
$$

Also, notice that we have the eigenvalues

$$
\left(\frac{\pi}{l}\right)^2, \left(\frac{2\pi}{l}\right)^2, \>...
$$

and the eigenfunctions

$$
X_n(x) = \cos\left(\dfrac{n \pi x}{l}\right)
$$

for $n = 1,2,3,...$

## _Thm._ in the Wave Equation

Assume we are given an homogenous wave equation with Neumann conditions so that

<!-- $$
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
$$ -->

$$
\cdots
$$

then it has a solution of the form

$$
\cdots
$$

where

$$
\cdots
$$

and

$$
\cdots
$$

> TODO: continue from p. 89
