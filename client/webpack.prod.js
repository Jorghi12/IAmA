const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'API_URI': JSON.stringify('https://cryptic-headland-48405.herokuapp.com')
            },
        }),
    ]
})
