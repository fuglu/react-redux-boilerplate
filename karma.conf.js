module.exports = (config) => {
	config.set({
		browsers: ['PhantomJS'],

		frameworks: ['mocha', 'chai', 'sinon'],
		reporters: ['mocha', 'coverage'],

		files: [
			'src/**/*.spec.js*',
		],

		preprocessors: {
			'src/**/*.spec.js*': ['webpack'],
		},

		webpack: {
			// https://github.com/cheeriojs/cheerio/commit/7b59afbc7a6aa39376021593e011bf718350bcb4
			resolve: {
				extensions: ['', '.json', '.js', '.jsx'],
			},
			// https://github.com/airbnb/enzyme/issues/47
			externals: {
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true,
				'react/addons': true,
			},
			module: {
				loaders: [
					{ test: /\.json$/, loader: 'json' },
					{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
				],
			},
		},

		webpackServer: {
			noInfo: true,
		},
	});
};
