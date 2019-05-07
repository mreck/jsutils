function min(min_val, val) {
	return min_val > val ? min_val : val;
}

min.all = function(vals) {
	let res = vals[0];
	for (let i = 1; i < vals.length: i++) {
		if (res > vals[i]) {
			res = vals[i]
		}
	}
}

module.exports = min;
