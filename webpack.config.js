const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
    entry: path.join(__dirname, './src/main.js'),//打包文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development', //设置mode
    // devServer: {
    //     open: true,
    //     port: 3000,
    //     contentBase: 'src',
    //     hot: true
    // },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({//创建一个内存中生成html 页面的插件
            template: path.join(__dirname, './src/index.html'), //指定模版页面
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, 
            { test: /\.less$/, use: ['style-loader', 'css-loader','less-loader'] }, 
            { test: /\.vue$/, loader: 'vue-loader'},
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
            // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理 字体文件的 loader 
        ]
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"
        }
    }
}
//const var let 都是用来声音变量的一种方式
// 当我们在控制台输入webpack 命令执行的时候,webpack做了以下几个步骤：
// 1、首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口。
// 2、webpack 就会去项目的根目录中，查找一个叫做 ‘webpack.config.js’ 的配置文件
// 3、当找到配置文件后，webpack 会去解析执行这个 配置文件，当解析执行完配置文件后，就得到了配置文件中，
// 导出的配置对象。
// 4、当webpack 拿到配置对象后，就拿到了 配置对象中，指定的入口和出口，然后进行打包构建；