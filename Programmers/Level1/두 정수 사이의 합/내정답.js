function solution(a, b) {
  let cnt = 0;
  if (a >= b) {
    for (let i = b; i <= a; i++) {
      cnt += i;
    }
  } else {
    for (let j = a; j <= b; j++) {
      cnt += j;
    }
  }
  return cnt;
}
