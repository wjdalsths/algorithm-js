function adder(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}
console.log(adder(3, 5));
//가우스 공식을 사용 n(n+1)/2
