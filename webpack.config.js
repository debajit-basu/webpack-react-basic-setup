const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                
            },
            {
                test: /\.(css|scss)$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
        // new MiniCssExtractPlugin()
    ]
}