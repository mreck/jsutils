const isArray = require('./is').array;

function each(obj, func) {
	if (isArray(obj)) {
		for (let i = 0; i < obj.length; i++) {
			func(obj[i], i);
		}
	} else {
		for (let key in obj) {
			if (obj.hasOwnProperty(key)) {
				func(obj[key], key);
			}
		}
	}
}

module.exports = each;
