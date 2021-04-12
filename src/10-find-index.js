/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = 0;
  let end = array.length;
  let half;
  while (i < end) {
    half = Math.floor((i + end) / 2);
    if (value <= array[half]) end = half;
    else i = half + 1;
  }
  return (array[i] === value) ? i : -1;
}

module.exports = findIndex;
