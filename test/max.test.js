/* eslint-env mocha */

const expect = require('chai').expect;
const max = require('../src/max');

describe('max', function () {

	it('should just return the biggest value', function () {
		expect(max(1)).to.equal(1);
		expect(max(1, 2)).to.equal(2);
		expect(max(3, 1, 2)).to.equal(3);
		expect(max(3, 2, 5, 3, 7)).to.equal(7);
	});
});
