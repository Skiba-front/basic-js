const CustomError = require("../extensions/custom-error");

const chainMaker = {

  len: 0,
  chainArr: [],

  getLength() {
    //throw new CustomError('Not implemented')
    return this.chainArr.length
  },
  addLink(value) {
    this.chainArr.push(value)
    return this
  },
  removeLink(position) {
    this.chainArr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chainArr.reverse()
    return this
  },
  finishChain() {
    let res = []
    
    for(let i = 0; i < this.chainArr.length; i++) {
      if(i != this.chainArr.length - 1) {
        res.push(`(${this.chainArr[i]})~~`)
      } else {
        res.push(`(${this.chainArr[i]})`)
      }
      
    }
    return res.join('')
  }
};

module.exports = chainMaker;
