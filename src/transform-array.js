const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
      if (arr[i] === "--double-next") {
        if (i === arr.length - 1) {
          newArr.pop(arr[i]);
        } else {
          newArr.pop(arr[i]);
          newArr.push(arr[i + 1]);
        }
      }
      if (arr[i] === "--discard-prev") {
        if (i === 0) {
          newArr.pop(arr[i]);
        } else if (arr[i - 2] === "--discard-next") {
          newArr.pop(arr[i]);
        } else {
          newArr.pop(arr[i]);
          newArr.pop(arr[i - 1]);
        }
      }
      if (arr[i] === "--double-prev") {
        if (i === 0) {
          newArr.pop(arr[i]);
        } else if (arr[i - 2] === "--discard-next") {
          newArr.pop(arr[i]);
        } else {
          newArr.pop(arr[i]);
          newArr.push(arr[i - 1]);
        }
      }
      if (arr[i] === "--discard-next") {
        if (i === arr.length - 1) {
          newArr.pop(arr[i]);
        } else {
          newArr.pop(arr[i]);
          i++;
        }
      }
    }
    return newArr;
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
