function uniq(arr) {
	const res = [];
	const len = arr.length;
	for (let i = 0; i < len; i++) {
		if (res.indexOf(arr[i]) === -1) {
			res.push(arr[i]);
		}
	}
	return res;
}

uniq.sorted = function (arr) {
	const len = arr.length;
	if (len === 0) {
		return [];
	}
	const res = [arr[0]];
	for (let i = 1; i < len; i++) {
		if (arr[i] !== res[res.length - 1]) {
			res.push(arr[i]);
		}
	}
	return res;
};

module.exports = uniq;
