const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/, // a regular expression that catches .jsx files
            include: APP_DIR,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: "./src/client",
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
};

module.exports = config;
