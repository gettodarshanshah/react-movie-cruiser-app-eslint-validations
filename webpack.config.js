const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [{
                    loader: 'style-loader', // inject CSS to page
                }, {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test : /\.js?/,
                include : SRC_DIR,
                loader : "babel-loader"
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            filename : './index.html'
        })
    ],
    mode : 'developement'
}