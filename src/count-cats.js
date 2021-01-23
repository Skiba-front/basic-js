const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = []

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {
      res.push(matrix[i][j])
    }
  }
  res = res.filter((el) => el === '^^')
  return res.length
};
