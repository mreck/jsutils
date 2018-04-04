/* eslint-env mocha */

const expect = require('chai').expect;
const num = require('../src/num');

describe('num', function () {

	describe('isNum', function () {

		it('should correctly identify numbers', function () {
			expect(num.isNum(1)).to.be.true;
			expect(num.isNum(1.1)).to.be.true;
			expect(num.isNum(0)).to.be.true;
			expect(num.isNum(-15)).to.be.true;
		});

		it('should correctly identify NaNs', function () {
			expect(num.isNum(NaN)).to.be.false;
			expect(num.isNum('1.1')).to.be.false;
			expect(num.isNum(Infinity)).to.be.false;
			expect(num.isNum(true)).to.be.false;
			expect(num.isNum([])).to.be.false;
			expect(num.isNum({})).to.be.false;
		});
	});

});
