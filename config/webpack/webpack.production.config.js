require('babel-core/register');

// Webpack config for creating the production bundle.

const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const PKG_LOCATION = path.join(__dirname, '../../package.json');
const config = require('../config');
const webpackConfig = require('./webpack.development.config')

module.exports = Object.assign({}, webpackConfig, {

    cache: false,
    devtool: false,
    watch: false,
    output: {
        path: config.distDir,
        filename: config._app + '.js',
        libraryTarget: 'umd',
        library: config._app
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        // Notifier
        new WebpackNotifierPlugin({
            title: PKG_LOCATION.name,
            alwaysNotify: true
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        // optimizations
        // new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': false,
            'process.env.NODE_ENV': JSON.stringify('production'),
            VERSION: JSON.stringify(PKG_LOCATION.version)
        })
    ],
    devServer: {
       hot: true
    }
});