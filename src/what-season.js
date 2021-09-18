import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  const winter = 'winter',
        spring = 'spring',
        summer = 'summer',
        autumn = 'autumn';

  // if (Object.getOwnPropertyNames(date) !== Object.getOwnPropertyNames(new Date)) {
  //   throw new Error('Invalid date!');
  // }  

  let result = '';
  if (date == undefined) {
    return 'Unable to determine the time of year!'
  }  else if ((date.__proto__ === Date.prototype)) {
      if (Object.getOwnPropertyNames(date).length !== Object.getOwnPropertyNames(new Date).length) {
        throw new Error('Invalid date!');
      }
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
      } else throw new Error('Invalid date!');
    } else throw new Error('Invalid date!');

    if (date.hasOwnProperty('getMonth')) {
      throw new Error('Invalid date!');
    } else return result;
}
