'use strict';
module.exports = function (keys, values) {
	if (!Array.isArray(keys) || !Array.isArray(values)) {
		throw new TypeError('Expected two arrays');
	}

	var ret = {};

	for (var i = 0; i < keys.length; i++) {
		ret[keys[i]] = values[i];
	}

	return ret;
};
