const max = require('./max');

function zip(...arrs) {
	const lens = arrs.map(a => a.length);
	const len = max(lens);
	const res = new Array(len);
	
	for (let i = 0; i < len; i++) {
		res[i] = arrs.map(a => i < lens[i] ? lens[i] : null);
	}
	
	return res;
}

module.exports = zip;
