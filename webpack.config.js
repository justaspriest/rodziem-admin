const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode,
    entry: './src/js/index.js',
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'js'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'public/index.html' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        static: path.join(__dirname, 'public'),
        port: 3000,
        open: true,
        hot: true
    }
};
