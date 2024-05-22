function solution(s) {
  const answer = s
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => a - b);
  return [answer[0], answer[answer.length - 1]].join(" ");
}
