const multi = require('../exercises/multi');

test('adds 5 * 5 to equal 25', () => {
  expect(multi(5, 5)).toBe(25);
});