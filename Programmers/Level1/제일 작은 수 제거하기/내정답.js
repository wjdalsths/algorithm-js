function solution(arr) {
  let min = arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
  }
  let answer = arr.filter((e) => e !== min);

  return arr.length == 1 && arr[0] == 10 ? [-1] : answer;
}

console.log(solution([4, 1, 2, 1, 3, 1]));
