import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
// official addons
import vercel from '@astrojs/vercel'
import compress, { Default } from '@playform/compress'
import { defineConfig } from 'astro/config'
import betterImageService from 'astro-better-image-service'
import critters from 'astro-critters'
// other addons
import robotsTxt from 'astro-robots-txt'
// dynamic conf
import { APP, isDev } from './.boilerrc.ts'

const willAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
    output: 'static', // static | server
    server: {
        port: 3000
    },
    publicDir: './src/public',
    adapter: vercel({
        webAnalytics: {
            enabled: false // handle via other means
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
        css: {
            transformer: 'postcss',
            postcss: './postcss.config.cjs'
        },
        esbuild: {
            minifyIdentifiers: true,
            treeShaking: true,
            drop: isDev ? [] : ['console', 'debugger'],
            legalComments: 'none',
            keepNames: false
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
                    moduleSideEffects: 'no-external'
                }
            }
        }
    },
    integrations: [
        APP.enablePreact ? preact({ compat: false, devtools: false }) : undefined,
        // betterImageService(),
        APP.enableCritters ? critters() : undefined,
        compress({
            ...Default,
            HTML: {
                ...Default.HTML,
                'html-minifier-terser': {
                    removeAttributeQuotes: false,
                    removeTagWhitespace: false,
                    removeComments: true,
                    removeOptionalTags: false,
                    removeRedundantAttributes: true,
                    collapseWhitespace: true // watch out for this, it can break some components
                }
            },
            CSS: true,
            Image: false,
            SVG: true
        }),
        sitemap(),
        robotsTxt({
            sitemap: true,
            policy: [{ allow: '/', userAgent: '*' }]
        })
    ]
})
