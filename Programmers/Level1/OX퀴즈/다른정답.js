function solution(quiz) {
  answer = quiz.map((e) => e.replace("=", "=="));
  return answer.map((e) => (eval(e) ? "O" : "X"));
}
