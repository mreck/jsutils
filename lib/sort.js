function sort(arr) {
	return arr.sort((a, b) => a - b);
}

sort.by = function (arr, field) {
	return arr.sort((a, b) => a[field] - b[field]);
};

sort.localeCompare = function (arr) {
	return arr.sort((a, b) => a.localeCompare(b));
};

sort.localeCompare.by = function (arr, field) {
	return arr.sort((a, b) => a[field].localeCompare(b[field]));
};

sort.lcmp = sort.localeCompare;

module.exports = sort;
