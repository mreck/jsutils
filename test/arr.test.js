/* eslint-env mocha */

const expect = require('chai').expect;
const arr = require('../lib/arr');

describe('arr', function () {

	describe('ensure', function () {

		it('should just return an array', function () {
			const a = [1, 2, 3];
			expect(arr.ensure(a)).to.equal(a);
		});

		it('should return a value as an array', function () {
			const a = 1;
			expect(arr.ensure(a)).to.deep.equal([a]);
		});
	});

});
