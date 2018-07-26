const isArray = require('./is').array;

function array(val) {
	return isArray(val) ? val : [val];
}

module.exports = {
	array,
};
