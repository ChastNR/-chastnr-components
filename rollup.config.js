import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import scss from "rollup-plugin-scss";
import bundleScss from "rollup-plugin-bundle-scss";
import image from "@rollup/plugin-image";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import { uglify } from "rollup-plugin-uglify";

const packageJson = require("./package.json");

const config = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    uglify(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    bundleScss({
      exclusive: false,
    }),
    scss({ output: "dist/index.css", outputStyle: "compressed" }),
    url(),
    svgr(),
    image(),
  ],
};

export default config;
