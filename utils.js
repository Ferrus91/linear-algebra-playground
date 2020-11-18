const genericCopy = (matrix, entrySelector) => {
  const n = matrix.length;
  const m = (matrix[0] || []).length;

  const copiedMatrix = [];
  for (let i = 0; i < n; i += 1) {
    const copiedRow = [];
    for (let j = 0; j < m; j += 1) {
      copiedRow.push(entrySelector(matrix, i, j));
    }
    copiedMatrix.push(copiedRow);
  }
  return copiedMatrix;
};

const deepCopy = (originalMatrix) => genericCopy(originalMatrix, (matrix, i, j) => matrix[i][j]);

const transpose = (originalMatrix) => genericCopy(originalMatrix, (matrix, i, j) => matrix[j][i]);

const scalarMultiplication = (scalar, originalMatrix) => genericCopy(originalMatrix, (matrix, i, j) => scalar * matrix[i][j]);

const trace = (matrix) => matrix.reduce((acc, curr, i) => acc + curr[i], 0);

const hasDiagonalZero = (matrix) => matrix.some((entry, i) => entry[i] === 0);

const swapRows = (matrix, i, j) => {
  const newMatrix = deepCopy(matrix);
  const swapRow = newMatrix[i];
  newMatrix[i] = newMatrix[j];
  newMatrix[j] = swapRow;
  return newMatrix;
};

// eslint-disable-next-line max-len
const rowMultiplication = (originalMatrix, index, scalar) => genericCopy(originalMatrix, (matrix, i, j) => (index === i ? scalar * matrix[i][j] : matrix[i][j]));

// eslint-disable-next-line max-len
const addRowMultiple = (originalMatrix, rowMultiplier, rowMultiplicand, scalar) => genericCopy(originalMatrix, (matrix, i, j) => (rowMultiplicand === i
  ? matrix[i][j] + scalar * matrix[rowMultiplier][j]
  : matrix[i][j]));

const removeMatrixIndex = (list, i) => list.slice(0, i).concat(list.slice(i + 1));

// eslint-disable-next-line max-len, no-use-before-define
const getMinor = (matrix, i, j) => determinant(removeMatrixIndex(matrix, i).map((column) => removeMatrixIndex(column, j)));

// eslint-disable-next-line max-len, no-use-before-define
const getCofactor = (matrix, i, j) => (-1) ** (i + j) * determinant(removeMatrixIndex(matrix, i).map((column) => removeMatrixIndex(column, j)));

const hasZeroRow = (matrix) => matrix.some((row) => row.every((entry) => entry === 0));

const zeroRows = (matrix) => matrix.map((row, i) => (row.every((entry) => entry === 0) ? i : null)).filter((row) => row !== null);

module.exports = {
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
};

const determinant = require('./determinant');
