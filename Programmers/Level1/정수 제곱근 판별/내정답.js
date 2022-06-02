function solution(n) {
  let s = Math.sqrt(n);
  return s % 1 !== 0 ? -1 : Math.pow(s + 1, 2);
}
