# Fourier Series

## _Def._ Hilbert Space

Consider a linear space $\cal{H}$ of piecewise continuous functions on $[-\ell, \ell]$ on space $\cal{H}$, and define an inner product

$$
\Braket{f,g} = \int_{-\ell}^\ell f(x)g(x)\>dx
$$

then $(\cal{H}, \Braket{\cdot, \cdot})$ is called a **pre-Hilbert space** and if $\cal{H}$ is complete it is called a **Hilbert Space**.

Recall that inner product induces a norm

$$
\|f\|_2 = \sqrt{\Braket{f,f}} = \left(\int_{-\ell}^\ell |f|^2 \> dx\right)^{1/2}
$$

## _Thm._ An Orthogonal Basis for $\cal{H}$

The sequence

$$
\left\{1, \cos\left(\dfrac{n \pi}{\ell}x\right), \sin\left(\dfrac{n \pi}{\ell}x\right)\right\}_{n=1}^{\infty}
$$

is an orthogonal basis for the pre-Hilbert space $\cal{H}$ and any $f \in \cal{H}$ can be written as

$$
f = \dfrac{a_0}{2} + \sum_{n=1}^\infty \left( a_n \cos\left(\dfrac{n \pi}{\ell}x\right) + b_n\sin\left(\dfrac{n \pi}{\ell} x\right) \right)
$$

so that the series converge to $f$ in the norm $\| \cdot \|_2$.

<!-- todo: check if this is true in general for pre-hilbert -->

## _Thm._ Parseval's Equality

Using the basis given above and the norm $\| \cdot \|_2$, we reach the following identity called the **Parseval's Equality**:

$$
\boxed{
    \| \ell \|^2 = \dfrac{a_0}{2} (2 \ell) + \sum_{n=1}^\infty |a_n|^2 \ell + |b_n|^2 \ell
}
$$

<!-- Note that, the Parseval Equality is true only if

$$
\int_a^b |f(x)|^2 dx
$$

is finite. -->

> Note that $\|1\|_2 = \sqrt{2\ell}$ and $\|\cos\left(\dfrac{n \pi}{\ell}x\right)\|_2 = \|\sin\left(\dfrac{n \pi}{\ell}x\right)\|_2 = \sqrt{\ell}$.

## _Thm._ Fourier Sine Series

Suppose $f_\text{odd}$ piecewise continuous on $[-\ell, \ell]$ and is an odd function, then

$$
f_\text{odd}(x) = \sum_{n=1}^\infty b_n \sin\left(\dfrac{n \pi x}{\ell}\right)
$$

in the interval $(-\ell, \ell)$ and is called the **Fourier Sine Series** for the function $f_\text{odd}$.

> These series, as we saw earlier, are used for wave and diffusion equations with Dirichlet boundary conditions.

Moreover, the coefficients $b_n$ are given by:

$$
\boxed{
    b_n = \frac{2}{\ell} \int_0^\ell f_\text{odd}(x) \sin\left(\dfrac{n \pi x}{\ell}\right) \> dx
}
$$

> This is equivalent to the Fourier Series of $f_\text{odd}$ since the even cosine terms cancel out in the full Fourier Series.

## _Thm._ Fourier Cosine Series

Suppose $f_\text{even}$ piecewise continuous on $[-\ell, \ell]$ and is even, then

$$
f_\text{even}(x) = \frac{1}{2}a_0 + \sum_{n=1}^\infty a_n \cos\left(\dfrac{n \pi x}{\ell}\right)
$$

in the interval $(-\ell, \ell)$ and is called the **Fourier Cosine Series** for the function $f_\text{even}$.

> These series, as we saw earlier, are used for wave and diffusion equations with Neumann boundary conditions on $(0, l)$.

Moreover, the coefficients $a_n$ are given by:

$$
\boxed{
    a_n = \frac{2}{\ell} \int_0^\ell f_\text{even}(x) \cos\left(\dfrac{n \pi x}{\ell}\right) \> dx
}
$$

> This is equivalent to the Fourier Series of $f_\text{even}$ since the odd sine terms cancel out in the full Fourier Series.

<!-- ## _Thm._ Parseval's Equality

For the **full Fourier series on $(-L, L)$** we have

$$
\int_{-L}^L |f(x)|^2 dx = \dfrac{L}{2} a_0^2 + L \sum_{n=1}^\infty (a_n^2 + b_n^2)
$$

For the **sine series on $(0, L)$**, we have

$$
\int_{0}^L |f(x)|^2 dx = \dfrac{L}{2} \sum_{n=1}^\infty b_n^2
$$

Finally, for the **cosine series on $(0, L)$** we have

$$
\int_0^L |f(x)|^2 dx = \dfrac{L}{4} a_0^2 + \dfrac{L}{2} \sum_{n=1}^\infty a_n^2
$$ -->

## _Thm._ Fourier Convergence Theorem

Let $f$ be a function on $[-\ell, \ell]$, and extend it periodically with period $2\ell$, so that outside $[-\ell, \ell]$ we have

$$
f(x + 2\ell) = f(x).
$$

Suppose $f$ is piecewise smooth on $[-\ell, \ell]$, then the fourier series of $f$ converges at each point $x$ to

> This implies geometrically, for the endpoints of the periodically extended $f$, the Fourier series converge to their midpoint.

$$
\dfrac{f(x^+) + f(x^-)}{2}
$$

Moreover if $f$ is continuous on $[-\ell, \ell]$ and the endpoint values match periodically i.e.

$$
f(-\ell) = f(\ell)
$$

then there is no jump at the endpoints.
