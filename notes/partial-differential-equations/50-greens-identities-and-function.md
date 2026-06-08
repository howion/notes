# Green's Identities and Function

## _Thm._ Divergence Theorem

Let $V \subseteq \R^3$ be a compact with piecewise-smooth boundary and $F$ a smooth vector field, then

$$
\boxed{\iiint_V \nabla F \> dV = \oiint_{\partial V} \vec{F} \cdot \vec{n} \> dS}
$$

where $\vec{n}$ is the outward pointing unit normal on the boundary $\partial V$.

## _Thm._ Green's First Identity

Let $D$ be a domain where the divergence theorem holds and $u,v \in C^2(D) \cap C^1(\overline{D})$, then

$$
\nabla \cdot (v \nabla u) = \nabla v \nabla u + v \Delta u
$$

and by the divergence theorem we get the **Green's First Identity**:

$$
\boxed{
\iint_{\partial D} v \cdot \dfrac{\partial u}{\partial \vec{n}}\>ds = \iiint_D \nabla v \nabla u\>dV + \iiint_D v \Delta u\>dV
}
$$

Notice that for $v = 1$, we have

$$
\boxed{
    \iiint_D \Delta u = \iint_{\partial D} \dfrac{\partial u}{\partial \vec{n}}\>ds
}
$$

<!-- and, for $u = v$, we get the followingi identity

$$
\boxed{}
$$ -->


> Recall that
> $$
> \dfrac{\partial u}{\partial \vec{n}} = \nabla u \cdot \vec{n}
> $$
