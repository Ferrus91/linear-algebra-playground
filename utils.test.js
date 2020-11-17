const { deepCopy, transpose, scalarMultiplication } = require('./utils');

test('Deep copy', () => {
  expect(deepCopy(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual([
    [1, 1, 1],
    [2, 3, 2],
    [4, 0, 1],
  ]);
});

test('Transpose', () => {
  expect(transpose(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual([
    [1, 2, 4],
    [1, 3, 0],
    [1, 2, 1],
  ]);
});

test('Scalar Multiplication', () => {
  expect(scalarMultiplication(
    2,
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual([
    [2, 2, 2],
    [4, 6, 4],
    [8, 0, 2],
  ]);
});
