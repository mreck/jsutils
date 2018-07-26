const event = require('./event');
const keyCode = require('./keyCode');

class KeyListener {
	constructor(node) {
		this._emitter = event.emitter();
		node.addEventListener('keypress', this._handler.bind(this));
	}
	_handler(ev) {
		this._emitter.emit(ev.keyCode);
	}
	on(key_code, fn) {
		this._emitter.sub(key_code, fn);
	}
	off(key_code, fn) {
		this._emitter.unsub(key_code, fn);
	}
}

function create(node) {
	return new KeyListener(node || document);
}

// TODO: remove for the next major version
create.CODE = keyCode;

create.KeyListener = KeyListener;

module.exports = create;
