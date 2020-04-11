const reverse = require('./reverse');

test("reverse a word", () => {
  expect(reverse('hello')).toBe('olleh');
});

test("reverse a string", () => {
  expect(reverse('hello world')).toBe('dlrow olleh');
});

test("reverse random characters", () => {
  expect(reverse('number !!. 123')).toBe('321 .!! rebmun');
});
