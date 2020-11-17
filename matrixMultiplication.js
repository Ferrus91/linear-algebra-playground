module.exports = (matrix1, matrix2) => {
    const n = matrix1[0].length;
    if (n != matrix2.length) throw Error('Matrix multiplication impossible')
    const m = matrix2[0].length;
    
    const productMatrix = [];
    for (let i = 0; i < n; i++) {
        const productMatrixRow = [];
        for (let j = 0; j < m; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            productMatrixRow[j] = sum;
        }
        productMatrix.push(productMatrixRow);
    }
    return productMatrix;
}
