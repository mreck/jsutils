function evli(target, event, fn) {
	if (!target) target = document;
	target.addEventListener(event, fn);
	return {
		remove: () => target.removeEventListener(event, fn),
	};
}

evli.once = function (target, event, fn) {
	const x = evli(target, event, (...args) => {
		fn(...args);
		x.remove();
	});
};

module.exports = evli;
