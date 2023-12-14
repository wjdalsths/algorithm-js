function solution(my_string) {
  let arr = [...my_string];
  let sum = 0;
  let curNum = "";

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) curNum += arr[i];
    else {
      sum += +curNum;
      curNum = "";
    }
  }

  sum += +curNum;
  return sum;
}
