const isArray = require('./is').array;

function map(obj, func) {
	const res = [];
	if (isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			res.push(func(obj[i], i));
		}
	} else {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				res.push(func(obj[key], key));
			}
		}
	}
	return res;
}

module.exports = map;
