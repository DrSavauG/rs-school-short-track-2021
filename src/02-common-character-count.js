/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let [result, b] = [0, s2];

  // let result = 0;
  // // console.log(a);
  // // console.log(b);
  // // throw new Error('Not implemented');
  // // let result = 0;
  // // console.log([...s1]);
  for (let i = 0; i < s1.length; i++) {
    if (b.includes(s1[i])) {
      // console.log([b.indexOf(a[i])],i);
      b = b.replace(b[b.indexOf(s1[i])], '');
      // console.log(b);
      result++;
    }
  }

  return result;
  // console.log(a[1]);
  // console.log(b.includes(a[1]));
  //   a
}
// const s1 = 'aabcce';
// const s2 = 'adcaaee';
// console.log(getCommonCharacterCount(s1, s2));
module.exports = getCommonCharacterCount;
