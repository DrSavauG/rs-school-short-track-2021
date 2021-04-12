/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const result = {};
  const expFirst = /\w*/;
  const expSecond = /\w*\.\w*/mi;
  const expThird = /\w*\.\w*\.\w*/mi;

  function findings(reg) {
    for (let i = 0; i < domains.length; i++) {
      const name = domains[i].split('.').reverse().join('.').match(reg);
      if (name) {
        const rename = `.${name[0]}`;
        if (!result[rename]) {
          result[rename] = 1;
        } else result[rename] += 1;
      }
    }
  }
  findings(expFirst);
  findings(expSecond);
  findings(expThird);
  return result;
}

module.exports = getDNSStats;
