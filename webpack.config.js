const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');//para varibles de entorno
const CopyPlugin = require('copy-webpack-plugin');

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
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname, "src", "images"),
                    to: "assets/images"
                }
            ]
        }),
    ],
}