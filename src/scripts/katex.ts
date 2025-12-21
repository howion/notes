import { renderToString, type KatexOptions } from 'katex'
import 'katex-copytex/dist/katex-copytex.js'

const CHUNK_SIZE = 50
const MAX_DELAY = 1000 // ms

const katexOptions: KatexOptions = {
    displayMode: false,
    throwOnError: false,
    macros: {},
    fleqn: false
}

function transform(el: Element) {
    if ('SPAN' !== el.tagName) {
        return ''
    }

    const isDisplay = el.classList.contains('display')
    const fc = el.firstChild

    if (!fc) return ''

    const options = Object.assign({}, katexOptions)
    options.displayMode = isDisplay

    const html = renderToString(fc.textContent || '', options)

    return html
}

function init() {
    const maths = document.querySelectorAll('.math')
    const total = maths.length
    let index = 0

    function processChunk(/* deadline: IdleDeadline */) {
        const end = Math.min(index + CHUNK_SIZE, total)

        for (; index < end; index++) {
            const el = maths[index]!
            el.innerHTML = transform(el)
        }

        if (index < total) {
            if (typeof requestIdleCallback === 'function') {
                requestIdleCallback(processChunk, { timeout: MAX_DELAY })
            } else {
                setTimeout(processChunk, 0)
            }
        }
    }

    if (total > 0) {
        if (typeof requestIdleCallback === 'function') {
            // force after MAX_DELAY
            requestIdleCallback(processChunk, { timeout: MAX_DELAY })
        } else {
            setTimeout(processChunk, 0)
        }
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    // DOM is already ready
    init()
}
