# 1. Propositional Logic

## Syntax and Semantics

Theorems and definitions we prove and define here are actually meta-theorems and meta-definitions in our meta-language. You may assume our metalangauge is first-order or second-order logic in which we define propositional logic which is sometimes called **zeroth-order logic**. Note that we haven't yet shown propositional logic is a subset of our meta-language. It is just, kind of, nonsense syntax at this moment.

## Notation. Truth

Syntactically, we will use the symbols

* $\bot$ called **bottom** or simply **bot** to denote falsity _in our syntactic model_,
* $\top$ called **top** to denote truth _in our syntactic model_,
* $\neg$ called **negation** to denote _negation_,
* $\to$ called **material implication** to denote _implication_,
* $\land$ called **conjuction** to denote _and_, and
* $\lor$ called **disjunction** to denote _or_.

Semantically, we will use the symbols

* $\mathbb{T}$ called **true** to denote _semantic truth_, and
* $\mathbb{F}$ called **false** to denote _semantic falsity_.
* $:=$ called **defined as** to denote _semantic equality_.

## Def. Alphabets and Words

By an **alphabet** $\Sigma$ we mean a non-empty set of **symbols** (or **letters**).

A finite sequence of symbols over an alphabet $\Sigma$ is called a **word** (or a **string**). Moreover, $\Sigma^*$ denotes the set of all words and the **length** of a word $w$ is the number of letters (that is size of the finite sequence) denoted with $|w|$. The **empty word** denoted with $\epsilon$ is _the_ word of length $0$.

## Def. Language and Syntax

Let $\Sigma$ be an alphabet. Any subset $L$ of $\Sigma^*$ is called a **(formal) language** over $\Sigma$. Moreover, let

$$
L = \Set{w \in \Sigma^* | \varphi(w)}
$$

be a language and $\varphi$ be the definition of that language, then $\varphi$ is called the **syntax** of the language $L$.

## Def. Propositional Formulas

Let $\mathcal{P}$ be a, possibly empty, countable set called the **atomic formulas** (or **prime formulas**).

The set $\mathcal{L}_0(\mathcal{P})$ called the **propositional formulas** for the atomics $\mathcal{P}$ defined _inductively_ as the _smallest set_ such that:

1. $\mathcal{P} \subseteq \mathcal{L}_0(\mathcal{P})$,
2. If $F \in \mathcal{L}_0(\mathcal{P})$, then $\neg F \in \mathcal{L}_0(\mathcal{P})$,
3. If $F, G \in \mathcal{L}_0(\mathcal{P})$, then $\land \> F \> G \in \mathcal{L}_0(\mathcal{P})$,

> This definition of formulas until here suffice as we can define other operators from $\neg$ and $\land$. Indeed, we will sometimes use only these when proving theorems (or even defining concepts).

<!-- 4. If $F, G \in \mathcal{L}_0(\mathcal{P})$, then $\lor \> F \> G \in \mathcal{L}_0(\mathcal{P})$,
5. If $F, G \in \mathcal{L}_0(\mathcal{P})$, then $\to F \> G \in \mathcal{L}_0(\mathcal{P})$. -->

> With just the NAND operator, $\bar{\land}$, alone, it is possible to build other logical operators, so that (2) and (3) can be reduced to $\bar{\land} \> F \> G$ and negation and logical and can be semantically defined via NAND.

Notice that $\mathcal{L}_0(\mathcal{P})$ is a language over $\Sigma = \mathcal{P} \cup \{\neg, \land \}$ with the syntax given above where intersection of $\mathcal{P}$ and the logical connectives is empty.

When we refer an object $F$ as a **propositional formula**, we simply mean it is an element of $\mathcal{L}_0(\mathcal{P})$ for some set of atomic variables $\mathcal{P}$.

With the use of **Polish Notation** here we have removed the need for parenthesis so that, for example, $\land \neg \> A \> B$ means $(\neg A \land B)$. Since we know the arity of each operator, compositions of operators is also well-defined (exercise). But note that this notation, although this is the way we defined, is hard to follow for us mere humans, so we will mostly stick to our classical **infix notation** for the rest of the notes. Moreover, when using infix notation, we will omit the use of brackets for readibility when it is appropriate.

Finally, we will denote **the propositional logic** with $\bot$ as its only atomic formula with $\mathcal{L}_0$ that is $\mathcal{L}_0 := \mathcal{L}_0(\{\bot\})$.

One could, of course, relax or even contradict these definitions, which is not uncommon in logic. What matters is the core intuition.

## Def. Syntactic Identity

With $=$, we will denote the **syntactic identity**. That is, if $F$ and $G$ are strings and are formulas, then $F=G$ will simply denote they are strings of symbols of same lenght with same symbols in each place. Notice that this is a _semantic defintion_ for our syntactic model.

## Notation. Operators

Given the logical operators $\neg$ and $\land$ and _the_ atomic variable $\bot$, we _define_ for formulas $F$ and $G$

* $\top := \neg \bot$,
* $\lor \> F \> G := \neg \land \neg F \> \neg G$,
* $\to F \> G := \lor \neg F \> G$, and
* $\leftrightarrow F \> G := \land \to F \> G  \to G \> F$

> Notice that we have just defined some syntactic abbreviations, didn't prove anything. Exercise and write these polish notational definitions in ordinary infix notation.

## Def. Subformula

Let $F \in \mathcal{L}_0(\mathcal{P})$ be a formula. Then the set $\text{Sub}(F)$ of **subformulas** of $F$ is the smallest set, such that

* $F \in \text{Sub}(F)$,
* If $F = \neg G$, then $G \in \text{Sub}(F)$.
* If $F = \land \> G \> H$, then $G,H \in \text{Sub}(F)$.

> Here, we have just defined subformula for (1)-(3) above, it should be clear what a subformula is for an extended definition.

The set $\text{Sub}^+(F)$ of **proper subformulas** is defined as $\text{Sub}(F) \setminus \{F\}$.

## Thm. Principle of Induction on Propositional Formulas

Since we are going to use induction heavily, we will prove that if $\phi$ is any property which

1. Holds for all atomic formulas,
2. If holds for $F$, it also holds for $\neg F$, and
3. If holds for $F$ and $G$, it also holds for $\land \> F \> G$,

Then $\phi$ holds for all formulas (of propositional logic).

<details>
<summary><b>Proof</b></summary>
<br>

> TODO:
</details>

## Def. Formation Sequence for Propositional Formulas

> Let's stick to ordinary infix notation from now on until we define the syntax first-order logic.

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
* Similarly, a formula is said to be a **contradiction** if it holds under no valuation, denoted by $\not \models F$.
* A formula which is satisfiable but not a tautology is called **contingent**.

## Def. Entails

We say a formula $F$ **entails** the formula $G$ denoted by $F \models G$ if every valuation which models $F$ also models $G$. In this case, we also say $G$ is a **consequence** of $F$.

> Notice how we are **overloading** (and will keep on overloading) the infix notation $\models$ with valuations, formulas etc. So the elements left or right handside of "models" sign is context-dependent.

## Def. Semantic Equivalence

Let $F$ and $G$ be formulas. If they entail each other, then we say they are **equivalent**. This is denoted by $F \equiv G$.

### Exercise 1. Symmetry of $\land$

$(F \land G) \equiv (G \land F)$

### Exercise 2. Distributivity Rules

* $(F \land (G \lor H)) \equiv ((F \land G) \lor (F \land H))$
* $(F \lor (G \land H)) \equiv ((F \lor G) \land (F \lor H))$

### Exercise 3. De Morgan's Rules

* $\neg(F \land G) \equiv (\neg F \lor \neg G)$
* $\neg(F \lor G) \equiv (\neg F \land \neg G)$

## Def. _A_ Set of Formulas

From now on, when we say $\Gamma$ is **a set of formulas**, we will mean $\Gamma \subseteq \mathcal{L}_0(\mathcal{P})$. So it is not _the_ set of formulas, but rather a set of formulas.

> We will make use of the letters such as $\Gamma, \Delta$ to usually denote a set of formulas and uppercase latin letters $A, B, F, G, ...$ et cetera to denote formulas.

Moreover, we'll overload the $\models$ notation further in respect to this notion. Let $\Gamma$ be a set for formulas such that $\Gamma = \Set{F_0, F_1, ...}$, then we say

* a valuation $v$ **models** $\Gamma$ denoted by $v \models \Gamma$ if $v \models F_i$ for each $i$,
* $\Gamma$ **entails** (a formula) $G$ denoted by $\Gamma \models G$ if for every valuation $v$ such that $v \models \Gamma$ implies $v \models G$,
* $\Gamma$ is **satisfiable** if there exists a valution $v$ such that $v \models F_i$ for each $i$, and **unsatisfiable** otherwise.

Now, let's look at some basic semantic properties of propositional logic.

## Thm. Semantic Modus Ponens

Let $\Gamma$ be a set of formulas and $A, B$ formulas. If $\Gamma \models A$ and $\Gamma \models (A \to B)$, then $\Gamma \models B$.

## Thm. Compactness (1)

Let $\Gamma$ be a set of formulas. If $\Gamma$ is satisfiable, then so is every finite subset of it.

> This is the easy (to prove) direction of what is called the **compactness** (of propositional logic), we will see the other direction is also true in the later sections.

## Thm. Semantic Monotonicity

Let $\Gamma$ and $\Delta$ be a set of formulas such that $\Gamma \subseteq \Delta$ and $F$ a formula. If $\Gamma \models F$ then $\Delta \models F$.

## Thm. Semantic Transitivity

Let $\Gamma$ and $\Delta$ be a set of formulas and $A,B$ formulas. If $\Gamma \models A$ and $\Delta \cup \{A\} \models B$, then $\Gamma \cup \Delta \models B$.

## Thm. Semantic Deduction Theorem

Let $\Gamma$ be a set of formulas and $F$ a formula. Then, $\Gamma \models F$ if and only if $\Gamma \cup \{\neg F\}$ is unsatisfiable.
