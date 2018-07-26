const path = require('path');

module.exports = {
	entry: {
		index: path.resolve(__dirname, 'lib', 'index.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		library: 'jsutils',
	},
	target: 'web'
};
