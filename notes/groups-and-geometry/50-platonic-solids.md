# Platonic Solids

## _Def._ Polygon, $n$-gon

> There is no established definition for a polygon. Currently think of it as an geometric object with a closed surface connected by closed polygonal chain.

An **$n$-gon** is a polygon with $n$ edges.

## _Def_. Regular $n$-gon

For $n \geq 3$, a **regular $n$-gon** denoted by $\bold{P}_n$ is a (closed) polygon with $n$ sides of equal length joined together at equal angles.

## _Thm._ Regular $n$-gon Symmetries

A regular $n$-gon has $2n$ different symmetries which are $n$ rotational symmetries and $n$ reflection symmetries.

## _Def._ Dihedral Group

The symmetries of the regular $n$-gon $\bold{P}_n$ forms a group under composition called the **dihedral group** denoted by $\bold{D}_{2n}$.

$$
\text{Sym}(\bold{P}_n) \cong \bold{D}_{2n}
$$

> Some authors prefer the notation $\bold{D}_n$ or $\bold{Dih}_n$, however notice that in our case $2n$ denotes the number of symmetries and its order.

The group representation of $\bold{D}_{2n}$ is as follows:

$$
\bold{D}_{2n} = \Braket{r,s \mid r^n = s^2 = 1, srs = r^{-1}}
$$

where $r$ denotes a rotation and $s$ denotes a reflection.

## _Def._ Convex

A set is said to be **convex** if any two points $A$ and $B$ are contained in the set, the entire line segment $[AB]$ also lies within the set.

## _Def_. Polyhedron

A **polyhedron** is an union of finitely many convex polygons (called **faces**), arranged in space so that the intersection of any two polygons is a shared vertex or edge or the empty set.

> This is the definition by O'Rourke (1993). Definitions of polyhedron (although differs) are equivalent and agreed upon.

## _Def._ Platonic Solid

A **platonic solid** is a convex regular polyhedron in _three-dimensional space_. Therefore, its faces are congruent regular $n$-gons and at each vertex the same number of polygons (called **faces**) meet.

## Thm. Euler's Polyhedron Formula

Any three-dimensional convex polyhedrons surface has an Euler characteristic of $\chi =  2$ so that

$$
2 = \chi = V - E + F
$$

> For the proof, please check out various online resources that are both geometric and algebraic.

## _Thm._ Platonic Solids

There are only $5$ platonic solids called **(regular) tetrahedron**, **cube**, **(regular) octahedron**, **(regular) dodacahedron** and **(regular) icosahedron**.

<center>

| Polyhedron   | Vertices | Edges | Faces |
|--------------|----------|-------|-------|
| Tetrahedron  | 4        | 6     | 4     |
| Cube         | 8        | 12    | 6     |
| Octahedron   | 6        | 12    | 8     |
| Dodecahedron | 20       | 30    | 12    |
| Icosahedron  | 12       | 30    | 20    |

</center>

<details>
<summary><b>Sketch of Proof</b></summary>
<br/>

Use the Euler's Polyhedron Formula and the definition of platonic solids to deduce all the integer solutions.
</details>
