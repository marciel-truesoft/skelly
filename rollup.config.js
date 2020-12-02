import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';
import { compilerOptions } from './tsconfig.json';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
  input: pkg.main,
  output: {
    dir: compilerOptions.outDir,
    sourcemap: compilerOptions.sourceMap,
    format: 'esm'
  },
  plugins: [
    replace({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
    nodeResolve(),
    commonjs(),
    typescript()
  ],
};
