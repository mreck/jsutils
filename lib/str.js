// TODO: remote for the next major version
const isStr = require('./is').string;

function contains(s, val) {
	return s.indexOf(val) > -1;
}

function containsAny(s, ...val) {
	for (let i = 0; i < val.length; i++) {
		if (s.indexOf(val[i]) > -1) {
			return true;
		}
	}
	return false;
}

function containsAll(s, ...val) {
	for (let i = 0; i < val.length; i++) {
		if (s.indexOf(val[i]) === -1) {
			return false;
		}
	}
	return true;
}

module.exports = {
	isStr,
	contains,
	containsAny,
	containsAll,
};
