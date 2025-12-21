import type { Element, Text } from 'hast'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'

const processor = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype, {
        allowDangerousHtml: true,
        handlers: {
            // Convert math (block) nodes to span with display class
            math(state, node: Math) {
                const result: Element = {
                    type: 'element',
                    tagName: 'span',
                    properties: { className: ['math', 'display'] },
                    children: [{ type: 'text', value: node.value } as Text]
                }
                state.patch(node, result)
                return result
            },
            inlineMath(state, node: InlineMath) {
                const result: Element = {
                    type: 'element',
                    tagName: 'span',
                    properties: { className: ['math'] },
                    children: [{ type: 'text', value: node.value } as Text]
                }
                state.patch(node, result)
                return result
            }
        }
    })
    .use(rehypeStringify, { allowDangerousHtml: true })

export async function processMarkdown(markdown: string): Promise<string> {
    const result = await processor.process(markdown)
    return result.toString()
}
