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

# reduce()

reduce()는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

```js
배열.reduce((누적값, 현잿값, 인덱스, 요소) => {
  return 결과;
}, 초깃값);
```

```js
let temp = [1, 2, 3];
result = temp.reduce((누적값, 현재값, 인덱스) => {
  console.log(누적값, 현재값, 인덱스);
  return 누적값 + 현재값;
}, 0);

=============================================
0 1 0
1 2 1
3 3 2
6 //result
```

# 숫자 강제 변환(+"숫자")

```js
"5" + 6 === "56"반면
+"5" + 6 === 11
```
