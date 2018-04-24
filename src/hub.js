var u_each = require('./each');

class Hub {
	constructor() {
		this._provided = {};
	}
	provide(key, val) {
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
