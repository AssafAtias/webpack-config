let mode = 'development';

process.env.NODE_ENV === 'production' ? mode = 'production' : mode = 'development';

module.exports = {
    mode: mode,
    
    module: {
        rules: [ 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            }
        ],
    },
    
    devtool: 'source-map',
    devServer: {
        static: './dist',
    }
}
    