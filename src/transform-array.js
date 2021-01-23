const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = []

  if(!Array.isArray(arr)) {
    throw new CustomError('Not implemented');
  }

  for(let i=0; i < arr.length; i++) {
    res.push(arr[i])
  }
  for(let i=0; i < res.length; i++) {
    switch(res[i]) {
      case '--discard-prev':
        if(typeof res[i-1] != "undefined") {
          res.splice(i-1, 2);         
        } else {
          res.splice(i, 1)
        }
      break;
      case '--discard-next':
        if(typeof res[i+1] != "undefined") {
        res.splice(i, 2);
        }else {
          res.splice(i, 1)
        }
      break;
      case '--double-next':
        if(typeof res[i+1] != "undefined") {
        res.splice(i, 1, res[i+1]);
      }else {
        res.splice(i, 1)
      }
      break;
      case '--double-prev':
        if(typeof res[i-1] != "undefined") {
        res.splice(i, 1, res[i-1]);
        }else {
          res.splice(i, 1)
        }
      break;
    }
  }
  return res
};
