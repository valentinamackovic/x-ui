import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase());

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
    { file: pkg.main, format: 'umd', name, sourcemap: true }
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
      emitCss: true,
      compilerOptions: {
        dev: !process.env.ROLLUP_WATCH,
        hydratable: true
      }
    }),
    resolve({
      browser: true,
      dedupe: ['svelte']
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss({
      extract: true
    }),
    terser()
  ],
  external: id => /^(svelte|@sveltejs\/kit)/.test(id) || (pkg.dependencies && id in pkg.dependencies)
};
