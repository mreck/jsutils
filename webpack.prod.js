const config = require('./webpack.config');
const merge = require('./src/merge');

module.exports = merge(config, {
	mode: 'production',
});
