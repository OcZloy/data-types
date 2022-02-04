const fs = require('fs');
const assert = require('assert');

try {
    eval(`
        ${fs.readFileSync('./index.js')}
        ${fs.readFileSync('./validation.js')}
    `);
    console.log('\x1b[32m', 'Success!!!', '\x1b[0m');
    process.exit(0);
} catch (e) {
    console.error('\x1b[31m');

    console.error(e.message);

    if (e instanceof assert.AssertionError) {
        console.error(`Expected: ${e.expected}, Actual: ${e.actual}`);
    }

    console.error('\x1b[0m');
    process.exit(42);
}

