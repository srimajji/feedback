var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'babel-polyfill',
        './src/app'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production"),
            }
        }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
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