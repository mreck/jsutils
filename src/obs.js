class Obs {
	constructor(val) {
		this._val = val;
		this._fn = [];
	}
	_notify(old_val, new_val) {
		for (var i = 0; i < this._fn.length; i++) {
			this._fn[i](old_val, new_val);
		}
	}
	get() {
		return this._val;
	}
	set(new_val) {
		if (this._val !== new_val) {
			const old_val = this._val;
			this._val = new_val;
			this._notify(old_val, new_val);
		}
	}
	add(val) {
		const old_val = this._val;
		const new_val = this._val + val;
		this._val = new_val;
		this._notify(old_val, new_val);
	}
	sub(fn) {
		this._fn.push(fn);
	}
	unsub(fn) {
		const i = this._fn.indexOf(fn);
		if (i > -1) {
			this._fn.splice(i, 1);
		}
	}
}

function obs(val) {
	return new Obs(val);
}

obs.Obs = Obs;

module.exports = obs;
