const path = require('path'); // Añade esta línea

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(svg|png)$/,
        type: "asset/inline",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    hashFunction: 'md5', // Cambia md5 a 'md5'
  },
  target: "web",
  devServer: {
    contentBase: ["./dist"],
    hot: true,
    publicPath: "/dist",
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
  },
};