# map()

map함수는 callbackFunction을 실행한 결과를 가지고 새로운 배열을 만들 때 사용한다.

```js
array.map(callbackFunction(배열속현재값, 인덱스, 현재배열), thisArg);
```

- thisArg : callbackFunction 내에서 this로 사용될 값

```JS
var numbers = [ 1,2,3,4,5,6,7,8,9];
var newNumbers = numbers.map(function(number){
  return number*2;
});
console.log(newNumbers);
var numbers = [ 1,2,3,4,5,6,7,8,9];
let newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers);
var numbers = [ 1,2,3,4,5,6,7,8,9];
function multiplyTwo(number){
    return number *2;
}console.log(newNumbers);
//출력은 같다
============================
[2, 4, 6, 8, 10, 12, 14, 16, 18]
```
