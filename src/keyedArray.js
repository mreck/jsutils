const u_merge = require('./merge');

const OP_CREATE = 'KA_OP_CREATE';
const OP_UPDATE = 'KA_OP_UPDATE';
const OP_DELETE = 'KA_OP_DELETE';

class KeyedArray {
	constructor(keyField) {
		this._keyField = keyField;
		this._update = u_merge;
		this._data = [];
		this._map = {};
		this._subs = [];
	}
	_notify(op) {
		for (let i = 0; i < this._subs.length; i++) {
			this._subs[i](op);
		}
	}
	get data() {
		return this._data;
	}
	get keys() {
		return Object.keys(this._map);
	}
	at(index) {
		return this._data[index];
	}
	get(key) {
		return this._map[key];
	}
	find(fn) {
		return this._data.find(fn);
	}
	filter(fn) {
		return this._data.filter(fn);
	}
	push(...d) {
		this._data = this._data.concat(d);
		const len = d.length;
		for (let i = 0; i < len; i++) {
			const v = d[i];
			this._map[v[this._keyField]] = v;
		}
		this._notify(OP_CREATE);
	}
	update(id, d) {
		const lenData = this._data.length;
		for (let i = 0; i < lenData; i++) {
			const dataID = this._data[i][this._keyField];
			if (dataID === id) {
				this._data[i] = this._update(this._data[i], d);
				const newID = this._data[i][this._keyField];
				this._map[newID] = this._data[i];
				this._notify(OP_UPDATE);
				break;
			}
		}
	}
	delete(id) {
		const lenData = this._data.length;
		for (let i = 0; i < lenData; i++) {
			const dataID = this._data[i][this._keyField];
			if (dataID === id) {
				this._data.splice(i, 1);
				delete this._map[id];
				this._notify(OP_DELETE);
				break;
			}
		}
	}
	sub(fn) {
		this._subs.push(fn);
	}
	unsub(fn) {
		const len = this._subs.length;
		for (let i = 0; i < len; i++) {
			if (this._subs[i] === fn) {
				this._subs.splice(i, 1);
			}
		}
	}
}

function create(keyField) {
	return new KeyedArray(keyField || 'id');
}

module.exports = {
	create,
	KeyedArray,
	OP_CREATE,
	OP_UPDATE,
	OP_DELETE,
};
