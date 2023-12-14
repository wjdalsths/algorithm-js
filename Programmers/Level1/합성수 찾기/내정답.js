function solution(n) {
  if (n === 1) return 0;
  let answer = 1;
  for (let i = 3; i <= n; i++) {
    answer++;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        answer--;
        break;
      }
    }
  }
  return n - answer - 1;
}
