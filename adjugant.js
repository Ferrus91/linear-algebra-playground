const { getCofactor, transpose } = require('./utils');

module.exports = (matrix) => {
    if (matrix.length !== matrix[0].length) throw Error('Matrix is not square!');
    const n = matrix.length;
    const cofactorMatrix = []
    for (let i = 0; i < n; i += 1) {
        const cofactorRow = [];
        for (let j = 0; j < n; j += 1) {
            cofactorRow.push(getCofactor(matrix, i, j));
        }
        cofactorMatrix.push(cofactorRow);
    }
    return transpose(cofactorMatrix);
};
