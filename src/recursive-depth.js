const CustomError = require("../extensions/custom-error");
let count = 1
module.exports = class DepthCalculator {
  
  calculateDepth(arr, depth = 0, a = 0 ) {

    if (Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {

        a = this.calculateDepth(arr[i]);

        if (a > depth) {
          depth = a;
        }
      }
      return depth + 1;
    }else{
      return 0;
    }

  }
};
