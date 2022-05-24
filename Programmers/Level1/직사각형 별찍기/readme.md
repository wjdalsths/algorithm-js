# process.stdout.write

console.log()와 같이 출력 할 때 사용한다. <br>
console.log()의 경우 출력을 할 때 마다 개행을 하고 있고 process.stdout.write()는 개행을 하지 않는다.

```js
process.stdout.write();
console.log();
```

ex)

```js
console.log("hello");
console.log("world");

===============================
hello
world
```

```js
process.stdout.write("hello ");
process.stdout.write("world");

================================
hello world
```

<br>
<br>
<br>
<br>
<br>
<br>

# .repeat

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
