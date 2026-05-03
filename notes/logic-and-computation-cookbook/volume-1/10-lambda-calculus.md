# 1.1. Lambda Calculus

We will start our journey with a very simple yet very powerful construct called the **lambda calculus** or **$\lambda$-calculus**. Almost every model in this work is either a _generalisation_ of $\lambda$-calculus or an _implementation strategy_ for it. This simple **model of computation** somehow is able to compute everything that is _computable_. Indeed, one might be tempted to define what _computable_ is using the $\lambda$-calculus.

> We will not delve much into computability; however, curious ready might want to check other related sources if interested. For now consider it as the ability to solve a given problem in a finite number of steps.

## 1.1.1. _Def._ Lambda Calculus

Simply and formally, **(untyped) lambda calculus** is a (high-order term) rewriting system with 3 simple types of terms. The syntax of it given in BNF is

$$
e ::= x \mid (\lambda x.e) \mid (e \> e)
$$

* where $x$ is a **variable** from any alphabet that would please us (in our case English lowercase letters $x,y,z$).
* The second term $(\lambda x.e)$ is called an **abstraction** where $x$ is a variable and $e$ is any **$\lambda$-term**.
* Finally, third term $(e \> e)$ is called an **application** which we (conventionally) apply right term $e$ to the possibly different $\lambda$-term $e$.

Notice how whole $\lambda$-calculus consists of a language of **lambda terms** $e$ defined as above. The $\lambda$ sign in the abstraction term indicates the start of a function and the dot seperates the variable from the body.

It is very natural to think of lambda terms as functions over variables. With abstraction (and application) we take a single variable $x$ which also represents a lambda term and return an another lambda term.

Until now, we have just defined how to construct lambda terms, yet other than writing down **valid lambda terms** we are not able to do any changes, or formally **reductions** on them.
