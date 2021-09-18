import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(string, options) {
  let result = '';

  let {repeatTimes = 1, 
		  	separator = '+', 
		  	addition = '', 
		  	additionRepeatTimes = 1, 
		  	additionSeparator = '|'
		   } = options;
  
		

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

  return result;
}
