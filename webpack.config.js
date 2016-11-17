var path = require('path');
var NodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'abas-demo-site.js',
    library: 'abas-demo-site',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
        },
      }
    ],
  },
  resolve: {
    root: [
    ],
    extensions: [
      '',
      '.js',
      '.jsx',
    ],
  },
  externals: NodeExternals(),
};
