const fs = require('fs');

const merge_safe = require('./merge').safe;

const default_opts = {
	encoding: 'utf8',
	delimitor: ',',
	header: true,
};

function parse_csv(data, delimitor) {
	const res = [];
	const lines = data.split(/\r\n|\n/g);
	for (let i = 0; i < lines.length; i++) {
		if (lines[i].length === 0) {
			continue;
		}
		res.push(lines[i].split(delimitor));
	}
	return res;
}

function fsrcsv(filename, opts = {}, cb = null) {
	merge_safe(opts, default_opts);
	if (cb) {
		fs.readFile(filename, opts, (err, data) => {
			if (err) {
				cb(err, null);
			} else {
				const res = parse_csv(data, opts.delimitor);
				cb(null, res);
			}
		});
	} else {
		const data = fs.readFileSync(filename, opts);
		if (!data) {
			return null;
		}
		return parse_csv(data, opts.delimitor);
	}
}

fsrcsv.p = function (filename, opts) {
	return new Promise((resolve, reject) => {
		fsrcsv(filename, opts, (err, res) => err ? reject(err) : resolve(res));
	});
};

fsrcsv.csv_to_obj = function (data, header) {
	const res = [];
	let len, i = 0;
	if (header) {
		len = data[0].length;
		i = 1;
	}
	for (; i < data.length; i++) {
		const el = {};
		if (!header) {
			len = data[i].length;
		}
		for (let j = 0; j < len; j++) {
			el[header ? data[0][j] : j] = data[i][j] || null;
		}
		res.push(el);
	}
	return res;
};

fsrcsv.obj = function (filename, opts = {}, cb = null) {
	merge_safe(opts, default_opts);
	if (cb) {
		fsrcsv(filename, opts, (err, data) => {
			if (err) {
				cb(err);
			} else {
				cb(null, fsrcsv.csv_to_obj(data, opts.header));
			}
		});
	} else {
		return fsrcsv.csv_to_obj(fsrcsv(filename, opts), opts.header);
	}
};

fsrcsv.obj.p = function (filename, opts) {
	return new Promise((resolve, reject) => {
		fsrcsv(filename, opts, (err, res) => err ? reject(err) : resolve(res));
	});
};

module.exports = fsrcsv;
