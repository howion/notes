import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
// official addons
import compress, { Default } from '@playform/compress'
import { defineConfig } from 'astro/config'
import critters from 'astro-critters'
// other addons
import robotsTxt from 'astro-robots-txt'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'
// dynamic conf
import { APP, isDev } from './.boilerrc.ts'

const willAnalyze = process.env.ANALYZE === 'true'

export default defineConfig({
    output: 'static', // static | server
    server: {
        port: 3000
    },
    publicDir: './src/public',
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
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        }
    },
    vite: {
        css: {
            transformer: 'lightningcss',
            lightningcss: {
                targets: browserslistToTargets(browserslist('defaults'))
            }
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
            cssMinify: 'lightningcss',
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
