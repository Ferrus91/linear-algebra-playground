const {
  deepCopy,
  transpose,
  scalarMultiplication,
  trace,
  hasDiagonalZero,
  swapRows,
  rowMultiplication,
  addRowMultiple,
  removeMatrixIndex,
  getMinor,
  getCofactor,
  hasZeroRow,
  zeroRows,
} = require('./utils');

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

test('Trace', () => {
  expect(trace(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual(5);
});

test('Does Not Have Diagonal Zero', () => {
  expect(hasDiagonalZero(
    [
      [1, 1, 1],
      [2, 3, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual(false);
});

test('Does Have Diagonal Zero', () => {
  expect(hasDiagonalZero(
    [
      [1, 1, 1],
      [2, 0, 2],
      [4, 0, 1],
    ],
  )).toStrictEqual(true);
});

test('Swap Rows', () => {
  expect(swapRows(
    [
      [1, 1, 1],
      [2, 0, 2],
      [4, 0, 1],
    ], 0, 2,
  )).toStrictEqual([
    [4, 0, 1],
    [2, 0, 2],
    [1, 1, 1],
  ]);
});

test('Row Multiplication', () => {
  expect(rowMultiplication(
    [
      [1, 1, 1],
      [2, 0, 2],
      [4, 0, 1],
    ], 1, 2,
  )).toStrictEqual([
    [1, 1, 1],
    [4, 0, 4],
    [4, 0, 1],
  ]);
});

test('Add Row Multiple', () => {
  expect(addRowMultiple(
    [
      [1, 1, 1],
      [2, 0, 2],
      [4, 0, 1],
    ], 1, 2, 5,
  )).toStrictEqual([
    [1, 1, 1],
    [2, 0, 2],
    [14, 0, 11],
  ]);
});

test('Remove Matrix Index', () => {
  expect(removeMatrixIndex(
    [
      [1, 1, 1],
      [2, 0, 2],
      [4, 0, 1],
    ], 1,
  )).toStrictEqual([
    [1, 1, 1],
    [4, 0, 1],
  ]);
});

test('Get Minor', () => {
  expect(getMinor(
    [
      [1, 1, 1],
      [2, 0, 3],
      [4, 0, 1],
    ], 2, 1,
  )).toStrictEqual(1);
});

test('Get Cofactor', () => {
  expect(getCofactor(
    [
      [1, 1, 1],
      [2, 0, 3],
      [4, 0, 1],
    ], 2, 1,
  )).toStrictEqual(-1);
});

test('Has Zero Row false', () => {
  expect(hasZeroRow(
    [
      [1, 1, 1],
      [2, 0, 3],
      [4, 0, 1],
    ], 2, 1,
  )).toStrictEqual(false);
});

test('Has Zero Row true', () => {
  expect(hasZeroRow(
    [
      [1, 1, 1],
      [0, 0, 0],
      [4, 0, 1],
    ],
  )).toStrictEqual(true);
});

test('Zero Rows', () => {
  expect(zeroRows(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
  )).toStrictEqual([1, 2]);
});
