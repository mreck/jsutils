const isElement = require('./is').element;

function node(tagName, opts, children) {
	return { tagName, opts, children };
}

function div(opts, children) {
	return { tagName: 'div', opts, children };
}

function text(content) {
	return { tagName: 'text', children: content };
}

function createNode({ tagName, opts, children }) {
	if (tagName === 'text') {
		return document.createTextNode(children);
	}
	const node = document.createElement(tagName);
	if (opts) {
		const { id, className, style } = opts;
		if (id) {
			node.setAttribute('id', id);
		}
		if (className) {
			node.setAttribute('class', className);
		}
		if (style) {
			for (const key in style) {
				if (style.hasOwnProperty(key)) {
					node.style[key] = style[key];
				}
			}
		}
	}
	if (children) {
		for (let i = 0; i < children.length; i++) {
			const c = children[i];
			node.appendChild(isElement(c) ? c : createNode(c));
		}
	}
	return node;
}

function appendNode(parent, child) {
	if (!parent) {
		parent = document;
	}
	parent.appendChild(child);
}

function removeNode(parent, child) {
	if (!parent) {
		parent = document;
	}
	return parent.removeChild(child);
}

module.exports = {
	node,
	div,
	text,
	createNode,
	appendNode,
	removeNode,
};
