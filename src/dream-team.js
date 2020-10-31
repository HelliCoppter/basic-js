const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = []
  if (Array.isArray(members)) {
    for (let person of members) {
      if (typeof person === 'string') {
        let arr = person.split('')
        if (arr.includes(' ')) {

          while (arr[0] == ' ') {
          	arr.shift()
          }
          result.push(arr[0])
        } else result.push(person[0])
      } else continue
    }
  } else return false

  return result.join('').toLocaleUpperCase().split('').sort().join('')
};
