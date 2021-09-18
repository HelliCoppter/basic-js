import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  const result = [];
  str.split('').forEach((item, index) => {
    if (str[index + 1] === str[index]) {
      const number = str.split('').filter((key) => key === item).length;
      if (str.substr(index, number) === item.repeat(number)) {
        result.push(number, item);
      }
    } else if (str[index - 1] !== item) {
      result.push(item);
    }
  });

  return result.join('');
}
