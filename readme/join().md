# join()

join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

```js
배열.join(배열의 각 요소를 구분할 문자열);
```

```js
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
// expected output: "Fire,Air,Water"
console.log(elements.join(""));
// expected output: "FireAirWater"
console.log(elements.join("-"));
// expected output: "Fire-Air-Water"
```
