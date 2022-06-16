function solution(strings, n) {
  let Nst = [];
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split("");
    Nst.push(strings[i][n]);
    strings[i].splice(n, 1);
    strings[i].unshift(Nst[i]);
  }
  strings.sort();
  Nst.sort();

  for (let i = 0; i < strings.length; i++) {
    strings[i].shift();
    strings[i].splice(n, 0, Nst[i]);
    strings[i] = strings[i].join("");
  }
  return strings;
}
