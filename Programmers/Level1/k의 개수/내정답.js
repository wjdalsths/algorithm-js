function solution(i, j, k) {
  let cnt = 0;

  for (i; i <= j; i++) {
    `${i}`.split("").forEach((cur) => {
      if (cur.match(k)) cnt++;
    });
  }

  return cnt;
}
