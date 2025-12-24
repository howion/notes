import { renderKatexes } from './katex'

document.getElementById('app-action-print')?.addEventListener('click', () => {
    window.print()
})

document.getElementById('app-action-theme')?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('is-dark')
    setTheme(isDark ? 'light' : 'dark')
})

document.getElementById('app-action-font')?.addEventListener('click', () => {
    const isMono = document.body.classList.contains('is-mono')
    setFont(!isMono)
})

const theme =
    (localStorage.getItem('theme') as 'light' | 'dark' | 'auto' | null) ||
    (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

const font = localStorage.getItem('font') === 'mono'

function setTheme(theme: 'light' | 'dark' | 'auto', save = true) {
    if (theme === 'auto' || !theme) {
        localStorage.removeItem('theme')
    } else if (theme === 'dark') {
        document.documentElement.classList.add('is-dark')
    } else {
        document.documentElement.classList.remove('is-dark')
    }

    if (save) {
        localStorage.setItem('theme', theme)
    }
}

function setFont(isMono: boolean, save = true) {
    if (isMono) {
        document.body.classList.add('is-mono')
    } else {
        document.body.classList.remove('is-mono')
    }

    if (save) {
        localStorage.setItem('font', isMono ? 'mono' : 'sans')
    }
}

setTheme(theme, false)
setFont(font, false)

const queue = [renderKatexes, async () => document.body.classList.add('is-loaded')]

async function init() {
    for (const task of queue) {
        await task()
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
