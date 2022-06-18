# Math.sqrt()

주어진 숫자를 제곱근한다. 만약 숫자가 음수이면 NaN를 반환한다.

```js
Math.sqrt(숫자);
```

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095
Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
```

# Math.pow()

어떤값을 제곱하여 반환한다.

```js
Math.pow(밑, 지수);
```

```js
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024
```

# Math.abs()

숫자의 절대값을 반환한다.

```js
Math.abs(숫자);
```

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```
