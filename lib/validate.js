function num({ min, max }) {
	return (n) => {
		if (min && n < min) return false;
		if (max && n > max) return false;
		return true;
	};
}

module.exports = {
	num,
};
