import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from 'rollup-plugin-typescript2';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    uglify(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      minimize: true,
    }),
    url(),
    svgr(),
    image(),
  ],
  external: ['react', 'react-dom', 'react-router-dom'],
};

export default config;
