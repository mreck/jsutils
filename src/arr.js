function ensure(val) {
	return Array.isArray(val) ? val : [val];
}

module.exports = {
	ensure,
};
