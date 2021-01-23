const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let count = Math.pow(2, disksNumber) - 1
  let speedRes = Math.floor(count / (turnsSpeed / 3600))

  return {turns: count, seconds: speedRes}
};
