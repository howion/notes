# Separation of Variables and the Neumann Condition

## _Thm._ in the Wave Equation

Consider the (homogenous) wave equation with the Neumann BC, then it has a solution of the form

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{tt} - c^2 u_{xx} &=& 0  \\
\hdashline
u_{\textcolor{red}{x}}(0, t) &=& 0 \\
u_{\textcolor{red}{x}}(l, t) &=& 0 \\
\hdashline
u(x, 0) &=& g(x) \\
u_t(x,0) &=& h(x)
\end{array}
$$

where $x \in (0, l)$. A **separated solution**  for this Neumann BC is a solution of the form

<!-- $$
\boxed{
    u(x,t) = \dfrac{1}{2}A_0 + \dfrac{1}{2} B_0 t + \sum_{n=1}^\infty \dfrac{n \pi c}{l} B_n \cos\left(\dfrac{n \pi x}{l}\right)
}
$$ -->

$$
\boxed{
    \def\arraystretch{1}
    \begin{array}{rcl}
    u(x,t) &=& \dfrac{1}{2}A_0 + \dfrac{1}{2} B_0 t \\ \\ &+& \displaystyle\sum_{n=1}^\infty \left(A_n \cos\left(\dfrac{n \pi c t}{l}\right) + B_n \cos\left(\dfrac{n \pi c t}{l}\right)\right) \cos\left(\dfrac{n \pi x}{l}\right)
    \end{array}
}
$$

## _Thm._ in the Diffusion Equation

Now assume we are given a homogeneous diffusion (heat) equation with Neumann conditions so that

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_{t} - k u_{xx} &=& 0  \\
\hdashline
u\textcolor{red}{_x}(0, t) &=& 0 \\
u\textcolor{red}{_x}(l, t) &=& 0 \\
\hdashline
u(x, 0) &=& g(x)
\end{array}
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
0,\; \left(\frac{\pi}{l}\right)^2,\; \left(\frac{2\pi}{l}\right)^2,\;\dots
$$

and the eigenfunctions

$$
X_n(x) = \cos\left(\dfrac{n \pi x}{l}\right)
$$

for $n=0,1,2,\dots$ (with $X_0\equiv 1$).

> Notice how, unlike Dirichlet condition, $n$ starts from $0$ instead of $1$.
