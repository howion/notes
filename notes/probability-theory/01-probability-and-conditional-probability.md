# 1. Probability and Conditional Probability

## Thm. Identities

$$\binom{n}{k} = \binom{n}{n - k}$$

$$n\binom{n-1}{k-1} = k\binom{n}{k}$$

[**Wikipedia:** Vandermonde's identity](https://en.wikipedia.org/wiki/Vandermonde%27s_identity)

$$\binom{m+n}{k} = \sum_{j=0}^{k} \binom{m}{j} \binom{n}{k - j}$$

[**Wikipedia:** Generalized Vandermonde's identity](https://en.wikipedia.org/wiki/Vandermonde%27s_identity#Generalized_Vandermonde's_identity)

$$\binom{m_1 + \cdots + m_p}{k} = \sum_{j_1 + \dots + j_p = k} \binom{m_1}{j_1} \binom{m_2}{j_2} \cdots \binom{m_p}{j_p}$$

## Def. General Definition of Probability

> Todo: Better definition

A **probability space** consists of a sample space $S$ and a **probability function** $P$ which takes an **event** $A \subseteq S$ as input and returns $P(A) \in [0, 1]$ as output. The function $P$ must satisfy the following axioms:

* $P(\varnothing) = 0$ and $P(S)=1$.
* If $A_1, A_2 ...$ are disjoint events (mutually exclusive), then $$P\left(\bigcup_{j} A_j\right) = \sum_{j} P(A_j)$$

## Thm. Properties of Probability

For any events $A$ and $B$:

* $P(A^c) = 1 - P(A)$.
* $A \subseteq B \implies P(A) \leq P(B)$.
* $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

## Thm. Inclusion-Exclusion

[**Wikipedia:** Inclusion-Exclusion Principle](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle)

$$
\begin{array}{llll}
P \left(\> \bigcup_{i=1}^{n} A_i \right) =&
+& \sum_{i} & P(A_i) \\
&-& \sum_{i \> < \> j} & P(A_i \cap A_j) \\
&+& \sum_{i \> < \> j \> < k} & P(A_i \cap A_j \cap A_k)\\
&\cdots & (-1)^{n+1} & P(A_1 \cap ... \cap A_n)
\end{array}
$$

## Def. Conditional Probability

$$P(A | B) \triangleq \frac{P(A \cap B)}{P(B)}$$

## Thm. Conditional Probability

$$P(A \cap B) = P(B) P(A|B)=P(A) P(B|A)$$
$$P(A_1, ... \>, A_n) = P(A_1) P(A_2|A_1)P(A_3|A_2,A_1) \cdots P(A_n | A_{n-1}, ... \> , A_1)$$
$$P(A_1, A_2, A_3) = P(A_1) P(A_2|A_1) P(A_3|A_2,A_1) = P(A_2) P(A_3|A_2) P(A_1 | A_2, A_3)$$

## Thm. Bayes' Theorem

[**Wikipedia:** Bayes' Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem)

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

where $P(A)$ is the **prior** and $P(A|B)$ is the **posterior**.

## Def. Odds

$$
\text{odds}(A) \triangleq \frac{P(A)}{P(A^c)} = \frac{P(A)}{1 - P(A)}
\implies
P(A) = \frac{\text{odds}(A)}{1 + \text{odds}(A)}
$$

## Thm. Odds Bayes

$$
\begin{array}{ccccc}
\dfrac{P(A|B)}{P(A^c | B)}  &=& \dfrac{P(B|A)}{P(B|A^c)} & \cdot & \dfrac{P(A)}{P(A^c)} \\
\\
\small \text{Posterior} & & \small \text{Likelihood} & & \small \text{Prior} \\
\small \text{Odds} & & \small \text{Ratio} & & \small \text{Odds} \\
\end{array}
$$

## Thm. Law of Total Probability (LOTP)

Let $A_1, ..., A_n$ partition the sample space $S$, then

$$P(B) = \sum_{i=1}^{n} P(B \cap A_i) = \sum_{i=1}^{n} P(B|A_i) P(A_i)$$

## Ex. Sensitivity and Specificity

[**Wikipedia:** Sensitivity and Specificity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity)

Let $D$ denote the event of true positive and let $T$ denote the event of test is positive. $P(T|D)$ is called
**sensitivity** or **true positive rate**. $P(T^c|D^c)$ is called **specificity** or **true negative rate**.

## Remark. Conditional Probabilities Are Probabilities

* $0 \leq P(A|E) \leq 1$.
* $P(\varnothing | E) = 0$ and $P(S|E) = 1$.
* If $A_1, A_2, ...$ are disjoint events then $P(\bigcup_j A_j |E) = \sum_{j} P(A_j | E)$.
* $P(A^c | E) = 1 - P(A | E)$.
* **(Inclusion-Exclusion)** $P(A \cup B | E) = P(A|E) + P(B|E) - P(A \cap B | E)$.

So, the conditional probability is also a probability. Similarly, we can see probability as a conditional probability.

## Thm. Bayes with Extra Condition

Provided $P(A \cap E) > 0$ and $P(B \cap E) > 0$ we have

$$P(A|B, E) = \frac{P(B|A, E) P(A|E)}{P(B|E)}$$

## Thm. LOTP with Extra Condition

Let $A_1, ..., A_n$ partition $S$ and $P(A_i \cap E) > 0$ for all $i$, then

$$P(B|E) = \sum_{i=1}^{n} P(B|A_i, E)P(A_i | E)$$

## Def. Independence

Two events $A$ and $B$ are **independent** if $P(A \cap B) = P(A)P(B)$.

Note that independence is _completely different_
from disjointness. Disjoint events $A$ and $B$ can be independent only if $P(A)=0$ or $P(B)=0$.

## Thm. ~

TFAE if $P(A)>0$ and $P(B)>0$:

* $A$ and $B$ are independent.
* $P(A|B)=P(A)$.
* $P(B|A)=P(B)$.

So, knowing $A$ gives us no information about $B$. This may not be the case with disjointness.

## Thm. ~

If $A$ and $B$ are independent events then so are

* $A$ and $B^c$,
* $A^c$ and $B$,
* $A^c$ and $B^c$.

## Def. $3$-independence

Events $A$, $B$ and $C$ are **independent** if

$$
\begin{array}{ll}
P(A \cap B) &= P(A) P(B) \\
P(A \cap C) &= P(A) P(C) \\
P(B \cap C) &= P(B) P(C) \\

P(A \cap B \cap C) &= P(A) P(B) P(C)
\end{array}
$$

Beware that pairwise independence does not imply independence!

## Def. $n$-independence

Events $A_1, ..., A_n$ are independent if they are:

* pairwise independent,
* triplewise independent,
* quadruplewise independent,
* ...
* $P(A \cap ... \cap A_n) = P(A_1) ... P(A_n)$.

## Def. Conditional Independence

Event $A$ and $B$ are called **conditionally independent** for event $E$ if

$$P(A \cap B |E) = P(A|E) \> P(B|E)$$

## Remark. ~

Independence does NOT imply conditional independence and vice versa. Also, if $A$ and $B$ is conditionally
independent for $E$, it may not be the case for $E^c$.

<!--
## Remark. ~

Bayes' Rule is coherent
-->
