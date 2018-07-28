const $ = require('./$');
const ensureArray = require('./ensure').array;
const evli = require('./evli');
const { appendNode, createNode, div, removeNode } = require('./html');

const MODAL_CLASS = 'jsu-modal';
const BLOCKER_CLASS = 'jsu-modal-blocker';

class Modal {
	constructor(content) {
		this.el = createNode(div({ className: MODAL_CLASS }, ensureArray(content)));
		this.blocker = createNode(div({ className: BLOCKER_CLASS }, [this.el]));
	}
	show() {
		appendNode($('body'), this.blocker);
		this.blockerClickListener = evli(this.blocker, 'click', (ev) => {
			if (ev.target === this.blocker) {
				this.hide();
			}
		});
	}
	hide() {
		removeNode($('body'), this.blocker);
		this.blockerClickListener.remove();
	}
}

function create(content) {
	return new Modal(content);
}

module.exports = {
	create,
	Modal,
};
