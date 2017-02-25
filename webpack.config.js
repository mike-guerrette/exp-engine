'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        'polyfills': './src/polyfills',
        'vendor': './src/vendor',
        'app': './src/main'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: `${__dirname}/dist`,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: './tsconfig.json'
                        }
                    },
                    {loader: 'angular2-template-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'raw-loader'},
                    {loader: 'css-loader'},                    
                    {loader: 'sass-loader'}                    
                ]
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: [`${__dirname}/src/index.html`]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 4200,
        stats: 'minimal'
    }
};

module.exports = config;