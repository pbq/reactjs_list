const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                enforce: 'pre',
                test: /\.jsx$/,
                loader: 'standard-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/, // a regular expression that catches .jsx files
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
              test: /\.css$/, // a regular expression that catches .css files
              exclude: /node_modules/,
              loader: "style-loader!css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local]"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "src/client/index.html"
        }),
        new DashboardPlugin()
    ]
};

module.exports = config;
