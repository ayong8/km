var webpack = require('webpack');


module.exports = {
    entry: './src/index.js',

    devServer: {
        contentBase: __dirname + '/public/',
        hot: true
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true
                })]
                
            }
        ]
    },

    resolve: {
        // put '' in front of it and it led to an error (throw webpack error)
        extensions: ['.js', '.jsx']
    },

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    /*
    // due to this fuck shitttttttttt
    // to solve the error of refusing to read 'fs' module
    target: 'node',
    
    node: {
        fs: "empty",
        fsevents: "empty",
        "node-pre-gyp": "empty"
    },*/

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // NoErrorsPlugin has been deprecated
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.ContextReplacementPlugin(/selector/, "./folder", true, /filter/)
    ]
}