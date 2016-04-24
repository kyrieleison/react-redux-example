module.exports = {
  entry: './js/app.js',
  output: {
    path: './js/',
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: './',
    port: 8080
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint' }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  }
};
