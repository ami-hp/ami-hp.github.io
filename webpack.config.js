const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const config = {
    entry: { // default: ./src/index.js
        index: './assets/js/index.js',
        websites: './assets/js/websites.js',
    },
    output: { // default: ./dist/main.js
        path: path.resolve(__dirname, 'build'),
        clean: true,
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
            {
                test : /\.(woff|woff2|ttf|eot|otf)$/,
                use : [
                    {
                        loader : 'file-loader',
                        options : {
                            publicPath : 'fonts',
                            outputPath : 'fonts',
                            name : '[name].[ext]'
                        }
                    }
                ]
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
    ]
}

module.exports = (env , arg) => {

    let isDevelopment = arg.mode === 'development';

    if(isDevelopment) {
        config.devServer = {
            static: {
                directory: path.join(__dirname, 'build'),
            },
            compress: true,
            port : 9000
        };
    }

    config.module.rules.push(...[
        {
            test : /\.css$/,
            use : [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader , 'css-loader']
        },
        {
            test : /\.s[ac]ss$/,
            use : [isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader , 'css-loader' , 'sass-loader']
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