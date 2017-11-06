const webpack = require('webpack'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      { outPath } = require('../config/path');
module.exports = {
    output:{
        path:outPath,
        filename:"[name].js",
        publicPath: 'http://localhost:8080/',
        chunkFilename:"js/chunks/[name].[chunkhash:5].chunk.js"
    },
    plugins: [
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['vender'],
        //     filename:"js/public/vender.js"
        // })
    ],
    module: {
        rules:[{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','postcss-loader','sass-loader']
            })
        },{
            test:/\.(png|jpg|gif)$/,
            use:{
                loader:'url-loader',
                options:{
                    limit:1192,
                    name:'imgs/[name][hash:8].[ext]'
                }
            }

        },{
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader'
            }
        },{
            test: /\.json$/,
            use: 'json-loader'
        }]
    }
};