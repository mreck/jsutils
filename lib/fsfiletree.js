const fs = require('fs');
const path = require('path');

function fsfiletree(dir, cb) {
	const result = { files: [], folders: {} };
	let remaining = 1;

	const parseDir = (dir, res) => {
		fs.readdir(dir, (err, files) => {
			if (err) {
				cb(err, null);
				return;
			}
			remaining--;

			const len = files.length;
			remaining += len;

			for (let i = 0; i < len; i++) {
				const fn = files[i];
				const fp = path.join(dir, fn);
				fs.lstat(fp, (err, stats) => {
					if (err) {
						cb(err, null);
						return;
					}
					if (stats.isDirectory()) {
						res.folders[fn] = { files: [], folders: {} };
						parseDir(fp, res.folders[fn]);
					} else {
						res.files.push(fn);
						remaining--;
					}

					if (remaining === 0) {
						cb(null, result);
					}
				});
			}
		});
	};
	parseDir(dir, result);
}

fsfiletree.p = function (dir) {
	return new Promise((resolve, reject) => {
		fsfiletree(dir, (err, tree) => err ? reject(err) : resolve(tree));
	});
};

fsfiletree.flatten = function (dir, cb) {
	fsfiletree(dir, (err, tree) => {
		if (err) {
			cb(err, null);
			return;
		}
		const res = [];
		const flatten = (root, subtree) => {
			for (let i = 0; i < subtree.files.length; i++) {
				res.push(path.join(root, subtree.files[i]));
			}
			for (let key in subtree.folders) {
				flatten(path.join(root, key), subtree.folders[key]);
			}
		};
		flatten('', tree);
		cb(null, res);
	});
};

fsfiletree.flatten.p = function (dir) {
	return new Promise((resolve, reject) => {
		fsfiletree.flatten(dir, (err, tree) => err ? reject(err) : resolve(tree));
	});
};

module.exports = fsfiletree;
