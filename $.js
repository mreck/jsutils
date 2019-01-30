function $(query, root = document) {
	const q = query[0];
	if (q === '#') {
		return root.getElementById(query.slice(1));
	}
	if (q === '.') {
		const res = root.getElementsByClassName(query.slice(1));
		return (res && res.length > 0) ? res[0] : null;
	}
	if (root.querySelector) {
		return root.querySelector(query);
	}
	return null;
}

$.all = function (query, root = document) {
	const q = query[0];
	if (q === '#') {
		return [root.getElementById(query.slice(1))];
	}
	if (q === '.') {
		return root.getElementsByClassName(query.slice(1));
	}
	if (root.querySelector) {
		return root.querySelectorAll(query);
	}
	return [];
};

module.exports = $;
