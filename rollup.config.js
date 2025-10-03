import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'node_modules/dd-trace/packages/dd-trace/src/appsec/iast/analyzers/template-injection-analyzer.js',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [commonjs()]
};