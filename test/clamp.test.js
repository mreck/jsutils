/* eslint-env mocha */

const expect = require('chai').expect;
const clamp = require('../lib/clamp');

describe('clamp', function () {

	it('should just return the correct value', function () {
		expect(clamp(1, 0, 2)).to.equal(1);
		expect(clamp(-1, 0, 2)).to.equal(0);
		expect(clamp(3, 0, 2)).to.equal(2);
	});

	describe('each', function () {

		it('should just return the correct values', function () {
			expect(clamp.each([], 0, 4)).to.deep.equal([]);
			expect(clamp.each([1, -1, 5], 0, 4)).to.deep.equal([1, 0, 4]);
			expect(clamp.each([-2, -3, 5], 0, 4)).to.deep.equal([0, 0, 4]);
		});
	});
});
