function map(obj, func) {
	const res = [];
	if (Array.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			res.push(func(obj[i], i));
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				res.push(func(obj[key], key));
			}
		}
	}
	return res;
}

module.exports = map;
