function solution(sides) {
  let a = sides.sort((a, b) => a - b);

  return a[0] + a[1] > a[2] ? 1 : 2;
}
