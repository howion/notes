# Structures

## _Def._ Structure

Let $\mathbf{S}$ be a symbol set, then a **structure** of $\mathbf{S}$ is a tuple $\mathfrak{S} = (\mathbf{V}, \mathbf{v})$ such that

1. $\mathbf{V}$ is a non-empty set called the **universe** (or **domain**) of $\mathfrak{S}$.
2. $\mathbf{v}$ is a map defined on $\mathbf{S}$ such that
    1. $\mathbf{v}(R)$ is an $n$-ary relation on $\mathbf{V}$ for all $n$-ary relation symbol in $\mathbf{S}$.
    2. $\mathbf{v}(f)$ is an $n$-ary function on $\mathbf{V}$ for all $n$-ary function symbol in $\mathbf{S}$.
    3. $\mathbf{v}(c)$ is an element of $\mathbf{V}$ for all constant symbols in $\mathbf{S}$.

From now on, with $|\mathfrak{S}|$ we will actually denote the cardinality of the universe $\mathbf{V}$.

## _Def._ Valuation

A **valuation** $\mathfrak{v}$ in a structure $\mathfrak{S} = (\mathbf{V}, \mathbf{v})$ is a map such that

$$
\mathfrak{v}: \Set{v_n}_{n \> \in \> \N} \to \mathbf{V}
$$

where $\Set{v_n}_{n \> \in \> \N}$ is the set of variable symbols in $\mathbf{A}_\mathbf{S}$ and $\mathbf{V}$ is the universe.

Moreover, we also define, for **substitution**

$$
\mathfrak{v} \dfrac{y}{x} (v) := \begin{cases}
   \> \mathfrak{v}(v) &\text{if } & v \neq x \\
   \> y &\text{if } & v = x
\end{cases}
$$

## _Def._ Interpretation

An **interpretation** or **model** $\mathfrak{M}$ is a tuple $(\mathfrak{S}, \mathfrak{v})$ where $\mathfrak{S}$ is a structure and $\mathfrak{v}$ is a valuation in $\mathfrak{S}$.

## _Notation._ Model

Let $\mathfrak{M} = (\mathfrak{S}, \mathfrak{v})$ be a model such that $\mathfrak{S} = (\mathbf{V}, \mathbf{v})$. We define

$$
\def\arraystretch{1.5}
\begin{array}{rcl}
\mathfrak{M}\dfrac{y}{x} &:=& (\mathfrak{S}, \mathfrak{v} \dfrac{y}{x} )& \\ \\
\mathfrak{M}(x) &:=& \mathfrak{v}(x) \\
\mathfrak{M}(c) &:=& \mathbf{v}(c) \\
\mathfrak{M}(f \> t_1 \> t_2 \cdots t_n) &:=& \mathbf{v}(f)(\mathfrak{M}(t_1), \mathfrak{M}(t_2), ..., \mathfrak{M}(t_n)) \\
\end{array}
$$

where $x$ is a variable, $c$ is a constant, $f$ is an $n$-ary function symbol, and $t_1, ..., t_n$ are terms.

Moreover, similar to propositional logic, we define

$$
\begin{array}{lcl}
\mathfrak{M} \models t_1 = t_2 & := & \enspace \mathfrak{M}(t_1) = \mathfrak{M}(t_2) \\
\mathfrak{M} \models \neg \varphi & := & \enspace \text{not} \enspace \mathfrak{M} \models \varphi \\
\mathfrak{M} \models \varphi \land \psi & := & \enspace \mathfrak{M} \models \varphi \enspace \text{and} \enspace \mathfrak{M} \models \psi \\
\mathfrak{M} \models \exists x \varphi & := & \enspace \mathfrak{M} \dfrac{a}{x} \models \varphi \enspace \text{for some} \enspace a \in \mathbf{V}\\
\mathfrak{M} \models R \> t_1 \cdots t_n  & := & \enspace (\mathfrak{M}(t_1), ..., \mathfrak{M}(t_n)) \in \mathbf{v}(R)
\end{array}
$$

Similar to propositional logic, if $\Delta$ is a set of first-order formulas, then $\mathfrak{M} \models \Delta$ denotes that $\mathfrak{M} \models \varphi$ for all $\varphi \in \Delta$.

## _Def._ Entails

Let $\Delta$ be a set of formulas and $\varphi$ a formula, then we say $\Delta$ **entails** $\varphi$ or $\varphi$ is a **consequence** of $\Delta$ denoted $\Delta \models \varphi$ if for every model $\mathfrak{M}$ such that $\mathfrak{M} \models \Delta$, we have $\mathfrak{M} \models \varphi$.

If $\Delta = \{\psi\}$, then we simply write $\psi \models \varphi$ instead of $\{\psi\} \models \varphi$.

Moreover, if two formulas $\varphi$ and $\psi$ entail each other denoted $\varphi \equiv \psi$ we say they are **(logically) equivalent**.

## _Def._ Valid

We say a formula $\varphi$ is a **tautology** (or **valid**)  denoted $\models \varphi$ if $\varnothing \models \varphi$. So that $\varphi$ holds under any model.

## _Def._ Satisfiable

We say a set of formulas $\Delta$ is **satisfiable** denoted $\text{Sat }\Delta$ if there exists a model $\mathfrak{M}$ such that $\mathfrak{M} \models \Delta$.

<!-- TODO: Defn. 2.24 subsets and definability -->
