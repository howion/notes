# 3. First Order Logic

In this section we will define what we refer to as **first-order logic** which is a much more powerful (in expressive sense) language compared to our previous propositional (zeroth-order) logic. It's _lexicon_, who also contains zeroth-order logic defined as

## Def. The Alphabet

> Note that if your meta-theory is strong enough in the sense that it allows you to work with classes, say NBG/GB unlike ZFC, you may allow $\mathbf{S}$ to be a proper class.

The **alphabet of a first-order logic** denoted by $\mathbf{A}_\mathbf{S}$ is the union of disjoint sets $\mathbf{A}$ and $\mathbf{S}$ where $\mathbf{A}$ is a set of logical symbols which is the union of disjoint

1. (a set of) **variables** $\{v_0, v_1, v_2 ...\}$ or denoted $ \{x, y, z, ...\}$,
2. (the set of) **connectives** $\{\neg, \land\}$,
3. (the set of) **quantifiers** $\{\exists\}$,
4. the _syntactic_ equality $\{=\}$

and (possibly empty) set of non-logical symbols $\mathbf{S}$ called the **symbol set** which is the union of disjoint

6. (a set of) **constants** $\{c_0, c_1, c_2, ...\}$,
7. (a set of) $n$-ary **relations** $\{P, Q, R, ...\}$ for each $n \geq 1$,
8. (a set of) $n$-ary **functions** $\{f, g, h, ...\}$ for each $n \geq 1$.

Later on, we will show that $\mathbf{S}$ determines a first-order language. Notice that, especially if we consider variables fixed, the set $\mathbf{A}$ is independent of $\mathbf{S}$ and static in the sense that is the same for all first-order logic alphabets.

## Def. Terms

Let $\mathbf{A}_\mathbf{S}$ be an alphabet of a first-order logic, then the set of **terms** over $\mathbf{A}_\mathbf{S}$ denoted with $\text{Term}(\mathbf{A}_\mathbf{S})$ is the smallest subset of ${\mathbf{A}_\mathbf{S}}^*$ such that

1. Every variable and constant in $\mathbf{S}$ is a $\mathbf{S}$-term, and
2. For all $n \geq 1$, if $t_1, ..., t_n$ are $\mathbf{S}$-terms, then $f_n \> t_1 \cdots t_n$ and $R_n \> t_1 \cdots t_n$ are $\mathbf{S}$-terms where $f_n \in S$ is an $n$-ary function and $R_n \in S$ is an $n$-ary relation.

> Notice that we are working in Polish Notation here. Otherwise, in ordinary infix notation, we also need to add comma to our set of non-logical symbols.

## Def. First-Order Formula

Let $\mathbf{A}_\mathbf{S}$ be an alphabet of a first-order logic, then the set of **formulas** over $\mathbf{A}_\mathbf{S}$ denoted with $\text{Form}(\mathbf{A}_\mathbf{S})$ is the smallest subset of $\mathbf{A}_\mathbf{S}$ such that, for $t_1, t_2, ..., t_n \in \text{Term}(\mathbf{A}_\mathbf{S})$

1. $t_1 = t_2$ is a formula,
2. $R_k \> t_1 \> t_2 \cdots t_k$ is a formula where $R_k$ is an $k$-ary relation symbol in $\mathbf{S}$,
3. If $\varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then $\neg \varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$,
4. If $\varphi, \psi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then $\land \> \varphi \> \psi \in \text{Form}(\mathbf{A}_\mathbf{S})$,
5. If $\varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then $\exists x \varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$ where $x$ is a variable symbol in $\mathbf{S}$.

The formulas which are constructed by (1) or (2) is called **atomic**.

## Notation. Operators

Let $\varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then we define &mdash; in addition to its $\lor$, $\to$, $\leftrightarrow$ counterparts in propositional logic

* $\forall x \varphi := \neg \exists x \neg \varphi$ where $x$ is a variable symbol in $\mathbf{S}$

## To-Do's

* Free, Bound variables
* Sentence
* Structures...
