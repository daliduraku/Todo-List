const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // Serve from 'dist'
    },
    port: 8080, // Default port
    open: true, // Open browser automatically
  },
};
