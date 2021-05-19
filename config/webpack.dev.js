const webpack = require('webpack');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const baseConfig = require('./webpack.base');

const HOST = 'localhost';
const PORT = 3000;

module.exports = merge(baseConfig, {
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: ['react-refresh/babel'],
						},
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		hot: true,
		host: HOST,
		port: PORT,
	},
	plugins: [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
});
