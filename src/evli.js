const $ = require('./$');
const isStr = require('./str').isStr;

function evli(target, event, fn) {
	if (!target) {
		target = document;
	}
	if (isStr(target)) {
		target = $(target);
		if (!target) return null;
	}
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
