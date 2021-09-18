import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor() {

  }

  calculateDepth(arr) {
    let counter = 1;
    let depth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        counter = 1 + this.calculateDepth(item);
        
        if (counter > depth) {
          depth = counter;
          counter = 1;
        } else {
          counter = 1;
        }
      }
    }
    return depth;
  }
}
