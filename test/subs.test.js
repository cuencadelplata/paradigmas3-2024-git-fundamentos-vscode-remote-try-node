const subtract = require('../src/subs');

test('resta 5 - 3 para igualar 2', () => {
  expect(subtract(5, 3)).toBe(2);
});