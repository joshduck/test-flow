// @flow
const simple = require('a-simple-package');

function b() {
  console.log('B thinks a simple package is at', require.resolve('a-simple-package'));
  return "I am B!";
}

module.exports = b;
