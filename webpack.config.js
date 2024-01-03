const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');

const deploy_folder = 'docs';

const config = {
    entry: { // default: ./src/index.js
        index: './assets/js/index.js',
        websites: './assets/js/websites.js',
    },
    output: { // default: ./dist/main.js
        path: path.resolve(__dirname, deploy_folder),
        clean: true,
    },
    optimization : {
        splitChunks : {
            name: 'vendors',
            chunks : 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]',
                },
            },
            // {
            //     test : /\.(woff|woff2|ttf|eot|otf)$/,
            //     use : [
            //         {
            //             loader : 'file-loader',
            //             options : {
            //                 publicPath : 'fonts',
            //                 outputPath : 'fonts',
            //                 name : '[name].[ext]'
            //             }
            //         }
            //     ]
            // },
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

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'I Am AMI',
            template : './assets/views/index.html',
            filename : 'index.html',
            chunks : ['index']
        }),
        new HtmlWebpackPlugin({
            title : 'AMI :: Websites',
            template : './assets/views/websites.html',
            filename : 'websites.html',
            chunks : ['websites']
        }),
        // new ESLintPlugin({}),
    ]
}

module.exports = (env , arg) => {

    let isDevelopment = arg.mode === 'development';

    if(isDevelopment) {
        config.devServer = {
            static: {
                directory: path.join(__dirname, deploy_folder),
            },
            compress: true,
            port : 9000
        };
    }

    config.module.rules.push(...[
        {
            test : /\.css$/,
            use : [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader ,
                'css-loader',
            ]
        },
        {
            test : /\.s[ac]ss$/,
            use : [
                isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader ,
                'css-loader' ,
                // 'resolve-url-loader',
                'sass-loader',
            ]
        },
    ])


    if(! isDevelopment) {
        config.output.filename = '[name].[contenthash].js';

        config.plugins.push(
            new MiniCssExtractPlugin({
                filename : '[name].[contenthash].css'
            }),
        )
    }

    return config;
};