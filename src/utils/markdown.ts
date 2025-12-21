import type { Element, Root } from 'hast'
import { unified } from 'unified'
import { visit } from 'unist-util-visit'

import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'

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

function extractTextFromNode(node: Element): string {
    let text = ''
    for (const child of node.children) {
        if (child.type === 'text') {
            text += child.value
        } else if (child.type === 'element') {
            text += extractTextFromNode(child)
        }
    }
    return text
}

function extractTOC(root: Root): TOCItem[] {
    const toc: TOCItem[] = []

    visit(root, 'element', (node) => {
        if (node.tagName && /^h[1-2]$/.test(node.tagName)) {
            const level = Number.parseInt(node.tagName.charAt(1), 10)
            const id = (node.properties?.id as string) || ''
            const text = extractTextFromNode(node)

            if (id && text) {
                toc.push({ id, text, level })
            }
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

    const toc = extractTOC(root)

    const htmlResult = await processor.process(markdown)
    const html = htmlResult.toString()

    return { html, toc }
}
