function each(obj, func) {
	if (Array.isArray(obj)) {
		for (var i = 0; i < obj.length; i++) {
			func(obj[i]);
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				func(obj[key]);
			}
		}
	}
}

module.exports = each;
