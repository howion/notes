# (Martin-Löf's) Dependent Type Theory

## Fundamental Definitions

### Def. Judgments

There are four kinds of **judgments** in Martin-Löf's dependent type theory.

1. $A$ is a (well-formed) **type** in **context** $\Gamma$, expressed as:

$$\Gamma \vdash A : \mathcal{T}$$

2. $A$ and $B$ are **judgmentally equal types** in context $\Gamma$. We express this judgment as:

$$\Gamma \vdash A \doteq B : \mathcal{T}$$

3. $a$ is an **element** of type $A$ in context $\Gamma$, expressed as:

$$\Gamma \vdash a : A$$

4. $a$ and $b$ are **judgmentally equal elements** of type $A$ in context $\Gamma$, expressed as:

$$\Gamma \vdash a \doteq b : A$$

> Notice that all judgments are context-dependent.

### Def. Context

A **context** is a finite list of **variable declerations**.

$$
\begin{array}{l}
   x_1: A_1, \\
   x_2: A_2 (x_1), \\
   \vdots \\
   x_n: A_n (x_1, ..., x_{n-1})
\end{array}
$$

that satisfy the condition, for each $1 \leq k \leq n$ we can derive the judgment:

$$
(x_1: A_1), ..., (x_{k-1}: A_{k-1} (x_1, ..., x_{k-2})) \vdash A_k (x_1, ..., x_{k-1}) : \mathcal{T}
$$

with the inference rules of our type theory. We may also use variable names as long as no variable is declared more than once.

An context of length $0$ which declares no variables is called the **empty context**.

### Def. Type Families

Let $A$ be a type in context $\Gamma$. A **family (of types) over $A$** in context $\Gamma$ is a type $B(x)$ in context $\textcolor{gray}{(}\Gamma, x : A\textcolor{gray}{)}$. More explicitly, given:

$$\Gamma, x: A \vdash B(x) : \mathcal{T}$$

we say that $B(x)$ is family of types over $A$ in context $\Gamma$. Alternatively, we say $B(x)$ is a type **indexed** by $x: A$, in context $\Gamma$.

### Def. Section

Let $B$ be a family (of types) over $A$ in context $\Gamma$. A **section** of the family $B$ is an element of type $B(x)$ in context $\textcolor{gray}{(}\Gamma, x : A\textcolor{gray}{)}$.

## Inference Rules

These rules are known as **structural rules** of type theory. There are six sets of inference rules:

1. Rules about contexts, types and elements
2. Rules that postulate judgmental equality is an equivalence relation
3. Variable conversion rules
4. Substitution rules
5. Weakening rules
6. The generic element (or variable rule)

### Rules about contexts, types and elements.

$$
\begin{array}{ccc}

\begin{array}{ccc}
\Gamma, x: A \vdash B(x): \mathcal{T} \\ \hline
\Gamma \vdash A: \mathcal{T}
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (A \doteq B): \mathcal{T} \\ \hline
\Gamma \vdash A: \mathcal{T}
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (A \doteq B): \mathcal{T} \\ \hline
\Gamma \vdash B: \mathcal{T}
\end{array}

\\ \\

\begin{array}{ccc}
\Gamma \vdash a: A \\ \hline
\Gamma \vdash A: \mathcal{T}
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (A \doteq B): A \\ \hline
\Gamma \vdash a: A
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (A \doteq B): A \\ \hline
\Gamma \vdash b: A
\end{array}

\end{array}
$$

### Rules that postulate judgmental equality is an equivalence relation.

$$
\begin{array}{ccc}

\begin{array}{ccc}
\Gamma \vdash A: \mathcal{T} \\ \hline
\Gamma \vdash (A \doteq A): \mathcal{T}
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (A \doteq B): \mathcal{T} \\ \hline
\Gamma \vdash (B \doteq A): \mathcal{T}
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (A \doteq B): \mathcal{T} \qquad \Gamma \vdash (B \doteq C): \mathcal{T} \\ \hline
\Gamma \vdash (A \doteq C): \mathcal{T}
\end{array}

\\ \\

\begin{array}{ccc}
\Gamma \vdash a: A \\ \hline
\Gamma \vdash (a \doteq a): \mathcal{T}
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (a \doteq b): A \\ \hline
\Gamma \vdash (b \doteq a): A
\end{array}

&

\begin{array}{ccc}
\Gamma \vdash (a \doteq b): A \qquad \Gamma \vdash (b \doteq c): A \\ \hline
\Gamma \vdash (a \doteq c): A
\end{array}

\end{array}
$$

### Variable Conversion Rules

$$
\begin{array}{ccc}
\Gamma \vdash (A \doteq A'): \mathcal{T} \qquad \Gamma, x: A, \Delta \vdash B(x): \mathcal{T} \\ \hline
\Gamma, x: A', \Delta \vdash B(x): \mathcal{T}
\end{array}
$$

Let $\mathcal{J}$ denote any one of the 4 judgments given above, then

$$
\begin{array}{ccc}
\Gamma \vdash (A \doteq A'): \mathcal{T} \qquad \Gamma, x: A, \Delta \vdash \mathcal{J} \\ \hline
\Gamma, x: A, \Delta \vdash \mathcal{J}
\end{array}
$$

### Substitution Rules

$$
\begin{array}{ccc}
\Gamma \vdash a: A \qquad \Gamma, x: A, \Delta \vdash \mathcal{J} \\ \hline
\Gamma, \Delta[a/x] \vdash \mathcal{J}[a/x]
\end{array}
$$

and

$$
\begin{array}{ccc}
\Gamma \vdash (a \doteq a'): A \qquad \Gamma, x: A, \Delta \vdash B: \mathcal{T}
\\ \hline
\Gamma, \Delta[a/x] \vdash (B[a/x] \doteq B[a'/x]): \mathcal{T}
\end{array}
$$

$$
\begin{array}{ccc}
\Gamma \vdash (a \doteq a'): A \qquad \Gamma, x: A, \Delta \vdash b: B
\\ \hline
\Gamma, \Delta[a/x] \vdash (b[a/x] \doteq b[a'/x]): B[a/x]
\end{array}
$$

### Def. Fiber

Let $B$ be a family of types over $A$ in context $\Gamma$ and $a: A$. Then we say that $B[a/x]$ or simply $B(a)$ is the **fiber** of $B$ at $a$.

When $b$ is a section of $B$, we call the element $b[a/x]$ or simply $b(a)$ the **value** of $b$ at $a$.

### Weakening

$$
\begin{array}{c}
\Gamma \vdash A: \mathcal{T} \qquad \Gamma, \Delta \vdash \mathcal{J} \\ \hline
\Gamma, x: A, \Delta \vdash \mathcal{J}
\end{array}
$$

> **constant family** or the **trivial family** $B$.

### The Generic Elements (Variable Rule)

$$
\begin{array}{c}
\Gamma \vdash A: \mathcal{T} \\ \hline
\Gamma, x: A \vdash x: A
\end{array}
$$

## Derivations

A **derivation** is basically an inference rule (but as a meta-theorem) derived from the inference rules given above.

A rule is called **derivable** if we have a derivation for it.

* Changing Variables
* Interchanging Variables

> See the "Introduction to Homotopy Type Theory" for details and examples.
