# replace()

replace() 메서드는 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환합니다.

```js
string.replace(searchValue, newValue);
```

문자열에서 searchValue를 찾아서 newValue로 치환합니다.

```js
let str = "apple, banana, orange";
let replaced_str = str.replace("banana", "tomato");
console.log(str);
console.log(replaced_str);
===================================================
apple, banana, orange
apple, tomato, orange
```
