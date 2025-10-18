# Syntax and Semantics

You may skip this chapter but it is suggested to skim it for the notations.

## Def. Symbols

Compared to other fields of Mathematics, in Logic, convention regarding the notation and symbols used differs a lot. But, in general,

* $\bot$ is called **bottom**, **bot**, **falsity**, **falsum** or **absurdity**.
* $\top$ is called **top**, **verum**, or **truth**. It is defined as the negation of $\bot$.
* The **negation** will be denoted with $\neg$.
* The **material implication** will be denoted with $\to$.
* The meta-level truth will be denoted with $\mathbb{T}$ called **true** and, similarly, **false** with $\mathbb{F}$.

## Def. Formula(s)

Given a (possibly empty) countable set of **atomic formulas** $\mathcal{P}$, the set $\text{Form}(\mathcal{P})$ of **formulas** of propositional logic is the smallest set, defined _inductively_, such that:

1. $\mathcal{P} \subseteq \text{Form}(\mathcal{P})$,
2. If $\varphi \in \text{Form}(\mathcal{P})$, then so is $\neg \varphi$,
3. If $\varphi, \psi \in \text{Form}(\mathcal{P})$, then so is $(\varphi \land \psi)$

> This definition of formula(s) until here suffice and we will mostly use these when proving (or even defining) theorems, but in practice you may also further assume:

4. If $\varphi, \psi \in \text{Form}(\mathcal{P})$, then so is $(\varphi \lor \psi)$
5. If $\varphi, \psi \in \text{Form}(\mathcal{P})$, then so is $(\varphi \to \psi)$

> With just the nand operator alone, it is possible to build other logical operators, so that (2)-(3) can be reduced to single statement with NAND.

From now on, we will omit the use of brackets for readibility, so that, for example, $A \land B$ should be understood as the formula $(A \land B)$.

## Def. Syntactic Identity

With $=$, we will denote the **syntactic identity**. That is, if $F$ and $G$ are strings and are formulas, then $F=G$ will simply denote they are strings of symbols of same lenght with same symbols in each place.

> We will define semantic identity for propositional logic later on.

## Def. Subformula

Let $F \in \text{Form}(\mathcal{P})$ be a formula. Then the set $\text{Sub}(F)$ of **subformulas** of $F$ is the smallest set, such that

* $F \in \text{Sub}(F)$,
* If $F = \neg G$, then $G \in \text{Sub}(F)$.
* If $F = (G \land H)$, then $G,H \in \text{Sub}(F)$.

> Here, we have just defined subformula for (1-4) above, it should be clear what a subformula is for an extended definition.

The set $\text{Sub}^+(F)$ of **proper subformulas** is defined as $\text{Sub}(F) \setminus \{F\}$.

## Thm. Principle of Induction on Formulas

Since we are going to use induction heavily, we will prove that if $P$ is any property which

1. Holds for all atomic formulas,
2. If holds for $\varphi$, it also holds for $\neg \varphi$, and
3. If holds for $\varphi$ and $\psi$, it also holds for $\varphi \land \psi$,

Then $P$ holds for all formulas.

<details>
<summary><b>Proof</b></summary>
<br>
TODO:
</details>

## Def. Formation Sequence for Propositional Formulas

A finite sequence $(\varphi_0, ..., \varphi_n)$ is called a **formation sequence** for the formula $\varphi$ if $\varphi = \varphi_n$ and for all $i \leq n$, either

1. $\varphi_i$ is atomic formula, or
2. there exists $j,k \lt i$ such that, either
    1. $\varphi_i = \neg \varphi_j$,
    2. $\varphi_i = (\varphi_j \land \varphi_k)$.

### Example

For example, for atomics $p_0, p_1, p_2$ the sequence

$$
(p_0, p_1, (p_1 \land p_0), \neg (p_1 \land p_0))
$$

is a formation sequence for $\neg (p_1 \land p_0)$, as is

$$
(p_0, p_1, p_0,(p_1 \land p_0), (p_0 \land p_1), \neg (p_1 \land p_0))
$$

### Thm. Existence of Formation Sequence

Every propositional formula has a formation sequence.

## Def. Valuation

A **valuation** (or **assignment**) for the set $\text{Form}(\mathcal{P})$ is a function

$$
v: \mathcal{P} \to \{\mathbb{T}, \mathbb{F}\}
$$

which simply assigns **true** or **false** to atomic variables.

We will abuse notation and also use $v(F)$ for the **evaluation** of a formula $F$, defined naturally.

## Def. Satisfaction

Let $F$ be a formula such that for some valuation $v$, we have $v(F) = \mathbb{T}$. Then, we say $v$ **models** $F$ denoted by $v \models F$. Equivalently, we say $F$ **holds** under $v$.

A formula $F$ is said to be **satisfiable** if there exists an valuation $v$ such that $v \models F$. Otherwise, it is called **unsatisfiable**.

## Def. Tautology and Contradiction

* A formula $F$ is said to be a **tautology** if it holds under all valuations. This is denoted by $\models F$.
* Similarly, a formula is said to be a **contradiction** if it holds under no valuation.
* A formula which is satisfiable but not a tautology is called **contingent**.

## Def. Entails

We say a formula $F$ **entails** the formula $G$ denoted by $F \models G$ if every valuation which models $F$ also models $G$. In this case, we also say $G$ is a **consequence** of $F$.
