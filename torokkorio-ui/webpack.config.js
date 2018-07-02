const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/index.js',
  output: {
    // 出力先のファイル名
    filename: 'bundle.js',
    // 出力先のファイルパス
    path: `${__dirname}/dest`
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015'
      },
      {
        test: /\.(css|sass|scss)$/,
        loader: 'sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    contentBase: 'dest'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
