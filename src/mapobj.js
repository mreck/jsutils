function mapobj(obj, func) {
	const res = {};

	const push = function (key, value) {
		res[key] = value;
	};

	if (Array.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			func(obj[i], push);
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				func(obj[key], push);
			}
		}
	}

	return res;
}

module.exports = mapobj;
