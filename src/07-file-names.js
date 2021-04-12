/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ['file', 'file', 'image', 'file(1)', 'file'],
 * the output should be ['file', 'file(1)', 'image', 'file(1)(1)', 'file(2)']
 *['doc', 'doc', 'image', 'doc(1)', 'doc']), ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'])
 */
function renameFiles(names) {
  const renames = {};
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (renames[names[i]]) {
      renames[names[i]] += 1;
    } else renames[names[i]] = 1;
    if (result.some((el) => el === names[i])) {
      const push = `${names[i]}(${renames[names[i]] - 1})`;
      result.push(push);
      renames[push] = 1;
    } else {
      result.push(names[i]);
    }
  }
  return result;
}
module.exports = renameFiles;
