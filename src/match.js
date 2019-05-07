function match(val, obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key) && (key === val)) {
			return obj[key];
		}
	}
	return null;
}

module.exports = match;
