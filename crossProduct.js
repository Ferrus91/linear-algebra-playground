module.exports = (vector1, vector2) => {
  if (vector1.length !== 3 || vector1[0].length !== 1) throw Error('First vector isn\'t a 3d Vector');
  if (vector2.length !== 3 || vector2[0].length !== 1) throw Error('Second vector isn\'t a 3d Vector');

  return [
    [vector1[1] * vector2[2] - vector2[1] * vector1[2]],
    [vector1[2] * vector2[0] - vector2[2] * vector1[0]],
    [vector1[0] * vector2[1] - vector2[0] * vector1[1]],
  ];
};
