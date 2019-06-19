function fuzzy_filter(arr, ...vals) {
	const len = vals.length;
	let i;
	return arr.filter(a => {
		for (i = 0; i < len; i++) {
			if (arr.indexOf(vals[i]) === -1) {
				return false;
			}
		}
		return true;
	});
}

module.exports = fuzzy_filter;
