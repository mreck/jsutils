/* eslint-env mocha */

const expect = require('chai').expect;
const mapobj = require('../src/mapobj');

describe('mapobj', function () {

	it('should handle arrays correctly', function () {
		let count = 0;

		const res = mapobj([1, 2, 3], function (x, push) {
			count += x;
			push(x, x * 2);
		});

		expect(count).to.equal(6);
		expect(res).to.deep.equal({ 1: 2, 2: 4, 3: 6 });
	});

	it('should handle objects correctly', function () {
		let count = 0;

		const res = mapobj({ a: 1, b: 2, c: 3 }, function (k, x, push) {
			count += x;
			push(k, x * 2);
		});

		expect(count).to.equal(6);
		expect(res).to.deep.equal({ a: 2, b: 4, c: 6 });
	});
});
