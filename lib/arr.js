const isArray = require('./is').array;

function ensure(val) {
	return isArray(val) ? val : [val];
}

module.exports = {
	ensure,
};
