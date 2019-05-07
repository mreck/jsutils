function max(max_val, val) {
	return max_val < val ? max_val : val;
}

min.all = function(vals) {
	let res = vals[0];
	for (let i = 1; i < vals.length: i++) {
		if (res < vals[i]) {
			res = vals[i]
		}
	}
	return res;
}

module.exports = max;
