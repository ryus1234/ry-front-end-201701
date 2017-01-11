
module.exports = [
  {
    entry: './src/scripts/main.js',
    output: {
      path: 'public/scripts',
      filename: 'main.js'
    },
    plugins: [],
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