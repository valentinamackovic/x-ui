import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  external: ['react', 'react-dom'],
  input: 'src/index.ts', // Entry point for your components
  output: [
    {
      file: 'dist/bundle.cjs.js', // CommonJS bundle
      format: 'cjs'
    },
    {
      file: 'dist/bundle.esm.js', // ES module bundle
      format: 'esm'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'] // Include TypeScript extensions
    }),
    typescript(), // Add TypeScript plugin
    babel({
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Handle TypeScript files
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
    }),
    commonjs(),
    replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true
    }),
    postcss({
        extensions: ['.css'],  // Add other extensions like .scss if you use Sass
        inject: true,          // Inject styles into the head section
        minimize: true         // Minimize CSS (optional)
    }),
    terser() // Minify the output (optional)
  ]
};
