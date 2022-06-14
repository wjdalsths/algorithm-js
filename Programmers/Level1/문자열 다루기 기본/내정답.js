function solution(s) {
  let a = s.split("");
  for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i]) === true) return false;
  }
  if (a.length === 4 || a.length === 6) return true;
  else return false;
}
