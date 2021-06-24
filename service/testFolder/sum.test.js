const sum = require('./sum');

test('adds 3 - 1 to equal 2', () => {
  expect(sum(3, 1)).toBe(2);
});