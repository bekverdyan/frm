'use strict';

const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.config.common');
const helpers      = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',

    devtool: 'cheap-module-eval-source-map',

    devServer: {
        // contentBase: './target/www',
        proxy: [{
            context: [
                /* jhipster-needle-add-entity-to-webpack - JHipster will add entity api paths here */
                '/api',
                '/management',
                '/v2/api-docs',
                '/h2-console',
                '/auth'
            ],
            target: 'http://127.0.0.1:8080',
            secure: false,
            headers: { host: 'localhost:9000' }
        }],
        // stats: options.stats,
        watchOptions: {
            ignored: /node_modules/
        }
    },

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    optimization: {
        noEmitOnErrors: true
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'babel-loader',
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('tsconfig.json')
                        }
                    },
                    'angular2-template-loader',
                    'angular-router-loader'
                ],
                exclude: [/node_modules/]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
