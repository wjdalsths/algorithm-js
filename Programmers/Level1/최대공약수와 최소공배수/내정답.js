function solution(n, m) {
  var answer = [];
  let a, b, t;
  n > m ? ((a = n), (b = m)) : ((b = n), (a = m));
  while (b != 0) {
    t = b;
    b = a % b;
    a = t;
  }

  return [a, (n * m) / a];
}
