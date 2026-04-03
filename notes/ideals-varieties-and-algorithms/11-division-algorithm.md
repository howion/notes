# Division Algorithm

## _Thm._ Division Algorithm in $\mathbb{F}[x_1,...,x_n]$

Let $F = (f_1, ..., f_s)$ be an ordered $s$-tuple of polynomials in $\mathbb{F}[x_1, ..., x_n]$, then every $f \in \mathbb{F}[x_1,...,x_n]$ can be written as

$$
f = a_1 f_1 + \cdots + a_s f_s + r
$$

where $a_i, r \in \mathbb{F}[x_1, ..., x_n]$, and either the **remainder**

* $r = 0$, or
* $r$ is a linear combination of monomials with coefficients in $\mathbb{F}$, none of which is divisable by any of $\text{LT}(f_1), ..., \text{LT}(f_s)$.

Moreover, if $a_i f_i \neq 0$, then $md(f) \geq md(a_i f_i)$.

The following algorithm realizes this

```python
<- (f_1,...,f_s), f

(a_1,...,a_s) <- (0,...,0)
p <- f

WHILE p != 0
    i <- 1
    divisionOccured <- false

    WHILE i <= s AND divisionOccured = false
        IF LT(f_i) | LT(p)
            a_i <- a_i + LT(p) / LT(f_i)
            p   <- p  - (LT(p) / LT(f_i))f_i
            divisionOccured <- true
        ELSE
            i <- i + 1
        ENDIF
    ENDWHILE

    IF divisionOccured = false
        r <- r + LT(p)
        p <- p - LT(p)
    ENDIF
ENDWHILE

-> (a_1,...,a_s), r
```
