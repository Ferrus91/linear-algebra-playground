const adjugant = require('./adjugant');

test('Adjugant matrix', () => {
  expect(adjugant(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ]
  )).toStrictEqual([ [ 3, -1, -1 ], [ 6, -3, -0 ], [ -12, 4, 1 ] ]);
});

test('Error for non square', () => {
  expect(() => adjugant(
    [
      [1, 1, 1],
      [2, 2, 2],
    ],
  )).toThrow('Matrix is not square!');
});
