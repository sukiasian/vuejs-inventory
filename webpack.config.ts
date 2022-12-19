import { VueLoaderPlugin } from 'vue-loader';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
  mode: 'development',
  entry: './src/main.ts',
  module: {
    rules: [
		{
			test: /\.tsx?$/,
			use: [{
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/]
				}
			}],
			exclude: /node_modules/
		},
		{
			test: /\.js$/,
			use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		},
		// {
		// 	test: /\.css$/,
		// 	use: [
		// 		'vue-style-loader',
		// 		'css-loader'
		// 	]
		// },
		{
            test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'assets',
                publicPath: 'assets',
                name: '[path][name].[ext]'
            }
        },
		{
			test: /\.scss$/,
			use: [
				'style-loader', "css-loader", "sass-loader"
			]
        }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new VueLoaderPlugin(),
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, "public", "index.html"),
		title: 'Inventory App',
		favicon: path.resolve(__dirname, "public", "favicon.ico"),
		filename: 'index.html'
	})
  ],
  devServer: {
	port: 3002,
	host: '127.0.0.1',
	open: true
  }
};