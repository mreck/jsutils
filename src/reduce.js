const is_arr = require('./is_arr');

function reduce(obj, sum, func) {
	if (is_arr(obj)) {
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
