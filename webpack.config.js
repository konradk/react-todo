var webpack = require('webpack');
var path = require('path');

var config = {
	entry: './source/index',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'script.js'
	},
	resolve: {
		extensions: ['', '.es6', '.js', '.json']
	},
	module: {
		loaders: [
			{test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/},
			{test: /\.html$/, loader: 'raw'}
		]
	}
};

config.plugins = [
	new webpack.HotModuleReplacementPlugin(),
	new webpack.DefinePlugin({
		'NODE_ENV': '"dev"'
	})
]

module.exports = config;
