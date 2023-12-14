// function solution() {
let input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

let arr = input.split("");
let answer = [];
const set = new Set(arr);

set.forEach((value) => {
  answer.push(Math.abs(arr.indexOf(value) - arr.lastIndexOf(value)) + 1);
});
// }
