import slugify from 'slugify'

export interface NoteMap {
    title: string
    slug: string
    path: string

    /**
     * Whether to show the table of contents for this note.
     *
     * @default true
     */
    showToC?: boolean

    /**
     * Whether this note should be hidden in the index.
     *
     * @default false
     */
    hidden?: boolean
}

export interface Note extends NoteMap {
    content: string
    contentUpdatedAt: Date
}

export interface NoteRecord {
    title: string
    children: NoteMap[]
}

interface _MapOptions {
    /**
     * @default true
     */
    toc?: boolean
    hidden?: boolean
}

function map(title: string, path: string, options?: _MapOptions): NoteMap {
    return {
        title,
        slug: slugify(title, { lower: true }),
        path,
        showToC: options?.toc ?? true,
        hidden: options?.hidden ?? false
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
    // {
    //     title: 'Miscellaneous',
    //     children: [
    //         map('HW3', '--hw3', { toc: false, hidden: true }),
    //     ]
    // }
]
