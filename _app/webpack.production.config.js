require('babel-polyfill');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle : [
      'babel-polyfill',
      'whatwg-fetch',
      './pages/home',
    ],
  },
  output: {
    path: '../assets/js/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.yaml'],
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /(\.js$|\.jsx$)/,
        loader: 'babel',
        query: {
          plugins: ['transform-decorators-legacy'],
          presets: ['react', 'es2015', 'stage-0'],
        },
      },
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.yaml$/,
        loader: 'yaml',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ],
};
