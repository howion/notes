# Pfaffian PDEs

<!-- ## _Def._ Gradient -->

## _Def._ Conservative Vector Field

A vector field $\bold{\phi}: \Omega \to \R^n$ where $\Omega$ is an open subset of $\R^n$ is said to be conservative if there exists a $C^1$ scalar field $\varphi$ such that

$$
\bold{\phi} = \nabla \varphi
$$

## _Thm._ Solution of Pfaffian PDEs

Consider the **Pfaffian PDE**

$$
P(x,y,z) dx + Q(x,y,z)dy + R(x,y,z)dz = 0
$$

where $P^2 + Q^2 + R^2 \neq 0$ in $\Omega \subseteq \R^3$, then it has a solution if and only if, for $\vec{G} = (P,Q,R)$:

$$
\vec{G} \cdot \text{curl }\vec{G} = \vec{0}
$$

Moreover,

$$
P + Rz_x = 0 \\
Q + Rz_y = 0
$$

> Also recall that always $z_{xy} = z_{yx}$.
