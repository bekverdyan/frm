'use strict';

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const helpers = require('./helpers');
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts',
        global: './src/assets/css/global.css'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loaders: ['file-loader?hash=sha512&digest=hex&name=content/[hash].[ext]']
            },
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader'],
                exclude: /(vendor\.css|global\.css)/
            },
            {
                test: /(vendor\.css|global\.css)/,
                loaders: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'), { root: helpers.root(), verbose: true }),
        new CopyWebpackPlugin([
            { from: './src/assets/', to: 'assets' },
            { from: './src/favicon.ico', to: 'favicon.ico' }
        ]),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new MergeJsonWebpackPlugin({
            output: {
                groupBy: [
                    { pattern: "./src/i18n/en/*.json", fileName: "./i18n/en.json" },
                    { pattern: "./src/i18n/de/*.json", fileName: "./i18n/de.json" }
                ]
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};