/* eslint-env mocha */

const expect = require('chai').expect;
const map = require('../src/map');

describe('map', function () {

	it('should handle arrays correctly', function () {
		let count = 0;

		const res = map([1, 2, 3], function (x) {
			count += x;
			return x * 2;
		});

		expect(count).to.equal(6);
		expect(res).to.deep.equal([2, 4, 6]);
	});

	it('should handle objects correctly', function () {
		let count = 0;
		let test = '';

		const res = map({ a: 1, b: 2, c: 3 }, function (x, k) {
			test += k;
			count += x;
			return x * 2;
		});

		expect(test).to.equal('abc');
		expect(count).to.equal(6);
		expect(res).to.deep.equal([2, 4, 6]);
	});
});
