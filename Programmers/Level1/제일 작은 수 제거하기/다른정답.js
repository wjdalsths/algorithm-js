function solution(arr) {
  if (arr.length <= 1) return [-1];
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr;
}

console.log(solution([1, 4, 2, 3, 1, 1]));
