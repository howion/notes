import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { NOTE_RECORDS } from '../constants/notes'
import { APP } from '~/.boilerrc'

export function GET(context: APIContext) {
    return rss({
        title: APP.name,
        description: APP.description,
        site: context.site!,
        items: NOTE_RECORDS.flatMap(record => record.children.map(c => ({ ...c, category: record.title }))).map(
            note => ({
                title: note.title,
                pubDate: note.pubDate,
                description: note.description,
                link: `/notes/${note.slug}`,
                author: 'me@howion.com (howion)',
                customData: `<category>${note.category}</category>`
            })
        ),
        customData: `<atom:link href="https://notes.howion.com/rss.xml" rel="self" type="application/rss+xml"/><language>en-us</language><lastBuildDate>${new Date().toUTCString()}</lastBuildDate>`,
        trailingSlash: false,
        xmlns: {
            atom: 'http://www.w3.org/2005/Atom'
        }
    })
}
