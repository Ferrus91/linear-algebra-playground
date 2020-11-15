const matrix1 = require(`./matrices/${process.argv[2]}`);
const matrix2 = require(`./matrices/${process.argv[3]}`);

const n = matrix1[0].length;
if (!matrix2.length) throw Error('Matrix multiplication impossible')

const productMatrix = [];
for (let i = 0; i < n; i++) {
    const productMatrixRow = [];
    for (let j = 0; j < n; j++) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
            sum += matrix1[i][k] * matrix2[k][j];
        }
        productMatrixRow[j] = sum;
    }
    productMatrix.push(productMatrixRow);
}

console.log(productMatrix);