const m = {
	get: 'GET',
	post: 'POST',
	put: 'PUT',
	delete: 'DELETE',
};

const ct = {
	text: 'text; charset=utf-8',
	json: 'application/json; charset=utf-8',
};

function req(method, url, ctype = ct.text, data = null, cb = null) {
	const request = new XMLHttpRequest();

	request.open(method, url, true);

	if (data) {
		request.setRequestHeader('Content-type', ctype);
	}

	if (cb) {
		request.onload = () => {
			if (request.status >= 200 && request.status < 400) {
				const res = JSON.parse(request.responseText);
				cb(null, res);
			} else {
				cb(new Error('status: ' + request.status));
			}
		};

		request.onerror = (ev) => cb(ev);
	}

	if (data) {
		switch (ctype) {
			case ct.text:
				request.send(String(data));
				break;
			case ct.json:
				request.send(JSON.stringify(data));
				break;
		}
	} else {
		request.send();
	}
}

req.p = function (method, url, ctype, data) {
	return new Promise((res, rej) => req(method, url, ctype, data, (e, d) => e ? rej(e) : res(d)));
};

req.m = m;
req.ct = ct;

req.json = {};

req.json.get = function (url, cb) {
	return req(m.get, url, ct.json, null, cb);
};

req.json.get.p = function (url) {
	return new Promise((res, rej) => req.json.get(url, (e, d) => e ? rej(e) : res(d)));
};

req.json.post = function (url, data, cb) {
	return req(m.post, url, ct.json, data, cb);
};

req.json.post.p = function (url, data) {
	return new Promise((res, rej) => req.json.post(url, data, (e, d) => e ? rej(e) : res(d)));
};

module.exports = req;
