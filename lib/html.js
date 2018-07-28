const $ = require('./$');
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

function addClassName(target, className) {
	if (!isElement(target)) {
		target = $(target);
	}
	const names = target.className.split(' ').map(s => s.trim());
	if (names.indexOf(className) === -1) {
		names.push(className);
		target.className = names.join(' ');
	}
}

function removeClassName(target, className) {
	if (!isElement(target)) {
		target = $(target);
	}
	const names = target.className.split(' ').map(s => s.trim());
	const idx = names.indexOf(className);
	if (idx !== -1) {
		names.splice(idx, 1);
		target.className = names.join(' ');
	}
}

module.exports = {
	node,
	div,
	text,
	createNode,
	appendNode,
	removeNode,
	addClassName,
	removeClassName,
};
