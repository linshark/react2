var webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {

    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: "style-loader",
                },
                {
                  loader: "css-loader",
                },
                {
                  loader: "less-loader",
                  
                    
                    
                },
              ],
            },
          ],
      },
      
};