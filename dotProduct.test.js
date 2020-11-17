const dotProduct = require('./dotProduct');

test('Dot Product of 2 vectors', () => {
  expect(dotProduct(
    [[1],
      [8]],
    [[9],
      [3]],
  )).toStrictEqual(33);
});

test('Error for unequal vectors', () => {
  expect(() => dotProduct(
    [[1],
      [8]],
    [[9],
      [3],
      [1]],
  )).toThrow('Vectors of different dimension cannot do not have a dot product');
});
