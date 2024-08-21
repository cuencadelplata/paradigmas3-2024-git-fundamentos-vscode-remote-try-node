const multiply = require('../src/mul');

test('multiplica 2 * 3 para igualar 6', () => {
  expect(multiply(2, 3)).toBe(6);
});