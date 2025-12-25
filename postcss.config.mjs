import postcssImport from 'postcss-import'
import postcssMixins from 'postcss-mixins'
import postcssFor from 'postcss-for'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssNested from 'postcss-nested'
import postcssWillChange from 'postcss-will-change'
import postcssHexrgba from 'postcss-hexrgba'
import postcssColorHexAlpha from 'postcss-color-hex-alpha'
import postcssCalc from 'postcss-calc'
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const isDev = process.env.NODE_ENV === 'development'

const plugins = [
    postcssImport(),
    postcssMixins(),
    postcssFor(),
    postcssSimpleVars(),
    postcssNested(),
    postcssWillChange(),
    postcssHexrgba(),
    postcssColorHexAlpha(),
    postcssCalc({}),
    postcssCombineDuplicatedSelectors(),
    autoprefixer()
]

if (!isDev) {
    plugins.push(cssnano())
}

export default { plugins }
