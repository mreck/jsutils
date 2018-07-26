/* eslint-env mocha */

const expect = require('chai').expect;
const match = require('../lib/match');

describe('match', function () {

	it('should match correctly', function () {
		const obj_map = { '1': true, 'foo': 'bar' };
		expect(match('1', obj_map)).to.equal(true);
		expect(match('foo', obj_map)).to.equal('bar');
	});
});
