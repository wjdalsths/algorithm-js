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
