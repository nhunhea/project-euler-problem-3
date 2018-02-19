const largestPrimeFactor = require('../src/problem3');
const each = require('jest-each');

describe('.largestPrimeFactor()', () => {
each([
  [600851475143, 6857],
  [13195, 29],
  [88, 11],
  [1658, 829],
  [28, 7],
]).test('Largest Prime Factor from %s = %s', (num, expected) => {
  expect(largestPrimeFactor(num)).toBe(expected);
});
});
