const isString = require('./is').string;

function objpath(obj, path) {
	if (!obj || !isString(path)) {
		return null;
	}

	const paths = path.split('.');
	let res = obj;

	for (let i = 0; i < paths.length; i++) {
		res = res[paths[i]];
		if (!res) {
			return null;
		}
	}

	return res;
}

module.exports = objpath;
