# First-Order Logic

In this section we will define what we refer to as **first-order logic** which is a much more powerful (in expressive sense) language compared to our previous propositional (zeroth-order) logic. It's _lexicon_, who also contains zeroth-order logic defined as

## _Def._ Alphabet

> Note that if your meta-theory is strong enough in the sense that it allows you to work with classes, say NBG/GB unlike ZFC, you may allow $\mathbf{S}$ to be a proper class.

The **alphabet of a first-order logic** denoted by $\mathbf{A}_\mathbf{S}$ is the union of disjoint sets $\mathbf{A}$ and $\mathbf{S}$ where $\mathbf{A}$ is called **the set of (first-order) logical symbols** which is the union of disjoint

1. (a set of) **variables** $\{v_0, v_1, v_2 ...\}$,
2. (the set of) **connectives** $\{\neg, \land\}$,
3. (the set of) **quantifiers** $\{\exists\}$,
4. the _syntactic_ equality $\{=\}$

and (possibly empty) set of non-logical symbols $\mathbf{S}$ called **the symbol set** (or **vocabulary**) which is the union of disjoint

6. (a set of) **constants** $\{c_0, c_1, c_2, ...\}$,
7. (a set of) $n$-ary **relations** $\{P, Q, R, ...\}$ for each $n \geq 1$,
8. (a set of) $n$-ary **functions** $\{f, g, h, ...\}$ for each $n \geq 1$.

Notice that, especially if we consider variables fixed, the set $\mathbf{A}$ is independent of $\mathbf{S}$ and static in the sense that is the same for all first-order logic alphabets.

## _Def._ Term

Let $\mathbf{A}_\mathbf{S}$ be an alphabet of a first-order logic, then the set of **terms** over $\mathbf{A}_\mathbf{S}$ denoted with $\text{Term}(\mathbf{A}_\mathbf{S})$ is the smallest subset of ${\mathbf{A}_\mathbf{S}}^*$ such that

1. Every variable symbol and constant symbol in $\mathbf{S}$ is a term, and
2. For all $n \geq 1$, if $t_1, ..., t_n$ are terms, then $f_n \> t_1 \cdots t_n$ is also a term where $f_n \in S$ is an $n$-ary function symbol.

> Notice that we are working in Polish Notation here. Otherwise, in ordinary infix notation, we also need to add comma and parentheses to our set of non-logical symbols.

## _Def._ $\text{var}(t)$

The **variable** function $\text{var}$ is defined on the domain $\text{Term}(\mathbf{A}_\mathbf{S})$ inductively as

$$
\def\arraystretch{1.25}
\begin{array}{rcl}
\text{var}(x) &:=& {x} \\
\text{var}(c) &:=& \varnothing \\
\text{var}(f_n \> t_1 \cdots t_n) &:=& \text{var}(t_1) \cup \cdots \cup \text{var}(t_n) \\
\end{array}
$$

where $x$ is a variable symbol, $c$ is a constant symbol, and $t_1, ..., t_n$ are terms provided to the $n$-ary function symbol $f_n$ in $\mathbf{S}$.

## _Def._ Formula

Let $\mathbf{A}_\mathbf{S}$ be an alphabet of a first-order logic, then the set of **formulas** over $\mathbf{A}_\mathbf{S}$ denoted with $\text{Form}(\mathbf{A}_\mathbf{S})$ is the smallest subset of ${\mathbf{A}_\mathbf{S}}^*$ such that, for $t_1, t_2, ..., t_n \in \text{Term}(\mathbf{A}_\mathbf{S})$

1. $t_1 = t_2$ is a formula,
2. $R_k \> t_1 \> t_2 \cdots t_k$ is a formula where $R_k$ is an $k$-ary relation symbol in $\mathbf{S}$,
3. If $\varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then $\neg \varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$,
4. If $\varphi, \psi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then $\land \> \varphi \> \psi \in \text{Form}(\mathbf{A}_\mathbf{S})$,
5. If $\varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$, then $\exists x \varphi \in \text{Form}(\mathbf{A}_\mathbf{S})$ where $x$ is a variable symbol in $\mathbf{S}$.

The formulas which are constructed by (1) or (2) is called **atomic**.

From now on we will denote the first-order language we have just defined above with $\mathcal{L}(\mathbf{A}_\mathbf{S})$ or simply $\mathcal{L}(\mathbf{S})$. This language, which is a subset of ${\mathbf{A}_\mathbf{S}}^*$, consists of words which we call formulas that are defined inductively.

## _Def._ $\text{sub}(\varphi)$

The **subformula** function $\text{sub}$ is defined on the domain $\text{Form}(\mathbf{A}_\mathbf{S})$ inductively as

$$
\def\arraystretch{1.25}
\begin{array}{rcl}
\text{sub}(t_1 = t_2) &:=& \{t_1 = t_2\} \\
\text{sub}(R_n \> t_1 \cdots t_n) &:=& \{ R_n \> t_1 \cdots t_n \} \\
\text{sub}(\neg \varphi) &:=& \{\neg \varphi \} \cup \text{sub}(\varphi)\\
\text{sub}(\land \> \varphi \> \psi) &:=& \{\land \> \varphi \> \psi\} \cup \text{sub}(\varphi) \cup \text{sub}(\psi) \\
\text{sub}(\exists x \varphi) &:=& \{\exists x \varphi\} \cup \text{sub}(\varphi)
\end{array}
$$

## _Def._ $\text{free}(\varphi)$

The **free variables** function $\text{free}$ is defined on the domain $\text{Form}(\mathbf{A}_\mathbf{S})$ inductively as

$$
\def\arraystretch{1.25}
\begin{array}{rcl}
\text{free}(t_1 = t_2) &:=& \text{var}(t_1) \cup \text{var}(t_2) \\
\text{free}(R_n \> t_1 \cdots t_n) &:=& \text{var}(t_1) \cup \cdots \cup \text{var}(t_n) \\
\text{free}(\neg \varphi) &:=& \text{free}(\varphi) \\
\text{free}(\land \> \varphi \> \psi) &:=& \text{free}(\varphi) \cup \text{free}(\psi) \\
\text{free}(\exists x \varphi) &:=& \text{free}(\varphi) \setminus \{x\}
\end{array}
$$

## Notation. First-Order Logic

Let $\varphi \in \mathcal{L}(\mathbf{S})$, then we define &mdash; in addition to its $\lor$, $\to$, $\leftrightarrow$ counterparts in propositional logic

* $\forall x \varphi := \neg \exists x \neg \varphi$ where $x$ is a variable symbol in $\mathbf{S}$

## _Def._ $\text{free}(\varphi)$

The **free variable** function $\text{free}$ is defined on the language $\mathcal{L}(\mathbf{S})$ inductively as

$$
\def\arraystretch{1.25}
\begin{array}{rcl}
\text{free}(t_1 = t_2) &:=& \text{var}(t_1) \cup \text{var}(t_2) \\
\text{free}(R_n \> t_1 \cdots t_n) &:=& \text{var}(t_1) \cup \cdots \cup \text{var}(t_n) \\
\text{free}(\neg \varphi) &:=& \text{free}(\varphi) \\
\text{free}(\land \> \varphi \> \psi) &:=& \text{free}(\varphi) \cup \text{free}(\psi) \\
\text{free}(\exists x \varphi) &:=& \text{free}(\varphi) \setminus \{x\}
\end{array}
$$

where $x$ is a variable symbol, $t_1, ..., t_n$ are terms, $R_n$ is an $n$-ary relation symbol, and $\varphi$ and $\psi$ are formulas in $\mathcal{L}(\mathbf{S})$.

A variable which is not free is called **bound**.

## Notation. Terms

From now on we will denote any tuple of terms $x_1, x_2, ..., x_n$ with $\bar{x}$ so that, for example, $\varphi(\bar{x})$ means $\varphi(x_1, x_2, ..., x_n)$.

## _Def._ Sentence

A **sentence** in a first-order logic is a formula without free variables.

## _Def._ Formulas

A **quantifier-free formula** is a formula in which the quantifier $\exists$ (and thus $\forall$) does not occur.

An **existential formula** is a formula of the from $\exists y_1 \exists y_2 \cdots \exists y_m \varphi(\bar{x}, y_1, y_2, ..., y_m)$ where $\varphi(\bar{x}, \bar{y})$ is a quantifier-free formula and $m \geq 0$.

## To-Do's

* Variables, free and bound variables
* Well-formedness
* Structures
* Abstract Syntax Trees and Polish Notation
* NAND Representations
