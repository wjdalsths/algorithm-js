function solution(n) {
  let s = 0;
  do {
    s += n % 10;
    n = Math.floor(n / 10);
  } while (n > 0);

  return s;
}
