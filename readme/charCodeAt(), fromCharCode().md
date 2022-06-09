# charCodeAt

charCodeAt 메서드는 index에 해당하는 문자의 unicode 값을 리턴한다.

```js
문자, 문자열.charCodeAt(인덱스);
```

```js
var stringName = "자바스크립트";
console.log(stringName.charCodeAt(0)); // 51088
```

# fromCharCode

fromCharCode 는 아스키코드번호를 받아 문자열을 리턴한다.

```js
String.fromCharCode([아스키코드값]);
```

```js
var val = 111;
console.log(String.fromCharCode(val)); // o
```
