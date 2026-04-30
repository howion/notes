# Partial Differential Equations

## _Def._ PDE

A **partial differential equation** is an _equation_ that involves an **unknown function** $u(x_1,...,x_n)$ of $n \geq 2$ variables (otherwise it's called ordinary) and some of its partial derivatives with respect to one or more of $x_1,...,x_n$. Precisely $u$ is a function such that $u: U \to \R$ where $U$ is an open subset of $\R^n$ called the **domain** of the PDE.

> Notice how the parameters $x_1,...,x_n$ are **independent variables** and the unknown function $u$ is a **dependent variable** depending on $x_1,...,x_n$.

The **order** of a PDE is the highest order that appears in the equation.

A **solution** of a PDE is a known function $u$ that satisfies the equation.

## _Notation._ Partial Derivative

From now on we will denote the partial derivative of $u$ with respect to its parameter $x$ as

$$
u_{x} := \dfrac{\partial u}{\partial x}
$$

Moreover, higher-order partial derivatives are simply written in sequence. For example, the partial derivative of $u_{x}$ with respect to $y$ will be denoted as

$$
u_{xy} := \dfrac{\partial}{\partial y}\left(\dfrac{\partial u}{\partial x}\right)
$$

> Recall from calculus that $u_{xy} = u_{yx}$ (when the relevant derivatives are continuous).

Unless otherwise stated we will assume all derivatives exist and are continuous.

<!-- TODO: Operator, Linearity etc. -->
<!-- TODO: Operator, Linearity etc. -->

## _Def._ Initial and Boundary Conditions

> These are not formal definitions but rather conventions regarding PDEs.

Because PDEs typically have infinitely many solutions, we may want to impose auxiliary conditions. These conditions are usually classified into two classes: **initial** and **boundary** conditions, which themselves (as we will see later) are further classified.

An **initial condition** specifies as the name implies _initial conditions_. For example, for an unknown function $u$ of $n$ variables

$$
u(x_1, x_2, ..., x_{n-1}, c) = \varphi(x_1, x_2, ..., x_{n-1})
$$

is an initial condition where $c \in \R$ is a constant.

A **boundary condition** specifies the _boundary_ behavior of the solution. For example, defining the **domain** of the PDE is part of specifying boundary data, and so is prescribing the normal derivative $\partial u/\partial n$ on the boundary. We will see more about boundary conditions and classify them later on.

## _Def._ Well-Posed Problem

A **well-posed PDE problem** consists of a PDE in a domain with initial and/or boundary conditions (or other auxiliary conditions) that satisfies

1. **existence** i.e. there exists at least one solution satisfying these conditions
2. **uniqueness** i.e. there is at most one solution
3. **stability** i.e. the solution continuously depends on the parameters (so that it's not chaotic)
