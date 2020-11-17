const matrixMultiplication = require('./matrixMultiplication');

test('Matrix multiplication of 2 vectors', () => {
  expect(matrixMultiplication(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
    [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 2],
    ],
  )).toStrictEqual([[6, 6, 5], [14, 14, 12], [7, 7, 6]]);
});

test('Error for incompatible dimensions', () => {
  expect(() => matrixMultiplication(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
    [
      [1, 1, 1],
      [2, 2, 2],
    ],
  )).toThrow('Matrix multiplication impossible, not of form nxr, rxm');
});
