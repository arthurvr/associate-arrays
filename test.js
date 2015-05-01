'use strict';
var assert = require('assert');
var aa = require('./');

it('associates arrays', function () {
	assert.deepEqual(aa(['foo'], ['bar']), {foo: 'bar'});
	assert.deepEqual(aa(['foo', 'bar'], ['bar', 'foo']), {
		foo: 'bar',
		bar: 'foo'
	});
	assert.deepEqual(aa([6, 'foo'], ['bar', 3]), {
		6: 'bar',
		foo: 3
	});
});

it('Throws on non-array input', function () {
	assert.throws(function () {
		aa({}, ['foo']);
	});

	assert.throws(function () {
		aa(['foo'], {});
	});
});
