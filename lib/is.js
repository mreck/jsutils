const is = {
	array: Array.isArray,
	object: function (o) {
		return typeof o === 'object';
	},
	number: function (n) {
		return (typeof n === 'number') && !isNaN(parseFloat(n)) && isFinite(n);
	},
	string: function (s) {
		return typeof s === 'string' || s instanceof String;
	},
	function: function (f) {
		return typeof f === 'function';
	},
	element: function(e) {
		return e instanceof Element;
	},
};

module.exports = is;
