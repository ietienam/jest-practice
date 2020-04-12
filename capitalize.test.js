const capitalize = require('./capitalize');

test('test a single word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('test a simple sentence', () => {
  expect(capitalize('hello world')).toBe('Hello World');
});

test('a case of uppercase sentence', () => {
  expect(capitalize('hELLO wORLD')).toBe('Hello World');
});

test('a case of uppercase word', () => {
  expect(capitalize('hELLO')).toBe('Hello');
});