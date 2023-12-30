const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development', // or 'production' or 'none'
    entry: {
        index: './assets/js/index.js',
        websites: './assets/js/websites.js',
    }, // default: ./src/index.js
    output: { // default: ./dist/main.js
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    devServer: {
        contentBase : path.resolve(__dirname, 'build'),
        index : 'index.html',
        port : 9327
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader", //babel: for browsers
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test : /\.css$/,
                use : [MiniCssExtractPlugin.loader , 'css-loader']
            },
            {
                test : /\.s[ac]ss$/,
                use : [
                    MiniCssExtractPlugin.loader ,
                    'css-loader' ,
                    'sass-loader',
                ]
            },
            {
                test : /\.(png|jpe?g|gif)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            publicPath : 'images',
                            outputPath : 'images',
                            name : '[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'Roocket App',
            template : './assets/views/index.html',
            filename : 'index.html',
            chunks : ['index']
        }),
        new HtmlWebpackPlugin({
            title : 'iamami::websites',
            template : './assets/views/websites.html',
            filename : 'websites.html',
            chunks : ['websites']
        }),
        new MiniCssExtractPlugin({
            filename : '[name].[contenthash].css'
        })
    ]
};