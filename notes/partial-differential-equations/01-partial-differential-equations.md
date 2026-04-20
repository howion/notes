# Partial Differential Equations

## _Def._ PDE

A **partial differential equation** is an _equation_ that involves an **unknown function** $u(x_1,...,x_n)$ of $n \geq 2$ variables (otherwise it's called ordinary) and some of its partial derivatives with respect to one or more of $x_1,...,x_n$. Precisely $u$ is a function such that $u: U \to \R$ where $U$ is an open subset of $\R^n$ called the **domain** of the PDE.

> Notice how the parameters $x_1,...,x_n$ are **independent variables** and the unknown function $u$ is an **dependent variable** depending on $x_1,...,x_n$.

The **order** of an PDE is the highest order that appears in the equation.

A **solution** of an PDE is a known function $u$ that satisfies the equation.

## _Notation._ Partial Derivative

From now on we will denote the partial derivative of $u$ with respect to its parameter $x$ as

$$
u_{x} := \dfrac{\partial u}{\partial x}
$$

Moreover, the partial derivative of partial derivates are simply written in sequence. For example, partial derivative of $u_{x}$ with respect to $xy$ will be denoted as

$$
u_{xy} := \dfrac{\partial}{\partial y}\left(\dfrac{\partial u}{\partial x}\right)
$$

> Recall from calculus that $u_{xy} = u_{yx}$ i.e. mixed derivatives are equal.

Unless, otherwise stated we will assume all derivatives exist and are continuous.

<!-- TODO: Operator, Linearity etc. -->
<!-- TODO: Operator, Linearity etc. -->

## _Def._ Initial and Boundary Conditions

> These are not formal definitions but rather conventions regarding PDEs.

Because PDEs typically have infinitely many solutions, we may want to impose auxiliary conditions. These conditions are usually classified into two classes **initial** and **boundary** conditions which themselves (as we will se later) are also further classified.

An **initial condition** specifies as the name implies _initial conditions_. For example, for an unknown function $u$ of $n$ variables

$$
u(x_1, x_2, ..., x_{n-1}, c) = \varphi(x_1, x_2, ..., x_{n-1})
$$

is an initial condition where $c \in \R$ is a constant.

A **boundary condition** specifies the _boundary_ of the PDE. For example definiting the **domain** of the PDE is a boundary condition, but so is just specifying the normal derivative $\partial u / \partial n$. We will see more about boundary conditions and classify them later on.

## _Def._ Well-Posed Problem

An **well-posed PDE problem** consists of a PDE in a domain with initial and/or boundary conditions (or other auxiliary conditions) that satisfies

1. **existence** i.e. there exists at least one solution these conditions
2. **uniqueness** i.e. there is at most one solution
3. **stability** i.e. the solution continuously depends on the parameters (so that it's not chaotic)
