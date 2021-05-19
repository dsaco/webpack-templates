const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: path.resolve(__dirname, '../src/main.js'),
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src'),
		},
	},
	// 修复HMR失效问题 https://github.com/webpack/webpack-dev-server/issues/2758
	target: 'web',
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
			},
			{
				test: /\.(gif|jpe?g|png|svg)$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: 'images/[name].[hash:8].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			favicon: path.resolve(__dirname, '../public/favicon.ico'),
		}),
		new VueLoaderPlugin(),
	],
};
