function solution(score) {
  let avg = [];
  let answer = [];

  score.map((cur) => avg.push(cur[0] + cur[1]));
  score = [...avg].sort((a, b) => b - a);

  for (let s of avg) answer.push(score.indexOf(s) + 1);

  return answer;
}
