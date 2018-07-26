const fs_exists = require('fs').exists;
const fs_mkdir = require('fs').mkdir;
const path_join = require('path').join;

function mkdir(path, cb) {
	path = path.split('/');
	let end = 0;
	const run = () => {
		end++;
		if (end > path.length) {
			cb(null);
			return;
		}
		const p = path_join(...path.slice(0, end));
		fs_exists(p, (exists) => {
			if (exists) {
				run();
				return;
			}
			fs_mkdir(p, (err) => {
				if (err) {
					cb(err);
					return;
				}
				run();
			});
		});
	};
	run();
}

mkdir.p = function (path) {
	return new Promise((res, rej) => mkdir(path, (err) => err ? rej(err) : res()));
};

module.exports = mkdir;
