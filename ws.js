class WS {
	constructor(url) {
		this._ws = new WebSocket(url);
	}
	onClose(fn) {
		this._ws.onclose = fn;
	}
	onError(fn) {
		this._ws.onerror = fn;
	}
	onMessage(fn) {
		this._ws.onmessage = fn;
	}
	onOpen(fn) {
		this._ws.onopen = fn;
	}
	close() {
		this._ws.close();
	}
	send(d) {
		this._ws.send(d);
	}
	sendJSON(d) {
		this.send(JSON.stringify(d));
	}
}

function createWS(url) {
	return new WS(url);
}

module.exports = {
	create: createWS,
};
