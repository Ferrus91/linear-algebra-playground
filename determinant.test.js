const determinant = require('./determinant');

test('Determinant of matrix', () => {
  expect(determinant(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual(-3);
});

test('Error for unequal vectors', () => {
  expect(() => determinant(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
      [1, 1, 1],
    ],
  )).toThrow('Matrix is not square!');
});
