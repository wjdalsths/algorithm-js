function solution(s) {
  let a = s.split("");
  let n = a.length;
  return n % 2 ? a[Math.round(n / 2) - 1] : a[n / 2 - 1] + a[n / 2];
}
