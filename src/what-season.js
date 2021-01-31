const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if(date === undefined) {
    return 'Unable to determine the time of year!'
  } else if(isNaN(Date.parse(date)) || typeof(+date) !== 'number') {
    throw new CustomError('Not implemented');
  }

  let arrMon = ['winter', 'winter' , 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  let mon = date.getMonth()

  for(let i = 0; i < arrMon.length; i++) {
    if(mon == i) {
      return arrMon[i]
    }
  }
};
