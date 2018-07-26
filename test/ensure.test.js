/* eslint-env mocha */

const expect = require('chai').expect;
const ensure = require('../lib/ensure');

describe('ensure', function () {

	describe('array', function () {

		it('should just return an array', function () {
			const a = [1, 2, 3];
			expect(ensure.array(a)).to.equal(a);
		});

		it('should return a value as an array', function () {
			const a = 1;
			expect(ensure.array(a)).to.deep.equal([a]);
		});
	});

});
