var path = require('path');
var webpack = require('webpack');

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
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
        })
    ],
    resolve: {
        alias: {
            'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js', '.jsx']
    },
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                excludes: /node_modules/,
                include: path.join(__dirname, 'src')
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
            }

        ]
    }
};