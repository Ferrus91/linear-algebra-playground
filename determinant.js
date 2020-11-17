const removeArrayIndex = (list, i) => list.slice(0, i).concat(list.slice(i + 1));

const determinant = (M) => {
  let determinantValue = 0;
  if (M.length === 1) return M[0][0];
  for (let i = 0; i < M.length; i += 1) {
    const cofactorSign = (-1) ** i;
    const subMatrix = removeArrayIndex(M, 0).map((column) => removeArrayIndex(column, i));
    determinantValue += M[0][i] * cofactorSign * determinant(subMatrix);
  }
  return determinantValue;
};

module.exports = (matrix) => {
  if (matrix.length !== matrix[0].length) throw Error('Matrix is not square!');
  return determinant(matrix);
};
