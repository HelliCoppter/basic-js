import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],
  result : '',
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(index) {
    if (!Number.isInteger(index) || !this.chain[index - 1]) {
      this.chain.length = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(index - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.result = this.chain.join('~~');
    this.chain.length = 0;
    return this.result;
  },
};
