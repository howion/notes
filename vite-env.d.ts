/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />
/// <reference types="vite-plugin-svgr/client" />

declare namespace astroHTML.JSX {
    export interface IntrinsicAttributes {
        class?: string
        id?: string
    }
}
