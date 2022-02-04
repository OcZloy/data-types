const assert = require('assert');

assert.equal(typeof myNumber,'number','myNumber should be number');
assert.equal(typeof myBoolean,'boolean','myBoolean should be boolean');
assert.equal(typeof myString,'string','myString should be string');

assert.doesNotThrow(() => myNumber = 0, 'myNumber should be variable');
assert.doesNotThrow(() => myBoolean = false, 'myBoolean should be variable');
assert.throws(() => myString = 'false', 'myString should be constant');
