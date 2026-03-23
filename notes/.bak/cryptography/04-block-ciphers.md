# Block Ciphers

## Shannon's Confusion and Diffusion

Feistel proposed the use of a cipher that alternates substitutions and permutations. Indeed, Feistels' idea is a practical application of a proposal by Claude Shannon to develop a product cipher that alternates **confusion** and **diffusion** functions.

In diffusion, the statistical structure of the plaintext is dissipated into long-range statistics of the ciphertext. So that, for example, the letter frequencies in
the ciphertext will be more nearly equal than in the plaintext.

On the other hand, confusion seeks to make the relationship between the statistics of the ciphertext and the value of the encryption key as complex as possible. This is usually achieved by
the use of a complex substitution algorithm. A simple linear substitution function would add little confusion.

## Feistel Cipher

<!-- TODO -->
