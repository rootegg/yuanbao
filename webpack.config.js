const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

/**
 * @type { webpack.Configuration }
 */
module.exports = {
  mode: "none",
  entry: {
    YB: "./src/index.js",
    "YB.min": "./src/index.js",
  },
  output: {
    // 导出的文件名
    filename: "[name].js",
    path: __dirname + "/dist",
    globalObject: "this",
    library: {
      // 指定库的全局变量名称
      name: "YB",
      type: "umd",
      export: "default",
    },
    clean: true,
  },
  optimization: {
    // 默认mode:'development'会压缩文件，mode:'none'就不会压缩了，使用TerserPlugin只对min.js压缩
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
};
