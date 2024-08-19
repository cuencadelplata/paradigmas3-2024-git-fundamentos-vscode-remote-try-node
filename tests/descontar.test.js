const descontar= require('../exercises/descontar');

test('discount at price ', () => {
  expect(descontar(50000, 50)).toBe(25000);
});

