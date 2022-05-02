const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  str: "",
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    // if ((value = undefined)) {
    //   value = " ";
    // }
    value = String(value);
    if (this.chain.length === 0) {
      this.chain.push(`( ${value} )`);
      this.str = this.chain[0];
      // console.log(this.chain);
      // console.log(this.str);
      return this;
    } else {
      // console.log(this.chain.push("~~").push(value));
      this.chain.push(`~~( ${value} )`);
      // console.log(this.chain);
      this.str = this.chain.join("");
      // console.log(this.str);

      return this;
    }
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (
      position <= 0 ||
      typeof position === "string" ||
      position > this.chain.length
    ) {
      this.chain = [];
      this.str = "";
      throw new Error("You can't remove incorrect link!");
    } else {
      if (position === 1) {
        this.chain[0] = this.chain[0].split("").splice(2).join("");
        this.str = this.chain.join("");
      }
      this.chain.splice(position - 1, 1);
      this.str = this.chain.join("");

      console.log(this.chain);
      console.log(this.str);
    }
    return this;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
  reverseChain() {
    if (this.chain.length === 1 || this.chain.length === 0) {
      return this;
    } else {
      this.chain.reverse();
      this.chain[0] = this.chain[0].split("").splice(2).join("");
      if (
        this.chain[this.chain.length - 1].split("")[0] === "~" &&
        this.chain[this.chain.length - 1].split("")[1] === "~"
      ) {
        this.chain[this.chain.length - 1] = this.chain[this.chain.length - 1];
      } else {
        let arr = ["~~"];

        this.chain[this.chain.length - 1] = arr
          .concat(this.chain[this.chain.length - 1].split(""))
          .join("");
      }
      this.str = this.chain.join("");
      console.log(this.chain);
      console.log(this.str);
      // throw new NotImplementedError("Not implemented");
      // remove line with error and write your code here
      return this;
    }
  },
  finishChain() {
    let final = this.str;
    this.chain = [];
    this.str = "";
    return final;
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  },
};

module.exports = {
  chainMaker,
};
