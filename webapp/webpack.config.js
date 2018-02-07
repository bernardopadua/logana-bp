const path = require('path');
const webpack = require('webpack');

const config = {
    entry:{
        loganapanel: ['react-hot-loader/patch', './src/loganapanel/index.js'],
        //loganalogin: './src/loganalogin/logana-login.js'
    },
    //['react-hot-loader/patch', './src/loganapanel/index.js'],
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve(__dirname, 'dist/assets/js/'),
        filename: '[name].bundle.js',
        publicPath: 'assets/js'
    },
    devServer:{
        hot: true,
        contentBase: 'dist/',
        historyApiFallback: true
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src')
                ],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader?limit=100000',
                        options: {
                            name: 'assets/fonts/[name].[ext]'
                        }  
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                {
                    loader: 'file-loader?limit=100000',
                    options: {
                        name: 'assets/img/[name].[ext]',
                        publicPath: '/static/img/'
                    }  
                },
                {
                    loader: 'img-loader',
                    options: {
                        enabled: true,
                        optipng: true
                    }
                }
                ]
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