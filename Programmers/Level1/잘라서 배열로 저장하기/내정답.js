function solution(my_str, n) {
  let answer = [];

  for (let i = 0; i < Math.ceil(my_str.length / n); i++) {
    answer.push(my_str.substr(i * n, n));
  }

  return answer;
}
