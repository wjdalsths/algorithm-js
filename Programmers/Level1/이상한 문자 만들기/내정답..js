function solution(s) {
  let answer = [];
  let a = s.split(" ");
  for (let i = 0; i < a.length; i++) {
    answer.push(
      a[i]
        .split("")
        .map((cur, ind) => {
          return ind % 2 ? cur.toLowerCase() : cur.toUpperCase();
        })
        .join("")
    );
  }
  return answer.join(" ");
}
