const webpack = require('webpack');

module.exports = [
  {
    entry: {
      main: './src/scripts/main.js',
      vendor: ['react', 'react-dom']
    },
    output: {
      path: 'public/scripts',
      filename: '[name].js'
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      })
    ],
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
  },
]