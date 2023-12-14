function solution(before, after) {
  let b = before.split("").sort();
  let a = after.split("").sort();

  return b.join("") === a.join("") ? 1 : 0;
}
