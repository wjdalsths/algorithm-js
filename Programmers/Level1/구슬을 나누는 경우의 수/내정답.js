function solution(balls, share) {
  return Math.round(
    factorial(balls) / (factorial(balls - share) * factorial(share))
  );
}

function factorial(num) {
  let fac = 1;
  for (let i = 2; i <= num; i++) fac *= i;
  return fac;
}
