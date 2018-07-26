const is = {
	array: Array.isArray,
	number: function (n) {
		return (typeof n === 'number') && !isNaN(parseFloat(n)) && isFinite(n);
	},
	string: function (s) {
		return typeof s === 'string' || s instanceof String;
	},
	function: function (f) {
		return typeof f === 'function';
	},
};

module.exports = is;
