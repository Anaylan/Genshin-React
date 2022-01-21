const path = require('path');

module.exports = {
    entry: "./src/index.js", // входная точка - исходный файл
    output:{
        path: path.resolve(__dirname, './static'),     // путь к каталогу выходных файлов - папка static
        publicPath: '/public/',
        filename: "[name].[bundle].js"       // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        port: 8081,
        open: true
    },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx|js$/, // определяем тип файлов
                exclude: /node_modules/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}