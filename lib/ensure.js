const isArray = require('./is').array;

function array(val) {
	return val ? (isArray(val) ? val : [val]) : [];
}

module.exports = {
	array,
};
