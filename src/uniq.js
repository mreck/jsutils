function uniq(arr, sorted=false) {
	const len = arr.length;

	if (len === 0) {
		return [];
	}

	const res = [];

	if (sorted) {
		res.push(arr[0]);
		for (let i = 1; i < len; i++) {
			if (arr[i] !== res[res.length - 1]) {
				res.push(arr[i]);
			}
		}
	} else {
		for (let i = 0; i < len; i++) {
			if (res.indexOf(arr[i]) === -1) {
				res.push(arr[i]);
			}
		}
	}
	
	return res;
}

module.exports = uniq;
