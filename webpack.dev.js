const config = require('./webpack.config');
const merge = require('./lib/merge');

module.exports = merge(config, {
	mode: 'development',
	devtool: 'source-map',
});
