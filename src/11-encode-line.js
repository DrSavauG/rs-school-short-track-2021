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
  let number = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      number += 2;
      continue;
      // break;
    }
    //  else {
    result.push(number);
    result.push(str[i]);
    number = '';
    // }
  }
  // if (str[i] !== str[i + 1]) {
  //   result.push(str[i]);
  // } else {
  //   result.push(number);
  // }
  // }
  return result.join('');
}
let str = 'abbcca'; //'4a4t'
console.log(encodeLine(str));
module.exports = encodeLine;
