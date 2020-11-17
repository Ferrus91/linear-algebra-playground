const crossProduct = require('./crossProduct');

test('Cross Product of 2 3d vectors', () => {
  expect(crossProduct(
    [[1],
      [8],
      [3]],
    [[9],
      [3],
      [42]],
  )).toStrictEqual([[327], [-15], [-69]]);
});

test('Cross Product doesnt work for non-3d vector', () => {
  expect(() => crossProduct(
    [[1],
      [8]],
    [[9],
      [3]],
  )).toThrow('First vector isn\'t a 3d Vector');
});
