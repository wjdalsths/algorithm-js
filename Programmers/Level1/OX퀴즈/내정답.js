function solution(quiz) {
  let answer = [];

  quiz.forEach((e) => {
    const [x, oper, y, , result] = e.split(" ");
    let sum = 0;
    if (oper == "+") sum = Number(x) + Number(y);
    else sum = Number(x) - Number(y);
    sum == result ? answer.push("O") : answer.push("X");
  });

  return answer;
}
