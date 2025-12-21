import type { TOCItem } from './markdown'

export function renderTOC(items: TOCItem[]): string {
    if (items.length === 0) return ''

    let html = '<ul>'
    let prevLevel = items[0]!.level

    for (let i = 0; i < items.length; i++) {
        const item = items[i]!
        const { id, level } = items[i]!
        const text = item.text.split('.').pop() || item.text

        if (level > prevLevel) {
            html += '<ul>'
        } else if (level < prevLevel) {
            const levelsToClose = prevLevel - level

            for (let j = 0; j < levelsToClose; j++) {
                html += '</li></ul>'
            }
        } else if (i > 0) {
            html += '</li>'
        }

        html += `<li><a href="#${id}">${text}</a>`
        prevLevel = level
    }

    html += '</li>'

    while (prevLevel > items[0]!.level) {
        html += '</ul></li>'
        prevLevel--
    }

    html += '</ul>'

    return html
}
