const is_arr = require('./is_arr');

function mapobj(obj, func) {
	const res = {};

	const push = (key, value) => {
		res[key] = value;
	};

	if (is_arr(obj)) {
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
