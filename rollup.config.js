import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import fs from 'fs';
import path from 'path';
const SRC_DEFAULT = "_javascript";
const SRC_PWA = `${SRC_DEFAULT}/pwa`;
const DIST = "static/assets/js";
const date = new Date();
const formattedDate = date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
  .replace(/[-\/]/g, ""); // 格式化日期
const formattedTime = date.toLocaleTimeString('zh-CN', { hour12: false })
  .replace(/[-:.\s*]/g, ""); // 格式化时间
const banner=`/*! build time: ${formattedDate} ${formattedTime}  */`
function cleanup() {
  let childs=fs.readdirSync("static")
  for (let f of childs){
    if (f.startsWith("sw.min")||f.startsWith("app.min")){
      const filePath = path.join("static", f);
      fs.rmSync(filePath, { recursive: true, force: true });
      console.log(`> file "${filePath}" has been cleaned.`);
    }

  }
}
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
      banner:banner,
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
cleanup()
export default [
  build("app", { src: SRC_PWA, dist: "static" }),
  build("sw", { src: SRC_PWA, dist: "static" }),
];
