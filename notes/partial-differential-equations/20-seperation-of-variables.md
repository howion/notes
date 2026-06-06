# Seperation of Variables

## Introduction

Consider the space bounded heat equation

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
u_t - k^2 u_{xx} &=& 0  \\
\hdashline
u(x, 0) &=& f(x) \\
u(0, t) &=& 0 \\
u(\ell, t) &=& 0
\end{array}
$$

and assume $u = X(x)T(t)$ then by substitution we have

$$
XT' - k^2X'' T = 0 \\
$$

and

$$
\dfrac{X''}{X} = \dfrac{1}{k^2} \dfrac{T'}{T} = -\lambda \in \R
$$

for some constant $\lambda$. This implies two simple ODEs

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
X'' + \lambda x &=& 0 \\
T'' + k^2 \lambda T &=& 0 \\
\hdashline
X(0) = X(\ell) &=& 0
\end{array}
$$

This can be considered as an **eigenvalue problem**.

> **TODO** continue
