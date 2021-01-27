const CustomError = require("../extensions/custom-error");
let count = 1
module.exports = class DepthCalculator {
  
  calculateDepth(arr, count = 0, curCount = 0 ) {
    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {

        curCount = this.calculateDepth(arr[i]);

        if (curCount > count) {
          count = curCount;
        }
      }
      return count + 1;
    } else {
      return 0;
    }

  }
};
