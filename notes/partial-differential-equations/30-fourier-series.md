# Fourier Series

## _Def._ Fourier Sine Series

The **Fourier sine series** for the given function $\phi(x)$ is given by

$$
\phi(x) = \sum_{n=1}^\infty A_n \sin\left(\dfrac{n \pi x}{l}\right)
$$

in the interval $(0, l)$.

> These series, as we saw earlier, are used for wave and diffusion equations with Dirichlet boundary conditions.

## _Thm._ Fourier Sine Series Coefficients

The coefficients of the Fourier sine series are given by

$$
\boxed{
    A_n = \frac{2}{l} \int_0^l \phi(x) \sin\left(\dfrac{n \pi x}{l}\right) \> dx
}
$$

## _Def._ Fourier Cosine Series

The **Fourier cosine series** is defined as

$$
\phi(x) = \frac{1}{2}A_0 + \sum_{n=1}^\infty A_n \cos\left(\dfrac{n \pi x}{l}\right)
$$

in the interval $(0, l)$

> These series, as we saw earlier, are used for wave and diffusion equations with Neumann boundary conditions on $(0, l)$.

## _Thm._ Fourier Cosine Series Coefficients

The coefficients of the Fourier cosine series are given by

$$
\boxed{
    A_n = \frac{2}{l} \int_0^l \phi(x) \cos\left(\dfrac{n \pi x}{l}\right) \> dx
}
$$

for $n \ge 1$, and

$$
\boxed{A_0 = \frac{2}{l}\int_0^l \phi(x)\,dx.}
$$

## _Def._ (Full) Fourier Series

The **(full) Fourier series** of $\phi(x)$ on the interval $(-l,l)$ is defined as

$$
\phi(x) = \frac{1}{2}A_0 + \sum_{n=1}^\infty \left(A_n \cos\left(\dfrac{n \pi x}{l}\right) + B_n \sin\left(\dfrac{n \pi x}{l}\right)\right)
$$

## _Thm._ Fourier Series Coefficients

The coefficients of the fourier series are given by

$$
A_n = \frac{1}{l} \int_{-l}^l \phi(x) \cos\left(\dfrac{n \pi x}{l}\right) \> dx
$$

where $n \in \N$, and

$$
B_n = \frac{1}{l} \int_{-l}^l \phi(x) \sin\left(\dfrac{n \pi x}{l}\right) \> dx
$$

where $n \in \N^+$.

> Note that these coefficients are not exactly the same as the previously defined cosine and sine coefficients.

## _Thm._ Parseval's Equality

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
$$

### Necessary Condition

The Parseval Equality is true if

$$
\int_a^b |f(x)|^2 dx
$$

is finite.
