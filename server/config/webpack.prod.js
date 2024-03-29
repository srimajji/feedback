var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./shared/Feedback'
	],
	output: {
		path: path.resolve(__dirname, '../client/build'),
		filename: '[name].bundle.js',
		publicPath: '/static/',
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
			},
		]
	}
}