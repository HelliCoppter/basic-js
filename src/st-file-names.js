import { NotImplementedError } from '../extensions/index.js';

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
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  const result = [];

  names.forEach((item) => {
    if (result.includes(item)) {
      const str = new RegExp(`${item}\\(\\d\\)`, 'g');
      const index = result.toString().match(str);

      if (index) {
        result.push(`${item}(${index.length})`);
      } else {
        result.push(`${item}(1)`);
      }
    } else {
      result.push(item);
    }
  });

  return result;
}
