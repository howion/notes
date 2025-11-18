# Derivations

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
