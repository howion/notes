import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import slugify from 'slugify'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const NOTES_ROOT = join(__dirname, '../../notes')

export interface NoteMap {
    title: string
    slug: string
    path: string
}

export interface NoteRecord {
    title: string
    children: NoteMap[]
}

function map(title: string, path: string): NoteMap {
    return {
        title,
        slug: slugify(title, { lower: true }),
        path
    }
}

export const NOTE_RECORDS: NoteRecord[] = [
    {
        title: 'Abstract Algebra',
        children: [
            map('Group Theory', 'abstract-algebra/01-group-theory'),
            map('Ring Theory', 'abstract-algebra/02-ring-theory')
        ]
    },
    {
        title: 'Statistics',
        children: [map('Probability Theory', 'statistics/probability-theory')]
    },
    {
        title: 'Computer Science',
        children: [
            map('Logic and Computation', 'logic-and-computation'),
            map('Type Theory', 'type-theory'),
            map('Universal Algebra', 'universal-algebra')
        ]
    }
]

export const NOTE_MAPPINGS: NoteMap[] = NOTE_RECORDS.flatMap((record) => record.children)

function getMarkdownFiles(dir: string): string[] {
    const files = readdirSync(dir, { withFileTypes: true })

    return files
        .filter((file) => file.isFile() && file.name.endsWith('.md'))
        .map((file) => file.name)
        .sort()
}

/**
 * Read and combine all markdown files in a directory
 */
export function readCombinedMarkdown(dirPath: string): string {
    const mdFiles = getMarkdownFiles(dirPath)

    if (mdFiles.length === 0) {
        return ''
    }

    const contents = mdFiles.map((file) => {
        const fp = join(dirPath, file)
        return readFileSync(fp, 'utf-8')
    })

    // Combine with double newlines between files
    return contents.join('\n\n')
}

export function retrieveNoteContent(slug: string): (NoteMap & { content: string }) | null {
    const map = NOTE_MAPPINGS.find((m) => m.slug === slug)

    if (!map) {
        return null
    }

    const dirPath = join(NOTES_ROOT, map.path)

    try {
        if (!statSync(dirPath).isDirectory()) {
            return null
        }

        const content = readCombinedMarkdown(dirPath)

        if (!content) {
            return null
        }

        return {
            ...map,
            content
        }
    } catch {
        return null
    }
}
