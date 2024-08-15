const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds -1 + -2 to equal -3', () => {
  expect(sum(-1, -2)).toBe(-3);
});

test('adds 1.5 + 2.5 to equal 4', () => {
  expect(sum(1.5, 2.5)).toBe(4);
});

test('adds 0 + 5 to equal 5', () => {
  expect(sum(0, 5)).toBe(5);
});
##
test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(2);
});