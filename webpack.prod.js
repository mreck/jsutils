const config = require('./webpack.config');
const merge = require('./lib/merge');

module.exports = merge(config, {
	mode: 'production',
});
