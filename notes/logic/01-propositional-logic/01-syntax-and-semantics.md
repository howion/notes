# Syntax and Semantics

> You may skip this chapter, but it is suggested to skim it for the notations.

## Introduction

Theorems and definitions we prove and define here are actually metatheorems and metadefinitions in our metalanguage. You may assume our metalangauge is first-order or second-order logic in which we define propositional logic which is sometimes called **zeroth-order logic**. Note that we haven't yet shown propositional logic is a subset of our metalanguage. It is just, kind of, nonsense syntax at this moment.

## Def. Symbols

Syntactically, we will use the symbols

* $\bot$ called **bottom** or simply **bot** to denote falsity _in our syntactic model_,
* $\top$ called **top** to denote truth _in our syntactic model_,
* $\neg$ called **negation** to denote _negation_,
* $\to$ called **material implication** to denote _implication_,

Semantically, we will use the symbols

* $\mathbb{T}$ called **true** to denote _semantic truth_, and
* $\mathbb{F}$ called **false** to denote _semantic falsity_.

## Def. _The_ Set of Propositional Formulas

> For simplicity, you may want to consider a formula as a string of symbols such that it is an element of the set $\text{Form}(\mathcal{P})$ given below. There is many ways to define the set of propositional formulas, we'll stick with this one.

Given a (possibly empty) countable set of **atomic formulas** (or **prime formulas**) $\mathcal{P}$, the set $\text{Form}(\mathcal{P})$ of **formulas** of propositional logic is the _smallest set_, defined _inductively_, such that:

1. $\mathcal{P} \subseteq \text{Form}(\mathcal{P})$,
2. If $F \in \text{Form}(\mathcal{P})$, then $\neg F \in \text{Form}(\mathcal{P})$,
3. If $F, G \in \text{Form}(\mathcal{P})$, then $(F \land G) \text{Form}(\mathcal{P})$

> This definition of formulas until here suffice as we can define other operators from $\neg$ and $\land$. Indeed, we will sometimes use only these when proving theorems (or even defining concepts). In practice, we also further assume:

4. If $F, G \in \text{Form}(\mathcal{P})$, then $(F \lor G) \in \text{Form}(\mathcal{P})$
5. If $F, G \in \text{Form}(\mathcal{P})$, then $(F \to G) \in \text{Form}(\mathcal{P})$

> With just the NAND operator $\bar{\land}$ alone, it is possible to build other logical operators, so that (2)-(3) can be reduced to single statement with NAND.

When we refer an object $F$ as a (propositional) **formula**, we simply mean it is an element of $\text{Form}(\mathcal{P})$ for some set of atomic variables $\mathcal{P}$.

Sometimes, we will omit the use of brackets for readibility, so that, for example, $A \land B$ should be understood as the formula $(A \land B)$.

## Def. Syntactic Identity

With $=$, we will denote the **syntactic identity**. That is, if $F$ and $G$ are strings and are formulas, then $F=G$ will simply denote they are strings of symbols of same lenght with same symbols in each place. Notice that this is a _semantic defintion_ for our syntactic model.

## Def. Operators

Given the logical operators $\neg$ and $\land$ and the atomic variable $\bot$, we can _define_, for formulas $F$ and $G$

* $\top \triangleq \neg \bot$,
* $(F \lor G) \triangleq \neg (\neg F \land \neg G)$, and
* $(F \to G) \triangleq (\neg F \lor Q)$

> Notice that we have just defined syntactic abbreviation, didn't prove anything.

## Def. Subformula

Let $F \in \text{Form}(\mathcal{P})$ be a formula. Then the set $\text{Sub}(F)$ of **subformulas** of $F$ is the smallest set, such that

* $F \in \text{Sub}(F)$,
* If $F = \neg G$, then $G \in \text{Sub}(F)$.
* If $F = (G \land H)$, then $G,H \in \text{Sub}(F)$.

> Here, we have just defined subformula for (1)-(3) above, it should be clear what a subformula is for an extended definition.

The set $\text{Sub}^+(F)$ of **proper subformulas** is defined as $\text{Sub}(F) \setminus \{F\}$.

## Thm. Principle of Induction on Formulas

Since we are going to use induction heavily, we will prove that if $\phi$ is any property which

1. Holds for all atomic formulas,
2. If holds for $F$, it also holds for $\neg F$, and
3. If holds for $F$ and $G$, it also holds for $(F \land G)$,

Then $\phi$ holds for all formulas (of propositional logic).

<details>
<summary><b>Proof</b></summary>
<br>

> TODO:
</details>

## Def. Formation Sequence for Propositional Formulas

A finite sequence $(F_0, ..., F_n)$ is called a **formation sequence** for the formula $F$ if $F = F_n$ and for all $i \leq n$, either

1. $F_i$ is atomic formula, or
2. there exists $j,k \lt i$ such that, either
    1. $F_i = \neg F_j$,
    2. $F_i = (F_j \land F_k)$.

### Example

For example, for atomics $p_0, p_1, p_2 \in \mathcal{P}$ the sequence

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

Given a set $\mathcal{P}$ of atomic variables, a **valuation** (or **assignment**) $v$ is a function

$$
v: \mathcal{P} \to \mathcal{V} = \{\mathbb{T}, \mathbb{F}\}
$$

which simply assigns semantic **true** or **false** to atomic variables.

So from now on, depending on context, we may assume $\bot \in \mathcal{P}$ and always define $v(\bot) = \mathbb{F}$, thus $v(\top) = \mathbb{T}$.

> Ponder what would happen if it were the case that $\mathcal{V} = [0,1]$ where $\mathbb{F} = 0 \in \R$ and $\mathbb{T}=1$. Obviously, most of our definitions and theorems wouldn't make sense in this setting.

## Def. Evaluation

Let $F$ be a formula and $v$ some valuation. We will abuse notation and also use $v(F)$ for the **evaluation** of a formula $F$, defined naturally.

If $v(F) = \mathbb{T}$, then we say $v$ **models** $F$ denoted by $v \models F$. Equivalently, we say $F$ **holds** under $v$.

> Notice that this is the first time we have defined the sign $\models$.

## Def. Satisfiability


A formula $F$ is said to be **satisfiable** if there exists an valuation $v$ such that $v \models F$. Otherwise, it is called **unsatisfiable**.

## Def. Tautology and Contradiction

* A formula $F$ is said to be a **tautology** if it holds under all valuations. This is denoted by $\models F$.
* Similarly, a formula is said to be a **contradiction** if it holds under no valuation. Denoted $\not \models F$
* A formula which is satisfiable but not a tautology is called **contingent**.

## Def. Entails

We say a formula $F$ **entails** the formula $G$ denoted by $F \models G$ if every valuation which models $F$ also models $G$. In this case, we also say $G$ is a **consequence** of $F$.

> Notice how we are **overloading** (and will keep on overloading) the infix notation $\models$ with valuations, formulas etc. So the elements left or right handside of "models" sign is context-dependent.

## Def. Semantic Equivalence

Let $F$ and $G$ be formulas. If they entail each other, then we say they are **equivalent**. This is denoted by $F \equiv G$.

### Exercise

$(F \land G) \equiv (G \land F)$

### Exercise (Distributivity Rules)

* $(F \land (G \lor H)) \equiv ((F \land G) \lor (F \land H))$
* $(F \lor (G \land H)) \equiv ((F \lor G) \land (F \lor H))$

## Def. _A_ Set of Formulas

From now on, when we say $\Gamma$ is **a set of formulas**, we will mean $\Gamma \subseteq \text{Form}(\mathcal{P})$. So it is not _the_ set of formulas, but rather _a_ set of formulas.

> We will make use of the letters such as $\Gamma, \Delta$ to usually denote a set of formulas and uppercase latin letters $A, B, F, G, ...$ et cetera to denote formulas.

Moreover, we'll overload the $\models$ notation further in respect to this notion. Let $\Gamma$ be a set for formulas such that $\Gamma = \Set{F_0, F_1, ...}$, then we say

* a valuation $v$ **models** $\Gamma$ denoted by $v \models \Gamma$ if $v \models F_i$ for each $i$,
* $\Gamma$ **entails** (a formula) $G$ denoted by $\Gamma \models G$ if for every valuation $v$ such that $v \models \Gamma$ implies $v \models G$,
* $\Gamma$ is **satisfiable** if there exists a valution $v$ such that $v \models F_i$ for each $i$, and **unsatisfiable** otherwise.

Now, let's look at some basic semantic properties of propositional logic.

### Thm. _Semantic_ Modus Ponens

Let $\Gamma$ be a set of formulas and $A, B$ formulas. If $\Gamma \models A$ and $\Gamma \models (A \to B)$, then $\Gamma \models B$.

### Thm. ?

Let $\Gamma$ be a set of formulas. If $\Delta$ is satisfiable, then so is every finite subset of it.

### Thm. _Semantic_ Monotonicity

Let $\Gamma$ and $\Delta$ be a set of formulas such that $\Gamma \subseteq \Delta$ and $A$ a formula. If $\Gamma \models A$ then $\Delta \models A$.

### Thm. _Semantic_ Transitivity

Let $\Gamma$ and $\Delta$ be a set of formulas and $A,B$ formulas. If $\Gamma \models A$ and $\Delta \cup \{A\} \models B$, then $\Gamma \cup \Delta \models B$.

## Thm. _Semantic_ Deduction Theorem

Let $\Gamma$ be a set of formulas and $A$ a formula. Then, $\Gamma \models A$ if and only if $\Gamma \cup \{\neg A\}$ is unsatisfiable.
