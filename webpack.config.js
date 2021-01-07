
const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const mock = require('./mock/index.js')
module.exports = {
    entry: {
        index: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, './build'),
        filename: "[name].js",
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    mode: 'development',
    devServer: {
        contentBase: './build',
        port: 3000,
        before: function (app, server, compiler) {
            mock(app, server, compiler)
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require("sass"),
                        }
                    }

                ]
            },
            {
                test: /\.(png|jpe?g|webp)$/,
                use: {
                    // loader: "file-loader",
                    loader: "url-loader",
                    options: {
                        outputPath: 'images/',
                        name: "[name]-[hash:3].[ext]",
                        limit: 10000
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            title: 'hello world',
            template: path.join(__dirname, 'src/index.html'),
            filename: "index.html"
        })
    ]
}