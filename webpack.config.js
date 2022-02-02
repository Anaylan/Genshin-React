const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Импортируем плагин
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development"; // По умолчанию режим development
let target = "web"; // в режиме разработки browserslist не используется
if (process.env.NODE_ENV === "production") {
	// Режим production, если
	// при запуске вебпака было указано --mode=production
	mode = "production";
	target = "browserslist";
}

const plugins = [
	new HtmlWebpackPlugin({
		template: "./public/index.html", // Данный html будет использован как шаблон
	}),
	new MiniCssExtractPlugin({
		filename: "[name].[contenthash].css",
	}),
];

module.exports = {
	mode,
	target,

	entry: "./src/index.js",

	// настройки вывода
	output: {
		path: path.resolve(__dirname, "compile"),
		assetModuleFilename: "assets/[hash][ext][query]",
		clean: true, // Очищает директорию compile перед обновлением бандла
	},
	//

	// webpack сервер
	devtool: "source-map",

	devServer: {
		hot: true, // Включает автоматическую перезагрузку страницы при изменениях
	},
	//

	resolve: {
		modules: [".", "node_modules"],
	},

	module: {
		rules: [
			{ test: /\.(html)$/, use: ["html-loader"] }, // Загрузчик для html
			{
				test: /\.(s[ac]|c)ss$/i, // Загрузчик для sass
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			// {
			//   test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
			//   type: mode === 'production' ? 'asset' : 'asset/resource', // В продакшен режиме
			//   // изображения размером до 8кб будут инлайнится в код
			//   // В режиме разработки все изображения будут помещаться в dist/assets
			// },
			{
				test: /\.(woff2?|eot|ttf|otf)$/i, // Загрузчик для шрифтов
				type: "asset/resource",
			},

			{
				test: /\.js$/, // Загрузчик для js
				exclude: /node_modules/, // не обрабатываем файлы из node_modules
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.jsx?$/, // Загрузчик для jsx
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
					},
				},
			},
		],
	},
};
