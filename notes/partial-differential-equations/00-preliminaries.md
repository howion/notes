# Preliminaries

## _Thm._ Integrating Factor

Suppose we have the first order differential equation

$$
y' + P(x)y = Q(x)
$$

then we can solve this ODE using the **integrating factor**

$$
\mu := e^{\int P \> dx}
$$

so that, by multiplying both sides by $\mu$, we reach the following identity:

$$
\boxed{y = \dfrac{\int \mu Q dx}{\mu}}
$$

## _Def._ Curl

Given a vector field $\bold{F} = (F_1, F_2, F_3)$ in three-dimensions, the **curl of $\bold{F}$** is defined as

$$
\def\arraystretch{1.5}
\text{curl } \bold{F} := \begin{vmatrix}
   \vec{i} & \vec{j} & \vec{k} \\
   \partial / \partial x & \partial / \partial y & \partial / \partial z \\
   F_1 & F_2 & F_3
\end{vmatrix}
$$

## _Thm._ Green's Theorem

Let $\Omega$ be a domain in $\R^2$ and $P, Q \in C^1(\Omega)$, then

$$
\iint_\Omega (P_x - Q_y)\>dx dy = \oint_{\partial\,\Omega} (P\>dy + Q\>dx)
$$

where $\partial\,\Omega$ is positively oriented, piecewise smooth, simple closed curve whose region is $\Omega$.

## _Thm._ Characteristic Equation Method

Let us be given a second-order linear ordinary differential equation with constant coefficients:

$$
aX'' + bX' + cX = 0
$$

then recall that we let

$$
X = e^{rx}
$$

so that

$$
X' = re^{rx}, \enspace X'' = r^2 e^{rx}
$$

which substitution of yields:

$$
e^{rx}(ar^2 + br + c) = 0
$$

and as $e^{rx} \neq 0$, the polynomial is called the **characteristic equation** whose roots determine the general solution.

### 1. Two Distinct Real Roots

$$
r_1 \neq r_2 \implies X(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}
$$

### 2. Repeated Real Root

$$
r_1 = r_2 \implies X(x) = C_1 e^{r x} + x C_2 e^{r x}
$$

### 3. Complex Roots

$$
r = \alpha \pm i\beta \implies X(x) = e^{\alpha x} \left(C_1\cos(\beta x) + C_2\sin(\beta x) \right)
$$

Here is a quick reference table for some common ODEs we will use:

| ODE                | General Solution                          |
|--------------------|-------------------------------------------|
| $X'' = 0$          | $X = C_1x + C_2$                          |
| $X' + aX = 0$      | $X = Ce^{-ax}$                            |
| $X'' + \mu^2X = 0$ | $X = C_1 \cos(\mu x) + C_2 \sin(\mu x)$   |
| $X'' - \mu^2X = 0$ | $X = C_1 \cosh(\mu x) + C_2 \sinh(\mu x)$ |

## _Thm._ Hyperbolic Functions

Here are some of useful identities regarding the hyperbolic functions:

$$
\begin{array}{rcl}
\sinh(-x) &=& -\sinh(x) \\
\cosh(-x) &=& \cosh(x)
\end{array}
$$

$$
\begin{array}{rcl}
\cosh(x) + \sinh(x) &=& e^x, \\
\cosh(x) - \sinh(x) &=& e^{-x} \\
\end{array}
$$

$$
\cosh^2(x) - \sinh^2(x) = 1
$$

> So hyperbolic $\cosh$ and $\sinh$ are quite similar to their circular counterparts $\cos$ and $\sin$.
