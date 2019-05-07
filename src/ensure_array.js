const is_arr = require('./is_arr');

function ensure_array(val) {
	return val ? (is_arr(val) ? val : [val]) : [];
}

module.exports = array;
