const isArray = require('./is').array;
const isObject = require('./is').object;
const merge = require('./merge');

function clone(source) {
	if (isArray(source)) {
		return [...source];
	}
	if (isObject(source)) {
		return merge({}, source);
	}
	return null;
}

module.exports = source;
