/* eslint-env mocha */

const expect = require('chai').expect;
const sanitizer = require('../src/sanitizer');

describe('sanitizer', function () {

	describe('num', function () {

		it('should sanitize for max values correctly', function () {
			const s = sanitizer.num({ max: 10 });
			expect(s(5)).to.equal(5);
			expect(s(10)).to.equal(10);
			expect(s(11)).to.equal(10);
		});

		it('should sanitize for min values correctly', function () {
			const s = sanitizer.num({ min: 5 });
			expect(s(4)).to.equal(5);
			expect(s(5)).to.equal(5);
			expect(s(10)).to.equal(10);
		});
	});

});
