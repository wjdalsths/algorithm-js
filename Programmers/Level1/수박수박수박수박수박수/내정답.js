function solution(n) {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
}
console.log(solution(1));
