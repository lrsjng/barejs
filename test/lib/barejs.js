const {test, assert} = require('scar');
const barejs = require('../../lib/barejs');

test('barejs is object', () => {
    assert.equal(typeof barejs, 'object');
});

test('barejs has one own prop', () => {
    assert.deepEqual(Object.keys(barejs), ['hello']);
});

test('barejs.hello is function', () => {
    assert.equal(typeof barejs.hello, 'function');
});

test('barejs.hello()', () => {
    assert.equal(barejs.hello(), 'Hello, undefined!');
});
