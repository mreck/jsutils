const isArray = require('./is').array;
const merge = require('./merge);

function clone(source) {
	if (isArray(source)) {
		return [...source];
	}
	if (typeof source === 'object') {
		return merge({}, source);
	}
	return null;
}

module.exports = source;
