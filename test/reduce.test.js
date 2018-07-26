/* eslint-env mocha */

const expect = require('chai').expect;
const reduce = require('../lib/reduce');

describe('reduce', function () {

	it('should handle arrays correctly', function () {
		const count = reduce([1, 2, 3], 4, (sum, x) => sum + x);
		expect(count).to.equal(10);
	});

	it('should handle objects correctly', function () {
		const obj = { a: 1, b: 2, c: 3 };

		const count = reduce(obj, 0, (sum, x) => sum + x);
		expect(count).to.equal(6);

		const res = reduce(obj, { sum: 0 }, (sum, val, key) => {
			sum[key] = val * 2;
			sum.sum += val;
			return sum;
		});
		expect(res).to.deep.equal({ a: 2, b: 4, c: 6, sum: 6 });
	});
});
