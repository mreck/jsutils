/* eslint-env mocha */

const expect = require('chai').expect;
const min = require('../lib/min');

describe('min', function () {

	it('should just return the biggest value', function () {
		expect(min(1)).to.equal(1);
		expect(min(1, 2)).to.equal(1);
		expect(min(3, 1, 2)).to.equal(1);
		expect(min(3, 2, 5, 3, 7)).to.equal(2);
	});
});
