module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/dist.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}