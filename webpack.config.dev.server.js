const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	name: 'server',
	target: 'node',
	externals: [nodeExternals()],
	entry: [
		'./src/server/index.js',
	],
	output: {
		path: path.join('dist'),
		filename: 'server.js',
		publicPath: '/assets/',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
			{ test: /\.json$/, loader: 'json-loader' },
			{ test: /\.svg$/, loader: 'raw-loader' },
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [
			path.resolve('./src/app'),
		],
	},
	devtool: 'eval',
};
