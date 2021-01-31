const CustomError = require("../extensions/custom-error");

const chainMaker = {

  len: 0,
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },
  addLink(value) {
    if (!value) {
      this.chainArr.push('')
      return this
    }
    this.chainArr.push(value)
    return this
  },
  removeLink(position) {
    if(typeof position !== 'number' || position/1 > 0) {
      throw new CustomError('Not implemented')
    }
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
