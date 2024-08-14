const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const sumArray = require('../src/sumArrays');

test('suma los elementos del array [1, 2, 3, 4] para obtener 10', () => {
  expect(sumArray([1, 2, 3, 4])).toBe(10);
});

test('suma los elementos del array [5, -3, 2, 8] para obtener 12', () => {
  expect(sumArray([5, -3, 2, 8])).toBe(12);
});

test('suma los elementos del array vacío para obtener 0', () => {
  expect(sumArray([])).toBe(0);
});


const reverseString = require('../src/reverseString');

test('reversa la cadena "hola" para obtener "aloh"', () => {
  expect(reverseString('hola')).toBe('aloh');
});

test('reversa la cadena vacía para obtener otra cadena vacía', () => {
  expect(reverseString('')).toBe('');
});