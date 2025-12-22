import type { Element, Root } from 'hast'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeParse from 'rehype-parse'

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
        .use(remarkMath)
        .use(remarkRehype, {
            allowDangerousHtml: true,
            handlers: {
                math: (state, node) => handleMath(state, node, true),
                inlineMath: (state, node) => handleMath(state, node, false)
            }
        })
        .use(rehypeSlug)
}

const processor = createBaseProcessor().use(rehypeStringify, { allowDangerousHtml: true })

export async function processMarkdown(markdown: string): Promise<{ html: string; toc: TOCItem[] }> {
    const astProcessor = createBaseProcessor()
    const astResult = await astProcessor.run(astProcessor.parse(markdown))
    const root = astResult

    const htmlResult = await processor.process(markdown)
    const html = htmlResult.toString()
    const toc = extractTOCFromHTML(html)

    return { html, toc }
}
