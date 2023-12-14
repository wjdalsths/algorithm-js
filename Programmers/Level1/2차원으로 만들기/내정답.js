function solution(num_list, n) {
  let answer = [];
  let arr = [...num_list];

  for (let i = 0; i < num_list.length / n; i++) {
    answer[i] = arr.splice(0, n);
  }

  return answer;
}
