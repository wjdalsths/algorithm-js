function solution(n) {
  let i = 2;
  let arr = [];

  while (n !== 1) {
    if (n % i === 0) {
      arr.push(i);
      n /= i;
    } else i++;
  }

  return [...new Set(arr)];
}
