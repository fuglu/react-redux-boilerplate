import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __DEVELOPMENT__ = process.env.NODE_ENV === 'development';

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js',
	],

	output: {
		path: 'dist',
		filename: 'app.js',
		publicPath: '/',
	},

	module: {
		loaders: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loaders: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass'],
			},
			{
				test: /\.(svg|png|jpe?g|gif|woff2?|otf|ttf|eot)$/,
				loaders: ['url-loader?limit=8192'],
			},
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			__DEVELOPMENT__,
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'true',
			minify: {
				collapseWhitespace: true,
			},
		}),
	],

	devServer: {
		port: 3000,
		host: '0.0.0.0',
		contentBase: 'dist',
		inline: true,
		hot: true,
		historyApiFallback: true,
	},
};

if (__DEVELOPMENT__) {
	module.exports.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	);

	module.exports.devtool = 'cheap-module-eval-source-map';
} else {
	module.exports.plugins.push(
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
		}),
	);
}
