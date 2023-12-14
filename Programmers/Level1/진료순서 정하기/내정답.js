function solution(emergency) {
  let answer = [];
  let order = [];
  emergency.forEach((cur, inx) => (answer[inx] = { value: cur, inx: inx }));
  answer
    .sort((a, b) => b.value - a.value)
    .forEach((cur, inx) => (order[cur.inx] = inx + 1));

  return order;
}
