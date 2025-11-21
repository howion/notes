# 2. (Discrete) Random Variables

## Def. Random Variable

A **random variable** $X$ (r.v.) is a function from the sample $S$ to the set of real numbers $\R$.

So, a random variable is a function from the elements (not events) of $S$ to a real number. Since $X$ is a function, $X(s) \in \R$ is defined for all $s \in S$.

## Def. Discrete Random Variable

> TODO: Revise this

A random variable $X$ is said to be **discrete** if there is a countable (finite or countably infinite) list of values
$a_1, a_2, ...$ such that $P(X=a_j \enspace \text{for some} \enspace j)=1$.

If $X$ is discrete r.v., then the countable set of values $x$ such that $P(X=x) > 0$ is called the **support** of $X$.

## Def. Probability Mass Function

The **probability mass function (PMF)** of a discrete r.v. $X$ is the function $p_X$ given by

$$p_X (x) = P(X=x)$$

Note that this is positive if $x$ is in the support of $X$ and $0$ otherwise.

## Remark. Notation

We use $X = x$ to denote the event $\{s \in S \> | \> X(s) = x \}$. We cannot take the probability of a random variable, only of an event.

## Thm. Valid PMFs

> TODO: Rewrite

Let $X$ be a discrete random variable with countable support $x_1, x_2, ...$ (where each $x_i$ is distinct for notational simplicity). The PMF $p_X$ of $X$ must satisfy the following:

* $p_X(x) > 0$ if $x = x_j$ and $p_X(x) = 0$ otherwise.
* $\sum_{j=1} p_X(x_j) = 1$
