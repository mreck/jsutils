/* eslint-env mocha */

const expect = require('chai').expect;
const each = require('../lib/each');

describe('each', function () {

	it('should handle arrays correctly', function () {
		let count = 0;
		each([1, 2, 3], function (x) { count += x; });
		expect(count).to.equal(6);
	});

	it('should handle objects correctly', function () {
		let count = 0;
		let test = '';

		each({ a: 1, b: 2, c: 3 }, function (x, k) {
			test += k;
			count += x;
		});

		expect(test).to.equal('abc');
		expect(count).to.equal(6);
	});
});
