import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import babel from '@rollup/plugin-babel'; // Transpile/polyfill with reasonable browser support
import scss from 'rollup-plugin-scss';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const isProduction = process.env.IS_PRODUCTION;

const c = {
  input: 'src/main.js', // Path relative to package.json
  external: ['vue'],
  output: {
    name: 'VuePatternfly4',
    exports: 'named',
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': `'${
        isProduction ? 'production' : 'development'
      }'`,
    }),
    resolve(),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    babel({ babelHelpers: 'bundled' }), // Transpile to ES5
    scss(),
    isProduction && terser(),
  ],
};

const configs = [];

for (const format of ['umd', 'esm', 'iife']) {
  const formatExt = format === 'iife' ? '' : `.${format}`;
  const minExt = isProduction ? '.min' : '';

  const external = [...c.external];
  // if (format === 'es') {
  //   external.push(/@babel\/runtime/);
  // }

  configs.push({
    ...c,
    output: {
      ...c.output,
      format,
      file: `dist/core${formatExt}${minExt}.js`,
    },
    external,
  });
}

export default configs;
