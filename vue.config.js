// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   publicPath:'./',
//   outputDir:'dist',
//   assetsDir:'static',
//   indexPath:'index.html',
// })
// Vue.config.js 配置选项

// module.exports = {
//   transpileDependencies: true,
//   lintOnSave: false,
//   // 选项
//   publicPath: "./",
//   //  构建时的输出目录
//   outputDir: "dist",
//   //  放置静态资源的目录
//   assetsDir: "static",
//   //  html 的输出路径
//   indexPath: "index.html",
//   // //文件名哈希
//   // filenameHashing: true,
//   // //  是否在保存的时候使用 `eslint-loader` 进行检查。
//   // lintOnSave: true,
//   // //  是否使用带有浏览器内编译器的完整构建版本
//   // runtimeCompiler: false,
//   // //  babel-loader 默认会跳过 node_modules 依赖。
//   // transpileDependencies: [ /* string or regex */],
//   // //  是否为生产环境构建生成 source map？
//   // productionSourceMap: true,
//   // //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
//   // crossorigin: "",
//   // //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
//   // integrity: false,
//   // //  调整内部的 webpack 配置
//   // chainWebpack: () => { },
//   // // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
//   // parallel: require('os').cpus().length > 1,
//   // // PWA 插件的选项。
//   // pwa: {},
//   // // 三方插件的选项
//   // pluginOptions: {
//   //   // ...
//   // }

// }

const path = require('path')
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  lintOnSave: false,
  //   是否为生产环境构建生成 source map？
  productionSourceMap: false,
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true
}
