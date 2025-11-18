# Howion / Notes

![GitHub last commit](https://img.shields.io/github/last-commit/howion/notes)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/howion/notes)

This is where I will upload my various notes (or resources) related to different topics that I ended up using **Markown** + **KaTeX** instead of pen-paper.

For the notes I will publish here, I aim to use a formal tone, organized with a logical structure. I believe this is usually not the best approach when it comes to learning, so you may want to use these materials for revision purposes rather than as a learning material.

I have no idea how long and how often I will publish here. Most of my notes are on paper and are mostly sketches. I aspire to write my new (and maybe also old) notes in this format as I believe KaTeX and Markdown is much easier to work with and often enough.

## Notes: Compiled

Served via GitHub Pages on notes.howion.com, adjusted for printing or saving as PDF. You may also download the generated PDFs directly from `/docs` with `PDF` links provided below. Please note that none of the notes are complete yet and being actively developed.

* **Abstract Algebra**
    * **Group Theory** [**HTML**](https://notes.howion.com/abstract-algebra/group-theory.html)
    * **Ring Theory** [**HTML**](https://notes.howion.com/abstract-algebra/ring-theory.html)
* **Logic**
    * **Propositional Logic** [**HTML**](https://notes.howion.com/logic/propositional-logic.html)
* **Universal Algebra** [**HTML**](https://notes.howion.com/universal-algebra.html)

## Notes: Source

Some of those will be compiled via custom bash pipeline with the use of `pandoc`, `html-minifier-terser` and `chromium`. For now, there is no git hook or action to automate this. I plan to compile as I see fit noting none of these notes are complete yet.

* [:construction: **Algebra**](./notes/abstract-algebra/00-index.md) \ Groups, Rings and Modules
    1. :construction: Group Theory
    2. :construction: Ring Theory
* [:construction: **Universal Algebra**](./notes/universal-algebra/00-index.md) \ Fundamentals
    1. [:blush: Ordered Sets](./notes/universal-algebra/01-ordered-sets.md)
    1. [:construction: Lattices](./notes/universal-algebra/02-lattices.md)
* [:construction: **Probability Theory**](./notes/probability-theory/00-index.md) \ Fundamentals
    1. [:blush: Probability and Conditional Probability](./notes/probability-theory/01-probability-and-conditional-probability.md)
    2. [:construction: (Discrete) Random Variables and Their Distributions](./notes/probability-theory/02-discrete-random-variables-and-their-distributions.md)

<!-- * [:boom: **Experiments**](./experiments/00-index.md) that most probably won't lead anywhere. -->

## Lectures, Presentations

* [**Gödel ve Ontolojik Kanıtı**](./lectures/godel-ve-ontolojik-kaniti/00-index.md)
* [**Sembolik Form Olarak Perspektif**](./lectures/sembolik-form-olarak-perspektif/00-index.md)

## Poems

My handwritten poems, in no particular order.

* [**To be, or not to be?**](./poems/00-to-be-or-not-to-be.md)
* [**Solace in Dissonance**](./poems/01-solace-in-dissonance.md)
* [**Salvé, salvé, salvé, parve?**](./poems/02-salve-salve-salve-parve.md)
* [**Unholy Gospel**](./poems/03-unholy-gospel.md)
* [**Weep**](./poems/04-weep.md)
* [**Bitscript**](./poems/05-bitscript.md)

## Bookshelf

You can check out my [**bookshelf**](/bookshelf/00-index.md) for books or articles on various subjects which are mostly related to Mathematics, Computer Science or Philosophy.

## Resources

* [**Poems** (by various authors)](./resources/poems/00-index.md)
* [**Websites**](./resources/websites.md)
* [**Fonts**](./resources/fonts.md)

## Source Accessibility

For readability of source code, especially for the mathematical ones, you should consider switching to a custom markdown previewer with a light theme due to possibly transparent figures and KaTeX expressions. For now to edit notes, I personally use Visual Studio Code with:

* `Markdown Preview Github` by Matt Bierner to preview markdown files,
* `Markdown Emoji` by Matt Bierner to add Github emoji support to VSCode, make sure you also have an emoji font installed in your system, and
* `markdownlint` by David Anson to lint markdown files.

You must be able to easily see some cool **KaTeX** text below to read the source of these notes:

$$\KaTeX$$

## License

I’m still figuring out how to license this content. Some of it is distilled or adapted from commercial texts. For now, consider this (especially the notes) a personal archive, not an open-source resource.
