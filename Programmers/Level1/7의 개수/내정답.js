function solution(array) {
  let sum = 0;

  array.forEach((cur) => {
    String(cur)
      .split("")
      .map((e) => {
        e === "7" && (sum += 1);
      });
  });

  return sum;
}
