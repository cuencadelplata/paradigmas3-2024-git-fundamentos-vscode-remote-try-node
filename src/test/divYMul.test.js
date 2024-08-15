const divYMul = require('../libraries/divMul').divYMul;

test('divides 9 + 3 to equals 3', () => {
    expect(divYMul(9, 3).div).toBe(3);
});

test('multiplies 12 by 44 to equals 528', () => {
    expect(divYMul(12, 44).mul).toBe(528);
});

test('multiplies and divides 59 by -34', () => {
    result = divYMul(59, -34);
    expect(result.mul).toBe(-2006);
    expect(result.div).toBe(-1.7352941176470589);
});