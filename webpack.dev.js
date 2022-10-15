const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, {
    mode: 'development',
    devServer: {  
        historyApiFallback: true,
        overlay: true,
        port: 8080,    
    },
    devtool: 'inline-source-map',

})