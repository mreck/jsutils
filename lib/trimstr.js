function trimstr(str, trim_left, trim_right) {
	if (trim_left && str.startsWith(trim_left)) {
		str = str.slice(trim_left.length);
	}
	if (trim_right && str.endsWith(trim_right)) {
		str = str.slice(0, str.length - 1 - trim_right.length);
	}
	return str;
}

module.exports = trimstr;
