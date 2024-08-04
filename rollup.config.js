import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import * as packageJSON from "./package.json";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJSON.main,
                format: "cjs",
                sourceMap: true,
            }, {
                file: packageJSON.module,
                format: "esm",
                sourceMap: true,
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
            postcss(),
        ],
        external: [/\.(sass|scss|css)$/, "react", "react-dom"],
    },
    {
        input: "src/index.ts",
        output: [{ file: "dist/types.d.ts", format: "es" }],
        plugins: [dts.default()],
    },
];
