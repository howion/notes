import { render, type KatexOptions } from 'katex'
import 'katex-copytex/dist/katex-copytex.js'

let VH = window.innerHeight

const MAX_IDLE_DELAY = 1000 // ms
const PRELOAD_DY = VH * 2 // initial_height * 2
const CONTAINER = document.body.querySelector('#app-view')!

window.addEventListener('resize', () => {
    VH = window.innerHeight
})

const katexOptions: KatexOptions = {
    displayMode: false,
    throwOnError: false,
    macros: {},
    fleqn: false
}

const hasRequestIdleCallback = typeof requestIdleCallback === 'function'

export function onIdle(callback: () => void, maxDelay = MAX_IDLE_DELAY) {
    if (hasRequestIdleCallback) {
        requestIdleCallback(callback, { timeout: maxDelay })
    } else {
        setTimeout(callback, 1)
    }
}

function transform(el: Element): void {
    if ('SPAN' !== el.tagName) {
        return
    }

    const isDisplay = el.classList.contains('display')
    const fc = el.firstChild

    if (!fc) return

    // let html = ''

    // if (show) {
    //     const prev = `<x-prev>${fc.textContent}</x-prev>`

    //     html =
    //         prev +
    //         renderToString(fc.textContent || '', {
    //             ...katexOptions,
    //             displayMode: isDisplay
    //         })
    // } else {
    //     const prev = el.querySelector('x-prev')
    //     if (!prev) return
    //     html = prev.innerHTML
    // }

    // el.innerHTML = html

    render(fc.textContent || '', el as HTMLElement, {
        ...katexOptions,
        displayMode: isDisplay
    })
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

export async function renderKatexes(): Promise<void> {
    return new Promise((resolve) => {
        const maths = document.querySelectorAll('.math')
        const yMap = new WeakMap<Element, number>()
        maths.forEach((el) => {
            const rect = el.getBoundingClientRect()
            yMap.set(el, rect.top)
        })
        let index = 0

        let lock = false

        function processChunk() {
            if (lock) return

            lock = true
            const scrollY = CONTAINER.scrollTop

            while (index < maths.length) {
                const el = maths[index]!
                const top = yMap.get(el)! - scrollY

                if (top < VH + PRELOAD_DY) {
                    transform(el)
                    index++
                } else {
                    break
                }
            }

            // let i = 0
            // while (i <= index) {
            //     const el = maths[i]!
            // const top = yMap.get(el)! - scrollY

            //     if (rect.top < -(VH + PRELOAD_DY)) {
            //         transform(el, false)
            //         i++
            //     } else {
            //         break
            //     }
            // }
            // index = Math.min(index, i)
            lock = false
        }

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

        CONTAINER.addEventListener('scroll', () => {
            // const currentScrollY = CONTAINER.scrollTop
            // const isDown = currentScrollY > lastScrollY

            // if (!isDown) {
            //     return
            // }

            // lastScrollY = currentScrollY

            onIdle(processChunk)
        })

        onIdle(processChunk)

        resolve()

        // function processChunk(/* deadline: IdleDeadline */) {
        //     // const end = Math.min(index + CHUNK_SIZE, total)
        //     // for (; index < end; index++) {
        //     //     const el = maths[index]!
        //     //     el.innerHTML = transform(el)
        //     // }
        //     // if (index < total) {
        //     //     onIdle(processChunk)
        //     // } else {
        //     //     resolve()
        //     // }
        //     resolve()
        // }

        // if (total > 0) {
        //     if (typeof requestIdleCallback === 'function') {
        //         // force after MAX_DELAY
        //         onIdle(processChunk)
        //     } else {
        //         setTimeout(processChunk, 1)
        //     }
        // } else {
        //     resolve()
        // }
    })
}
