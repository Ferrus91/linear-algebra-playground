const {
  swapRows, addRowMultiple,
} = require('./utils');

const backSubstitution = (matrix, result) => {
  const n = matrix.length;
  const tempSolution = new Array(n - 1);
  for (let i = n - 1; i >= 0; i -= 1) {
    let tempSum = 0;
    for (let j = i + 1; j < n; j += 1) {
      tempSum += matrix[i][j] * tempSolution[j];
    }
    tempSolution[i] = [(result[i] - tempSum) / matrix[i][i]];
  }
  return tempSolution;
};

module.exports = (matrix, result) => {
  const n = matrix.length;
  const m = matrix[0].length;
  for (let i = 0; i < n; i += 1) {
    let maxPivotIndex = i;
    let maxPivotValue = Math.abs(matrix[i][i]);
    let maxPivotSign = Math.sign(matrix[i][i]);
    for (let j = i + 1; j < m; j += 1) {
      const columnValue = Math.abs(matrix[j][i]);
      console.log(matrix, columnValue, j, i)
      if (columnValue > maxPivotValue) {
        maxPivotValue = columnValue;
        maxPivotSign = Math.sign(columnValue);
        maxPivotIndex = j;
      }
    }
    if (maxPivotValue === 0) throw new Error('Singular matrix!');
    matrix = swapRows(matrix, i, maxPivotIndex);
    result = swapRows(result, i, maxPivotIndex);
    for (let j = i + 1; j < m; j += 1) {
      const ratio = matrix[j][i] / (maxPivotSign * maxPivotValue);
      matrix = addRowMultiple(matrix, i, j, -ratio);
      result = addRowMultiple(result, i, j, -ratio);
    }
  }
  
  return backSubstitution(matrix, result);
}
