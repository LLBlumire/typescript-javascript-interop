module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/dist.js',
        libraryTarget: 'var',
        library: 'LettersLibrary',
        libraryExport: 'LettersLibrary'
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