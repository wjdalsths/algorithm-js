# substring()

substring() 메소드는 string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환한다.
(substr() 로 써도 같다.)

```js
문자열.substring;
시작인덱스, 끝인덱스;
```

```js
const anyString = "Mozilla";

anyString.substring(0, 1); //M
anyString.substring(1, 0); //M

anyString.substring(0, 6); //Mozill

anyString.substring(4); //lla
anyString.substring(4, 7); //lla
anyString.substring(7, 4); //lla
```
