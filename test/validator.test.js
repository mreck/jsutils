/* eslint-env mocha */

const expect = require('chai').expect;
const validator = require('../src/validator');

describe('validator', function () {

	describe('num', function () {

		it('should validate max values correctly', function () {
			const v = validator.num({ max: 10 });
			expect(v(5)).to.be.true;
			expect(v(10)).to.be.true;
			expect(v(11)).to.be.false;
		});

		it('should validate min values correctly', function () {
			const v = validator.num({ min: 5 });
			expect(v(4)).to.be.false;
			expect(v(5)).to.be.true;
			expect(v(10)).to.be.true;
		});
	});

});
