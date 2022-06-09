# split()

split()은 문자열을 분할하는 메서드이다.

```js
문자열.split(분할기준, 최대분활개수);
```

문자열을 '분할기준'로 잘라서, '최대분활개수' 크기 이하의 배열에 잘라진 문자열을 저장하여 리턴한다.

```js
const str = "apple,banana,orange";
const arr = str.split(",", 2);
const arr2 = str.split(",");
console.log(arr.length); // 2
console.log(arr[0]); // apple
console.log(arr[1]); // banana
console.log(arr[2]); // undefined
console.log(arr2.length); // 3
console.log(arr2[0]); // apple
console.log(arr2[1]); // banana
console.log(arr2[2]); // orange
======================================
2 apple banana undefined
3 apple banana orange
```
