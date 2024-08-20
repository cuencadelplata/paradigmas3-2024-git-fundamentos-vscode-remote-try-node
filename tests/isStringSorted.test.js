const isStringSorted = require('../exercises/isStringSorted')

test('isStringSorted: true with numbers', () => {
    expect(isStringSorted("1234")).toBe(true);
});

test('isStringSorted: false with numbers', () => {
    expect(isStringSorted("1254")).toBe(false);
});

test('isStringSorted: true with lowercase letters', () => {
    expect(isStringSorted("abcd")).toBe(true);
});

test('isStringSorted: false with lowercase letters', () => {
    expect(isStringSorted("abdc")).toBe(false);
});

test('isStringSorted: true with uppercase letters', () => {
    expect(isStringSorted("ABCD")).toBe(true);
});

test('isStringSorted: false with uppercase letters', () => {
    expect(isStringSorted("ABDC")).toBe(false);
});

test('isStringSorted: false with uppercase letters', () => {
    expect(isStringSorted("ABDC")).toBe(false);
});

test('isStringSorted: true with mixed characters string', () => {
    expect(isStringSorted("()09Abc")).toBe(true);
});

test('isStringSorted: false with mixed characters string', () => {
    expect(isStringSorted("Abc(09)")).toBe(false);
});