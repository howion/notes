# Syntax and Semantics

You may skip this chapter but it is suggested to skim it for the notation.

## Def. Symbols

Compared to other fields of Mathematics, in Logic, convention regarding the notation and symbols used differs a lot. But, in general,

* $\bot$ is called **bottom**, **bot**, **falsity**, **false**, **falsum** or **absurdity**. Sometimes $0$ or $\text{F}$ is used instead of $\bot$. We will stick to $\bot$ and call it bottom (or simply bot).
* $\top$ is called **top**, **verum**, **true**, or **truth**. It is defined as the negation of $\bot$.
* The **negation** will be denoted with $\neg$.
* The **material implication** will be denoted with $\to$.

## Def. Formula(s)

The set $\text{Frm}(\mathcal{L}_0)$ of **formulas** of propositional logic is defined _inductively_ as:

1. $\bot \in \text{Frm}(\mathcal{L}_0)$, called an **atomic formula**,
2. If $\varphi$ is a formula, then so is $\neg \varphi$,
3. If $\varphi$ and $\psi$ are formulas, then so is $(\varphi \land \psi)$

> You may also want to include some set of propositional variables to your propositional logic, then

4. Every **propositional variable** $p_i \in \text{Frm}(\mathcal{L}_0)$, and they are also called **atomic formula**,

> This definition of formula(s) suffice, but in practice we also further define:

5. If $\varphi$ and $\psi$ are formulas, then so is $(\varphi \lor \psi)$
6. If $\varphi$ and $\psi$ are formulas, then so is $(\varphi \to \psi)$

> With just the nand operator alone, it is possible to build other logical operators.
>
> From now on, we will omit the use of brackets for readibility, so that, for example, $A \land B$ should be understood as the formula $(A \land B)$.

## Def. Subformula

**Subformula(s)** defined inductively as:

* Any formula is a subformula of itself.
* Any subformula of $F$ is also a subformula of $\neg F$.
* Any subformula of $F$ or $G$ is also a subformula of $F \land G$.

> Here, we have just defined subformula for (1-4) above, it should be clear what a subformula is for the extended definition.

## Def. Syntactic Identity

With $=$ we will denote the **syntactic identity**. That is, if $F$ and $G$ are strings and are formulas, then $F=G$ will simply denote they are strings of symbols of same lenght with same symbols in each place.

> We will define semantic identity for propositional logic later on.

## Thm. Principle of Induction on Formulas

Since we are going to use induction heavily, we will prove that for any property $P$ which holds for all **atomic formulas**, and such that:

1. If it holds for $\varphi$, it also holds for $\neg \varphi$,
2. If it holds for $\varphi$ and $\psi$, it also holds for $\varphi \land \psi$,

Then $P$ holds for all formulas.
