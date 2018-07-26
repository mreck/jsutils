/* eslint-env mocha */

const expect = require('chai').expect;
const contains = require('../lib/contains');

describe('contains', function () {

	it('should return true if the string contains the value', function () {
		const s = 'foobar';
		expect(contains(s, 'foo')).to.be.true;
		expect(contains(s, 'bar')).to.be.true;
		expect(contains(s, 'foobar')).to.be.true;
	});

	it('should return false if the string doesn\'t contain the value', function () {
		const s = 'foobar';
		expect(contains(s, '123')).to.be.false;
		expect(contains(s, 'baz')).to.be.false;
		expect(contains(s, 'foobaz')).to.be.false;
	});

	describe('contains.any', function () {

		it('should return true if the string contains any the values', function () {
			const s = 'foobar';
			expect(contains.any(s, 'foo')).to.be.true;
			expect(contains.any(s, 'baz', 'bar')).to.be.true;
			expect(contains.any(s, '1', '2', 'foo')).to.be.true;
		});

		it('should return false if the string doesn\'t contain any the values', function () {
			const s = 'foobar';
			expect(contains.any(s, '123', 'baz')).to.be.false;
			expect(contains.any(s, 'foobaz', 'fuz')).to.be.false;
		});
	});

	describe('contains.all', function () {

		it('should return true if the string contains all the values', function () {
			const s = 'foobar';
			expect(contains.all(s, 'foo', 'bar')).to.be.true;
			expect(contains.all(s, 'foobar', 'ob')).to.be.true;
		});

		it('should return false if the string doesn\'t contain all the values', function () {
			const s = 'foobar';
			expect(contains.all(s, 'foo', '123')).to.be.false;
			expect(contains.all(s, 'foobar', 'fuz')).to.be.false;
		});
	});

});
