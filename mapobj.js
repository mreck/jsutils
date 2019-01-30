const isArray = require('./is').array;

function mapobj(obj, func) {
	const res = {};

	const push = (key, value) => {
		res[key] = value;
	};

	if (isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			func(obj[i], i, push);
		}
	} else {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				func(obj[key], key, push);
			}
		}
	}

	return res;
}

module.exports = mapobj;
