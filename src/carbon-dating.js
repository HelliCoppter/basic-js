module.exports = function dateSample(sampleActivity) {

  const MODERN_ACTIVITY = 15; 
  const HALF_LIFE_PERIOD = 5730;
  let number = 0;

  if (typeof sampleActivity === 'string') {
    
      number = parseFloat(sampleActivity)
      if (number >= MODERN_ACTIVITY || number <= 0 || isNaN(number)) {
        return false
      } else {
        return Math.ceil(((Math.log(MODERN_ACTIVITY / number)) / (Math.log(2)) * HALF_LIFE_PERIOD));
      }
    
  } else return false

};
