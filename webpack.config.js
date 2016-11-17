var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'abas-demo-site.js',
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
          ]
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
    ]
  }
};
