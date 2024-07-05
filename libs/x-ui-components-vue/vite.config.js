import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import'; 
import resolvePlugin from '@rollup/plugin-node-resolve';  // Renamed to avoid confusion with `resolve` method
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { resolve } from "path";

export default defineConfig({
  plugins: [
    peerDepsExternal(),
    resolvePlugin(),
    commonjs(),
    vue(),
    postcss({
      plugins: [
        postcssImport()
      ],
      extract: true,
      minimize: true,
      sourceMap: true,
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "BrianComponentLibrary",
      // Ensure fileName is a function that provides format
      fileName: (format) => `x-ui-components-vue.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        },
      },
    }
  }
});
