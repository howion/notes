# 1. Probability

<!-- ## _Thm._ Identities

$$\binom{n}{k} = \binom{n}{n - k}$$

$$n\binom{n-1}{k-1} = k\binom{n}{k}$$

[**Wikipedia:** Vandermonde's identity](https://en.wikipedia.org/wiki/Vandermonde%27s_identity)

$$\binom{m+n}{k} = \sum_{j=0}^{k} \binom{m}{j} \binom{n}{k - j}$$

[**Wikipedia:** Generalized Vandermonde's identity](https://en.wikipedia.org/wiki/Vandermonde%27s_identity#Generalized_Vandermonde's_identity)

$$\binom{m_1 + \cdots + m_p}{k} = \sum_{j_1 + \dots + j_p = k} \binom{m_1}{j_1} \binom{m_2}{j_2} \cdots \binom{m_p}{j_p}$$ -->

## _Def._ Probability

A **probability space** consists of a sample space $\Omega$ and a **probability function** (or **probability distribution** or **probability measure**) $P$ maps **event** $A \subseteq \Omega$ to $P(A) \in [0, 1]$. The function $P$ must satisfy the following axioms:

* $P(\varnothing) = 0$ and $P(\Omega)=1$.
* If $A_1, A_2 ...$ are disjoint events (mutually exclusive), then $$P\left(\bigcup_{j} A_j\right) = \sum_{j} P(A_j)$$

Elements $\Omega$ are called **sample outcomes**, **realizations**, or **elements**.

> So basically an event is a subset of the sample space and the probability measure satisfies some simple yet very powerful axioms.

## _Thm._ Basic Probability Properties

For any events $A$ and $B$:

* $P(A^c) = 1 - P(A)$.
* $A \subseteq B \implies P(A) \leq P(B)$.
* $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

## _Def._ Monotone Increase/Decrease

A sequence of sets $A_1, A_2, ...$ is said to be **monotone increasing** if

$$A_1 \subseteq A_2 \subseteq \cdots$$

and **monotone decreasing** if

$$
A_1 \supseteq A_2 \supseteq \cdots
$$

In the former case we define the limit

$$
\lim_{n \to \infty} A_n = \bigcup_{i = 1}^{\infty} A_i
$$

and for the latter case we define

$$
\lim_{n \to \infty} A_n = \bigcap_{i = 1}^{\infty} A_i
$$

Either case is denoted with $A_n \to A$.

<!-- TODO: Explanation -->

## _Thm._ Continuity of Probabilities

Let $A_n \to A$, then $P(A_n) \to P(A)$ as $n \to \infty$.

## _Def._ Uniform Probability Distribution

If the sample space $\Omega$ is finite and if each outcome is equally likely, then

$$
P(A) = \dfrac{|A|}{|\Omega|}
$$

so that $P$ is called the **uniform probability distribution**.

## _Thm._ Inclusion-Exclusion

<!-- [**Wikipedia:** Inclusion-Exclusion Principle](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle) -->

$$
\begin{array}{llll}
P \left(\> \bigcup_{i=1}^{n} A_i \right) =&
+& \sum_{i} & P(A_i) \\
&-& \sum_{i \> < \> j} & P(A_i \cap A_j) \\
&+& \sum_{i \> < \> j \> < k} & P(A_i \cap A_j \cap A_k)\\
&\cdots & (-1)^{n+1} & P(A_1 \cap ... \cap A_n)
\end{array}
$$

## _Def._ Conditional Probability

Let $A$ and be $B$ be events, the we define the **conditional probability** of $A$ given $B$ as

$$P(A \mid B) := \frac{P(A \cap B)}{P(B)}$$

## _Thm._ Conditional Probability

$$P(A \cap B) = P(B) P(A \mid B)=P(A) P(B \mid A)$$
$$P(A_1, ... \>, A_n) = P(A_1) P(A_2 \mid A_1)P(A_3 \mid A_2,A_1) \cdots P(A_n \mid A_{n-1}, ... \> , A_1)$$
$$P(A_1, A_2, A_3) = P(A_1) P(A_2 \mid A_1) P(A_3 \mid A_2,A_1) = P(A_2) P(A_3 \mid A_2) P(A_1 \mid A_2, A_3)$$

## _Thm._ Bayes' Theorem

Let $A$ and $B$ events, then we have

<!-- [**Wikipedia:** Bayes' Theorem](https://en.wikipedia.org/wiki/Bayes%27_theorem) -->

$$P(A \mid B) = \frac{P(B \mid A)P(A)}{P(B)}$$

where $P(A)$ is called the **prior** and $P(A \mid B)$ is called the **posterior** probability of $A$.

## _Thm._ Law of Total Probability (LOTP)

Let $A_1, ..., A_n$ partition the sample space $S$, then

$$P(B) = \sum_{i=1}^{n} P(B \cap A_i) = \sum_{i=1}^{n} P(B \mid A_i) P(A_i)$$

## _Thm._ Generalized Bayes' Theorem

Let $A_1, ..., A_n$ be a partition of the sample space $\Omega$ such that each $A_i$ and $B$ has a positive probability, then

$$
P(A_i \mid B) = \dfrac{P(B \mid A_i) P(A_i)}{\sum_{j=1}^n P(B \mid A_j) P(A_j)}
$$

## _Def._ Odds

$$
\text{odds}(A) := \frac{P(A)}{P(A^c)} = \frac{P(A)}{1 - P(A)}
\implies
P(A) = \frac{\text{odds}(A)}{1 + \text{odds}(A)}
$$

<!-- ## _Thm._ Odds Bayes

$$
\begin{array}{ccccc}
\dfrac{P(A \mid B)}{P(A^c \mid B)}  &=& \dfrac{P(B \mid A)}{P(B \mid A^c)} & \cdot & \dfrac{P(A)}{P(A^c)} \\
\\
\small \text{Posterior} & & \small \text{Likelihood} & & \small \text{Prior} \\
\small \text{Odds} & & \small \text{Ratio} & & \small \text{Odds} \\
\end{array}
$$ -->

<!-- ## Ex. Sensitivity and Specificity

[**Wikipedia:** Sensitivity and Specificity](https://en.wikipedia.org/wiki/Sensitivity_and_specificity)

Let $D$ denote the event of true positive and let $T$ denote the event of test is positive. $P(T|D)$ is called
**sensitivity** or **true positive rate**. $P(T^c|D^c)$ is called **specificity** or **true negative rate**. -->

## Remark. Conditional Probabilities Are Probabilities

* $0 \leq P(A \mid E) \leq 1$.
* $P(\varnothing \mid E) = 0$ and $P(S \mid E) = 1$.
* If $A_1, A_2, ...$ are disjoint events then $P(\bigcup_j A_j \mid E) = \sum_{j} P(A_j \mid E)$.
* $P(A^c \mid E) = 1 - P(A \mid E)$.
* **(Inclusion-Exclusion)** $P(A \cup B \mid E) = P(A \mid E) + P(B \mid E) - P(A \cap B \mid E)$.

So, the conditional probability is also a probability. Similarly, we can see probability as a conditional probability.

## _Thm._ Bayes with Extra Condition

Provided $P(A \cap E) > 0$ and $P(B \cap E) > 0$ we have

$$P(A \mid B, E) = \frac{P(B \mid A, E) P(A \mid E)}{P(B \mid E)}$$

## _Thm._ LOTP with Extra Condition

Let $A_1, ..., A_n$ partition $S$ and $P(A_i \cap E) > 0$ for all $i$, then

$$P(B \mid E) = \sum_{i=1}^{n} P(B \mid A_i, E)P(A_i \mid E)$$

## _Def._ Independence

Two events $A$ and $B$ are called **independent** if (and only if)

$$
P(A \cap B) = P(A)P(B)
$$

> Note that independence is _completely different_
from disjointness. Disjoint events $A$ and $B$ can be independent only if $P(A)=0$ or $P(B)=0$.
>
> Therefore, just recall that "disjoint events with positive probability are not independent".

## _Thm._ TFAE

The following are equivalent if $P(A)>0$ and $P(B)>0$,

* $A$ and $B$ are independent.
* $P(A \mid B)=P(A)$.
* $P(B \mid A)=P(B)$.

So, knowing $A$ gives us no information about $B$. This may not be the case with disjointness.

## _Thm._ Indepence of

If $A$ and $B$ are independent events then so are

* $A$ and $B^c$,
* $A^c$ and $B$,
* $A^c$ and $B^c$.

## _Def._ $3$-independence

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

## _Def._ $n$-independence

Events $A_1, ..., A_n$ are independent if they are:

* pairwise independent,
* triplewise independent,
* quadruplewise independent,
* ...
* $P(A \cap ... \cap A_n) = P(A_1) ... P(A_n)$.

## _Def._ Conditional Independence

Event $A$ and $B$ are called **conditionally independent** for event $E$ if

$$P(A \cap B \mid E) = P(A \mid E) \> P(B \mid E)$$

> Independence does not imply conditional independence and vice versa. Also, if $A$ and $B$ is conditionally independent for $E$, it may not be the case for $E^c$.

## Remarks

> TODO: Sigma Algebra, Field and Borel (p. 26)
