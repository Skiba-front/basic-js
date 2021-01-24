const CustomError = require("../extensions/custom-error");
let count = 1
module.exports = class DepthCalculator {
  constructor() {
    this.count = 1;
  }
  
  calculateDepth(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      this.count++
      this.calculateDepth(arr[i])
    }
  }
  return this.count
}
};
