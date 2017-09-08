var config = {
  entry: __dirname+'/src/main.js',
  output: {
    path: __dirname+'/../public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval-source-map'
}

module.exports = config;
