const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  let check = '^^';

  for (let arr of matrix) {
    result += arr.filter(item => item === check).length
  }

  return result
};
