import test from 'ava';
import aa from './';

test('associates arrays', t => {
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

test('Throws on non-array input', t => {
	t.throws(() => {
		aa({}, ['foo']);
	});

	t.throws(() => {
		aa(['foo'], {});
	});

	t.end();
});
