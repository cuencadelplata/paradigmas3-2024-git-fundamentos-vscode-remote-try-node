const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 1)).toBe(2);
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(3, 3)).toBe(6);
  });

