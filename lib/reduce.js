const isArray = require('./is').array;

function reduce(obj, sum, func) {
	if (isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			sum = func(sum, obj[i], i);
		}
	} else {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				sum = func(sum, obj[key], key);
			}
		}
	}
	return sum;
}

module.exports = reduce;
