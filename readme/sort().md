# sort()

sort() 메서드는 배열을 정렬할 때 쓴다.

```js
배열.sort([정렬 순서를 정의하는 함수]);
```

값이 생략되면, 배열의 element들은 문자열로 취급되어, 유니코드 값 순서대로 정렬된다.

```js
const a = [2, 1, 3, 10];
a.sort();
console.log(a); //[1, 10, 2, 3]
-----------------------------------------
//오름차순
const a = [2, 1, 3, 10];
a.sort(function (a, b) {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
//위의 코드를 단순화시킨 코드
arr.sort(function(a, b)  {
  return a - b;
});
console.log(a); // [1, 2, 3, 10]
-----------------------------------------
//내림차순
arr.sort(function(a, b) {
  if(a < b) return 1;
  if(a === b) return 0;
  if(a > b) return -1;
});
//위의 코드를 단순화시킨 코드
arr.sort(function(a, b)  {
  return b - a;
});
console.log(a); // [10, 3, 2, 1]
```
