const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {
    turns: 0,
    seconds: 0
  }

  if (typeof disksNumber === 'number' && typeof turnsSpeed === 'number') {
    result.turns = 2**disksNumber - 1;
    result.seconds = Math.floor(result.turns * 3600 / turnsSpeed)
  }

  return result
};
