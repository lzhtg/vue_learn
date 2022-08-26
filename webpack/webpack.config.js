const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html',
})

const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const cleanPlugin = new CleanWebpackPlugin();

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js',
        
    },
    plugins: [htmlPlugin, cleanPlugin],
    devServer: {
        open: true,
        port: 80,
        host: '127.0.0.1',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.jpg|jpeg|png|gif$/,
                type: 'asset/resource',
                generator: {
                    filename: "img/[name].[hash:6][ext]"
                }
            },
            {
                test:/\.js/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
};
