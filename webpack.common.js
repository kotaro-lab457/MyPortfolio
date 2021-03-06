const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  return {
    entry: {
      bundle: "./src/index.tsx",
    },
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "js/[name].js",
    },
    resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
    },

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            // cssを出力するローダー
            "style-loader",
            // css をcommonJSに変換するローダー
            "css-loader",
          ],
        },
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          include: path.resolve(__dirname, "src"),
          exclude: /node_module/,
        },
        {
          test: /\.(jpg|png)$/,
          // 画像（jpg or png）を出力するローダー
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[contenthash].[ext]",
                outputPath: "images",
                publicPath: "/images",
              },
            },
            "image-webpack-loader",
          ],
        },
      ],
    },
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new CleanWebpackPlugin(),
    ],
    performance: { hints: false },
  };
};
