import type { Element, ElementContent, Root, RootContent } from 'hast'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeParse from 'rehype-parse'

function rehypeSectionize() {
    return (tree: Root) => {
        const newChildren: RootContent[] = []
        let currentH1Section: Element | null = null
        let currentH2Section: Element | null = null
        let currentH3Section: Element | null = null

        function closeH3() {
            if (currentH3Section && currentH2Section) {
                currentH2Section.children.push(currentH3Section)
                currentH3Section = null
            }
        }

        function closeH2() {
            closeH3()
            if (currentH2Section && currentH1Section) {
                currentH1Section.children.push(currentH2Section)
                currentH2Section = null
            }
        }

        function closeH1() {
            closeH2()
            if (currentH1Section) {
                newChildren.push(currentH1Section)
                currentH1Section = null
            }
        }

        function createSection(level: number, heading: ElementContent): Element {
            return {
                type: 'element',
                tagName: level === 2 ? 'section' : 'div',
                properties: { className: [`section-h${level}`] },
                children: [heading]
            }
        }

        for (const node of tree.children) {
            const isHeading = node.type === 'element' && /^h[1-3]$/.test(node.tagName)

            if (isHeading && node.type === 'element') {
                const level = parseInt(node.tagName.charAt(1), 10)
                const heading = node as Element

                if (level === 1) {
                    closeH1()
                    currentH1Section = createSection(1, heading)
                } else if (level === 2) {
                    closeH2()
                    currentH2Section = createSection(2, heading)
                    if (!currentH1Section) {
                        // h2 without h1 so create orphan section
                        currentH1Section = createSection(1, currentH2Section)
                        currentH2Section = null
                    }
                } else if (level === 3) {
                    closeH3()
                    currentH3Section = createSection(3, heading)
                    if (!currentH2Section) {
                        // h3 without h2
                        if (currentH1Section) {
                            currentH1Section.children.push(currentH3Section)
                        } else {
                            newChildren.push(currentH3Section)
                        }
                        currentH3Section = null
                    }
                }
            } else {
                if (node.type === 'doctype') continue

                const content = node as ElementContent
                if (currentH3Section) {
                    currentH3Section.children.push(content)
                } else if (currentH2Section) {
                    currentH2Section.children.push(content)
                } else if (currentH1Section) {
                    currentH1Section.children.push(content)
                } else {
                    newChildren.push(node)
                }
            }
        }

        closeH1()

        tree.children = newChildren
    }
}

export interface TOCItem {
    id: string
    text: string
    level: number
}

function handleMath(state: any, node: any, isDisplay: boolean) {
    const result: Element = {
        type: 'element',
        tagName: 'span',
        properties: {
            className: isDisplay ? ['math', 'display'] : ['math']
        },
        children: [{ type: 'text', value: node.value }]
    }

    state.patch(node, result)
    return result
}

// function extractTextFromNode(node: Element): string {
//     let text = ''
//     console.log(node.children[0])
//     for (const child of node.children) {
//         if (child.type === 'text') {
//             if (child)
//             text += child.value
//         } else if (child.type === 'element') {
//             text += extractTextFromNode(child)
//         }
//     }
//     return text
// }

function extractTOCFromHTML(html: string): TOCItem[] {
    const toc: TOCItem[] = []

    const root = unified().use(rehypeParse, { fragment: true }).parse(html) as Root

    const htmler = unified().use(rehypeStringify)

    // get inner htmls not inner texts
    visit(root, 'element', (node) => {
        if (node.tagName === 'h1' || node.tagName === 'h2') {
            const level = parseInt(node.tagName.charAt(1), 10)
            const id = String(node.properties?.id)

            let text = ''

            for (const child of node.children) {
                if (child.type === 'text') {
                    text += child.value
                } else if (child.type === 'element') {
                    const childHtml = htmler.stringify(child as any)
                    text += childHtml
                }
            }

            toc.push({ id, text, level })
        }
    })

    return toc
}

function createBaseProcessor() {
    return unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkMath)
        .use(remarkRehype, {
            allowDangerousHtml: true,
            handlers: {
                math: (state, node) => handleMath(state, node, true),
                inlineMath: (state, node) => handleMath(state, node, false)
            }
        })
        .use(rehypeSlug)
        .use(rehypeSectionize)
}

const processor = createBaseProcessor().use(rehypeStringify, { allowDangerousHtml: true })

export async function processMarkdown(markdown: string): Promise<{ html: string; toc: TOCItem[] }> {
    // const astProcessor = createBaseProcessor()
    // const astResult = await astProcessor.run(astProcessor.parse(markdown))
    // const root = astResult

    const htmlResult = await processor.process(markdown)
    const html = htmlResult.toString()
    const toc = extractTOCFromHTML(html)

    return { html, toc }
}
