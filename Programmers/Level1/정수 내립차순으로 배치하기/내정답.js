function solution(n) {
  n = (n + "").split("").map(Number);
  n.sort((a, b) => b - a);
  n = Number(n.join(""));
  return n;
}
