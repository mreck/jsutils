class Emitter {
	constructor() {
		this._cb = {};
		this._cb_all = [];
	}
	sub(ev, cb) {
		if (!this._cb[ev]) {
			this._cb[ev] = [];
		}
		this._cb[ev].push(cb);
	}
	unsub(ev, cb) {
		if (!this._cb[ev]) {
			return;
		}
		const i = this._cb[ev].indexOf(cb);
		if (i > -1) {
			this._cb[ev].splice(i, 1);
		}
	}
	sub_all(cb) {
		this._cb_all.push(cb);
	}
	unsub_all(cb) {
		const i = this._cb_all.indexOf(cb);
		if (i > -1) {
			this._cb_all.splice(i, 1);
		}
	}
	emit(ev, msg) {
		const cbs = this._cb[ev];
		if (cbs) {
			for (let i = 0; i < cbs.length; i++) {
				cbs[i](msg);
			}
		}
		for (let i = 0; i < this._cb_all.length; i++) {
			this._cb_all[i](ev, msg);
		}
	}
}

function create() {
	return new Emitter();
}

module.exports = {
	create,
	Emitter,
};
