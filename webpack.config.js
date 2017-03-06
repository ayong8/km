var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',

    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        publicpath: '/',
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: __dirname + '/public/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        )
    ]
}