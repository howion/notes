# The Framework

Let's set-up a mathematical model for contracts by utilizing work-capacity allocation problem.

From now on suppose

* $P$ denotes **contract price**,
* $H$ denotes **contracted units** (for example **contracted hours**),
* $r$ denotes **unit value** (for example **hourly value**),
* $T$ denotes **delivery duration**,
* $R$ denotes **number of revisions**.

## Base Contract

The simplest contract is

$$
\boxed{P := rH}
$$

which is **unit value** times **contracted units**.

## Speed-up

Suppose the contract $P$ was initially set to $T_0$ delivery time, however it is asked to be delivered faster in $T$ time.

We will define a **compression factor** called $c$ where

$$
c := \dfrac{T}{T'}
$$

so that

* $c = 1$ implies no acceleration, and
* $c = 2$ implies half the duration.

However, urgency should not scale linearly as a contract update from $10$ to $9$ days is not equivalent to $2$ days to $1$ day.
