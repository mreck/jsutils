function match(val, obj_map) {
	for (var key in obj_map) {
		if (obj_map.hasOwnProperty(key) && (key === val)) {
			return obj_map[key];
		}
	}
	return null;
}

module.exports = match;
