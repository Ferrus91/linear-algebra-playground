const gaussianElimination = require('./gaussianElimination');

test('Gaussian Elimination', () => {
  expect(gaussianElimination(
    [
      [4, -3, 1],
      [-2, 1, -3],
      [1, -1, 2],
    ],
    [
      [-8],
      [-4],
      [3],
    ],
  )).toStrictEqual([[-2], [1], [3]]);
});

test('Singular matrix throws', () => {
  expect(() => gaussianElimination(
    [
      [1, 1, 1],
      [2, 2, 2],
      [3, 3, 3],
    ],
    [
      [1],
      [2],
      [2],
    ],
  )).toThrow('Singular matrix!');
});
