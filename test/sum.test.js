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
  test('adds 4 + 4 to equal 8', () => {
    expect(sum(4, 4)).toBe(8);
  });
  test('adds 0 + 1 to equal 1', () => {
    expect(sum(0, 1)).toBe(1);
  });

