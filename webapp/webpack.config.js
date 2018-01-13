const path = require('path');

const config = {
    entry: {
        app: './src/App.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                use: 'babel-loader'
            }
        ]
    },
    stats: {
        children: false,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        modules: false
    }
};

module.exports = config;

//TRELLO
// >> TOKEN cdd0e63ec7ce67d6ec6d35a89ecb8341abe3e1ee62fc26f4f60b8a49bd51a4f2