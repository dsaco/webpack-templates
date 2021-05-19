const webpack = require('webpack');
const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');

const HOST = 'localhost';
const PORT = 3000;

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        hot: true,
        host: HOST,
        port: PORT,
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
