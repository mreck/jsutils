const $ = require('./$');
const { appendNode, createNode, div, node, removeNode, text } = require('./html');

const ROOT_CLASS = 'jsutils-log-popup';
const MSG_CLASS = 'jsutils-log-popup-message';
const PREFIX_CLASS = 'jsutils-log-popup-prefix';

class LogPopup {
	constructor(prefix = '>') {
		this.prefix = prefix;
		this.rootNode = createNode(div({ className: ROOT_CLASS }));
		this.shown = false;
	}
	show() {
		if (this.shown) {
			return;
		}
		this.shown = true;
		appendNode($('body'), this.rootNode);
	}
	hide() {
		if (!this.shown) {
			return;
		}
		removeNode($('body'), this.rootNode);
		this.shown = false;
	}
	print(...msgs) {
		for (let i = 0; i < msgs.length; i++) {
			appendNode(this.rootNode, div({ className: MSG_CLASS }, [
				node('span', { className: PREFIX_CLASS }, [text(this.prefix)]),
				node('span', 0, [text(msgs[i])]),
			]));
		}
		this.show();
	}
}

function create(prefix) {
	return new LogPopup(prefix);
}

module.exports = {
	create,
	LogPopup,
};
