/* eslint-env mocha */

const expect = require('chai').expect;
const req = require('../src/req');

const XhrMock = require('../mocks/xhr.mock');

XhrMock._t_setup();


describe('req', function () {

	it('should just return an array', function () {
		const t = {
			method: req.MGET,
			url: 'test.com',
			data: null,
		};

		XhrMock._t_handleSend(function () {
			expect(this._method).to.equal(t.method);
			expect(this._url).to.equal(t.url);
		});

		req(t.method, t.url, t.data, (err, data) => {
			console.log(err, data);
		});
	});



});
