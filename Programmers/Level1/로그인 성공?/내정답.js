function solution(id_pw, db) {
  let answer = "fail";

  db.forEach((cur) => {
    if (cur[0] === id_pw[0]) {
      if (cur[1] === id_pw[1]) {
        answer = "login";
      } else answer = "wrong pw";
    }
  });

  return answer;
}
