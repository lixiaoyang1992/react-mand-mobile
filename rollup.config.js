import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import css from 'rollup-plugin-css-only'
import less from 'rollup-plugin-less'
import pkg from './package.json'

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'components/index.ts',
    external: ['react', 'react-dom', 'classnames'],
    output: [{ file: pkg.main, format: 'es' }],
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript(),
      less({ output: 'lib/style.less' }),
    ],
  },
]
