const analyze = require('./array');

test('expect average to be 4, min to be 1, max to be 8 and length to be 6', () => {
  expect(analyze(1,8,3,4,2,6)).toEqual({
    average:4,
    min:1,
    max:8,
    length:6
  })
});

test('expect average to be -2, min to be -8, max to be 3 and length to be 6', () => {
  expect(analyze(1,-8,3,-4,2,-6)).toEqual({
    average:-2,
    min:-8,
    max:3,
    length:6
  })
});
