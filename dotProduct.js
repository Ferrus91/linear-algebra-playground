module.exports = (vector1, vector2) => {
  if (vector1.length !== vector2.length) throw Error('Vectors of different dimension cannot do not have a dot product');

  let sum = 0;

  for (let i = 0; i < vector1.length; i += 1) {
    sum += vector1[i] * vector2[i];
  }

  return sum;
};
