const CustomError = require("../extensions/custom-error");
let count = 1
module.exports = class DepthCalculator {
  calculateDepth(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      count++
      calculateDepth(arr[i])
    }
  }
  return count
}
};
