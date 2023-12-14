function solution(numbers, k) {
  let inx = k * 2 - 2;
  if (inx >= numbers.length) inx %= numbers.length;
  return numbers[inx];
}
