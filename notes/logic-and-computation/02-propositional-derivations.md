# 2. Propositional Derivations

We want to formally define a syntactic model such that given a set of assumptions (or axioms; whatever they are) we want to _derive_ (reach) further truths (of the model) based on these assumptions. Of course, those truths of our model should also somehow correspond to truths in our meta-model (or meta-language). It wouldn't really make sense otherwise. So, all it takes is to blindly follow the syntactic rules of our syntactic model to reach our semantic truths. In essence, that is what a **derivation system** is. We _derive_ further truths from assumptions (which we usually assume to be the truth) with syntactic wizardry.

In this section we will define $\vdash$ notation called the _derives_ which is pretty similar to $\models$ except _models_ was being used semantically whereas $\vdash$ will be used syntatically.

In propositional logic, with $\models$ we were able to keep track of entailment. That is, given a set of formulas $\Delta$, we said $\Delta$ _entails_ $F$ written as $\Delta \models F$. It simply meant that for each valuation which holds for the set $\Delta$ also holds for $F$. Philosophically, we gave the meaning of being true in the form of boolean truths. We will further explore this concept later on.

In propositional logic, with $\vdash$ we want to do something similar, but syntatically. From a set of formulas $\Delta$ we want to be able to arrive _true_ formulas $F$ such that they are also (correspondingly) true in our meta-theory.

## Def. Derives

Let $\Gamma$ be a set of formulas and $F, G$, and $H$ formulas. Then we _define_ (for our propositional logic model) the **derives** operator $\vdash$ by the (basic) **rules of derivations** which are

$$
\def\arraystretch{1.25}
\begin{array}{llll}
\text{\small Premise} && \text{\small Conclusion} & \text{\small Name} \\ \hline
G \in \Gamma &&  \Gamma \vdash G & \text{\small Assumption} \\
\Gamma \vdash G \text{ and } \Gamma \subseteq \Delta && \Delta \vdash G & \text{\small Monotonicity} \\
\Gamma \vdash G && \Gamma \vdash \neg \neg G & \text{\small  Double }\neg \\
\Gamma \vdash F \text{ and } \Gamma \vdash G && \Gamma \vdash (F \land G) & \land\text{\small -Introduction} \\
\Gamma \vdash (F \land G) && \Gamma \vdash F & \land\text{\small -Elimination} \\
\Gamma \vdash (F \land G) && \Gamma \vdash (G \land F) & \land\text{\small -Symmetry} \\
\end{array}
$$

> Note that, for brevity, we didn't include the rules for brackets such that $(F)$ and $F$ are derived from each other etc.

We can extend these rules of derivations in any way we want (as long as it makes sense which we will define later), for example to include $\lor$ and $\to$.

We can also reduce these rules, indeed we only need 3 which is a topic of no concern in these notes.

## Def. Syntactic Proof

A **syntactic proof** (sometimes called **formal proof**, or simply a **proof** if not to be confused with a proof in our meta-language) in propositional logic is a finite _sequence_ of statements of the form $\Gamma \vdash F$ where $\Gamma$ is a set of formulas and $F$ is a formula.

> Notice how a syntactic proof is our "witness" to the claim that $F$ is derivable (in our model) from $\Delta$ by following some syntactic rules.

We say $F$ can be **derived** from $\Gamma$ if there exists a formal proof with the final step $\Gamma \vdash F$.

### Example

Let $\Gamma = \Set{(\neg F \lor G)}$ and derive $F \to G$ from $\Gamma$.

<details>
<summary><b>Solution</b></summary>
<br>

$$
\begin{array}{ll:l}
\Gamma \cup \{F\} & \vdash F & \text{Assumption} \\
\Gamma \cup \{F\} & \vdash (\neg F \lor G) & \text{Assumption} \\
\Gamma \cup \{F\} & \vdash (F \to G) & (F \to G) \triangleq (\neg F \lor Q) \\
\Gamma \cup \{F\} & \vdash G & \text{Modus Ponens} \\
\Gamma & \vdash (F \to G) & \text{Modus Ponens} \\
\end{array}
$$
</details>

## Thm. Soundness

Let $\Gamma$ be a set of formulas and $F$ a formula in propositional logic such that $\Gamma \vdash F$, then $\Gamma \models F$.

<details>
<summary><b>Proof</b></summary>
<br>

> TODO:
</details>

Therefore

* $\vdash G$ implies $G$ is a tautology,
* $\vdash \neg G$ implies $G$ is a contradiction.

## Def. Literal

A **literal** is either an atomic formula, or the negation of an atomic formula. The former is called a **positive literal** and the latter is called a **negative literal**.

## Def. Conjuctive Normal Form

A propositional formula $F$ is in **conjuctive normal form (CNF)** if it is a conjuction of disjunctions of literals, that is

$$
F = \bigwedge_{i = 1}^{n} \left(\bigvee_{j = 1}^{m} \right) L_{ij}
$$

where $m,n \in \N^+$ and each $L_{ij}$ is a literal.

## Def. Disjunctive Normal Form

A propositional formula $F$ is in **disjunctive normal form (DNG)** if it is a conjuction of disjunctions of literals, that is

$$
F = \bigvee_{i = 1}^{n} \left(\bigwedge_{j = 1}^{m} \right) L_{ij}
$$

where $m,n \in \N^+$ and each $L_{ij}$ is a literal.

## Thm. CNF and DNF Duality

Negation of a formula in DNF is equivalent to a formula in CNF. Similarly, negation of a formula in CNF is equivalent to a formula in DNF.

## Thm. Generality of CNF and DNF

Any propositional formula $F$ is equivalent to some formula $F_\text{CNF}$ in CNF and some formula $F_\text{DNF}$ in DNF.

The cannonical algorithms to build equivalent formulas in CNF and DNF are straightforward and simple. Curious reader may exercise or check out such algorithms.

## Def. Horn Formula

A propositional formula $F$ is a **Horn formula** if its in CNF and every disjunction contains at most one positive literal.

A Horn formula is called **basic** if it does not use any conjunction. Therefore, every Horn formula is a conjuction of basic Horn formulas.

Notice that, for example, the basic Horn formula $\neg A_1 \lor \neg A_2 \lor \neg A_3 \lor A_4$ is equivalent to $(A_1 \land A_2 \land A_3) \to A_4$. Therefore, every Horn formula can be written as conjuction of implications. In the case that there are no positive literals, say no $A_4$ above, we have $(A_1 \land A_2 \land A_3) \to \bot$.

## Thm. HORNSAT

> **TODO**

## To-Do's

* Define Horn Algorithm and HORNSAT, show it is linear and concludes satisfiablity.
* Define (with the harder direction) compactness and show propositional logic is compact.
* Define completeness.
* Define resolutions and show its completeness.
* More exercises here.
