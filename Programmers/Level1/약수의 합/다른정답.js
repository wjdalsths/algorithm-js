function solution(n, a = 0, b = 0) {
  //   return n <= a / 2 ? b : solution(n, a + 1, (b += n % a ? 0 : a));
  return n == 0
    ? 0
    : Array(n)
        .fill(1)
        .map((x, y) => x + y)
        .filter((a) => (n % a != 0 ? 0 : a))
        .reduce((c, d) => c + d);
}

console.log(solution(63));
