# Second Order Equations

## _Def._ Simple 2nd Order PDE

The homogenous **linear equation of order two in two variables** is given by

$$
\boxed{a_{11} u_{xx} + 2a_{12}u_{xy} + a_{22}u_{yy} + \cdots = 0}
$$

where $\cdots$ denotes terms of order one or lower and $a_{ij}$ are real coefficients.

> The coefficient $2$ is introduced for convenience.

## _Thm._ Canonical Forms

By a linear transformation of the independent variables, a 2nd order linear PDE in two variables can be reduced to one of the three forms. Let $\Delta = a_{12}^2 - a_{11}a_{22}$, then it is of the form

1. **hyperbolic** if $\Delta > 0$ so that

$$
u_{xx} - u_{yy} + \cdots = 0
$$

2. **parabolic** if $\Delta = 0$ so that

$$
u_{xx} + \cdots = 0
$$

3. **elliptic** if $\Delta < 0$ so that

$$
u_{xx} + u_{yy} + \cdots = 0
$$



where $\cdots$ denotes terms of order one or lower.

### Hyperbolic Case

Let

$$
\xi = y - \lambda_1 x \\
\eta = y - \lambda_2x
$$

where

$$
\lambda_{1,2} := \dfrac{a_{12} \pm \sqrt{\Delta}}{a_{11}}
$$

then

$$
u(\xi, \eta) = f(\xi) + g(\eta)
$$

where $f$ and $g$ are arbitrary functions.

## Parabolic Case

For the case $\Delta = 0$, we have

$$
\xi = y - \lambda x \\
\eta = x
$$

where $\lambda$ is defined as above, but notice $\lambda_1 = \lambda_2$, so that

$$
u(\xi, \eta) = f(\xi) \eta + g(\eta).
$$

## Elliptic Case

For $\Delta < 0$, we have

$$
\xi = \enspace x \cos \theta + y \sin \theta \\
\eta = -x \sin \theta  + y \cos \theta
$$

where

$$
\tan(2\theta) = \dfrac{2 a_{12}}{a_{11} - a_{22}}
$$
