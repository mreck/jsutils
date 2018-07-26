function min(...vals) {
	const len = vals.length;

	if (len === 2) {
		return vals[0] < vals[1] ? vals[0] : vals[1];
	}

	if (len === 1) {
		return vals[0];
	}

	let res = vals[0];

	for (let i = 1; i < len; i++) {
		if (vals[i] < res) {
			res = vals[i];
		}
	}

	return res;
}

module.exports = min;
