/* eslint-env mocha */

const expect = require('chai').expect;
const keyedArray = require('../lib/keyedArray');

const D1 = { id: '1', val: 2, txt: 'msg 1' };
const D2 = { id: '2', val: 3, txt: 'msg 2' };
const D3 = { id: '3', val: 4, txt: 'msg 3' };
const D4 = { id: '4', val: 5, txt: 'msg 4' };
const D5 = { id: '5', val: 6, txt: 'msg 5' };

function checkConsistency(ka) {
	const len = ka.data.length;
	const dataKeys = [];
	for (let i = 0; i < len; i++) {
		const a = ka.at(i);
		const b = ka.get(a.id);
		expect(a === b).to.be.true;
		dataKeys.push(a.id);
	}
	dataKeys.sort();
	expect(dataKeys).to.deep.equal(ka.keys.sort());
}

describe('keyedArray', function () {

	describe('create()', function () {

		it('should return a new KeyedArray', function () {
			const ka = keyedArray.create();
			expect(ka instanceof keyedArray.KeyedArray).to.be.true;
			checkConsistency(ka);
		});
	});

	describe('KeyedArray', function () {

		it('should correcly add one element with push()', function () {
			const ka = keyedArray.create();

			ka.push(D1);
			expect(ka._data).to.deep.equal([D1]);
			checkConsistency(ka);

			ka.push(D2);
			expect(ka._data).to.deep.equal([D1, D2]);
			checkConsistency(ka);
		});

		it('should correcly add multiple elements with push()', function () {
			const ka = keyedArray.create();

			ka.push(D1, D2);
			expect(ka._data).to.deep.equal([D1, D2]);
			checkConsistency(ka);

			ka.push(D3, D4, D5);
			expect(ka._data).to.deep.equal([D1, D2, D3, D4, D5]);
			checkConsistency(ka);
		});

		it('should correcly remove one element with delete()', function () {
			const ka = keyedArray.create();
			ka.push(D1, D2, D3, D4, D5);

			ka.delete(D1.id);
			expect(ka._data).to.deep.equal([D2, D3, D4, D5]);
			checkConsistency(ka);

			ka.delete(D3.id);
			expect(ka._data).to.deep.equal([D2, D4, D5]);
			checkConsistency(ka);

			ka.delete(D5.id);
			expect(ka._data).to.deep.equal([D2, D4]);
			checkConsistency(ka);
		});

		it('should correcly update one element with update()', function () {
			const ka = keyedArray.create();
			ka.push(D1, D2, D3, D4, D5);

			ka.update(D2.id, { val: 10, foo: 'bar' });
			expect(ka.get(D2.id)).to.deep.equal({ id: D2.id, val: 10, txt: D2.txt, foo: 'bar' });
			checkConsistency(ka);
		});

		it('should notify subs', function () {
			const counts = {
				[keyedArray.OP_CREATE]: 0,
				[keyedArray.OP_UPDATE]: 0,
				[keyedArray.OP_DELETE]: 0,
			};

			const ka = keyedArray.create();
			ka.sub(op => counts[op] = counts[op] + 1);
			ka.sub(op => counts[op] = counts[op] + 2);

			ka.push(D1);
			expect(counts).to.deep.equal({
				[keyedArray.OP_CREATE]: 3,
				[keyedArray.OP_UPDATE]: 0,
				[keyedArray.OP_DELETE]: 0,
			});

			ka.update(D1.id, { txt: 'foobar' });
			expect(counts).to.deep.equal({
				[keyedArray.OP_CREATE]: 3,
				[keyedArray.OP_UPDATE]: 3,
				[keyedArray.OP_DELETE]: 0,
			});

			ka.delete(D1.id);
			expect(counts).to.deep.equal({
				[keyedArray.OP_CREATE]: 3,
				[keyedArray.OP_UPDATE]: 3,
				[keyedArray.OP_DELETE]: 3,
			});
		});
	});
});
