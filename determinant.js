module.exports = (matrix) => {
  if (matrix.length !== matrix[0].length) throw Error('Matrix is not square!');
  // eslint-disable-next-line no-use-before-define
  return determinant(matrix);
};

const { getCofactor } = require('./utils');

const determinant = (M) => {
  if (M.length === 1) return M[0][0];
  let determinantValue = 0;
  for (let i = 0; i < M.length; i += 1) {
    determinantValue += M[0][i] * getCofactor(M, 0, i);
  }
  return determinantValue;
};
