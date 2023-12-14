function solution(s) {
  let arr = s.split(" ");
  let sum = 0;

  arr.forEach((cur, idx) =>
    cur === "Z" ? (sum -= +arr[idx - 1]) : (sum += +cur)
  );

  return sum;
}
