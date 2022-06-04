function solution(n) {
  n = (n + "").split("").map(Number);
  n.sort((a, b) => b - a);
  n = n.join("");
  return +n;
}
console.log(solution(118372));
