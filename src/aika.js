// let date = new Date(2020, 02, 31);
// console.log(date.getMonth());
// if (date.getMonth() >= 2 && date.getMonth() <= 4) {
//   console.log("spring");
// } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
//   console.log("summer");
// } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
//   console.log("autumn");
// } else {
//   console.log("winter");
// }
// console.log(typeof date.toISOString());
// let ah = { John: "Smith" };
// console.log(typeof ah.toISOString());

// encodeLine("aabbbc");
// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// function sortByHeight(arr) {
//   let indexArr = [];
//   let newArr = [];
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === -1) {
//       indexArr.push(i);
//     }
//   }
//   arr = arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === -1) {
//       newArr = arr.slice(i + 1);
//     }
//   }
//   for (let i = 0; i < indexArr.length; i++) {
//     arr2 = newArr.slice(i);
//     console.log(arr2);
//   }
//   console.log(newArr);
//   console.log(indexArr);
//   // throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
// function minesweeper(matrix) {
//   let newMatrix = [];
//   // for (let j = 0; j < matrix.length; j++) {
//   //   for (let i = 0; i < matrix[j].length; i++) {}}
//   for (let j = 0; j < matrix.length; j++) {
//     for (let i = 0; i < matrix[j].length; i++) {
//       if (matrix[j][i] === true) {
//         newMatrix[j - 1][i - 1] = 1;
//         newMatrix[j - 1][i] = 1;
//         newMatrix[j - 1][i + 1] = 1;
//         newMatrix[j][i - 1] = 1;
//         newMatrix[j][i + 1] = 1;
//         newMatrix[j + 1][i - 1] = 1;
//         newMatrix[j + 1][i] = 1;
//         newMatrix[j + 1][i + 1] = 1;
//       }
//     }
//   }
//   console.log(newMatrix);
//   // throw new NotImplementedError("Not implemented");
//   // remove line with error and write your code here
// }

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ];
// minesweeper(matrix);

// function renameFiles(names) {
//   let newFiles=[];
//   newFiles.push(names[0]);
//   for(let i=1; i<names.length; i++){
//     if(newFiles.includes(names[i]));
//   }
//   // throw new NotImplementedError("Not implemented");
//   // remove line with error and write your code here
// }

// renameFiles(["file", "file", "image", "file(1)", "file"]);

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

// function removeKFromList(l, k) {
//   let arr = [];
//   // let obj = {};

//   for (let i = 0; i < l.length; i++) {
//     if (l[i] === k) {
//       l.splice(i, 1);
//     }
//     arr.push(l[i]);
//   }

//   function insert(n, item) {
//     let temp = new ListNode(item);
//     temp.next = n;
//     return temp;
//   }
//   node = null;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     node = insert(node, arr[i]);
//   }
//   return node;

//   // function insert(root, item) {
//   //   let temp = new ListNode();
//   //   temp.value = item;
//   //   temp.next = root;
//   //   root = temp;
//   //   return root;
//   // }
//   // root = null;
//   // for (let i = arr.length - 1; i >= 0; i--) root = insert(root, arr[i]);
//   // return root;
//   // }
//   // let list = arr.reduceRight((rest, val) => ({ val, rest }), null);

//   // console.log(arr);
//   // let node;
//   // let obj = {};
//   // let node = new ListNode(arr[0]);

//   // for (let i = 1; i < arr.length - 1; i++) {
//   //   let node2 = new ListNode(arr[i]);
//   //   node.next = node2;
//   //   node2.next = new ListNode(arr[i + 1]);
//   // }
//   // console.log(node);
// }
// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));

// // function convertArrayToList(arr) {
// //   return arr.reverse().reduce((acc, cur) => {
// //     if (acc) {
// //       const node = new ListNode(cur);
// //       node.next = acc;
// //       return node;
// //     }

// //     return new ListNode(cur);
// //   }, null);
// // }

// // console.log(convertArrayToList([3, 1, 2, 3, 4, 5]));
// function arrayToList(array) {
//   let list = null;
//   // let node;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = { value: array[i], next: list };

//     // list = new ListNode(array[i]);
//     // list.next = list;
//     // list.next = new ListNode(array[i + 1]);
//   }
//   // return node;
//   return list;
// }
// console.log(arrayToList([3, 1, 2, 3, 4, 5]));
// // class ListNode {
// //   constructor(x) {
// //     this.value = x;
// //     this.next = null;
// //   }
// // }

// * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
// * Strings have 3 common characters - 2 "a"s and 1 "c".
// */
// function getCommonCharacterCount(s1, s2) {
//   s1 = s1.split("");
//   s2 = s2.split("");
//   let counter = 0;
//   for (let i = 0; i < s1.length; i++) {
//     // if (s2.includes(s1[i])) {
//     console.log(s1, s2);

//     let s2Index = s2.findIndex((el) => el === s1[i]);
//     // console.log(s2Index);
//     s2.splice(s2Index, 1);
//     // s1.splice(i - 1, 1);
//     s1.splice(i, 1);
//     counter++;
//     // }

//     // let common = s2.find((el) => el === s1[i]);
//   }
//   console.log(counter);
//   //  throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }
// getCommonCharacterCount("zzzz", "zzzzzzz");
function deleteDigit(n) {
  n = n.toString().split("");
  let max = Math.max(...n);
  let maxIndex = n.findIndex((el) => +el === max);
  console.log(maxIndex);
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
deleteDigit(152);
