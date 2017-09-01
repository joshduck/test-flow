// @flow

const b = require('@test-flow/b');

console.log('A thinks a simple package is at', require.resolve('a-simple-package'));
console.log(b());
