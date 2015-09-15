'use strict';
var test = require('ava');
var aa = require('./');

test('associates arrays', function (t) {
	t.same(aa(['foo'], ['bar']), {foo: 'bar'});
	t.same(aa(['foo', 'bar'], ['bar', 'foo']), {
		foo: 'bar',
		bar: 'foo'
	});
	t.same(aa([6, 'foo'], ['bar', 3]), {
		6: 'bar',
		foo: 3
	});

	t.end();
});

test('Throws on non-array input', function (t) {
	t.throws(function () {
		aa({}, ['foo']);
	});

	t.throws(function () {
		aa(['foo'], {});
	});

	t.end();
});
