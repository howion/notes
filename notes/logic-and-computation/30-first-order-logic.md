# 3. First Order Logic

In this section we will define what we refer to as **first-order logic** which is a much more powerful (in expressive sense) language compared to our previous propositional (zeroth-order) logic. It's _lexicon_, who also contains zeroth-order logic defined as

<!-- ## Notation. Operators

In addition to $\top$, $\lor$, $\to$, $\leftrightarrow$ which are the same (extended to first-order formulas) in first-order logic as in propositional logic we define

* $\forall x \varphi \triangleq \neg(\exists x \neg (\varphi))$ for any variable $x$ and any formula $\varphi$. -->

## Def. Alphabet

> Note that if your meta-theory is strong enough in the sense that it allows you to work with classes, say NBG/GB unlike ZFC, you may allow $\mathbf{S}$ to be a proper class.

The **alphabet of a first-order logic** denoted by $\mathbf{A}_\mathbf{S}$ is the union of disjoint sets $\mathbf{A}$ and $\mathbf{S}$ where $\mathbf{A}$ is a set of symbols which is the union of disjoint

1. (a set of) **variables** $\{v_0, v_1, v_2 ...\}$ or denoted $\{x, y, z, ...\}$,
2. (the set of) **connectives** $\{\neg, \land, \lor, \to, \leftrightarrow\}$,
3. (the set of) **quantifiers** $\{\exists, \forall\}$,
4. the _syntactic_ equality $\{=\}$
5. the parentheses symbols $\{\lparen, \rparen\}$,

and (possibly empty) $\mathbf{S}$ called the **symbol set** which is union of disjoint

6. (a set of) **constants** $\{c_1, c_2, c_3, ...\}$,
7. (a set of) $n$-ary **relations** $\{P, Q, R, ...\}$ for each $n \geq 1$,
8. (a set of) $n$-ary **functions** $\{f, g, h, ...\}$ for each $n \geq 1$.

Later on, we will show that $\mathbf{S}$ determines a first-order language.

## Def. Terms

Let $\mathbf{A}_\mathbf{S}$ be an alphabet of a first-order logic, then the set of words over $\mathbf{A}_\mathbf{S}$ called **$\mathbf{S}$-terms** is the smallest subset of ${\mathbf{A}_\mathbf{S}}^*$ such that

1. Every variable and constant in $\mathbf{S}$ is a $\mathbf{S}$-term, and
2. For all $n \geq 1$, if $t_1, ..., t_n$ are $\mathbf{S}$-terms, then $f \> t_1 \cdots t_n$ and $R \> t_1 \cdots t_n$ are $\mathbf{S}$-terms where $f \in S$ is a $n$-ary function and $R \in S$ is a $n$-ary relation.

> Note that, we are working in Polish Notation which much more compact so that $f \> t_1 t_2 t_3$ means $f(t_1, t_2, t_3)$. Notice how the necessity of commas and parentheses are gone &mdash; even in compositions.

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

## To-Do's

* Free, Bound variables
* Sentence
* Structures...
