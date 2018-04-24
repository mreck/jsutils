var u_each = require('./each');

class Hub {
	constructor() {
		this._provided = {};
	}
	provide(key, val) {
		if (this._provided[key]) {
			return new Error('already provided: ' + key);
		}

		this._provided[key] = val;
	}
	provideOverride(key, val) {
		this._provided[key] = val;
	}
	provideAll(obj) {
		u_each(obj, (val, key) => this.provide(key, val));
	}
	request(key) {
		return this._provided[key];
	}
}

function create() {
	return new Hub();
}

module.exports = {
	Hub,
	create,
};
