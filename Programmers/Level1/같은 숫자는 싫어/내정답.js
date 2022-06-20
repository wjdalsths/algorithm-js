function solution(arr) {
  let an = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      an.push(arr[i]);
    }
  }
  return an;
}
