function solution(bin1, bin2) {
  return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}

//  진수 변환
//  10진수를 진수 변환할때는 Number객체의 내장 함수인 toString()을 사용한다.
//  10진수 외의 다른 진수를 10진수로 변환할때는 전역 함수인 parseInt()을 사용한다.
