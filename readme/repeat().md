# repeat()

repeat() 함수는 주어진 문자열을 옵션의 count 만큼 반복하여 붙인 다음에 새로운 문자열로 반환한다.

```js
let test = "123";
testRepeat = test.repeat(3);
console.log(testRepeat);
let strTest = ['A', 'B', 'C', 'D', 'E'];
for(let i = 0; i < strTest.length; i ++){
  console.log(strTest[i].repeat(i+1));
}
======================================================================
"123123123"
"A"
"BB"
"CCC"
"DDDD"
"EEEEE"
```
