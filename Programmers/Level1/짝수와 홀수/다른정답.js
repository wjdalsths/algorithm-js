function evenOrOdd(num) {
  var result = "Even";
  if (num < 0) return false;
  if (num % 2 == 1) result = "Odd";
  return result;
}

console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
