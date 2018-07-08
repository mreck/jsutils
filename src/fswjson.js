const fs = require('fs');

function fswjson(filename, data, indent = null, encoding = 'utf8', cb = null) {
	if (encoding === null) {
		encoding = 'utf8';
	}
	try {
		const str = indent ? JSON.stringify(data, null, indent) : JSON.stringify(data);
		if (cb) {
			fs.writeFile(filename, str, encoding, cb);
		} else {
			return fs.writeFileSync(filename, str, encoding);
		}
	} catch (err) {
		if (cb) {
			cb(err);
		} else {
			return err;
		}
	}
}

fswjson.p = function (filename, data, indent = null, encoding = null) {
	return new Promise((resolve, reject) => {
		fswjson(filename, data, indent, encoding, (err) => err ? reject(err) : resolve());
	});
};

module.exports = fswjson;
