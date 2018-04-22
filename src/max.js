function max(...vals) {
	let res = vals[0];

	for (var i = 1; i < vals.length; i++) {
		if (vals[i] > res) {
			res = vals[i];
		}
	}

	return res;
}

module.exports = max;
