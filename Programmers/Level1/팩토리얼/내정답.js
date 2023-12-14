function solution(n) {
  if (n === 1) return 1;
  let fac = 1;
  let i = 0;
  while (fac < n) {
    i++;
    fac *= i;
  }
  return fac === n ? i : i - 1;
}
