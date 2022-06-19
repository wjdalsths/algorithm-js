function solution(arr, divisor) {
  let div = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) div.push(arr[i]);
  }
  return div.length === 0 ? [-1] : div.sort((a, b) => a - b);
}
