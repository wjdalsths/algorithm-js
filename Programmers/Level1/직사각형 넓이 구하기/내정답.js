function solution(dots) {
  dots.sort((a, b) => b[0] - a[0]);

  return Math.abs(dots[1][0] - dots[2][0]) * Math.abs(dots[0][1] - dots[1][1]);
}
