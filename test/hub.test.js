/* eslint-env mocha */

const expect = require('chai').expect;
const hub = require('../lib/hub');

describe('hub', function () {

	describe('create', function () {

		it('should just return a Hub', function () {
			const h = hub.create();
			expect(h instanceof hub.Hub).to.be.true;
		});
	});

	describe('Hub', function () {

		it('should allow you to provide values', function () {
			const h = hub.create();
			h.provide('a', 1);
			h.provide('b', 2);
			expect(h._provided).to.deep.equal({ a: 1, b: 2 });
		});

		it('should not allow you to provide the same twice', function () {
			const h = hub.create();
			h.provide('a', 1);
			const err = h.provide('a', 2);
			expect(err instanceof Error).to.be.true;
			expect(h._provided).to.deep.equal({ a: 1 });
		});

		it('should allow you to override provided values', function () {
			const h = hub.create();
			h.provide('a', 1);
			h.provideOverride('a', 2);
			expect(h._provided).to.deep.equal({ a: 2 });
		});

		it('should allow you to provide multiple values', function () {
			const h = hub.create();
			h.provideAll({ a: 1, b: 2 });
			expect(h._provided).to.deep.equal({ a: 1, b: 2 });
		});

		it('should allow you to request values', function () {
			const h = hub.create();
			h.provide('a', 1);
			h.provide('b', 2);
			expect(h.request('a')).to.equal(1);
			expect(h.request('b')).to.equal(2);
		});
	});
});
