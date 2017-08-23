const assert = require('assert');
const isNumberEqual = require('./');

const NUMBER_VALUE_1 = 9;
const NUMBER_VALUE_2 = 2;
const STRING_VALUE_1 = '9';
const STRING_VALUE_2 = '2';
const HEX_NUMBER_VALUE = 0o11;
const HEX_STRING_VALUE = '0o11';
const FOO = 'foo';

const shouldPass = [
  [NUMBER_VALUE_1, NUMBER_VALUE_1],
  [NUMBER_VALUE_1, STRING_VALUE_1],
  [STRING_VALUE_1, STRING_VALUE_1],

  [HEX_NUMBER_VALUE, NUMBER_VALUE_1],
  [HEX_NUMBER_VALUE, STRING_VALUE_1],
  [HEX_STRING_VALUE, STRING_VALUE_1],
  [HEX_STRING_VALUE, NUMBER_VALUE_1],
];

const shouldNotPass = [
  [NUMBER_VALUE_1, NUMBER_VALUE_2],
  [NUMBER_VALUE_1, STRING_VALUE_2],
  [STRING_VALUE_1, STRING_VALUE_2],

  [HEX_NUMBER_VALUE, NUMBER_VALUE_2],
  [HEX_NUMBER_VALUE, STRING_VALUE_2],
  [HEX_STRING_VALUE, STRING_VALUE_2],
  [HEX_STRING_VALUE, NUMBER_VALUE_2],

  [FOO, FOO]
];

describe('Same number', () => {
  shouldPass.forEach((pair) => {
    it(`${pair[0]} should be same number with ${pair[1]}`, () => {
      assert.equal(isNumberEqual(pair[0], pair[1]), true);
    });
  });
});

describe('Not same number', () => {
  shouldNotPass.forEach((pair) => {
    it(`${pair[0]} should not be same number with ${pair[1]}`, () => {
      assert.equal(isNumberEqual(pair[0], pair[1]), false);
    });
  });
});
