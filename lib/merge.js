function merge(target, ...data) {
	for (let i = 0; i < data.length; i++) {
		const d = data[i];
		for (const key in d) {
			if (d.hasOwnProperty(key)) {
				target[key] = d[key];
			}
		}
	}
	return target;
}

module.exports = merge;
