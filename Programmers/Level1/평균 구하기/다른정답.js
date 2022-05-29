function average(array) {
  var sum = 0;
  for (var value of array) {
    sum += value;
  }
  return sum / array.length;
}
var testArray = [5, 3, 4];
console.log("평균값 : " + average(testArray));
