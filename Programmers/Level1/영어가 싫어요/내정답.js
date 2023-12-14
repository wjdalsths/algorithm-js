function solution(numbers) {
  let str = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < 10; i++) {
    numbers = numbers.split(str[i]).join(i);
  }

  return Number(numbers);
}
