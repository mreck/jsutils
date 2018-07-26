const fs = require('fs');

function fsrdir(dir, cb) {
	if (cb) {
		fs.readdir(dir, (err, files) => cb(err || null, files || null));
	} else {
		return fs.readdirSync(dir);
	}
}

fsrdir.p = function (dir) {
	return new Promise((resolve, reject) => {
		fsrdir(dir, (err, tree) => err ? reject(err) : resolve(tree));
	});
};

module.exports = fsrdir;
