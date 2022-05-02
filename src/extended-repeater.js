const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, options) {
  let strTotal = [];
  let strAddition = [];
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    if (options.addition === null) {
      strAddition.push(String(options.addition));
    } else {
      strAddition.push(options.addition);
    }
  }
  strAddition = strAddition.join(`${options.additionSeparator}`);
  // console.log(strAddition);
  for (let i = 1; i <= options.repeatTimes; i++) {
    if (str === null) {
      strTotal.push(String(str) + strAddition);
    } else {
      strTotal.push(str + strAddition);
    }
  }
  return strTotal.join(options.separator);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
