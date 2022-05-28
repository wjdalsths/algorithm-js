function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += num % 10;
    num = Math.floor(num / 10);
  } while (num > 0);

  return !(x % sum);
}

console.log(solution(148));
