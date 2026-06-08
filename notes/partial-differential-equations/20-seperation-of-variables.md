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

> They must be equal to a constant since left side depends on $x$ and right side depends on $t$ only. Negativity is for convenience.

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

This can be considered as an **eigenvalue problem**. In this case, $\lambda \leq 0$ implies trivial solutions and for $\lambda > 0$ we have the set of solutions

$$
\lambda_n = \left(\dfrac{n \pi}{\ell}\right)^2; \> X_n(x) = \sin \left(\dfrac{n \pi}{\ell} x \right)
$$

where $\lambda_n$ corresponds to **eigenvalues** and $x_n$ corresponds to **eigenfunctions**. Similarly, solving the eigenvalue problem for $T$ yields

$$
T_n(t) = ce^{-\lambda n k^2 t}
$$

hence

$$
u_n = X_nT_n = c_ne^{-({n \pi}/{\ell})^2 k^2t} \sin \left(\dfrac{n \pi}{\ell} x \right)
$$

so that

$$
u = \sum_{n=1}^{\infty} u_n
$$

is a solution (assuming that the series convergent and can be differentiated term by term).
