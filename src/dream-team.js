import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let result = [];
  if (Array.isArray(members)) {
    for (let person of members) {
      if (typeof person === 'string') {
        let arr = person.split('');
        if (arr.includes(' ')) {

          while (arr[0] == ' ') {
          	arr.shift();
          }
          result.push(arr[0]);
        } else result.push(person[0]);
      } else continue
    }
  } else return false;

  return result.join('').toLocaleUpperCase().split('').sort().join('');
}
