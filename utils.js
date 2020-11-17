const genericCopy = (matrix, entrySelector) => {
    const n = matrix.length;
    const m = (matrix[0] || []).length;

    copiedMatrix = [];
    for (let i = 0; i < n; i += 1) {
        const copiedRow = [];
        for (let j = 0; j < m; j += 1) {
            copiedRow.push(entrySelector(matrix, i, j));
        }
        copiedMatrix.push(copiedRow);
    }
    return copiedMatrix;
}

const deepCopy = (matrix) => {
    return genericCopy(matrix, (matrix, i, j) => matrix[i][j]);
}

const transpose = (matrix) => {
    return genericCopy(matrix, (matrix, i, j) => matrix[j][i]);
}

const scalarMultiplication = (scalar, matrix) => {
    return genericCopy(matrix, (matrix, i, j) => scalar * matrix[j][i]);
}

module.exports = {
    deepCopy,
    transpose,
    scalarMultiplication,
};
