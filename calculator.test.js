const calculator = require('./calculator');

test('a simple case of addition. 1+1', () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test('a complex case of addition. -1 + (-1)', () => {
  expect(calculator.add(-1, -1)).toBe(-2);
});

test('a simple case of subtraction. 5-2', () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test('a complex case of subtraction. -5 - (-2)', () => {
  expect(calculator.subtract(-5, -2)).toBe(-3);
});

test('a simple case of division. 10/2', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test('a complex case of division. 10 / (-2)', () => {
  expect(calculator.divide(10, -2)).toBe(-5);
});

test('a simple case of multiplication. 10*2', () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test('a complex case of multiplication. 10 * (-2)', () => {
  expect(calculator.multiply(10, -2)).toBe(-20);
});
