/* eslint-env mocha */

const expect = require('chai').expect;
const merge = require('../lib/merge');

describe('merge', function () {

	it('should handle one piece of data', function () {
		const t = { a: 1, b: 2, c: 3 };
		const d = { a: 4, d: 5 };
		merge(t, d);
		expect(t).to.deep.equal({ a: 4, b: 2, c: 3, d: 5 });
	});

	it('should handle multiple pieces of data', function () {
		const d1 = { a: 1, b: 2, c: 3 };
		const d2 = { a: 4, d: 5 };
		const d3 = { a: 6, e: 7 };
		const t = merge({}, d1, d2, d3);
		expect(t).to.deep.equal({ a: 6, b: 2, c: 3, d: 5, e: 7 });
	});

	describe('merge.safe', function () {

		it('should handle one piece of data', function () {
			const t = { a: 1, b: 2, c: 3 };
			const d = { a: 4, d: 5 };
			merge.safe(t, d);
			expect(t).to.deep.equal({ a: 1, b: 2, c: 3, d: 5 });
		});

		it('should handle multiple pieces of data', function () {
			const d1 = { a: 1, b: 2, c: 3 };
			const d2 = { a: 4, d: 5 };
			const d3 = { a: 6, e: 7 };
			const t = merge.safe({}, d1, d2, d3);
			expect(t).to.deep.equal({ a: 1, b: 2, c: 3, d: 5, e: 7 });
		});
	});
});
