const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');//para varibles de entorno

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/main.js'),
    output:{
        assetModuleFilename: "assets/images/[name][ext]",
        clean: true,
    },

    module:{
        rules:[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options:{
                    presets: ['@babel/preset-env'],
                    plugins:["@babel/plugin-transform-runtime"]
                }
            },
            {
                // test: /\.css$/, 
                // use:['style-loader','css-loader'] ,
                test: /\.css$/, 
                use:[MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader'    
                ] ,
             },
             {
                test: /\.png|.svg/,
                type: 'asset/resource',
            },
        ]
       
    },
    plugins:[
        new HtmlWebpackPlugin({ 
            inject: 'body',
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
        }),
        new Dotenv(),
    ],
}