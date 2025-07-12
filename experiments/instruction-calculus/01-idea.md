<!-- markdownlint-disable -->

# Introduction

**STATUS:** On Hold.

> This draft is **strictly experimental** and probably won't lead anywhere other than to help me rediscover some of the fundamentals of computation.

# Preliminaries and Notation

Assume ZFC but without the Foundation Axiom! Now include to your axiom list the Anti-Foundation Axiom.

## (D) Serial Relation

A relation $R \subseteq X \times Y$ is said to be **serial** if for all $x \in X$ there exists $y \in Y$ where $x R y$. Precisely:

$$\forall x \> \exists y \>\> x R y$$

# Instruction Calculus

Lorem ipsum

## (D) Instruction

A serial relation $\lambda \subseteq \text{X}^2 $ is called an **instruction on $\text{X}$** and $\text{X}$ is called the **domain** of $\lambda$ denoted $\text{dom}\ \lambda$. Moreover, an instruction $\lambda$ is:

* **deterministic**, denoted $\text{Det}(\lambda)$, if it is also a function, and **non-deterministic** otherwise,
* the **identity instruction** denoted $1$ if it is deterministic and for all $x \in \text{X}$ we have $1(x) = x$,

## (D) Instruction Composition

Let $\lambda_1$ and $\lambda_2$ be two instructions on $\text{X}$. Then their **composition**

$$\lambda_2 \circ \lambda_1 = \{\> (x, z) \in \text{X}^2 \enspace | \enspace \exists y \in \text{X} \enspace (x,y) \in \lambda_1 \enspace \wedge \enspace (y,z) \in \lambda_2 \>\}$$

mostly denoted as $\lambda_2 \lambda_1$ is the usual relational composition. Notice that:

* If $\lambda_1$ and $\lambda_2$ are deterministic then so is $\lambda_2\lambda_1$.
* The composition operation is associative.
* $\lambda 1 = 1 \lambda = \lambda$

For simplicity we will also utilize **exponentation** notation which is defined as:

$$\lambda^0 = 1$$

and

$$\lambda^{n+1} = \lambda \circ \lambda^n$$

## (D) Instruction Application

## (D) Instruction Addition

Let $\lambda_1$ and $\lambda_2$ be two instructions on $\text{X}$. Then their **addition**

$$\lambda_1 + \lambda_2 = \lambda_1 \cup \lambda_2$$

is the usual binary set union. Addition operator is also sometimes called the **non-deterministic choice** operator.

## (D) Instruction Summation

Let $S$ be some non-empty set of instructions on $\text{X}$. Then the **summation** of $S$ denoted $\Sigma S$ is simply the union of all elements of $S$.

## (T) Instruction Decomposition

Let $\lambda$ be an instruction on $\text{X}$, then we may **decompose** $\lambda$ to an unique non-empty set $S$ (denoted $\lambda^*$) of deterministic instructions on $\text{X}$.

<details>
<summary><b>Proof</b></summary>
<br>
Exercise :)
</details>

## (D) Automata Space

Initial and Final states as ND Automata

## (D) Instruction Space

Now we will define what should be called an (deterministic) **instruction space** usually denoted with $\Omega$.

* Each $\lambda \in \Omega$ is an deterministic instruction on $\Omega$.
* **(Composition Closure)** $\alpha, \beta \in \Omega \implies \alpha\beta \in \Omega$.
* ~~**(Application Closure)** $\alpha, \beta \in \Omega \implies \alpha(\beta) \in \Omega$.~~
* **(Existential Stuff)** $\alpha \in \Omega \implies \Omega \ni \beta = x \mapsto \alpha$

> TODO :: Actually deduce some existental stuff like $\alpha(\beta)$.

> Note that this definition contradicts **the axiom of regularity** in ZFC since $\Omega$ is not well-founded as elements of $\Omega$ also consists of elements of $\Omega$.

## (T) First Fixed Point Theorem: Application

Let $\lambda \in \Omega$, then there exists $\alpha \in \Omega$ such that $\lambda(\alpha) = \alpha$.

<details>
<summary><b>Proof</b></summary>
<br>

Let $W \equiv x \mapsto \lambda(x(x))$ and $\alpha \equiv W(W)$. Then

$$
\begin{array}{lll}
\alpha & \equiv & W(W) \\
& = & \lambda(W(W)) \\
& = & \lambda(\alpha)
\end{array}
$$

</details>

## (D) Instructional Bisimulation

Let $B \subseteq \Omega \times \Omega$ be a binary relation. We say that $B$ is an **instructional bisimulation** if for all $(\alpha, \beta) \in \Omega$ and all $x \in \Omega$ we have:

* $\forall y \in \Omega \enspace \alpha(x) =y \to \exists z \in \Omega \enspace (\> \beta(x) = z \enspace \wedge \enspace (y, z) \in B \>)$
* $\forall z \in \Omega \enspace \beta(x) =z \to \exists y \in \Omega \enspace (\> \alpha(x) = y \enspace \wedge \enspace (y, z) \in B \>)$

## (D) Instructional Numerals

We define $n$-th instructional numeral denoted $\boxed{n}$ as an instruction which accepts an instruction and yield it's $n$-th compositional power. Precisely:

$$
\begin{array}{llcclr}
\boxed{1} & \equiv & x & \mapsto & x & = x^1 \\
\boxed{2} & \equiv & x & \mapsto & x \circ x & = x^2 \\
\boxed{3} & \equiv & x & \mapsto & x \circ x \circ x & = x^3 \\
& & \vdots \\
\boxed{n} & \equiv & x & \mapsto & x \circ \cdots \circ x & = x^n
\end{array}
$$

Notice that:

* Instructional numerals are deterministic.
* $\boxed{m} \circ \boxed{n} = \boxed{m \cdot_\N n}$ that is composition of instructional numerals yield the instructional numeral that correspond to their natural number multiplication. For example, $\boxed{2} \circ \boxed{3} = \boxed{3} \circ \boxed{2} = \boxed{6}$.

## (D) Successor Instruction

$$S \equiv m \mapsto x \mapsto x(m(x))$$

## (D) Multiplication Instruction

$$\ast \equiv m \mapsto n \mapsto m \circ n$$

## (D) Addition Instruction

$$+ \equiv m \mapsto n \mapsto x \mapsto m(x) \circ n(x)$$

## (D) Exponentiation Instruction

$$\uparrow \> \equiv m \mapsto n \mapsto n(m)$$

Notice that $m$ is the base and $n$ is the power. For example:

$$\uparrow(\boxed{3})(\boxed{2}) = \boxed{9}$$
