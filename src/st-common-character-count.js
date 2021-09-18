import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const result = [];

  arr1.forEach((x) => {
    if (!result.includes(x)) {
      const step2 = arr2.filter((key) => key === x);
      if (step2.length > 1) {
        const step1 = arr1.filter((key) => key === x);
        if (step2.length > step1.length) {
          step1.forEach((item) => result.push(item));
        } else {
          step2.forEach((item) => result.push(item));
        }
      }
      if (step2.length === 1) {
        result.push(x);
      }
    }
  });

  return result.length;
}
