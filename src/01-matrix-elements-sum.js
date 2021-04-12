/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],//0
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // return (matrix.length);
  // if (matrix.length = 1) return matrix[0].reduce((a, b) => a + b, 0);
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        result += matrix[i][j];
      } else if ((matrix[i - 1][j] !== 0)) result += matrix[i][j];
    }
  }
  return result;
}

// let matrix = [
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3],
// ];
// console.log(getMatrixElementsSum(matrix));
module.exports = getMatrixElementsSum;
