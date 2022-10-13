const path = require('path');
const webpack = require('webpack')
module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {  // configuration for webpack-dev-server
    historyApiFallback: true,
    
    overlay: true,
    port: 8080, // port to run dev-server
    },
  devtool: 'cheap-source-map',
 /* resolve: {
    extensions: [ '.js'],
    alias: {
      'aabb': path.resolve(__dirname, './src/aabb'),
    
    }
  },
  plugins: [
  
    new webpack.ProvidePlugin({
      'AABB': 'aabb'
    })
  ] */
};