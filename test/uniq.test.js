/* eslint-env mocha */

const expect = require('chai').expect;
const uniq = require('../src/uniq');

describe('uniq', function () {

	it('should return the correct unique array', function () {
		expect(uniq([])).to.deep.equal([]);
		expect(uniq([1, 2, 3, 1])).to.deep.equal([1, 2, 3]);
		expect(uniq([5, 2, 3, 2, 5])).to.deep.equal([5, 2, 3]);
	});

	describe('uniq.sorted', function () {

		it('should return the correct unique array', function () {
			expect(uniq.sorted([])).to.deep.equal([]);
			expect(uniq.sorted([1, 2, 2, 2, 3, 3, 4, 4, 5])).to.deep.equal([1, 2, 3, 4, 5]);
			expect(uniq.sorted([-1, -1, 5, 7, 7])).to.deep.equal([-1, 5, 7]);
		});
	});
});
