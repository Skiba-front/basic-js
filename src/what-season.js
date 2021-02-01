const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (!date) {
    return 'Unable to determine the time of year!'
  } 
    
  try {
    date.toJSON()
  } catch (e) {
    throw new Error(e)
  }

  let arrMon = ['winter', 'winter' , 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
  let mon = date.getMonth()

  for(let i = 0; i < arrMon.length; i++) {
    if(mon == i) {
      return arrMon[i]
    }
  }
};
