# fill()

배열의 시작 인덱스부터 끝 인덱스 이전 (끝 인덱스 자기자신은 미포함) 까지
하나의 값으로 채워주는 메서드이다.<br>
원본배열을 직접 변경하며, 리턴값은 변형한 배열이다.

```js
arr.fill (value [, start [, end] ] )
Array(n).fill(value)
```

- value : 배열을 채울 값.
- start : 시작인덱스, 기본값 0. 옵션
- end : 끝인덱스, 기본값 arr.length. 옵션
  <br>

```js
const nullArray = Array(6).fill(null);
console.log(nullArray);

==========================================
[null, null, null, null, null, null]


const array4 = [0, 0, 0, 0].fill(10, 2, 4);
console.log(array4);
==========================================
[0, 0, 10, 10]
//인덱스 2부터 4까지 value값으로 채워진다.
```
