var webpack = require('webpack');

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
                    use: 'css-loader',
                },
                {
                    test: /\.less$/,
                    use: 'less-loader',
                },
            
        ],
    },
};