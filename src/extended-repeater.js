const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str)
  options.addition = String(options.addition) !== 'undefined' ? String(options.addition) : ''
  options.separator = options.separator ? options.separator : '+'
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  
  let res = ''
  let dop = ''
  if (options.additionRepeatTimes) {
   for (let i = 1; i < options.additionRepeatTimes; i++) {
    dop += options.addition + options.additionSeparator
   } 
  } 
  dop += options.addition

  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      res += str + dop
      if (!(i === options.repeatTimes)) {
        res += options.separator
      }
    } 
  } else {
    res = str + dop
  }

  return res
}
  
