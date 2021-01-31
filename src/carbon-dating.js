const CustomError = require("../extensions/custom-error");

let act= 15;
let lifePer= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof(sampleActivity) !== 'string'){
    return false;
  } else if(Number.isFinite(+sampleActivity) || Number.isNaN(+sampleActivity)){
    return false;
  }

  return Math.log(act / sampleActivity) / (Math.LN2 / lifePer);
};
