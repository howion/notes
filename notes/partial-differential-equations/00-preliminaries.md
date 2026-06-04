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
