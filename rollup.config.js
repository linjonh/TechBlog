import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
const SRC_DEFAULT = "_javascript";
const SRC_PWA = `${SRC_DEFAULT}/pwa`;
const DIST = "static/assets/js";

function build(
  filename,
  { src = SRC_DEFAULT, dist = null, outputName = null } = {}
) {
  let dist_ = dist != null ? dist : DIST;
  return {
    input: `${src}/${filename}.js`, // 你的 JS 入口文件
    output: {
      file: `${dist_}/${filename}.min.js`, // Hugo 站点最终使用的 JS
      ...(outputName !== null && { name: outputName }),
      format: "iife", // IIFE 适用于浏览器
      sourcemap: false,
    },
    plugins: [
      resolve(),
      commonjs(),
      terser(), // 压缩 JS 代码
    ],
  };
}

export default [
  build("app", { src: SRC_PWA, dist: "static" }),
  build("sw", { src: SRC_PWA,dist: "static" }),
];
