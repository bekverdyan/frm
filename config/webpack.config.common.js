'use strict';

const webpack = require('webpack');
const CleanWebpackPlugin     = require('clean-webpack-plugin');
const CopyWebpackPlugin      = require('copy-webpack-plugin');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");

const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts'
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
                test: /\.(css|scss|sass)$/,
                use: [
                    'to-string-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
                include: helpers.root('src', 'app')
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