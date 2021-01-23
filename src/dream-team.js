const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = []
  let withOutSpaces = ''

  for(let i = 0; i < members.length; i++) {
    if(typeof members[i] === "string") {
      withOutSpaces = members[i].trim()
      res.push(withOutSpaces[0].toUpperCase())
    }
  }

  if(res.length == 0) {
    return false
  }

  return res.sort().join('')
}
