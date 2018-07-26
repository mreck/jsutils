function clamp(val, min, max) {
	return val < min ? min : (val > max ? max : val);
}

clamp.each = function (vals, min, max) {
	return vals.map(v => clamp(v, min, max));
};

module.exports = clamp;
