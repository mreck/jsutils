/* eslint-env mocha */

const expect = require('chai').expect;
const { create, Emitter } = require('../lib/emitter');

describe('event', function () {

	describe('emitter', function () {

		it('should be created correctly', function () {
			const eve = create();
			expect(eve._cb).to.deep.equal({});
			expect(eve._cb_all).to.deep.equal([]);
			expect(eve instanceof Emitter).to.be.true;
		});

		it('should handle sub correctly', function () {
			const eve = create();

			const fn1 = function () { };
			const fn2 = function () { };

			eve.sub('a', fn1);
			eve.sub('a', fn2);
			eve.sub('b', fn2);

			expect(eve._cb).to.deep.equal({ a: [fn1, fn2], b: [fn2] });
			expect(eve._cb_all).to.deep.equal([]);
		});

		it('should handle unsub correctly', function () {
			const eve = create();

			const fn1 = function () { };
			const fn2 = function () { };

			eve.sub('a', fn1);
			eve.sub('a', fn2);
			eve.sub('b', fn1);
			eve.sub('b', fn2);
			expect(eve._cb).to.deep.equal({ a: [fn1, fn2], b: [fn1, fn2] });
			expect(eve._cb_all).to.deep.equal([]);

			eve.unsub('a', fn1);
			eve.unsub('b', fn2);

			expect(eve._cb).to.deep.equal({ a: [fn2], b: [fn1] });
			expect(eve._cb_all).to.deep.equal([]);
		});

		it('should handle sub_all correctly', function () {
			const eve = create();

			const fn1 = function () { };
			const fn2 = function () { };

			eve.sub_all(fn1);
			eve.sub_all(fn2);

			expect(eve._cb).to.deep.equal({});
			expect(eve._cb_all).to.deep.equal([fn1, fn2]);
		});

		it('should handle unsub_all correctly', function () {
			const eve = create();

			const fn1 = function () { };
			const fn2 = function () { };

			eve.sub_all(fn1);
			eve.sub_all(fn2);

			expect(eve._cb).to.deep.equal({});
			expect(eve._cb_all).to.deep.equal([fn1, fn2]);

			eve.unsub_all(fn1);

			expect(eve._cb).to.deep.equal({});
			expect(eve._cb_all).to.deep.equal([fn2]);
		});

		it('should handle emit correctly', function () {
			const eve = create();

			let called1 = 0;
			let called2 = 0;
			let called3 = 0;

			const fn1 = function (msg) {
				called1++;
				expect(msg).to.equal('msg a');
			};
			const fn2 = function (msg) {
				called2++;
				expect(msg).to.equal('msg b');
			};
			const fn3 = function (ev, msg) {
				called3++;

				switch (ev) {
					case 'a': expect(msg).to.equal('msg a'); break;
					case 'b': expect(msg).to.equal('msg b'); break;
					case 'c': expect(msg).to.equal('msg c'); break;
					default: expect(true).to.equal(false); break;
				}
			};

			eve.sub('a', fn1);
			eve.sub('b', fn2);
			eve.sub_all(fn3);

			eve.emit('a', 'msg a');
			eve.emit('a', 'msg a');
			eve.emit('b', 'msg b');
			eve.emit('c', 'msg c');

			expect(called1).to.equal(2);
			expect(called2).to.equal(1);
			expect(called3).to.equal(4);
		});

	});
});
