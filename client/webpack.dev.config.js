var path = require('path');
var webpack = require('webpack');
var Dashboard = require('webpack-dashboard');
var DashboardPlugin = require('webpack-dashboard/plugin');
var dashboard = new Dashboard();

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		'react-hot-loader/patch',
		'babel-polyfill',
		'./src/app'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new DashboardPlugin(dashboard.setData),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery'
		}),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("development"),
				"API_URL": JSON.stringify("http://localhost:3000/api/")
			}
		})
	],
	resolve: {
		alias: {
			'react': path.resolve(__dirname, 'node_modules', 'react')
		},
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules'],
	},
	resolveLoader: {
		'fallback': path.resolve(__dirname, 'node_modules')
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src')
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.json$/,
				loader: 'json'
			}

		]
	}
};