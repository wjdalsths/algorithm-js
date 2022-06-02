# filter()

자바스크립트의 filter함수는 배열의 각 요소를 순회하며 callback함수를 실행하며 조건에 맞는 요소만을 갖는 배열을 반환한다.

```js
배열.filter(callback(현재값, 현재값의 인덱스, 현재배열), thisArg)
```

```js
const numbers = [1, 2, 3, 4, 5];

// filter1 - callback함수를 직접 작성
// 현재 요소를 2로 나눈 나머지가 1일 경우 홀수
const filter1 = numbers.filter((현재숫자) => 현재숫자 % 2 === 1);
=================================================================
[1,3,5]
```

# indexOf()

특정 문자의 위치를 찾기 위해서
indexOf 함수를 사용한다.

```js
string.indexOf(탐색하고싶은 문자열, position);
```

```js
const str = "abab";

str.indexOf("ab"); // 0
str.indexOf("ba"); // 1
```

# splice()

배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.

```js
[배열명].splice(시작, 엔드);
```

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var arr1 = arr.splice(-6, 4);

console.log(arr); // [1, 2, 3, 4, 5, 6, 11, 12]
console.log(arr1); // [7, 8, 9, 10]
.
```
