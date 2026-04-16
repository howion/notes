# Fourier Series

## _Def._ Fourier Sine Series

The **fourier sine seris** is defined as

$$
\phi(x) = \sum_{n=1}^\infty A_n \sin\left(\dfrac{n \pi x}{l}\right)
$$

in the interval $(0, l)$

## _Thm._ Fourier Sine Series Coefficients

The coefficients of the fourier sine series are given by

$$
A_n = \frac{2}{l} \int_0^l \phi(x) \sin\left(\dfrac{n \pi x}{l}\right) \> dx
$$

## _Def._ Fourier Cosine Series

The **fourier cosine seris** is defined as

$$
\phi(x) = \frac{1}{2}A_0 + \sum_{n=1}^\infty A_n \cos\left(\dfrac{n \pi x}{l}\right)
$$

in the interval $(0, l)$

## _Thm._ Fourier Sine Series Coefficients

The coefficients of the fourier cosine series are given by

$$
A_n = \frac{2}{l} \int_0^l \phi(x) \cos\left(\dfrac{n \pi x}{l}\right) \> dx
$$

## _Def._ (Full) Fourier Series

The **(full) fourier series** of $\phi(x)$ on the interval $(-l, l)$ is defined as

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
