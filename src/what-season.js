const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const winter = 'winter',
        spring = 'spring',
        summer = 'summer',
        autumn = 'autumn';

  let result = '';
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }  else if (date.__proto__ === Date.prototype) {
      let month = date.getMonth()
      if (typeof month === 'number') {
        if (month > 10 || month <= 1) {
          result = winter
        } else if (month > 1 && month < 5) {
          result = spring
        } else if (month > 4 && month < 8) {
          result = summer
        } else if (month > 7 && month < 11) {
          result = autumn
        }
      } else return 'FAIL'
    } else throw 'THROWN'

    if (date.hasOwnProperty('getMonth')) {
      throw 'THROWN'
    } else return result
  
};
