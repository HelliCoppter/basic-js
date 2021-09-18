import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    const one = matrix[i];
    const two = matrix[i - 1];
    if (two) {
      for (let j = 0; j < one.length; j++) {
        if (one[j] !== 0 && two[j] !== 0) {
          count += one[j];
        }
      }
    } else {
      for (let j = 0; j < one.length; j++) {
        count += one[j];
      }
    }
  }
  return count;
}
