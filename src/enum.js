function enum(...keys) {
	const res = {};
	for (let i = 0; i < keys.length; i++) {
		res[keys[i]] = i;
	}
	return res;
}

module.exports = enum;
