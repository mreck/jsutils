function reduce(obj, sum, func) {
	if (Array.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			sum = func(sum, obj[i], i);
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				sum = func(sum, obj[key], key);
			}
		}
	}
	return sum;
}

module.exports = reduce;
