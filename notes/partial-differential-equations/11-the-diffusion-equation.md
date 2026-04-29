# The Diffusion Equation

## _Def._ Diffusion Equation

The (one-dimensional) **diffusion equation** (or also known as **heat equation**) is defined as

$$
\begin{equation}
u_t = k u_{xx}
\end{equation}
$$

> The diffusion equation is harder to solve than the wave equation, so we will postpone the general solution.

### (Weak) Maximum Principle

If $u(x,t)$ satisfies the diffusion equation in a rectangle, say $0 \leq x \leq l$ and $0 \leq t \leq T$ in space-time, then the maximum value of $u(x,t)$ is attained either initially at $t = 0$ or on the lateral sides ($x = 0$ or $x = l$).

Indeed there is a stronger version of the maximum principle called the **strong maximum principle** which asserts the maximum cannot be assumed anywhere inside the rectangle but only on the bottom or the lateral sides (unless $u$ is constant). The corners are allowed.

The minimum value has the same property so that it too can be attained only on the bottom or the lateral sides.

### Uniqueness

The maximum principle can be used to give a proof of uniqueness for the Dirichlet problem for the diffusion equation. That is, there is at most one solution of

$$
\def\arraystretch{1.5}
\begin{array}{lll}
u_t - ku_{xx} &=& f(x,t) \\
u(x,0) &=& \phi(x) \\
u(0, t) &=& g(t), \enspace u(l,t) = h(t)
\end{array}
$$

for four given functions $f, \varphi, g$ and $h$ so that the solution is completely determined by it's initial and boundary conditions.

> This diffusion equation problem is also stable making it well-posed.

## _Thm._ Invariance Properties

The diffusion equation $(1)$ has some basic invariance properties, namely

1. The translation $u(x - y, t)$ of any solution $u(x,t)$ is another solution.
2. Any derivative $u_x$, $u_t$, or $u_xx$ etc. of a solution is another solution.
3. A linear combination of solutions is again a solution &mdash; linearity.
4. An integral of a solution is again a solution.
<!-- 5. TODO: also generalize 4. -->

## _Thm._ Diffusion on the Whole Line

Let us be given the following problem

$$
\def\arraystretch{1.25}
\begin{array}{lll}
u_t &=& ku_{xx} \\
u(x, 0) &=& \phi(x)
\end{array}
$$

where $x \in (-\infty, \infty)$ and $t \in (0, \infty)$. Assuming $\phi(\infty) = \phi(-\infty) = 0$, we have

$$
S(x,t) = \dfrac{\partial Q}{\partial x} = \dfrac{1}{\sqrt{4 \pi k t}} e^{-x^2 / 4kt}
$$

for $t > 0$. This is called the **source function**, so that for the solution we have

$$
\def\arraystretch{1}
\begin{array}{lll}
u(x,t) &=& \displaystyle\int_{-\infty}^\infty S(x - y,t) \phi(y) dy \\ \\
&=& \dfrac{1}{\sqrt{4 \pi k t}}  \displaystyle\int_{-\infty}^\infty e^{-(x-y)^2 / 4kt} \phi(y) dy
\end{array}
$$

The source function $S(x,t)$ is defined for all real $x$ and positive $t$. Morever, $S(x,t)$ is positive and is even in $x$ so that $S(-x,t) = S(x,t)$.

> Note that this general solution integral is not expressible with the elementary functions, therefore recall that
>
> $$
> \text{erf}(x) := \dfrac{2}{\sqrt{\pi}} \int_0^x e^{-p^2} dp
> $$

## _Thm._ Comparison of Wave and Diffusion

| Property                         | Wave                                 | Diffusion                  |
|----------------------------------|--------------------------------------|----------------------------|
| Speed of Propagation             | Finite and $\leq c$                  | Infinite                   |
| Singularities for $t > 0$        | Transported with speed $c$*          | Lost immediately           |
| Well-posed for $t > 0$           | Yes                                  | Yes (at least for bounded) |
| Well-posed for $t < 0$           | Yes                                  | No                         |
| Maximum Principle                | No                                   | Yes                        |
| Behaviour as $t \mapsto +\infty$ | Energy is constant so does not decay | Decays to $0$              |
| Information                      | Transported                          | Lost gradually             |

> *along characteristics with speed $c$.

## _Thm._ Diffusion on the Half-Line

Let's take the domain for the diffusion equation to be the half-line $(0, \infty)$ and take the Dirichlet boundary conditions at the single point $x = 0$, so that the problem becomes

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
v_{t} - k v_{xx} &=& 0  \\
\hdashline
v(x, 0) &=& \phi(x) \\
v(0, t) &=& 0
\end{array}
$$

where $x \in (0, \infty)$ and $t \in (0, \infty)$. The general solution for this problem is of the form

$$
\boxed{
    v(x,t) = \dfrac{1}{\sqrt{4 \pi k t}} \int_0^\infty \left( e^{-(x-y)^2 / 4kt} - e^{-(x+y)^2 / 4kt} \right) \phi(y)dy
}
$$

Now consider the Neumann problem, so that it becomes

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
w_{t} - k w_{xx} &=& 0  \\
\hdashline
w(x, 0) &=& \phi(x) \\
w_x(0, t) &=& 0
\end{array}
$$

where $x \in (0, \infty)$ and $t \in (0, \infty)$, then the general solution for this problem is of the form

$$
\boxed{
    w(x,t) = \dfrac{1}{\sqrt{4 \pi k t}} \int_0^\infty \left( e^{-(x-y)^2 / 4kt} + e^{-(x+y)^2 / 4kt} \right) \phi(y)dy
}
$$
