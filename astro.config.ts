import { defineConfig } from 'astro/config'

// official addons
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap'
import preact from '@astrojs/preact'

// other addons
import robotsTxt from 'astro-robots-txt'
import Sonda from 'sonda/astro'
import compress, { Default } from '@playform/compress'
import betterImageService from 'astro-better-image-service'
import critters from 'astro-critters'

// markdown plugins
import remarkMath from 'remark-math'

// dynamic conf
import { APP } from './.boilerrc.ts'

const willAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
    output: 'static', // static | server
    server: {
        port: 3000
    },
    adapter: vercel({
        webAnalytics: {
            enabled: true
        },
        imageService: false
    }),
    security: {
        // server only
        checkOrigin: false
    },
    site: APP.site,
    trailingSlash: 'never',
    devToolbar: {
        enabled: false
    },
    prefetch: {
        prefetchAll: false,
        defaultStrategy: 'hover'
    },
    vite: {
        esbuild: {
            minifyIdentifiers: true,
            treeShaking: true,
            drop: ['console', 'debugger'],
            legalComments: 'none',
            keepNames: false,
        },
        build: {
            modulePreload: {
                polyfill: false
            },
            sourcemap: willAnalyze,
            minify: 'esbuild',
            rollupOptions: {
                treeshake: {
                    unknownGlobalSideEffects: false,
                    propertyReadSideEffects: false,
                    tryCatchDeoptimization: false,
                    moduleSideEffects: 'no-external'
                }
            },
        }
    },
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [],
        shikiConfig: {
            theme: 'github-dark',
            wrap: true
        }
    },
    integrations: [
        preact({ compat: false, devtools: false }),
        betterImageService(),
        APP.enableCritters ? critters() : undefined,
        compress({
            ...Default,
            HTML: {
                ...Default.HTML,
                'html-minifier-terser': {
                    removeAttributeQuotes: false,
                    removeTagWhitespace: false,
                    removeComments: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    collapseWhitespace: true // watch out for this, it can break some components
                }
            },
            CSS: true,
            Image: true,
            SVG: true
        }),
        sitemap(),
        robotsTxt({
            sitemap: true,
            policy: [{ allow: '/', userAgent: '*' }]
        }),
        willAnalyze ? Sonda({ server: true, gzip: true }) : undefined
    ],
})
