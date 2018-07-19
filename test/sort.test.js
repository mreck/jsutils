/* eslint-env mocha */

const expect = require('chai').expect;
const sort = require('../src/sort');

function getObjArr() {
	return [
		{ a: 'test a2', b: 'test b3', c: 1 },
		{ a: 'test a1', b: 'test b2', c: 3 },
		{ a: 'test a3', b: 'test b1', c: 2 },
	];
}

describe('sort', function () {

	it('should sort correctly', function () {
		expect(sort([4, 2, 3, 1])).to.deep.equal([1, 2, 3, 4]);
		expect(sort([5, 2, 3, 2, 5])).to.deep.equal([2, 2, 3, 5, 5]);
	});

	describe('sort.by', function () {

		it('should sort correctly', function () {
			expect(sort.by(getObjArr(), 'c')).to.deep.equal([
				{ a: 'test a2', b: 'test b3', c: 1 },
				{ a: 'test a3', b: 'test b1', c: 2 },
				{ a: 'test a1', b: 'test b2', c: 3 },
			]);
		});
	});

	describe('sort.localeCompare', function () {

		it('should sort correctly', function () {
			expect(sort.localeCompare(['foo', 'baz', 'bar'])).to.deep.equal(['bar', 'baz', 'foo']);
			expect(sort.localeCompare(['x', 'a', 'x', 'b', 'a', 'c'])).to.deep.equal(['a', 'a', 'b', 'c', 'x', 'x']);
		});


	});

	describe('sort.localeCompare.by', function () {

		it('should sort correctly', function () {
			expect(sort.localeCompare.by(getObjArr(), 'a')).to.deep.equal([
				{ a: 'test a1', b: 'test b2', c: 3 },
				{ a: 'test a2', b: 'test b3', c: 1 },
				{ a: 'test a3', b: 'test b1', c: 2 },
			]);
			expect(sort.localeCompare.by(getObjArr(), 'b')).to.deep.equal([
				{ a: 'test a3', b: 'test b1', c: 2 },
				{ a: 'test a1', b: 'test b2', c: 3 },
				{ a: 'test a2', b: 'test b3', c: 1 },
			]);
		});
	});

	describe('sort.lcmp', function () {

		it('should be a shorthand for sort.localeCompare', function () {
			expect(sort.lcmp).to.equal(sort.localeCompare);
			expect(sort.lcmp.by).to.equal(sort.localeCompare.by);
		});
	});
});
