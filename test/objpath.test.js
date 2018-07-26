/* eslint-env mocha */

const expect = require('chai').expect;
const objpath = require('../lib/objpath');

describe('objpath', function () {

	it('should handle valid input correctly', function () {
		const obj = {
			foo: {
				bar: {
					baz: 2,
				},
				foo: {
					bar: {
						baz: 4,
					},
				},
			},
		};

		expect(objpath(obj, 'foo.bar.baz')).to.equal(2);
		expect(objpath(obj, 'foo.foo.bar.baz')).to.equal(4);
		expect(objpath(obj, 'foo.foo.foo')).to.equal(null);
	});
	
	it('should handle invalid input correctly', function () {
		expect(objpath(null, 'foo')).to.equal(null);
		expect(objpath({ foo: 1 }, 123)).to.equal(null);
		expect(objpath({ foo: 1 }, { bar: 2 })).to.equal(null);
	});
});
