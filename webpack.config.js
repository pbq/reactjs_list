<<<<<<< Updated upstream
const webpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
=======
var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname , "dist");
var SRC_DIR = path.resolve(__dirname , "src");

process.traceDeprecation = false;

module.exports = {
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + "/app",
        // if the above line does not work, try `path: __dirname + '/build'`
        filename: "bundle.js",
        publicPath:"/app/"
>>>>>>> Stashed changes
    },
    resolveLoader: {
  modules: [path.resolve(__dirname, "src"), "node_modules"]
},
    module: {
        loaders: [{
<<<<<<< Updated upstream
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
=======
            test: /\.js?/, // a regular expression that catches .js files
            include: SRC_DIR,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets:["react", "es2015"]
            }
        }]
    },
    devServer: {
        port: 3000, // most common port
        contentBase: "src/",
        inline: true
    }
}
>>>>>>> Stashed changes
