/* eslint-env mocha */

const expect = require('chai').expect;
const { create, Obs } = require('../lib/obs');

describe('obs', function () {

	it('should be created correctly', function () {
		const x = create(1);
		expect(x._val).to.equal(1);
		expect(x._fn).to.deep.equal([]);
		expect(x instanceof Obs).to.be.true;
	});

	it('should handle get correctly', function () {
		const x = create(1);
		expect(x.get()).to.equal(1);
	});

	it('should handle set correctly', function () {
		const x = create(1);
		x.set(2);
		expect(x.get()).to.equal(2);
	});

	it('should handle add correctly', function () {
		const x = create(1);
		x.add(3);
		expect(x.get()).to.equal(4);
		x.add(-2);
		expect(x.get()).to.equal(2);
	});

	it('should handle validate correctly', function () {
		const x = create(1);
		x.validate(val => (val > 10 ? 10 : val));
		x.set(12);
		expect(x.get()).to.equal(10);
		x.add(2);
		expect(x.get()).to.equal(10);
	});

	it('should handle sub correctly', function () {
		const x = create();
		const fn1 = function () { };
		x.sub(fn1);
		expect(x._fn).to.deep.equal([fn1]);
		const fn2 = function () { };
		x.sub(fn2);
		expect(x._fn).to.deep.equal([fn1, fn2]);
	});

	it('should handle unsub correctly', function () {
		const x = create();
		const fn1 = function () { };
		const fn2 = function () { };
		x.sub(fn1);
		x.sub(fn2);
		x.unsub(fn1);
		expect(x._fn).to.deep.equal([fn2]);
	});

	it('should handle notify correctly', function () {
		let count = 0;
		const x = create();
		x.sub(function (ov, nv) { count += (ov + nv + 1); });
		x.sub(function (ov, nv) { count += (ov + nv + 3); });
		x._notify(2, 4);
		expect(count).to.equal(16);
	});

	it('should update correctly', function () {
		let calls = 0;
		const x = create(1);
		x.sub(function (nv, ov) {
			expect(ov).to.equal(1);
			expect(nv).to.equal(2);
			calls++;
		});
		x.set(1);
		x.set(2);
		expect(calls).to.equal(1);
	});
});
