function solution(A, B) {
  return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
