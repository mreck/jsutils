const fs = require('fs');

function fsrjson(filename, encoding = 'utf8', cb = null) {
	if (encoding === null) {
		encoding = 'utf8';
	}
	if (cb) {
		fs.readFile(filename, encoding, (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				try {
					const res = JSON.parse(data);
					cb(null, res);
				} catch (err) {
					cb(err, null);
				}
			}
		});
	} else {
		try {
			const data = fs.readFileSync(filename, encoding);
			const res = JSON.parse(data);
			return res;
		} catch (err) {
			return null;
		}
	}
}

fsrjson.p = function (filename, encoding = null) {
	return new Promise((resolve, reject) => {
		fsrjson(filename, encoding, (err, res) => err ? reject(err) : resolve(res));
	});
};

module.exports = fsrjson;
