const isArray = require('./is').array;

function pop(target, key) {
	if (isArray(key)) {
		const keyLen = key.length;
		const res = new Array(keyLen);
		for (let i = 0; i < keyLen; i++) {
			res[i] = pop(target, key[i]);
		}
		return res;
	}
	if (isArray(target)) {
		if (key >= target.length) {
			return null;
		}
		const res = target[key];
		target.splice(key, 1);
		return res;
	}
	if (typeof target === 'object') {
		const res = target[key];
		if (res === undefined) {
			return null;
		}
		delete target[key];
		return res;
	}
	// TODO: ES6 data structs
	return null;
}

module.exports = pop;
