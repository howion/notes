# Root Systems

Let $W$ be a finite reflection group. Notice that for each reflection $s_\alpha \in W$, we have a corresponding hyperplane $H_\alpha$ and a line $\Braket{\alpha}$ spanned by $\alpha$.

## _Thm._ $W$ and $\bold{O}_n$

Given $W$ which is finite reflection group, and therefore a finite subgroup of $\bold{O}_n$, let $t \in \bold{O}_n$ and non-zero $\vec{\alpha} \in \R^n$, then

$$
t s_\alpha t^{-1} = s_{t(\alpha)}
$$

In particular, if $w \in W$ and $s_\alpha \in W$, then

$$
w s_\alpha w^{-1} = s_{w(\alpha)}
$$

which is an element of $W$.

Therefore, $W$ permutes the set of all lines $\{\Braket{\alpha} \mid s_\alpha \in W\}$ via

$$
w(\Braket{\alpha}) = \Braket{w(\alpha)}
$$

## _Def._ Root Sytem

Now that we know $W$ permutes the lines of $W$, if we select unit vectors lying in all such lines, then these vectors will be stable under the action of $W$.

> Indeed, the equality of lengths of vectors are insignificant as we only care about the stability under $W$.

A finite set $\Phi$ of non-zero vectors of $\R^n$ is called a **root system** if for all $\alpha \in \Phi$

1. $\Phi \cap \Braket{a} = \{-\alpha, \alpha\}$ for all $\alpha \in \Phi$, and
2. $s_\alpha(\Phi) = \Phi$.

The elements of $\Phi$ are called the **roots** of $\Phi$.

## _Def._ Simple System

The root system $\Phi$ could get extremely large, therefore we may aim for a linearly independent subset.

A subset $\Delta \subseteq \Phi$ is called a **simple system** if $\Delta$ is a basis for $\Braket{\Phi}$ and for each $\alpha \in \Phi$ we have

$$
\alpha = \sum_{i=1}^n c_i y_i
$$

for some $y_i \in \Delta$ where $\{c_i\}$ are either all non-positive or all non-negative. Elements of $\Delta$ are called the **simple roots**, and the corresponding reflections $s_\alpha$ are called **simple reflections**.

## _Thm._ Lemma for $\Delta$

Let $\Delta$ be a simple system for $\Phi$, then

$$
\Braket{\alpha, \beta} \leq 0
$$

for all $\alpha, \beta \in \Delta$ if $\alpha \neq \beta$.

> So, once a vector has been chosen, we only have to consider vectors pointing in the opposite direction as candidates to be added to the simple system.

## _Thm._ Simple Systems and Finite Reflection Groups

Let $\Delta$ be a simple system for $\Phi$ and $W$ be the associated reflection group, then

$$
W = \Braket{s_{\alpha_1}, ..., s_{\alpha_k} \mid (s_{\alpha_i} s_{\alpha_j})^{m_{ij}} = 1 \quad \forall \alpha_i \in \Delta}
$$

where $m_{ij}$ is the order of the product $s_{\alpha_i} s_{\alpha_j}$. Therefore, $W$ is determined up to isomorphism by the set of integers $m_{ij}$ where $\alpha_i, \alpha_j \in \Delta$.
