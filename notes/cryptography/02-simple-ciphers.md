# Simple Ciphers

[**Go Back**](../00-index.md)

## Substitution Ciphers

1. A **simple substitution cipher** or (**monoalphabetic cipher**) is one which each character of plaintext is replaced with a corresponding character of ciphertext.
2. A **homophonic substitution cipher**...
3. A **polygram substitution cipher**...
4. A **polyalphabetic substitution cipher**...

## Substitution Techniques

### (General) Caesar Cipher

$$C_i = \mathbf{E}_k(p_i) = (p_i + k) \mod 26$$

### Monoalphabetic Cipher

Given a permutation function $\sigma$ of order $|\sigma|=n$

$$C_i = \mathbf{E}_\sigma(p_i) = \sigma(p_i)$$

has a **keyspace** of size $n!$ (including the identity).

### Playfair Cipher

The best-known multiple-letter encryption cipher is the Playfair Cipher.

See [**Wikipedia:** Playfair Cipher](https://en.wikipedia.org/wiki/Playfair_cipher).

### Hill Cipher

Is an another multiple-letter cipher.

See [**Wikipedia:** Hill Cipher](https://en.wikipedia.org/wiki/Hill_cipher)

### Vigenére Cipher

### Vernam Cipher

### One-Time Pad
