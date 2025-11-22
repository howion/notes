# 3. First Order Logic

In this section we will define what we refer to as **first-order logic** which is a much more powerful (in expressive sense) language compared to our previous propositional (zeroth-order) logic. It's _lexicon_, in addition to propositional logic, contains the following.

The syntax of a first-order logic $\mathcal{L}$ consists of

1. **Variables** which are mostly denoted by lowercase latin letters $x$, $y$, $z$, etc. that represent arbitrary elements of the underlying set.
2. **Constants** which are mostly denoted by lowercase latic letters $a$, $b$, $c$, etc. that represent specific element of the underlying set.
3. **Functions** with any arity $n \in \N$.
4. **Relations** which are mostly denoted with uppercase latin letters $P$, $Q$, $R$, etc. to denote relations with any arity $n \in \N$.

## Def. Terms

The **set of terms** of a first-order logic $\mathcal{L}$ is denoted with $\text{Term}(\mathcal{L})$ and is defined inductively as the smallest set such that

1. Every variable and constant is a term,
2. If $f$ is an $n$-ary function and $t_1, ..., t_n$ are terms, then $f(t_1, ..., t_n)$ is also a term.

We say that the **set of terms** are **closed** if there are no variables.

## Def. Atomic Formula

The **set of atomic (or prime) formulas** $\mathcal{P}$ of a first-order logic $\mathcal{L}$ is the smallest set, defined inductively, such that

1. $t_1 = t_2 \in \mathcal{P}$,
2. $R(t_1, ..., t_n) \in \mathcal{P}$ where $t_1, ..., t_n$ are terms and $R$ is a $n$-ary relation.

## Def. Formulas

The **set of formulas** of a first-order logic $\mathcal{L}$ with the set of atomic variables $\mathcal{P}$ denoted with $\text{Form}(\mathcal{P})$ is the smallest set such that

1. $\mathcal{P} \subseteq \text{Form}(\mathcal{L})$
2. If $\varphi \in \text{Form}(\mathcal{L})$, then $\neg \varphi \in \text{Form}(\mathcal{L})$,
3. If $\varphi, \psi \in \text{Form}(\mathcal{L})$, then $(\varphi \land \psi) \in \text{Form}(\mathcal{L})$,
4. If $\varphi \in \text{Form}(\mathcal{L})$, then $(\exists x \varphi) \in \text{Form}(\mathcal{L})$ for any variable $x$.

> Notice that compared to propositional logic, only (4) is new for the set of formulas in first-order logic.

We may overload the notation $\text{Form}(\cdot)$ to denote $\text{Form}(\mathcal{P})$ with $\text{Form}(\mathcal{L})$.

> **TODO.** I'm not happy with this definition, revise. Maybe use universal collection $\mathbf{V}$ to define all and if possible refer to a reference. Ensure the notation is coherent with propositional logic.

## Notation. Operators

In addition to $\top$, $\lor$, $\to$, $\leftrightarrow$ which are the same (extended to first-order formulas) in first-order logic as in propositional logic we define

* $\forall x \varphi \triangleq \neg(\exists x \neg (\varphi))$ for any variable $x$ and any formula $\varphi$.

## To-Do's

* Free, Bound variables
* Sentence
* Structures...
