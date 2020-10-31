const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  const MODERN_ACTIVITY= 15; 
  const HALF_LIFE_PERIOD= 5730;
  let number = 0;

  if (typeof sampleActivity === 'string') {
    
      number = parseFloat(sampleActivity)
      if (number >= MODERN_ACTIVITY || number <= 0 || isNaN(number)) {
        return false
      } else {
        return Math.ceil(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD);
      }
    
  } else return false

};
