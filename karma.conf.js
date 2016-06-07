module.exports = (config) => {
	config.set({
		browsers: ['PhantomJS'],

		frameworks: ['mocha', 'chai', 'sinon'],
		reporters: ['mocha', 'coverage'],

		files: [
			'src/**/*.spec.js',
		],

		preprocessors: {
			'src/**/*.spec.js': ['webpack'],
		},

		webpack: {
			externals: {
				'react/lib/ExecutionEnvironment': true,
				'react/lib/ReactContext': true,
				'react/addons': true,
			},
			module: {
				preLoaders: [
					{ test: /\.js$/, exclude: /(\.spec\.js|node_modules)/, loader: 'isparta' },
				],
				loaders: [
					{ test: /\.json$/, loader: 'json' },
					{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
				],
			},
		},

		webpackServer: {
			noInfo: true,
		},
	});
};
