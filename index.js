const { Command } = require('commander');
const fs = require('fs');
const dotProduct = require('./dotProduct');
const crossProduct = require('./crossProduct');
const matrixMultiplication = require('./matrixMultiplication');
const determinant = require('./determinant');
const packageJson = require('./package');

const program = new Command();
program.version(packageJson.version);

const readJson = (filepath) => JSON.parse(fs.readFileSync(filepath, 'utf-8'));
const writeJson = (result, filename) => fs.writeFileSync(`./output/${filename}.json`, JSON.stringify(result, null,  0));

program
  .option('-o, --operation <operation>', 'Linear algebra operation')
  .option('-v1, --vector1 <vector1>', 'First vector')
  .option('-v2, --vector2 <vector2>', 'Second vector')
  .option('-m, --matrix <matrix1>', 'A single matrix')
  .option('-m1, --matrix1 <matrix1>', 'First matrix')
  .option('-m2, --matrix2 <matrix2>', 'Second matrix')
  .option('-ext, --external-file <externalFile>', 'External File to output to (default to console)');

program.parse(process.argv);
let result;
let vector1;
let vector2;
let matrix1;
let matrix2;

if (program.vector1) {
  vector1 = readJson(`./matrices/${program.vector1}.json`);
  if (vector1[0].length !== 1) throw Error('Vector 1 isn\'t a vector');
}

if (program.vector2) {
  vector2 = readJson(`./matrices/${program.vector2}.json`);
  if (vector2[0].length !== 1) throw Error('Vector 2 isn\'t a vector');
}

if (program.matrix1) {
  matrix1 = readJson(`./matrices/${program.matrix1}.json`);
} else if (program.matrix) {
  matrix1 = readJson(`./matrices/${program.matrix}.json`);
}

if (program.matrix2) {
  matrix2 = readJson(`./matrices/${program.matrix2}.json`);
}

if (program.operation === 'dot-product') {
  if (!vector1 || !vector2) throw Error('Dot product requires 2 vectors');
  result = dotProduct(vector1, vector2);
}

if (program.operation === 'cross-product') {
  if (!vector1 || !vector2) throw Error('Cross product requires 2 vectors');
  result = crossProduct(vector1, vector2);
}

if (program.operation === 'matrix-multiplication') {
  if (!matrix1 || !matrix2) throw Error('Matrix multiplication requires 2 matrices');
  result = matrixMultiplication(matrix1, matrix2);
}

if (program.operation === 'determinant') {
  if (!matrix1 || matrix2) throw Error('Matrix determinant requires 1 matrix');
  result = determinant(matrix1);
}

if (result === null || result === undefined) return;

if (program.externalFile) {
    writeJson(result, program.externalFile)
} else {
    console.log(result);
}
