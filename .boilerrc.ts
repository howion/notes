export const isDev = process.env.NODE_ENV === 'development'

export const APP = {
    name: 'notes.howion.com',
    description: 'Started as some of my public drafts and lectures related to various topics and evolved to contain much more. Take a peek...',
    site: 'https://notes.howion.com/',
    repository: 'http://github.com/howion/notes',

    // Set quick development mode to true to hinder or disable some stuff. This
    // includes but not limited to: post-effects, fancy-cursor and possibly
    // your loaders that you will possibly conditionally hide from now on.
    quickDevelopmentMode: isDev && false,

    // enable critters for production builds
    enableCritters: false,
    enablePreact: false
} as const

export const SEO_DEFAULTS = {
    title: APP.name,
    description: APP.description,
    keywords: ['howion', 'notes', 'notes.howion.com']
} as const
