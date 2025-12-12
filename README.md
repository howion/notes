# Howion / Notes

![GitHub last commit](https://img.shields.io/github/last-commit/howion/notes)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/howion/notes)

This is where I will upload my various notes (or resources) related to different topics.

For the notes I will publish here, I aim to use a formal tone, organized with a logical structure. I believe this is usually not the best approach when it comes to learning, so you may want to use these materials for revision purposes rather than as a learning material.

## Notes: Compiled

Served via GitHub Pages on notes.howion.com, adjusted for printing or saving as PDF. Please note that none of the notes are complete yet and being actively developed.

> Other than Abstract Algebra notes (especially Group Theory) I'm not really proud with those notes yet. Beware that I have not yet abandoned them but they shall be subject to major changes later on.

* **Abstract Algebra**
    * **Group Theory** [**HTML**](https://notes.howion.com/abstract-algebra/group-theory.html)
    * **Ring Theory** [**HTML**](https://notes.howion.com/abstract-algebra/ring-theory.html)
* **Type Theory** [**HTML**](https://notes.howion.com/type-theory.html)
* **Universal Algebra** [**HTML**](https://notes.howion.com/universal-algebra.html)
* ~~**Probability Theory** [**HTML**](https://notes.howion.com/probability-theory.html)~~
* ~~**Logic and Computation** [**HTML**](https://notes.howion.com/logic-and-computation.html)~~

> In order to convert these notes to PDF, just try to print the page and save as PDF after the page is loaded. It will automatically, at least in Chrome-based browsers, convert to light theme and adjust the layout for printing.
>
> This was previously done automatically in my bash build pipeline via chromium driver but every build really bloats git tracking. Hence, I have disabled automatic PDF generation.

## Notes: Source

Some of those will be compiled via custom bash pipeline with the use of `pandoc`, `html-minifier-terser` and `chromium`. For now, there is no git hook or action to automate this. I plan to compile as I see fit noting none of these notes are complete yet.

* [:construction: **Abstract Algebra**](./notes/abstract-algebra) \ Groups, Rings and Modules
    1. [:construction: Group Theory](./notes/abstract-algebra/01-group-theory/)
    2. [:construction: Ring Theory](./notes/abstract-algebra/02-ring-theory/)
    2. [:construction: Module Theory](./notes/abstract-algebra/03-module-theory/)
* [:construction: **Logic and Computation**](./notes/logic-and-computation/) \ Fundamentals
* [:construction: **Probability Theory**](./notes/probability-theory) \ Fundamentals
* [:construction: **Universal Algebra**](./notes/universal-algebra) \ Fundamentals

> Ordered by activeness. Other notes in `/notes` which are not mentioned here are abandoned.

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

## External Resources

* [**Poems** (by various authors)](./resources/poems/00-index.md)
* [**Websites**](./resources/websites.md)
* [**Fonts**](./resources/fonts.md)

## Source Accessibility

For readability of source code, especially for the mathematical ones, you should consider switching to a custom markdown previewer with a light theme due to possibly transparent figures and KaTeX expressions. For now to edit notes, I personally use Visual Studio Code with:

* `Markdown Preview Github` by Matt Bierner to preview markdown files,
* `Markdown Emoji` by Matt Bierner to add Github emoji support to VSCode, make sure you also have an emoji font installed in your system, and
* `markdownlint` by David Anson to lint markdown files.

## License

I'm still figuring out how to license this content. Some of it is distilled or adapted from commercial texts. For now, consider this (especially the notes) a personal archive, not an open-source resource.
