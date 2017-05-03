const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
/*
It moves all the required *.css modules in entry chunks into a separate CSS file.
So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css).
If your total stylesheet volume is big,
it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
*/
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                test: /\.css$/, // a regular expression that catches .css
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', // loader(e.g 'style-loader') that should be used when the CSS is not extracted (i.e. in an additional chunk when allChunks: false)
                    use: 'css-loader?modules,localIdentName=[name]-[local]-[hash:base64:6]'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/client/index.html"
        }),
        new ExtractTextPlugin("styles.css"),
        new DashboardPlugin()
    ]
};

module.exports = config;
