// const determinant = require("./determinant");

// module.exports = (matrix) => {
//   }

const {
  swapRows, addRowMultiple, hasZeroRow, zeroRows,
} = require('./utils');

const backSubstitution = (matrix, result) => {
  const n = matrix.length;
  const tempSolution = new Array(n - 1);
  for (let i = n - 1; i >= 0; i -= 1) {
    let tempSum = 0;
    for (let j = i + 1; j < n; j += 1) {
      tempSum += matrix[i][j] * tempSolution[j];
    }
    tempSolution[i] = (result[i] - tempSum) / matrix[i][i];
  }
  return tempSolution;
};

let matrix = [
  [1, 1, 1],
  [4, 0, 1],
  [2, 3, 2],
];

let result = [
  [3],
  [6],
  [9],
];

const n = matrix.length;
const m = matrix[0].length;

for (let i = 0; i < n; i += 1) {
  let maxPivotIndex = 0;
  let maxPivotValue = matrix[i][i];
  for (let j = i + 1; j < m; j += 1) {
    const columnValue = matrix[j][i];
    if (columnValue > maxPivotValue) {
      maxPivotValue = columnValue;
      maxPivotIndex = j;
    }
  }
  if (maxPivotIndex !== 0) {
    matrix = swapRows(matrix, i, maxPivotIndex);
    result = swapRows(result, i, maxPivotIndex);
  }

  for (let j = i + 1; j < m; j += 1) {
    const ratio = matrix[j][i] / maxPivotValue;
    matrix = addRowMultiple(matrix, i, j, -ratio);
    result = addRowMultiple(result, i, j, -ratio);
  }
}

if (hasZeroRow(matrix)) {
  const zeroRowsIndicies = zeroRows(matrix);
  if (zeroRowsIndicies.some((index) => result[index] !== 0)) throw Error('No solutions!');
}
const solution = backSubstitution(matrix, result);

console.log(solution);
