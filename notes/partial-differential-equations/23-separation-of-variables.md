# Separation of Variables

## _Thm._ Core Idea

We always assume

$$
u(x,t) = X(x)T(t)
$$

and plug this into our PDE which gives us two ODEs: spatial and time. Everything reduces to solving eigenvalue problem for $X$ and then plugging eigenvalues into $T$.

For the **Dirichlet case**, we have the eigenvalues

$$
\lambda_n = \left(\dfrac{n \pi}{l}\right)^2
$$

and eigenfunctions

$$
X_n(x) = \sin\left(\dfrac{n \pi x}{l}\right)
$$

For the **Neumann case**, the eigenfunctions are

$$
X_n(x) = \cos\left(\dfrac{n \pi x}{l}\right)
$$

with eigenvalues $\lambda_n = (n\pi/l)^2$ for $n=0,1,2,\dots$ (note $\lambda_0=0$ corresponds to the constant eigenfunction).
