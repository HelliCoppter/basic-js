const CustomError = require("../extensions/custom-error");

module.exports = function repeater(string, arg) {
  let result = '';

  let {repeatTimes = 1, 
		  	separator = '+', 
		  	addition = '', 
		  	additionRepeatTimes = 1, 
		  	additionSeparator = '|'
		   } = arg;
  
		

  repeatTimes = parseInt(repeatTimes);
  additionRepeatTimes = parseInt(additionRepeatTimes);

  if (typeof repeatTimes === 'undefined' || isNaN(repeatTimes) || repeatTimes < 2) {
    repeatTimes = 1
    separator = ''
  };
  if (typeof additionRepeatTimes === 'undefined' || isNaN(additionRepeatTimes) || additionRepeatTimes < 2) {
    additionRepeatTimes = 1
    additionSeparator = ''
  };

  result = `${string}`;
  addition = `${addition}`;

  let subAddition = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let subString = (string + subAddition + separator).repeat(repeatTimes - 1) + string + subAddition;

  result = subString + '';

  return result
};
  