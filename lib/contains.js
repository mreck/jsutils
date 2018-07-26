function contains(s, val) {
	return s.indexOf(val) > -1;
}

contains.any = function(s, ...val) {
	for (let i = 0; i < val.length; i++) {
		if (s.indexOf(val[i]) > -1) {
			return true;
		}
	}
	return false;
};

contains.all = function (s, ...val) {
	for (let i = 0; i < val.length; i++) {
		if (s.indexOf(val[i]) === -1) {
			return false;
		}
	}
	return true;
};

module.exports = contains;
