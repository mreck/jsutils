function req(method, url, data, cb) {
	const request = new XMLHttpRequest();

	request.open(method, url, true);

	if (data) {
		request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	}

	request.onload = () => {
		if (request.status >= 200 && request.status < 400) {
			const d = JSON.parse(request.responseText);
			cb(null, d);
		} else {
			cb(new Error('status: ' + request.status), null);
		}
	};

	request.onerror = (ev) => cb(ev, null);

	if (data) {
		request.send(JSON.stringify(data));
	} else {
		request.send();
	}
}

req.p = (method, url, data) => new Promise((res, rej) =>
	req(method, url, data, (err, data) => err ? rej(err) : res(data)));

// http methods
req.MGET = 'GET';
req.MPOST = 'POST';
req.MPUT = 'PUT';
req.MDELETE = 'DELETE';

// shorthands
req.get = (url, data, cb) => req(req.MGET, url, data, cb);
req.post = (url, data, cb) => req(req.MPOST, url, data, cb);
req.put = (url, data, cb) => req(req.MPUT, url, data, cb);
req.del = (url, data, cb) => req(req.MDELETE, url, data, cb);

// promise shorthands
req.get.p = (url, data) => new Promise((res, rej) =>
	req.get(url, data, (err, data) => err ? rej(err) : res(data)));

req.post.p = (url, data) => new Promise((res, rej) =>
	req.post(url, data, (err, data) => err ? rej(err) : res(data)));

req.put.p = (url, data) => new Promise((res, rej) =>
	req.put(url, data, (err, data) => err ? rej(err) : res(data)));

req.del.p = (url, data) => new Promise((res, rej) =>
	req.del(url, data, (err, data) => err ? rej(err) : res(data)));

module.exports = req;
