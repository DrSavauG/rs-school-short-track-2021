/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let number = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result.push(number);
      result.push(str[i]);
      number = 1;
    } else {
      number++;
    }
  }
  return result.join('').replace(/1/g, '');
}

module.exports = encodeLine;
