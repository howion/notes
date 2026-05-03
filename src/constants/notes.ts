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

function note(title: string, path: string, options?: _MapOptions): NoteMap {
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
            note('Group Theory', 'abstract-algebra/01-group-theory'),
            note('Ring Theory', 'abstract-algebra/02-ring-theory'),
            // note('Module Theory', 'abstract-algebra/03-module-theory'),
            note('Universal Algebra', 'abstract-algebra/04-universal-algebra')
        ]
    },
    {
        title: 'Algebraic Geometry',
        children: [
            note('Ideals, Varieties, and Algorithms', 'ideals-varieties-and-algorithms'),
            note('Groups and Geometry', 'groups-and-geometry')
        ]
    },
    {
        title: 'Logic and Computation',
        children: [
            note('Logic and Computation', 'logic-and-computation'),
            note('Type Theory', 'type-theory')
        ]
    },
    {
        title: 'Analysis',
        children: [
            note('Probability Theory', 'probability-theory'),
            note('Partial Differential Equations', 'partial-differential-equations')
        ]
    },
    {
        title: 'Logic and Computation Cookbook',
        children: [
            note('LCC Volume I', 'logic-and-computation-cookbook/volume-1', {
                hidden: true
            })
        ]
    }
    // {
    //     title: 'Miscellaneous',
    //     children: [
    //         note('temp', '--temp', { toc: false, hidden: true }),
    //     ]
    // }
]
