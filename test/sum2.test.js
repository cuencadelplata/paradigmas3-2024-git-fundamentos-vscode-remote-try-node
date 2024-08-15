const sum = require('../sum');

test('adds 3 + 2 to equal 5', () => {
  expect(sum(2, 2)).toBe(4);
});