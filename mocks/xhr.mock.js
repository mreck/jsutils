let _handleSend = () => { };

class XhrMock {
	constructor() {
		this._status = 0;
		this._responseText = '';
		this._header = {};
		this._onload = () => { };
		this._onerror = () => { };
	}
	set onload(cb) {
		this._onload = cb;
	}
	set onerror(cb) {
		this._onerror = cb;
	}
	open(method, url, async, user, password) {
		this._method = method;
		this._url = url;
		this._async = async;
		this._user = user;
		this._password = password;
	}
	setRequestHeader(header, value) {
		this._header[header] = value;
	}
	send(body) {
		this._body = body;
		_handleSend.call(this);
	}
}

XhrMock._t_setup = function () {
	global.XMLHttpRequest = XhrMock;
};

XhrMock._t_handleSend = function (cb) {
	_handleSend = cb;
};

module.exports = XhrMock;
