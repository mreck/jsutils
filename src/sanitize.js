function num({ min, max }) {
	return function (n) {
		if (min && n < min) return min;
		if (max && n > max) return max;
		return n;
	};
}

module.exports = {
	num,
};