import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  const result = {};

  domains.forEach((item) => {
    const arrDom = item.split('.').reverse();
    let current = '';
    arrDom.forEach((key, index) => {
      if (index === arrDom.length) {
        current = `${current}${key}`;
      } else {
        current = `${current}.${key}`;
      }
      if (result[current]) {
        result[current]++;
      } else {
        result[current] = 1;
      }
    });
  });

  return result;
}
