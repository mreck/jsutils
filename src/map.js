function map(obj, func) {
	const res = [];
	if (Array.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			res.push(func(obj[i]));
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				res.push(func(key, obj[key]));
			}
		}
	}
	return res;
}

module.exports = map;
