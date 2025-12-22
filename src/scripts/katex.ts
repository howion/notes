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

function onIdle(callback: () => void, maxDelay = MAX_DELAY) {
    if (typeof requestIdleCallback === 'function') {
        requestIdleCallback(callback, { timeout: maxDelay })
    } else {
        setTimeout(callback, 0)
    }
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

function selectText(element: Element) {
    const body = document.body as HTMLBodyElement & { createTextRange?: () => any }

    if (body.createTextRange) {
        const range = body.createTextRange()
        range.moveToElementText(element)
        range.select()
    } else if (window.getSelection) {
        const selection = window.getSelection()
        if (!selection) return

        const range = document.createRange()
        range.selectNodeContents(element)
        selection.removeAllRanges()
        selection.addRange(range)
    } else {
        console.warn('Could not select text in node: Unsupported browser.')
    }
}

function init() {
    const maths = document.querySelectorAll('.math')
    const total = maths.length
    let index = 0

    console.log('hi')

    let last: Element | null = null

    document.addEventListener('click', (e) => {
        const target = e.target as Element | null

        if (!target) return

        if (last) {
            last.classList.remove('is-selected')
        }

        const closest = target.closest('.math')
        if (!closest) return

        e.preventDefault()

        closest.classList.add('is-selected')
        selectText(closest)

        document.execCommand('copy')

        last = closest
    })

    function processChunk(/* deadline: IdleDeadline */) {
        const end = Math.min(index + CHUNK_SIZE, total)

        for (; index < end; index++) {
            const el = maths[index]!
            el.innerHTML = transform(el)
        }

        if (index < total) {
            onIdle(processChunk)
        }

        onIdle(() => {})
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
