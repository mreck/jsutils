function req(type, url, data) {
	return new Promise(function (resolve, reject) {
		var request = new XMLHttpRequest();

		request.open(type, url, true);

		if (data) {
			request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}

		request.onload = function () {
			if (request.status >= 200 && request.status < 400) {
				var d = JSON.parse(request.responseText);
				resolve(d);
			} else {
				reject();
			}
		};

		request.onerror = function () {
			reject();
		};

		if (data) {
			request.send(JSON.stringify(data));
		} else {
			request.send();
		}
	});
}

const GET = 'GET';
const POST = 'POST';

module.exports = {
	json: {
		get: function (url) {
			return req(GET, url);
		},
		post: function (url, data) {
			return req(POST, url, data);
		}
	}
};
