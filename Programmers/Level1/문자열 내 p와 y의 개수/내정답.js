function solution(s) {
  let a = s.split("");
  return (
    a.filter((crr) => crr === "p" || crr === "P").length ===
    a.filter((crr) => crr === "y" || crr === "Y").length
  );
}
