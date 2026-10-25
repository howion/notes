import { join } from 'node:path'

// Resolve from cwd so path is correct at build time (bundling changes import.meta.url)
export const NOTES_ROOT = join(process.cwd(), 'notes')
