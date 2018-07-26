/* eslint-env mocha */

const expect = require('chai').expect;
const is = require('../lib/is');

describe('is', function () {

	describe('array', function () {

		it('should identify arrays correctly', function () {
			expect(is.array([])).to.be.true;
			expect(is.array({})).to.be.false;
			expect(is.array(1)).to.be.false;
			expect(is.array('')).to.be.false;
			expect(is.array(() => { })).to.be.false;
		});
	});

	describe('number', function () {

		it('should identify numbers correctly', function () {
			expect(is.number([])).to.be.false;
			expect(is.number({})).to.be.false;
			expect(is.number(1)).to.be.true;
			expect(is.number('')).to.be.false;
			expect(is.number(() => { })).to.be.false;
		});
	});

	describe('string', function () {

		it('should identify strings correctly', function () {
			expect(is.string([])).to.be.false;
			expect(is.string({})).to.be.false;
			expect(is.string(1)).to.be.false;
			expect(is.string('')).to.be.true;
			expect(is.string(() => { })).to.be.false;
		});
	});

	describe('function', function () {

		it('should identify functions correctly', function () {
			expect(is.function([])).to.be.false;
			expect(is.function({})).to.be.false;
			expect(is.function(1)).to.be.false;
			expect(is.function('')).to.be.false;
			expect(is.function(() => { })).to.be.true;
		});
	});
});
