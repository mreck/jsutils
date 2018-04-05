const event = require('./event');

const KEY_CODE = {
	BACKSPACE: 8,
	TAB: 9,
	ENTER: 13,
	SHIFT: 16,
	CTRL: 17,
	ALT: 19,
	ESCAPE: 27,
	PAGE_UP: 33,
	PAGE_DOWN: 34,
	END: 35,
	HOME: 36,
	ARROW_LEFT: 37,
	ARROW_UP: 38,
	ARROW_RIGHT: 39,
	ARROW_DOWN: 40,
	INSERT: 45,
	DELETE: 46,
};

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

function keyListener(node) {
	return new KeyListener(node || document);
}

keyListener.CODE = KEY_CODE;
keyListener.KeyListener = KeyListener;

module.exports = keyListener;
