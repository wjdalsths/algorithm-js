function solution(s, n) {
  return s
    .split("")
    .map((a, i) => {
      if (a === " ") return " ";
      let asc = a.charCodeAt() + n;
      if (
        (s[i].match(/^[A-Z]$/) != null && asc > 90) ||
        (s[i].match(/^[a-z]$/) != null && asc > 122)
      ) {
        asc -= 26;
      }
      return String.fromCharCode(asc);
    })
    .join("");
}
