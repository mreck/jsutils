/* eslint-env mocha */

const expect = require('chai').expect;
const str = require('../src/str');

describe('str', function () {

	describe('contains', function () {

		it('should return true if the string contains the value', function () {
			const s = 'foobar';
			expect(str.contains(s, 'foo')).to.be.true;
			expect(str.contains(s, 'bar')).to.be.true;
			expect(str.contains(s, 'foobar')).to.be.true;
		});

		it('should return false if the string doesn\'t contain the value', function () {
			const s = 'foobar';
			expect(str.contains(s, '123')).to.be.false;
			expect(str.contains(s, 'baz')).to.be.false;
			expect(str.contains(s, 'foobaz')).to.be.false;
		});
	});

	describe('containsAny', function () {

		it('should return true if the string contains any the values', function () {
			const s = 'foobar';
			expect(str.containsAny(s, 'foo')).to.be.true;
			expect(str.containsAny(s, 'baz', 'bar')).to.be.true;
			expect(str.containsAny(s, '1', '2', 'foo')).to.be.true;
		});

		it('should return false if the string doesn\'t contain any the values', function () {
			const s = 'foobar';
			expect(str.containsAny(s, '123', 'baz')).to.be.false;
			expect(str.containsAny(s, 'foobaz', 'fuz')).to.be.false;
		});
	});

	describe('containsAll', function () {

		it('should return true if the string contains all the values', function () {
			const s = 'foobar';
			expect(str.containsAll(s, 'foo', 'bar')).to.be.true;
			expect(str.containsAll(s, 'foobar', 'ob')).to.be.true;
		});

		it('should return false if the string doesn\'t contain all the values', function () {
			const s = 'foobar';
			expect(str.containsAll(s, 'foo', '123')).to.be.false;
			expect(str.containsAll(s, 'foobar', 'fuz')).to.be.false;
		});
	});

});
